<?php
// Contact form endpoint for the static site (replaces the former Next.js API route).
// SMTP settings live in contact-config.php (not in git, uploaded with `deploy/deploy.sh smtp`).

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function failure(string $error, int $status): void
{
    respond($status, ['error' => $error]);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    failure('Metodo non consentito.', 405);
}
if (($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') {
    failure('Richiesta non consentita.', 403);
}
if (strpos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') === false) {
    failure('Formato non valido.', 415);
}

$raw = file_get_contents('php://input', false, null, 0, 32769);
if ($raw === false || $raw === '') failure('Richiesta vuota.', 400);
if (strlen($raw) > 32768) failure('Messaggio troppo lungo.', 413);

$data = json_decode($raw, true);
if (!is_array($data) || array_values($data) === $data) {
    failure('Richiesta non valida.', 400);
}
if (!empty($data['website'])) failure('Richiesta non consentita.', 400);

$name = is_string($data['name'] ?? null) ? trim($data['name']) : '';
$email = is_string($data['email'] ?? null) ? trim($data['email']) : '';
$message = is_string($data['message'] ?? null) ? trim($data['message']) : '';
if ($name === '' || mb_strlen($name, 'UTF-8') > 120 || preg_match('/[\r\n]/', $name) ||
    $email === '' || strlen($email) > 254 || !preg_match('/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/', $email) ||
    filter_var($email, FILTER_VALIDATE_EMAIL) === false ||
    $message === '' || mb_strlen($message, 'UTF-8') > 5000 ||
    !mb_check_encoding($name . $email . $message, 'UTF-8')) {
    failure('Controlla nome, indirizzo email e messaggio (massimo 5000 caratteri).', 400);
}

$configFile = __DIR__ . '/contact-config.php';
$config = is_file($configFile) ? require $configFile : null;
$port = (int) ($config['smtp_port'] ?? 465);
// transport 'mail' uses the hosting's PHP mail(), for hosts that block outgoing SMTP.
$useMail = ($config['transport'] ?? 'smtp') === 'mail';
if (!is_array($config) || empty($config['from']) || (!$useMail && (empty($config['smtp_host']) ||
    empty($config['smtp_user']) || empty($config['smtp_password']) || $port < 1 || $port > 65535))) {
    failure('Il servizio di invio non è al momento disponibile.', 503);
}

// Basic per-IP rate limit: at most 5 messages every 10 minutes.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/kcity-contact-' . hash('sha256', $ip . __DIR__);
$now = time();
$hits = [];
if (is_file($bucket)) {
    $hits = array_filter(
        array_map('intval', explode(',', (string) file_get_contents($bucket))),
        function (int $t) use ($now): bool { return $t > $now - 600; }
    );
}
if (count($hits) >= 5) failure('Troppe richieste. Riprova tra qualche minuto.', 429);
$hits[] = $now;
@file_put_contents($bucket, implode(',', $hits), LOCK_EX);

$from = $config['from'];
$to = $config['to'] ?? 'supporto@k-city.it';
$fromDomain = substr(strrchr($from, '@'), 1);
$encode = function (string $text): string { return '=?UTF-8?B?' . base64_encode($text) . '?='; };

$subject = $encode("Richiesta dal sito K-City: $name");
// mail() adds To and Subject itself; SMTP prepends them below.
$headers = implode("\r\n", [
    'Date: ' . date(DATE_RFC2822),
    'From: ' . $encode('Sito K-City') . " <$from>",
    'Reply-To: ' . $encode($name) . " <$email>",
    'Message-ID: <' . bin2hex(random_bytes(16)) . "@$fromDomain>",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
]);
$body = chunk_split(base64_encode("Nome: $name\nEmail: $email\n\n$message"), 76, "\r\n");

// Minimal SMTP client: implicit TLS on 465, STARTTLS otherwise.
function smtp_send(array $config, int $port, string $from, string $to, string $data): void
{
    $host = $config['smtp_host'];
    $tls = $port === 465;
    $socket = @stream_socket_client(($tls ? 'ssl://' : 'tcp://') . "$host:$port", $errno, $errstr, 10);
    if (!$socket) throw new RuntimeException('connect');
    stream_set_timeout($socket, 15);

    $expect = function (int $code) use ($socket): void {
        $line = '';
        while (($l = fgets($socket, 1024)) !== false) {
            $line = $l;
            if (strlen($l) < 4 || $l[3] !== '-') break;
        }
        if ((int) substr($line, 0, 3) !== $code) throw new RuntimeException('smtp');
    };
    $send = function (string $cmd, int $code) use ($socket, $expect): void {
        fwrite($socket, $cmd . "\r\n");
        $expect($code);
    };

    try {
        $helo = 'EHLO ' . preg_replace('/[^A-Za-z0-9.-]/', '', $_SERVER['SERVER_NAME'] ?? 'localhost');
        $expect(220);
        $send($helo, 250);
        if (!$tls) {
            $send('STARTTLS', 220);
            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('starttls');
            }
            $send($helo, 250);
        }
        $send('AUTH LOGIN', 334);
        $send(base64_encode($config['smtp_user']), 334);
        $send(base64_encode($config['smtp_password']), 235);
        $send("MAIL FROM:<$from>", 250);
        $send("RCPT TO:<$to>", 250);
        $send('DATA', 354);
        $send($data . "\r\n.", 250);
        fwrite($socket, "QUIT\r\n");
    } finally {
        fclose($socket);
    }
}

try {
    if ($useMail) {
        if (!mail($to, $subject, $body, $headers, "-f$from")) throw new RuntimeException('mail');
    } else {
        smtp_send($config, $port, $from, $to, "To: <$to>\r\nSubject: $subject\r\n$headers\r\n\r\n$body");
    }
    respond(200, ['ok' => true]);
} catch (Throwable $e) {
    // Do not log personal data or SMTP credentials.
    error_log('Contact form: delivery failed (' . $e->getMessage() . ').');
    failure('Invio non riuscito. Riprova tra poco.', 502);
}

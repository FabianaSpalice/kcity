import nodemailer from "nodemailer";

export const runtime = "nodejs";

const failure = (error, status) => Response.json({ error }, { status });

export async function POST(request) {
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return failure("Richiesta non consentita.", 403);
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return failure("Formato non valido.", 415);
  }

  let data;
  try {
    // Limit the body while streaming, including requests without Content-Length.
    const reader = request.body?.getReader();
    if (!reader) return failure("Richiesta vuota.", 400);
    const chunks = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 32768) {
        await reader.cancel();
        return failure("Messaggio troppo lungo.", 413);
      }
      chunks.push(Buffer.from(value));
    }
    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return failure("Richiesta non valida.", 400);
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return failure("Richiesta non valida.", 400);
  }
  if (data.website) return failure("Richiesta non consentita.", 400);
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  if (!name || name.length > 120 || /[\r\n]/.test(name) ||
      !email || email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
      !message || message.length > 5000) {
    return failure("Controlla nome, indirizzo email e messaggio (massimo 5000 caratteri).", 400);
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_FROM } = process.env;
  const port = Number(SMTP_PORT || 465);
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_FROM ||
      !Number.isInteger(port) || port < 1 || port > 65535) {
    return failure("Il servizio di invio non è al momento disponibile.", 503);
  }

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  try {
    const result = await transport.sendMail({
      from: CONTACT_FROM,
      to: process.env.CONTACT_TO || "supporto@k-city.it",
      replyTo: { name, address: email },
      subject: `Richiesta dal sito K-City: ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
    });
    if (!result.accepted?.length) throw new Error("Message not accepted");
    return Response.json({ ok: true });
  } catch {
    // Do not log personal data or SMTP credentials.
    console.error("Contact form: SMTP delivery failed.");
    return failure("Invio non riuscito. Riprova tra poco.", 502);
  } finally {
    transport.close();
  }
}

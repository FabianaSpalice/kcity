<?php
// Copied to the server root as contact-config.php by `deploy/deploy.sh smtp`,
// which fills in the password. Never commit the real file.
return [
    'smtp_host' => 'smtps.aruba.it',
    'smtp_port' => 465,              // 465 = TLS diretto, altre porte = STARTTLS
    'smtp_user' => 'supporto@k-city.it',
    'smtp_password' => '__SMTP_PASSWORD__',
    'from' => 'supporto@k-city.it', // mittente autorizzato dal server SMTP
    'to' => 'supporto@k-city.it',
    // 'transport' => 'mail',       // usa mail() di PHP se l'hosting blocca l'SMTP in uscita
];

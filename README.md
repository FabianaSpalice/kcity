# Sito K-City

Sito Next.js esportato come sito statico (`output: "export"`) e pubblicato
sull'hosting Aruba (Apache + PHP) via FTP.

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:3000 (il form contatti qui non funziona: serve PHP)
npm run build    # genera out/, cioè esattamente i file da pubblicare
```

## Form contatti

Il form invia a `/contact.php` ([public/contact.php](public/contact.php)), che
consegna il messaggio via SMTP Aruba (`smtps.aruba.it:465`). Le credenziali
stanno in `contact-config.php` nella root del server: non è in git ed è
bloccato via `.htaccess`. Il modello è in
[deploy/contact-config.example.php](deploy/contact-config.example.php).
Lo script applica honeypot, validazione e un limite di 5 invii ogni 10 minuti
per IP. Senza configurazione risponde 503 e il form mostra l'email alternativa.

## Pubblicazione

Da WSL/Linux, con `lftp` installato (`sudo apt install lftp`):

```bash
cp deploy/ftp.env.example deploy/ftp.env   # host e utente FTP, niente password
deploy/deploy.sh smtp     # solo la prima volta o se cambia la password SMTP
deploy/deploy.sh          # build + anteprima + conferma + mirror di out/
deploy/deploy.sh check    # verifica le risposte del sito online
```

Le password vengono chieste a prompt nascosto e passate a lftp tramite
variabile d'ambiente: non finiscono in file, argomenti o cronologia.
Il mirror usa `--delete`: sul server resta solo il contenuto di `out/`
più `contact-config.php` (e gli eventuali file in `KEEP_EXTRA`).

## Font dei titoli (K-City Display)

Titoli (`h1`, `h2`, `h3`) e numeri in evidenza (classe `font-display`) usano
[public/fonts/kcity-display.woff2](public/fonts/kcity-display.woff2): le minuscole sono quelle della
scritta k·city del logo, maiuscole, cifre, accentate e punteggiatura sono disegnate con gli stessi
parametri. Il generatore non sta in questo repo ma accanto a quello delle targhette 3D:
`C:\Users\sebli\Downloads\headphone-stand-redesk-model_files\signs\make_font.py`.
Rilanciandolo (vedi l'intestazione dello script) aggiorna anche il `.woff2` di questo sito.

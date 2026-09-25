# Sito K-City

Sito Next.js esportato come sito statico (`output: "export"`) e pubblicato
sull'hosting Aruba (Apache + PHP) via FTP.

## Sviluppo e build

Da un terminale Ubuntu (WSL), nella cartella del progetto:

```bash
cd ~/gitrepo/kcity-sito
npm ci           # solo la prima volta o dopo modifiche a package-lock.json
npm run dev      # http://localhost:3000 (il form contatti qui non funziona: serve PHP)
npm run build    # genera out/, cioè esattamente i file da pubblicare
```

`out/` è il sito completo (HTML, CSS, JS, immagini, `.htaccess`, `contact.php`): è ignorata
da git e si rigenera a ogni build.

## Form contatti

Il form invia a `/contact.php` ([public/contact.php](public/contact.php)), che
consegna il messaggio via SMTP Aruba (`smtps.aruba.it:465`). Le credenziali
stanno in `contact-config.php` nella root del server: non è in git ed è
bloccato via `.htaccess`. Il modello è in
[deploy/contact-config.example.php](deploy/contact-config.example.php).
Lo script applica honeypot, validazione e un limite di 5 invii ogni 10 minuti
per IP. Senza configurazione risponde 503 e il form mostra l'email alternativa.

## Pubblicazione (FTP Aruba)

Server FTP `ftp.k-city.it`, con utente e password del pannello Aruba.

> **Attenzione:** la root FTP contiene **anche altri siti** (casertaparcheggi, ilparcometro,
> k-city.it, parkingformia, …) e i backup. Il sito www.k-city.eu è **solo** la cartella
> `/www.k-city.eu`: non toccare nient'altro.

### Procedura manuale (quella usata finora, con FileZilla)

1. `npm run build` (vedi sopra).
2. Connettiti con FileZilla e attiva **Server → Forza la visualizzazione dei file nascosti**,
   altrimenti non vedi `.htaccess`.
3. Entra in `/www.k-city.eu` e cancella **tutto tranne `contact-config.php`**, che contiene la
   password SMTP e non si rigenera con la build.
4. Carica **il contenuto** di `out/` (non la cartella stessa) dentro `/www.k-city.eu`.
   Da Windows la cartella è `\\wsl.localhost\Ubuntu\home\sebli\gitrepo\kcity-sito\out`.
   Controlla che ci siano anche `.htaccess` e `_next/`.
5. Verifica (vedi sotto) e manda un messaggio di prova dal form.

Se cambia solo il font o un'immagine basta sostituire quel file. Dopo una modifica al codice
va ricaricato tutto: i file in `_next/` cambiano nome a ogni build.

### Configurazione del form sul server (solo la prima volta o se cambia la password)

1. Copia `deploy/contact-config.example.php` in `deploy/contact-config.php` (ignorato da git).
2. Sostituisci `__SMTP_PASSWORD__` con la password della casella supporto@k-city.it,
   lasciando gli apici; se la password contiene `'` o `\` vanno scritti `\'` e `\\`.
3. Caricalo come `/www.k-city.eu/contact-config.php`.
4. Rimetti `__SMTP_PASSWORD__` nel file locale, così la password non resta sul PC.

Se l'hosting non riuscisse a collegarsi all'SMTP, aggiungendo `'transport' => 'mail',` in
`contact-config.php` il form usa `mail()` di PHP.

### Verifica dopo il caricamento

```bash
deploy/deploy.sh check
```

Atteso: `/`, `/azienda/`, `/governance-trasparenza/` → 200; pagina inesistente, `/wp-login.php`
→ 404; `contact-config.php` e `.htaccess` → 403; `http://` → 301 verso `https://`;
POST vuoto a `contact.php` → 400. Poi un invio reale dal form: se risponde "Invio non riuscito"
(HTTP 502) di solito la password SMTP in `contact-config.php` è sbagliata.

### Procedura automatica (script, alternativa)

`deploy/deploy.sh` fa gli stessi passi con `lftp` (`sudo apt install lftp`): build, anteprima di
cosa verrà caricato/cancellato, conferma, mirror di `out/` in `/www.k-city.eu`. Le password sono
chieste a prompt nascosto e non finiscono in file o cronologia. Il mirror cancella dal server
tutto ciò che non è in `out/`, tranne `contact-config.php` (e i file in `KEEP_EXTRA`), e si
rifiuta di lavorare sulla root FTP.

```bash
cp deploy/ftp.env.example deploy/ftp.env   # utente FTP, niente password
deploy/deploy.sh smtp     # carica contact-config.php con la password SMTP
deploy/deploy.sh          # build + anteprima + conferma + caricamento
deploy/deploy.sh check    # verifica
```

Il primo tentativo è fallito per un errore di lftp (ora corretto); lo script non è ancora
stato provato fino in fondo sul server: al primo uso leggi bene l'anteprima prima di confermare.

## Font dei titoli (K-City Display)

Titoli (`h1`, `h2`, `h3`) e numeri in evidenza (classe `font-display`) usano
[public/fonts/kcity-display.woff2](public/fonts/kcity-display.woff2): le minuscole sono quelle della
scritta k·city del logo, maiuscole, cifre, accentate e punteggiatura sono disegnate con gli stessi
parametri. Il generatore non sta in questo repo ma accanto a quello delle targhette 3D:
`C:\Users\sebli\Downloads\headphone-stand-redesk-model_files\signs\make_font.py`.
Rilanciandolo (vedi l'intestazione dello script) aggiorna anche il `.woff2` di questo sito.

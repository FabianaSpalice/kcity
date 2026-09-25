@AGENTS.md

# Sito K-City: build e pubblicazione

Dettagli completi in [README.md](README.md). Qui le regole operative.

## Build

- Il repo è nel filesystem WSL: `npm`, `next`, `php` vanno eseguiti **dentro Ubuntu**
  (da Windows: `wsl.exe -d Ubuntu -e bash -lc 'cd ~/gitrepo/kcity-sito && npm run build'`).
  `node_modules` è installato per Linux.
- Export statico (`output: "export"`, `trailingSlash: true`, immagini non ottimizzate):
  niente API route, Server Actions, cookie/headers, rewrite o redirect di Next. Il form contatti
  è PHP in `public/contact.php`.
- `npm run build` produce `out/`, cioè esattamente i file da caricare. Prima di consegnare:
  `npx tsc --noEmit`, `npm run lint`, `npm run build`.

## Pubblicazione su FTP Aruba

- Host `ftp.k-city.it`; il sito è **solo** la cartella `/www.k-city.eu`. La root FTP contiene
  altri siti e backup: non cancellare né caricare nulla fuori da quella cartella.
- Procedura usata: l'utente carica a mano con FileZilla. In `/www.k-city.eu` cancella tutto
  **tranne `contact-config.php`** (password SMTP, non è in git e non viene dalla build), poi
  carica il **contenuto** di `out/`, compresi `.htaccess` e `_next/`.
- Se cambiano solo file statici con lo stesso nome (es. `fonts/kcity-display.woff2`) basta
  sostituire quei file; dopo modifiche al codice va ricaricato tutto (`_next/` cambia a ogni build).
- `deploy/deploy.sh` automatizza gli stessi passi con lftp (password a prompt, mai su file);
  non è ancora stato provato fino in fondo sul server. `deploy/deploy.sh check` verifica il sito
  online e si può sempre usare (solo richieste HTTP).
- Dopo il caricamento: `deploy/deploy.sh check`, poi l'utente prova un invio reale dal form.

## Segreti

- Mai leggere, stampare o committare la password SMTP: sta solo in `contact-config.php` sul
  server. In locale `deploy/contact-config.php`, `deploy/ftp.env` e `deploy/diag-*.php` sono
  ignorati da git; `deploy/contact-config.php` deve contenere il segnaposto `__SMTP_PASSWORD__`.

## Font dei titoli

`public/fonts/kcity-display.woff2` è generato da `make_font.py`, fuori da questo repo:
`/mnt/c/Users/sebli/Downloads/headphone-stand-redesk-model_files/signs/` (venv `~/venv-mesh`).
Lo script copia il `.woff2` qui; poi serve `npm run build`.

## Git

- Fine riga LF per tutti i file (`.gitattributes`); il repo si usa sia col git di Windows sia con
  quello di WSL, e devono vedere lo stesso stato.
- Messaggi di commit in italiano, stile `feat:` / `fix:` / `chore:`.

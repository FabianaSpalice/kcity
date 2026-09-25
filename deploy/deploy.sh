#!/usr/bin/env bash
# Publish the static export (out/) to the Aruba FTP space. Run it from WSL/Linux.
#
#   deploy/deploy.sh                    build + mirror out/ to the server (preview first)
#   deploy/deploy.sh deploy --no-build  mirror the existing out/ without rebuilding
#   deploy/deploy.sh smtp               upload contact-config.php with the SMTP password
#   deploy/deploy.sh check              check the live site responses
#
# Passwords are always typed at a hidden prompt and handed to lftp through the
# environment (--env-password), so they never land in files, argv or history.
# Non-secret settings can go in deploy/ftp.env (not in git), see ftp.env.example.
#
# WARNING: the mirror uses --delete. Everything on the server that is not in
# out/ is removed, except contact-config.php and the files listed in KEEP_EXTRA.
set -euo pipefail

cd "$(dirname "$0")/.."
[ -f deploy/ftp.env ] && . deploy/ftp.env

: "${FTP_HOST:=ftp.k-city.eu}"
: "${FTP_DIR:=/www.k-city.eu}"
# The FTP root hosts several sites: mirroring with --delete there would wipe them all.
case "$FTP_DIR" in /|""|.|./) echo "FTP_DIR non può essere la root FTP" >&2; exit 1 ;; esac
: "${SITE_URL:=https://www.k-city.eu}"
KEEP=(contact-config.php ${KEEP_EXTRA:-})

command -v lftp >/dev/null || { echo "Serve lftp: sudo apt install lftp" >&2; exit 1; }

ask_ftp() {
  [ -n "${FTP_USER:-}" ] || read -rp "Utente FTP: " FTP_USER
  if [ -z "${LFTP_PASSWORD:-}" ]; then
    read -rsp "Password FTP ($FTP_USER@$FTP_HOST): " LFTP_PASSWORD; echo
  fi
  export LFTP_PASSWORD
}

# Run lftp commands on the server. ftp:list-options -a makes hidden files
# (such as the old .htaccess) visible, so the mirror can delete them.
lftp_run() {
  lftp -u "$FTP_USER" --env-password -e "
    set ftp:ssl-allow yes; set ssl:verify-certificate ${FTP_VERIFY_CERT:-yes};
    set ftp:list-options -a; set net:max-retries 2; set net:timeout 20;
    $1; bye" "$FTP_HOST"
}

mirror_cmd() {
  local excludes=""
  for f in "${KEEP[@]}"; do excludes+=" --exclude-glob $f"; done
  echo "mirror --reverse --delete --no-perms --parallel=4 $excludes $1 out/ $FTP_DIR"
}

deploy() {
  if [ "${1:-}" != "--no-build" ]; then npm run build; fi
  for f in out/index.html out/404.html out/.htaccess out/contact.php out/azienda/index.html; do
    [ -f "$f" ] || { echo "Build incompleta: manca $f" >&2; exit 1; }
  done

  ask_ftp
  echo "== Anteprima delle modifiche su $FTP_HOST:$FTP_DIR"
  local preview
  preview=$(lftp_run "$(mirror_cmd --dry-run)")
  echo "$preview" | grep '^rm' | head -30 || true
  echo "..."
  echo "Operazioni di caricamento: $(echo "$preview" | grep -c '^put' || true)"
  echo "Operazioni di eliminazione: $(echo "$preview" | grep -c '^rm' || true)"
  read -rp "Procedo? Scrivi 'si' per confermare: " ok
  [ "$ok" = "si" ] || { echo "Annullato."; exit 1; }

  lftp_run "$(mirror_cmd --verbose=1)"
  echo "Pubblicato. Verifica con: deploy/deploy.sh check"
}

smtp() {
  ask_ftp
  local pass
  read -rsp "Password SMTP (casella supporto@k-city.it): " pass; echo
  CONFIG_TMP=$(mktemp); chmod 600 "$CONFIG_TMP"
  trap 'rm -f "$CONFIG_TMP"' EXIT
  PASS="$pass" php -r '
    $c = file_get_contents("deploy/contact-config.example.php");
    echo str_replace("\x27__SMTP_PASSWORD__\x27", var_export(getenv("PASS"), true), $c);
  ' > "$CONFIG_TMP"
  php -l "$CONFIG_TMP" >/dev/null
  lftp_run "put $CONFIG_TMP -o ${FTP_DIR%/}/contact-config.php"
  echo "contact-config.php caricato."
}

check() {
  for p in / /azienda/ /governance-trasparenza/ /azienda /pagina-inesistente/ \
           /contact-config.php /wp-login.php /index.php.old; do
    printf '%-28s %s\n' "$p" "$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "$SITE_URL$p")"
  done
  printf '%-28s %s\n' "http:// (atteso 301)" \
    "$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "${SITE_URL/https:/http:}/")"
  printf '%-28s ' "POST /contact.php {}"
  curl -s -w ' %{http_code}\n' -H 'Content-Type: application/json' -d '{}' "$SITE_URL/contact.php"
}

case "${1:-deploy}" in
  deploy) deploy "${2:-}" ;;
  smtp) smtp ;;
  check) check ;;
  *) echo "Uso: $0 [deploy [--no-build] | smtp | check]" >&2; exit 1 ;;
esac

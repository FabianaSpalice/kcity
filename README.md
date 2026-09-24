This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

## Form contatti

Il form invia a `/api/contact`, che consegna il messaggio tramite SMTP.
Copia `.env.example` in `.env.local` e compila host, porta, utente, password
e `CONTACT_FROM` (mittente autorizzato dal provider). Non pubblicare le credenziali.
`CONTACT_TO` è inizialmente `supporto@k-city.it`.
La porta 465 usa TLS diretto; le altre porte richiedono STARTTLS.
Riferimento: https://nodemailer.com/smtp

Configura le stesse variabili nell'hosting e riavvia/ridistribuisci il sito.
Serve un hosting con runtime Node.js, non un export statico.
Senza configurazione il form mostra un errore e il contatto email alternativo.
Dopo la configurazione, verifica la ricezione di una richiesta e la funzione
Rispondi (deve indirizzare al visitatore). L'esito positivo indica che il server
SMTP ha accettato il messaggio, non garantisce il recapito nella casella.
Il campo nascosto filtra bot elementari; configurare sul proprio hosting una
limitazione delle richieste a `POST /api/contact` prima dell'esposizione pubblica.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

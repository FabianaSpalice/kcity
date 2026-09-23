import {
  BulletList,
  LegalSection,
} from "../governance-trasparenza/legal-ui";

export function CookiePolicyContent() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
        Informativa sui cookie
      </p>

      <h1 className="mt-3 text-4xl font-black tracking-[-0.03em]">
        Cookie Policy
      </h1>

      <p className="mt-4 text-base leading-7 text-slate-500">
        Informativa sull&rsquo;utilizzo dei cookie
      </p>

      <p className="mt-6 text-base leading-7 text-slate-600">
        La presente Cookie Policy descrive le modalità di utilizzo dei cookie
        sul sito web di K-City S.r.l.
      </p>

      <LegalSection number="1" title="Titolare del trattamento">
        <p>Il Titolare del trattamento è:</p>
        <p className="font-semibold text-slate-950">
          K-City S.r.l.
          <br />
          Piazza Luigi Vanvitelli, 26
          <br />
          81100 Caserta (CE)
          <br />
          P. IVA: 08445211215
          <br />
          PEC: k-city@pec.it
        </p>
      </LegalSection>

      <LegalSection number="2" title="Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che i siti web possono
          memorizzare sul dispositivo dell&rsquo;utente durante la
          navigazione.
        </p>
        <p>
          Possono essere utilizzati, ad esempio, per consentire il corretto
          funzionamento delle pagine, mantenere attive determinate
          funzionalità o memorizzare informazioni tecniche necessarie alla
          fruizione del sito.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Cookie utilizzati dal sito">
        <p>
          Il sito K-City utilizza esclusivamente cookie tecnici strettamente
          necessari al corretto funzionamento delle pagine e dei servizi
          richiesti dall&rsquo;utente.
        </p>
        <p>Tali cookie possono essere utilizzati per:</p>
        <BulletList
          items={[
            "garantire il corretto funzionamento del sito;",
            "assicurare la sicurezza della navigazione;",
            "gestire eventuali funzionalità tecniche del sito;",
            "consentire il corretto utilizzo del modulo di contatto.",
          ]}
        />
        <p>
          I cookie tecnici non vengono utilizzati per finalità pubblicitarie
          o di profilazione.
        </p>
      </LegalSection>

      <LegalSection
        number="4"
        title="Cookie di profilazione e strumenti di analisi"
      >
        <p>
          Attualmente il sito non utilizza cookie di profilazione, cookie
          pubblicitari, strumenti di marketing o sistemi di analisi
          destinati al tracciamento degli utenti.
        </p>
        <p>
          Non vengono pertanto effettuate attività di profilazione della
          navigazione attraverso cookie.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Consenso">
        <p>
          Per l&rsquo;utilizzo dei cookie tecnici strettamente necessari non
          è richiesto il consenso preventivo dell&rsquo;utente. Resta
          comunque necessario fornire un&rsquo;informativa chiara sul loro
          utilizzo.
        </p>
        <p>
          Per questo motivo, allo stato attuale, il sito K-City non
          necessita di un banner per l&rsquo;accettazione o il rifiuto dei
          cookie.
        </p>
        <p>
          Qualora in futuro vengano introdotti cookie o altri strumenti di
          tracciamento non strettamente necessari, verrà richiesto
          preventivamente il consenso dell&rsquo;utente secondo la normativa
          applicabile.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Gestione dei cookie tramite browser">
        <p>
          L&rsquo;utente può gestire o eliminare i cookie attraverso le
          impostazioni del proprio browser.
        </p>
        <p>
          La disabilitazione dei cookie tecnici potrebbe tuttavia
          compromettere il corretto funzionamento di alcune funzionalità del
          sito.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Dati raccolti tramite il form contatti">
        <p>
          Il sito mette a disposizione un modulo attraverso il quale
          l&rsquo;utente può inviare richieste a K-City.
        </p>
        <p>
          I dati inseriti nel form vengono trattati secondo quanto indicato
          nella Privacy Policy e non vengono utilizzati per attività di
          profilazione o pubblicità.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Modifiche alla Cookie Policy">
        <p>
          K-City S.r.l. si riserva il diritto di aggiornare la presente
          Cookie Policy in caso di modifiche normative o
          dell&rsquo;introduzione di nuovi servizi, cookie o strumenti di
          terze parti.
        </p>
        <p className="text-sm text-slate-500">
          Ultimo aggiornamento: settembre 2026
        </p>
      </LegalSection>
    </>
  );
}

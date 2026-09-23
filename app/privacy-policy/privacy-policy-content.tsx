import {
  BulletList,
  LegalSection,
  NumberedList,
} from "../governance-trasparenza/legal-ui";

export function PrivacyPolicyContent() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
        Informativa ex art. 13 GDPR
      </p>

      <h1 className="mt-3 text-4xl font-black tracking-[-0.03em]">
        Privacy Policy
      </h1>

      <p className="mt-4 text-base leading-7 text-slate-500">
        Informativa sul trattamento dei dati personali
      </p>

      <p className="mt-6 text-base leading-7 text-slate-600">
        Ai sensi dell&rsquo;art. 13 del Regolamento (UE) 2016/679
        (&ldquo;GDPR&rdquo;), K-City S.r.l. informa gli utenti del presente
        sito in merito alle modalità di trattamento dei dati personali
        eventualmente raccolti durante la navigazione e attraverso il modulo
        di contatto.
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

      <LegalSection number="2" title="Dati trattati">
        <p>
          Durante la navigazione sul sito possono essere trattati alcuni dati
          tecnici necessari al corretto funzionamento delle pagine, quali
          indirizzo IP, tipo di browser e informazioni relative al
          dispositivo utilizzato.
        </p>
        <p>
          Attraverso il form contatti, K-City può inoltre raccogliere i dati
          forniti volontariamente dall&rsquo;utente, quali:
        </p>
        <BulletList
          items={[
            "nome e cognome;",
            "indirizzo e-mail;",
            "numero di telefono, se richiesto o inserito;",
            "contenuto del messaggio;",
            "eventuali ulteriori informazioni comunicate spontaneamente dall’utente.",
          ]}
        />
      </LegalSection>

      <LegalSection number="3" title="Finalità del trattamento">
        <p>I dati personali vengono trattati esclusivamente per:</p>
        <BulletList
          items={[
            "consentire il corretto funzionamento del sito;",
            "rispondere alle richieste inviate tramite il modulo di contatto;",
            "fornire informazioni sui servizi offerti da K-City;",
            "gestire eventuali richieste commerciali o precontrattuali;",
            "ricontattare l’utente quando necessario per dare seguito alla richiesta;",
            "adempiere ad eventuali obblighi previsti dalla normativa vigente;",
            "garantire la sicurezza e l’integrità dei sistemi informatici.",
          ]}
        />
      </LegalSection>

      <LegalSection number="4" title="Base giuridica del trattamento">
        <p>
          Il trattamento dei dati forniti tramite il form contatti è
          effettuato principalmente per dare seguito a una richiesta
          dell&rsquo;interessato e per l&rsquo;esecuzione di eventuali misure
          precontrattuali richieste dallo stesso.
        </p>
        <p>
          Per le attività necessarie alla sicurezza e al corretto
          funzionamento del sito, il trattamento può inoltre essere
          effettuato sulla base del legittimo interesse del Titolare.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Modalità del trattamento">
        <p>
          Il trattamento viene effettuato mediante strumenti informatici e
          telematici, adottando misure tecniche e organizzative adeguate a
          tutelare la sicurezza, l&rsquo;integrità e la riservatezza dei dati
          personali.
        </p>
        <p>
          I dati non vengono utilizzati per finalità diverse da quelle
          indicate nella presente informativa.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Conferimento dei dati">
        <p>
          Il conferimento dei dati tramite il form contatti è facoltativo.
        </p>
        <p>
          Tuttavia, il mancato conferimento dei dati indicati come
          obbligatori può rendere impossibile per K-City rispondere alla
          richiesta dell&rsquo;utente.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Destinatari dei dati">
        <p>
          I dati personali possono essere trattati dal personale autorizzato
          di K-City e, ove necessario, da soggetti esterni che forniscono
          servizi tecnici o informatici connessi al funzionamento del sito.
        </p>
        <p>
          I dati potranno inoltre essere comunicati ad Autorità pubbliche o
          altri soggetti qualora ciò sia previsto da un obbligo di legge.
        </p>
        <p>I dati personali non vengono diffusi.</p>
      </LegalSection>

      <LegalSection number="8" title="Periodo di conservazione">
        <p>
          I dati raccolti attraverso il modulo di contatto vengono conservati
          per il tempo necessario a gestire la richiesta ricevuta e gli
          eventuali rapporti successivamente instaurati.
        </p>
        <p>
          L&rsquo;eventuale conservazione per periodi ulteriori avverrà
          esclusivamente quando richiesta da obblighi normativi o per la
          tutela dei diritti del Titolare.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Trasferimento dei dati">
        <p>
          Qualora il trattamento comporti il trasferimento di dati personali
          verso Paesi situati al di fuori dello Spazio Economico Europeo,
          K-City adotterà le garanzie previste dalla normativa applicabile
          in materia di protezione dei dati personali.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Diritti dell’interessato">
        <p>
          L&rsquo;interessato può esercitare, nei casi previsti dagli artt.
          15 e seguenti del GDPR, i diritti di:
        </p>
        <NumberedList
          items={[
            "accesso ai propri dati personali;",
            "rettifica dei dati inesatti;",
            "cancellazione dei dati;",
            "limitazione del trattamento;",
            "opposizione al trattamento;",
            "portabilità dei dati, ove applicabile;",
            "revoca dell’eventuale consenso prestato, quando il trattamento sia basato sul consenso.",
          ]}
        />
        <p>Le richieste possono essere inviate a:</p>
        <p className="font-semibold text-slate-950">
          K-City S.r.l.
          <br />
          PEC: k-city@pec.it
        </p>
        <p>
          L&rsquo;interessato ha inoltre il diritto di proporre reclamo al
          Garante per la Protezione dei Dati Personali qualora ritenga che il
          trattamento dei propri dati avvenga in violazione della normativa
          vigente.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Cookie">
        <p>
          Il sito utilizza esclusivamente cookie tecnici strettamente
          necessari al corretto funzionamento delle pagine e dei servizi
          richiesti dall&rsquo;utente.
        </p>
        <p>
          Non vengono utilizzati cookie di profilazione, pubblicitari o
          strumenti di tracciamento finalizzati alla profilazione degli
          utenti.
        </p>
        <p>
          Qualora in futuro vengano introdotti ulteriori strumenti o servizi
          di terze parti, la presente informativa e l&rsquo;eventuale Cookie
          Policy saranno aggiornate di conseguenza.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Modifiche alla Privacy Policy">
        <p>
          K-City S.r.l. si riserva il diritto di aggiornare o modificare la
          presente Privacy Policy in qualsiasi momento, anche in conseguenza
          di modifiche normative o dell&rsquo;introduzione di nuovi servizi
          sul sito.
        </p>
        <p className="text-sm text-slate-500">
          Ultimo aggiornamento: settembre 2026
        </p>
      </LegalSection>
    </>
  );
}

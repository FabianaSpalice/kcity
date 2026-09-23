import {
  BulletList,
  LegalSection,
  NumberedList,
  PlainList,
  StepHeading,
  SubHeading,
} from "./legal-ui";

export function WhistleblowingContent() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
        Procedura interna — vers. 1.0 / 15.12.2023
      </p>

      <h1 className="mt-3 text-4xl font-black tracking-[-0.03em]">
        Whistleblowing
      </h1>

      <p className="mt-4 text-base leading-7 text-slate-500">
        Adottato con determina dell&rsquo;Amministratore Unico del 15
        dicembre 2023.
      </p>

      <LegalSection number="1" title="Termini e validità">
        <p>
          La presente procedura ha decorrenza dalla data di emissione del 15
          dicembre 2023. Ogni eventuale successivo aggiornamento della
          procedura annulla e sostituisce tutte le versioni emesse
          precedentemente.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Scopo della procedura">
        <p>
          In generale, dal punto di vista oggettivo, la nuova disciplina si
          applica alle violazioni delle disposizioni normative nazionali e
          dell&rsquo;Unione europea che ledono l&rsquo;integrità della
          società, di cui i soggetti segnalanti siano venuti a conoscenza in
          un contesto lavorativo. Nello specifico, lo scopo della presente
          procedura è definire un sistema volto a permettere la segnalazione
          di fenomeni illeciti, atti o fatti che possano costituire una
          violazione delle norme di cui al D. Lgs n. 231/2001, nonché del
          diritto dell&rsquo;Unione europea nei settori individuati dalla
          Direttiva UE 1937/2019 e dal D. Lgs n. 24/2023 di suo recepimento.
        </p>
        <p>
          La presente procedura è stata, altresì, predisposta tenendo conto
          delle Linee Guida in materia di protezione delle persone che
          segnalano violazioni del diritto dell&rsquo;Unione e delle
          disposizioni normative nazionali, adottate dall&rsquo;Anac il 12
          luglio 2023, del Parere del Garante privacy 6 luglio 2023, n. 304 e
          della Guida operativa di Confindustria, di ottobre 2023.
        </p>
        <p>
          La presente Procedura disciplina le modalità di segnalazione di
          tali violazioni commesse all&rsquo;interno dell&rsquo;adottante,
          che possano determinare, in modo diretto o indiretto, un danno
          all&rsquo;integrità della società medesima.
        </p>
        <p>
          In particolare, il documento ha l&rsquo;obiettivo di descrivere:
        </p>
        <BulletList
          items={[
            "i ruoli e le responsabilità dei soggetti coinvolti nella gestione delle segnalazioni;",
            "i canali messi a disposizione per la segnalazione;",
            "il perimetro oggettivo e il contenuto della segnalazione;",
            "i soggetti segnalanti e le forme di tutela nei confronti degli stessi;",
            "le modalità di gestione della segnalazione e il procedimento che si instaura nel momento in cui viene effettuata una segnalazione;",
            "le modalità di informazione del segnalante e del segnalato circa gli sviluppi del procedimento.",
          ]}
        />
        <p>Inoltre, la presente Procedura è tesa a:</p>
        <BulletList
          items={[
            "assicurare per la segnalazione canali specifici, indipendenti e autonomi;",
            "garantire la riservatezza dei dati personali del segnalante, del segnalato e degli altri soggetti coinvolti o menzionati nella segnalazione, nonché del contenuto della segnalazione, ferme restando le regole che disciplinano le indagini o i procedimenti avviati dall’Autorità giudiziaria in relazione ai fatti oggetto della segnalazione;",
            "tutelare adeguatamente il soggetto segnalante contro condotte ritorsive e/o discriminatorie collegate alla segnalazione.",
          ]}
        />
        <p>
          Nell&rsquo;Informativa sul trattamento dei dati personali, di cui
          all&rsquo;Allegato A) alla presente Procedura, sono contenute le
          informazioni generali sul trattamento dei dati personali
          nell&rsquo;ambito della procedura di gestione di una Segnalazione.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Definizioni">
        <PlainList
          items={[
            <>
              <strong>Segnalazione whistleblowing:</strong> comunicazione,
              scritta o orale, effettuata da un segnalante, avente a oggetto
              informazioni, compresi i fondati sospetti, riguardanti
              violazioni commesse o che, sulla base di elementi concreti,
              potrebbero essere commesse all&rsquo;interno della singola
              adottante il protocollo, riferibili a violazioni di reati
              previsti dal D. Lgs. n. 231/2001, nonché del diritto
              dell&rsquo;UE, in relazione agli atti previsti dalla Direttiva
              UE 1937/2019 e dal D. Lgs n. 24/2023;
            </>,
            <>
              <strong>Segnalazione ordinaria:</strong> comunicazione avente a
              oggetto violazioni rilevanti ai sensi della disciplina
              whistleblowing, ma non contenente i dati identificativi del
              soggetto segnalante, oppure comunicazione contenente
              l&rsquo;indicazione dei dati identificativi del soggetto
              segnalante, ma avente ad oggetto violazioni non rientranti nel
              campo oggettivo di applicazione della disciplina
              whistleblowing;
            </>,
            <>
              <strong>Segnalazione in malafede:</strong> segnalazione
              inviata allo scopo di danneggiare o recare pregiudizio. K-City
              S.r.l. garantisce adeguata protezione dalle segnalazioni in
              malafede, censurando simili condotte e informando che tali
              segnalazioni sono fonte di responsabilità in sede disciplinare
              e nelle altre sedi competenti.
            </>,
            <>
              <strong>Segnalante:</strong> persona fisica che può effettuare
              una segnalazione nel contesto lavorativo della società
              adottante il presente protocollo.
            </>,
            <>
              <strong>Facilitatore:</strong> persona fisica che assiste il
              segnalante nel processo di segnalazione, operante
              all&rsquo;interno del medesimo contesto lavorativo e la cui
              assistenza deve essere mantenuta riservata.
            </>,
            <>
              <strong>Gestore Whistleblowing:</strong> Gestore cui è
              affidata la gestione delle segnalazioni.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection number="4" title="Ambito di applicazione soggettivo">
        <p>
          In linea con la normativa, ai sensi della presente procedura, i
          soggetti che possono effettuare le segnalazioni, i cd. segnalanti,
          sono i seguenti:
        </p>
        <BulletList
          items={[
            "tutti i dipendenti della società adottante il presente protocollo. La procedura si applica anche ai soggetti segnalanti le cui segnalazioni riguardino violazioni acquisite nell’ambito di un rapporto di lavoro nel frattempo terminato, purché acquisite durante il suo svolgimento, nonché a coloro il cui rapporto di lavoro non sia ancora iniziato, qualora le informazioni sulle violazioni oggetto della segnalazione siano state acquisite durante il processo di selezione, ovvero in altre fasi precontrattuali, nonché nel periodo di prova;",
            "i lavoratori autonomi, i collaboratori, i liberi professionisti e i consulenti che svolgono la propria attività per la società adottante il presente protocollo;",
            "i tirocinanti retribuiti e non retribuiti che svolgono la propria attività per la società adottante il presente protocollo;",
            "lavoratori, anche in distacco, o collaboratori che svolgono la propria attività per la società adottante il presente protocollo, fornendo servizi in favore di terzi;",
            "coloro che prestano la propria attività sotto la supervisione o la direzione di appaltatori, subappaltatori e fornitori della società adottante il presente protocollo;",
            "i Revisori contabili della società adottante il presente protocollo.",
          ]}
        />
      </LegalSection>

      <LegalSection number="5" title="Ambito di applicazione oggettivo">
        <p>
          Le segnalazioni whistleblowing possono avere a oggetto violazioni
          delle disposizioni normative nazionali dell&rsquo; Unione europea
          che ledono l&rsquo;integrità della società adottante il presente
          protocollo, di cui i soggetti segnalanti siano venuti a conoscenza
          nell&rsquo;ambito di tale contesto lavorativo.
        </p>
        <p>In particolare, le segnalazioni possono riguardare:</p>
        <BulletList
          items={[
            "condotte illecite rilevanti ai sensi del D. Lgs. n. 231/2001;",
            "illeciti che rientrano nell'ambito di applicazione degli atti dell’Unione europea o nazionali indicati nell’allegato al D. lgs n. 24/2023, ovvero degli atti nazionali che costituiscono attuazione degli atti dell’Unione europea indicati nell'allegato alla direttiva (UE) 2019/1937, relativi ai seguenti settori: appalti pubblici; servizi, prodotti e mercati finanziari e prevenzione del riciclaggio e del finanziamento del terrorismo; sicurezza e conformità dei prodotti; sicurezza dei trasporti; tutela dell'ambiente; radioprotezione e sicurezza nucleare; sicurezza degli alimenti e dei mangimi e salute e benessere degli animali; salute pubblica; protezione dei consumatori; tutela della vita privata e protezione dei dati personali e sicurezza delle reti e dei sistemi informativi;",
            "atti od omissioni che ledono gli interessi finanziari dell’Unione;",
            "atti od omissioni riguardanti il mercato interno, comprese le violazioni delle norme dell’Unione europea in materia di concorrenza e di aiuti di Stato, nonché le violazioni riguardanti il mercato interno connesse ad atti che violano le norme in materia di imposta sulle società o i meccanismi il cui fine è ottenere un vantaggio fiscale che vanifica l’oggetto o la finalità della normativa applicabile in materia di imposta sulle società.",
          ]}
        />
        <p>
          Sono invece escluse dall&rsquo;ambito di applicazione della
          presente procedura le segnalazioni:
        </p>
        <BulletList
          items={[
            "legate a un interesse personale del segnalante, che attengono ai propri rapporti individuali di lavoro, ovvero inerenti ai rapporti di lavoro con le figure gerarchicamente sovraordinate (es. vertenze di lavoro, discriminazioni, conflitti interpersonali tra colleghi, segnalazioni su trattamenti di dati effettuati nel contesto del rapporto individuale di lavoro);",
            "in materia di sicurezza e difesa nazionale;",
            "relative a violazioni già regolamentate in via obbligatoria in alcuni settori speciali, alle quali continua dunque ad applicarsi la disciplina di segnalazione ad hoc (servizi finanziari, prevenzione riciclaggio, terrorismo, sicurezza nei trasporti, tutela dell’ambiente).",
          ]}
        />
      </LegalSection>

      <LegalSection
        number="6"
        title="Procedura di gestione delle segnalazioni"
      >
        <p>
          K-City S.r.l. definisce di seguito un sistema di segnalazione
          delle violazioni e i relativi aspetti di natura organizzativa e
          procedurale, con particolare riferimento a: i canali e le
          modalità per effettuare le segnalazioni, le attività per la
          gestione delle segnalazioni, le tutele per il segnalante e il
          segnalato, la reportistica.
        </p>

        <SubHeading>a. Gestore della segnalazione</SubHeading>
        <p>
          L&rsquo;attività di gestione della segnalazione è affidata
          all&rsquo;Avv. Aldo Favarolo, con studio in Portici (Napoli) al
          Corso Garibaldi n.159
        </p>

        <SubHeading>
          b. Canali e modalità per effettuare la segnalazione
        </SubHeading>
        <p>
          Uno dei soggetti di cui al precedente paragrafo 4, qualora abbia
          il ragionevole sospetto che si sia verificata o che possa
          verificarsi una delle violazioni indicate al precedente paragrafo
          5, ha la possibilità di effettuare una segnalazione al Gestore
          Whistleblowing, utilizzando il canale di seguito riportato, nelle
          more dell&rsquo;implementazione di una piattaforma informatica:
        </p>
        <NumberedList
          items={[
            "tramite posta ordinaria da inviare al seguente indirizzo: Corso Garibaldi n.159 in Portici (Napoli) - 80055, all’attenzione dell’Avv. Aldo Favarolo.",
          ]}
        />
        <p>
          A tal fine e considerando le garanzie la riservatezza imposte
          dalla normativa di riferimento, è necessario che la segnalazione
          venga inserita in due buste chiuse: la prima con i dati
          identificativi del segnalante unitamente alla fotocopia del
          documento di riconoscimento e all&rsquo;indicazione di un
          indirizzo presso il quale intende ricevere le successive
          comunicazioni; la seconda con la segnalazione e copia di eventuali
          documenti a supporto. Le due buste dovranno poi essere inserite in
          una terza busta chiusa che rechi all&rsquo;esterno l&rsquo;
          indicazione del destinatario e la dicitura &ldquo;riservata al
          Gestore whistleblowing&rdquo;.
        </p>
        <p>
          Qualora la segnalazione riguardi il Gestore, in qualità di
          segnalato, persona coinvolta o menzionata nella segnalazione, il
          segnalante può effettuare la segnalazione all&rsquo;Amministratore
          p.t. di K-City S.r.l., con le medesime modalità già indicate. In
          tal caso, la posta andrà trasmessa ad uno dei seguenti indirizzi:
        </p>
        <BulletList
          items={[
            "all’attenzione dell’Amministratore Unico p.t. della K-City S.r.l., in Portici (Napoli) al Corso Giuseppe Garibaldi 159.",
          ]}
        />
        <p>
          In ogni caso, il segnalante, che ne faccia richiesta, avrà diritto
          a un incontro diretto con il Gestore o, nel caso di conflitto
          d&rsquo;interessi del Gestore, con il Legale rappresentante p.t.
          di K-City S.r.l., che sarà fissato entro un tempo ragionevole
          successivo alla richiesta. L&rsquo;incontro sarà oggetto di
          registrazione, previo consenso del segnalante.
        </p>
        <p>
          Quanto al contenuto della segnalazione, il segnalante deve
          fornire, in modo chiaro e completo, tutti gli elementi utili per
          effettuare le verifiche e gli accertamenti necessari a valutare la
          fondatezza della segnalazione, indicando:
        </p>
        <BulletList
          items={[
            "i propri dati identificativi, nonché un recapito al quale comunicare i successivi aggiornamenti;",
            "le circostanze di tempo e di luogo in cui si è verificato il fatto oggetto della segnalazione;",
            "ogni informazione e/o prova che possa fornire un valido riscontro circa la sussistenza di quanto segnalato;",
            "le generalità o gli altri elementi che consentano di identificare chi ha commesso quanto dichiarato;",
            "le generalità di eventuali altri soggetti che possano riferire sui fatti oggetto di segnalazione.",
          ]}
        />
        <p>
          Le segnalazioni devono riportare solo i dati personali (riferiti,
          quindi, a una persona fisica identificata o identificabile)
          strettamente e obiettivamente necessari a verificarne la
          fondatezza e a garantirne la gestione. Qualora le segnalazioni
          contengano dati personali di assoluta e palese irrilevanza per la
          relativa gestione, K-City S.r.l. provvederà a cancellarli
          prontamente.
        </p>

        <SubHeading>Esame e valutazione delle segnalazioni</SubHeading>

        <StepHeading>(i) Ricezione della segnalazione</StepHeading>
        <p>
          Il Gestore che riceve la segnalazione deve rilasciare al
          segnalante l&rsquo;avviso di ricevimento entro sette giorni dalla
          ricezione della segnalazione stessa, trasmettendolo al recapito
          indicato dal segnalante.
        </p>
        <p>
          Tale riscontro non implica per il Gestore alcuna valutazione dei
          contenuti oggetto della segnalazione, ma è unicamente volto a
          informare il segnalante dell&rsquo;avvenuta corretta ricezione
          della stessa.
        </p>
        <p>
          In assenza dell&rsquo;indicazione dei dati identificativi del
          segnalante (segnalazione anonima) o del suo recapito per ricevere
          le comunicazioni successive, la segnalazione non sarà considerata
          e trattata come segnalazione whistleblowing e il Gestore potrà
          riservarsi di prenderla ugualmente in considerazione, al fine di
          avviare approfondimenti/istruttorie per l&rsquo;accertamento di
          quanto segnalato, solo ove le informazioni siano precise,
          concordanti e adeguatamente circostanziate. In ogni caso, le
          segnalazioni anonime dovranno essere adeguatamente tracciate e
          archiviate.
        </p>
        <p>
          Inoltre, nel caso di segnalazioni anonime, le misure di protezione
          a tutela del segnalante si applicano solo se la persona segnalante
          venga successivamente identificata e abbia subito ritorsioni.
        </p>
        <p>
          Qualora la segnalazione whistleblowing pervenga, per errore, a un
          destinatario diverso dal Gestore, il ricevente dovrà trasmetterla,
          con divieto di aprire la busta, al Gestore o al diverso membro
          indicato come destinatario, entro 7 giorni.
        </p>

        <StepHeading>
          (ii) Verifica della procedibilità della segnalazione
        </StepHeading>
        <p>
          Terminata la fase della ricezione, il Gestore verifica la
          procedibilità della segnalazione e, quindi, la sussistenza dei
          necessari presupposti oggettivi e soggettivi.
        </p>
        <p>
          Nello specifico, dovrà accertare che il segnalante sia un
          soggetto legittimato a effettuare la segnalazione e che
          l&rsquo;oggetto della segnalazione rientri tra gli ambiti di
          applicazione della disciplina.
        </p>
        <p>
          Nel caso in cui la segnalazione riguardi una materia esclusa
          dall&rsquo;ambito oggettivo di applicazione, la stessa non sarà
          considerata e trattata come segnalazione whistleblowing e il
          Gestore potrà archiviarla oppure, qualora le informazioni siano
          precise, concordanti e adeguatamente circostanziate, riservarsi di
          prenderla ugualmente in considerazione, al fine di avviare
          approfondimenti/istruttorie per l&rsquo;accertamento di quanto
          segnalato.
        </p>
        <p>
          In tal caso, il Gestore comunicherà al segnalante che la
          segnalazione è improcedibile ai sensi della disciplina
          whistleblowing e che la stessa verrà archiviata ovvero analizzata
          come segnalazione ordinaria.
        </p>

        <StepHeading>
          (iii) Verifica dell&rsquo;ammissibilità della segnalazione
        </StepHeading>
        <p>
          Accertata la procedibilità della segnalazione, il Gestore ne
          verifica l&rsquo;ammissibilità.
        </p>
        <p>A tal fine, nella segnalazione dovranno risultare chiare:</p>
        <BulletList
          items={[
            "le circostanze di tempo e di luogo in cui si è verificato il fatto oggetto della segnalazione e, quindi, una descrizione dei fatti oggetto della segnalazione, che contenga i dettagli relativi alle notizie circostanziali, nonché, ove possibile, le modalità attraverso cui il segnalante è venuto a conoscenza dei fatti;",
            "le generalità o altri elementi che consentano di identificare il soggetto cui attribuire i fatti segnalati.",
          ]}
        />
        <p>
          Alla luce di queste indicazioni, la segnalazione può, quindi,
          essere ritenuta inammissibile per:
        </p>
        <BulletList
          items={[
            "mancanza dei dati che costituiscono gli elementi essenziali della segnalazione;",
            "manifesta infondatezza degli elementi di fatto riconducibili alle violazioni tipizzate dal legislatore;",
            "esposizione di fatti di contenuto generico, tali da non consentirne la comprensione;",
            "produzione di sola documentazione senza la segnalazione vera e propria di violazioni.",
          ]}
        />
        <p>
          Al Gestore è attribuita la facoltà di richiedere al segnalante
          integrazioni alla segnalazione, ai fini della valutazione di
          ammissibilità.
        </p>
        <p>
          Nel caso in cui la segnalazione risulti inammissibile, il Gestore
          procede all&apos;archiviazione, garantendo comunque la
          tracciabilità delle motivazioni a supporto e dandone comunicazione
          al segnalante.
        </p>

        <StepHeading>(iv) Istruttoria sulla segnalazione</StepHeading>
        <p>
          Verificata anche l&rsquo;ammissibilità della segnalazione, il
          Gestore avvia l&rsquo;attività istruttoria volta ad accertarne la
          fondatezza, provvedendovi nel rispetto dei principi di
          imparzialità e riservatezza ed effettuando ogni attività ritenuta
          opportuna, inclusa l&rsquo;audizione personale del segnalante e/o
          di eventuali altri soggetti che possano utilmente riferire sui
          fatti segnalati, la raccolta di documentazione e/o di
          informazioni.
        </p>
        <p>
          Nello svolgimento dell&rsquo;istruttoria, il Gestore può
          richiedere al segnalante informazioni e/o documenti ulteriori che
          risultino necessari per le verifiche. Con riferimento ai dati
          personali (riferiti, quindi, a una persona fisica identificata o
          identificabile), il Gestore si limiterà a raccogliere
          esclusivamente quelli manifestamente utili al trattamento della
          specifica segnalazione.
        </p>
        <p>
          Al riguardo, il Gestore chiederà al segnalante di indicare
          espressamente l&rsquo;esistenza e l&rsquo;identità di altri
          soggetti che, in base alla normativa di riferimento, sono
          destinatari delle medesime tutele previste per il whistleblowing.
          In particolare, si tratta di:
        </p>
        <BulletList
          items={[
            "persone del medesimo contesto lavorativo del segnalante, che sono legate a esso da uno stabile legame affettivo o di parentela entro il quarto grado;",
            "colleghi di lavoro del segnalante, che lavorano nel suo medesimo contesto lavorativo e che hanno con lui un rapporto abituale e corrente. In linea con le Linee Guida Anac, tali soggetti sono coloro che, al momento della segnalazione, lavorano con il segnalante e hanno con quest’ultimo un rapporto abituale e corrente;",
            "enti di proprietà - in via esclusiva o in compartecipazione maggioritaria di terzi - del segnalante;",
            "enti presso i quali il segnalante lavora.",
          ]}
        />
        <p>
          Ai fini dello svolgimento dell&rsquo;attività istruttoria, il
          Gestore:
        </p>
        <BulletList
          items={[
            "analizza la segnalazione e la documentazione allegata;",
            "valuta le ulteriori opportune azioni da compiere, coerentemente con gli strumenti normativi vigenti, al fine di stabilire in modo oggettivo la fondatezza o meno della segnalazione (es. richiesta di approfondimenti, audizione del segnalante e/o di terzi informati sui fatti);",
            "identifica le funzioni competenti da coinvolgere per lo svolgimento delle verifiche;",
            "richiede, ove necessario, il supporto di specialisti esterni per gli approfondimenti che non possono essere svolti in ambito interno, chiedendo la preventiva autorizzazione per il sostenimento dei relativi oneri finanziari;",
          ]}
        />
        <p>
          All&rsquo;esito dell&rsquo;attività istruttoria, il Gestore
          predispone una relazione sulla segnalazione, sulle attività
          compiute e sulle relative risultanze in termini di fondatezza e la
          trasmette, per gli eventuali conseguenti provvedimenti
          decisionali, al Legale rappresentante pt di K-City S.r.l.
        </p>
        <p>
          Qualora invece il Gestore accerti che la segnalazione non è
          fondata, procede alla sua archiviazione, dandone comunicazione al
          segnalante.
        </p>

        <StepHeading>(v) Riscontro al segnalante</StepHeading>
        <p>
          Il Gestore, entro tre mesi dalla data di avviso di ricevimento
          della segnalazione, fornisce un riscontro al segnalante in merito
          all&rsquo;attività svolta.
        </p>
        <p>In particolare, il Gestore può comunicare al segnalante:</p>
        <BulletList
          items={[
            "l’avvenuta archiviazione della segnalazione, motivandone le ragioni (improcedibilità, inammissibilità, infondatezza);",
            "l’avvenuto accertamento della fondatezza della segnalazione e la sua trasmissione agli organi interni competenti.",
          ]}
        />
        <p>
          Qualora, alla scadenza dei tre mesi, l&rsquo;attività istruttoria
          non sia ancora conclusa, il Gestore comunicherà al segnalante
          l&rsquo;attività svolta fino a quel momento e, ove possibile,
          quella che intende ancora espletare.
        </p>
        <p>
          Successivamente, il Gestore comunicherà al segnalante il
          successivo esito finale dell&rsquo;istruttoria della segnalazione
          (archiviazione o accertamento della fondatezza della segnalazione
          con trasmissione agli organi competenti).
        </p>

        <SubHeading>
          c. Provvedimenti decisionali collegati alla segnalazione
        </SubHeading>
        <p>
          I provvedimenti decisionali collegati alla segnalazione,
          individuati in coerenza con il Sistema Disciplinare e con il
          Regolamento interno della società adottante il presente
          protocollo, sono rimessi, in ragione della rispettiva competenza,
          al Legale Rapp.te di K-City S.r.l.
        </p>
        <p>
          Per le casistiche che coinvolgono soggetti apicali, il Gestore ne
          dà evidenza agli organi competenti assicurando informativa e
          aggiornamento sugli sviluppi delle iniziative attivate.
        </p>
        <p>
          Le segnalazioni inviate allo scopo di danneggiare o recare
          pregiudizio al segnalato, nonché ogni altra forma di utilizzo
          abusivo della presente Procedura, sono fonte di responsabilità,
          anche disciplinare, in particolar modo qualora venga accertata
          l&rsquo;infondatezza di quanto segnalato e la strumentale o
          volontaria falsità di accuse, rilievi, censure, ecc.
        </p>
        <p>
          Il presente documento lascia impregiudicata la responsabilità
          penale e disciplinare del segnalante nell&rsquo;ipotesi di
          calunnia o diffamazione ai sensi delle vigenti previsioni di
          legge.
        </p>

        <SubHeading>
          d. Archiviazione, conservazione e tracciabilità delle
          segnalazioni
        </SubHeading>
        <p>
          Al fine di garantire la ricostruzione delle diverse fasi del
          procedimento, è cura del Gestore, assicurare:
        </p>
        <BulletList
          items={[
            "la tracciabilità delle segnalazioni e delle relative attività di ricezione, istruttoria e valutazione;",
            "la conservazione della documentazione inerente alle segnalazioni e alle relative attività di verifica, in appositi archivi, con gli opportuni livelli di sicurezza / riservatezza e nel rispetto delle tempistiche di conservazione applicabili ai sensi dell’Informativa sul trattamento dei dati personali, di cui all’Allegato A) alla presente procedura.",
          ]}
        />
      </LegalSection>

      <LegalSection
        number="7"
        title="Tutele del segnalante e dei soggetti a esso assimilati"
      >
        <p>
          K-City S.r.l., in linea con la normativa di riferimento, assicura
          al segnalante le misure di tutela previste nel presente paragrafo
          in temini di: riservatezza, divieto di atti ritorsivi e
          limitazioni della responsabilità.
        </p>
        <p>
          Tali disposizioni si applicano anche nei casi di segnalazione
          anonima, se la persona segnalante è stata successivamente
          identificata e ha subito ritorsioni.
        </p>
        <p>
          In primo luogo, K-City S.r.l. assicura la riservatezza dei dati
          personali del segnalante e delle informazioni contenute nella
          segnalazione da parte di tutti i soggetti coinvolti nel
          procedimento.
        </p>
        <p>
          La riservatezza è garantita per ogni modalità di segnalazione,
          quindi, anche quando avvenga in forma orale (messaggistica vocale,
          incontro diretto).
        </p>
        <p>
          La medesima garanzia è prevista in favore delle persone coinvolte
          e/o menzionate nella segnalazione, nonché ai facilitatori e agli
          altri soggetti, tra quelli indicati nella normativa di
          riferimento, con cui il segnalante ha un particolare rapporto e
          che ha indicato al Gestore (persone del medesimo contesto
          lavorativo, colleghi di lavoro, enti di proprietà o nei quali il
          segnalante lavora).
        </p>
        <p>
          K-City S.r.l. garantisce che l&rsquo;identità del segnalante non
          possa essere rivelata senza il suo espresso consenso e tutti
          coloro che sono coinvolti nella gestione della segnalazione sono
          tenuti a tutelarne la riservatezza.
        </p>
        <p>
          Nell&rsquo;ambito dell&rsquo;eventuale procedimento disciplinare
          attivato della società adottante il presente protocollo contro il
          presunto autore della condotta segnalata, l&rsquo;identità del
          segnalante non può essere rivelata, ove la contestazione
          dell&rsquo;addebito disciplinare sia fondata su accertamenti
          distinti e ulteriori rispetto alla segnalazione, anche se
          conseguenti alla stessa.
        </p>
        <p>
          Qualora invece la contestazione sia fondata, in tutto o in parte,
          sulla segnalazione e l&rsquo;identità del segnalante risulti
          indispensabile alla difesa del soggetto cui è stato contestato
          l&rsquo;addebito disciplinare o della persona comunque coinvolta
          nella segnalazione, quest&rsquo;ultima sarà utilizzabile ai fini
          del procedimento disciplinare solo previo consenso espresso della
          persona segnalante alla rivelazione della propria identità. In
          tali casi, verrà dato preventivo avviso alla persona segnalante
          mediante comunicazione scritta delle ragioni che rendono
          necessaria la rivelazione dei dati riservati.
        </p>
        <p>
          Resta ferma in ogni caso, sussistendone i presupposti, la facoltà
          dell&rsquo;ente di procedere con la denuncia all&rsquo;Autorità
          giudiziaria.
        </p>
        <p>
          La violazione dell&rsquo;obbligo di riservatezza da parte dei
          soggetti coinvolti nella procedura è fonte di responsabilità
          disciplinare, fatta salva ogni ulteriore forma di responsabilità
          prevista dalla legge. In particolare, si segnala che il D.lgs. n.
          24/2023 prevede che ANAC applichi una sanzione amministrativa
          pecuniaria, da 10.000 a 50.000 euro, alla persona fisica che abbia
          violato l&rsquo;obbligo di riservatezza. Restano salve le sanzioni
          applicabili dal Garante per la protezione dei dati personali per i
          profili di competenza in base alla disciplina in materia di dati
          personali.
        </p>
        <p>
          Inoltre, ai sensi della presente Procedura, non è consentita
          alcuna forma di ritorsione o discriminazione per motivi collegati
          alla denuncia, nei confronti del segnalante, intesa come qualsiasi
          comportamento, atto od omissione, anche solo tentato o minacciato,
          che si verifichi nel contesto lavorativo e che determini – in via
          diretta o indiretta – un danno ingiusto ai soggetti tutelati.
        </p>
        <p>
          Gli atti ritorsivi adottati in violazione di tale divieto sono
          nulli.
        </p>
        <p>
          La stessa tutela si applica anche nei confronti dei facilitatori e
          degli altri soggetti assimilati al segnalante, già citati.
        </p>
        <p>
          Per misure discriminatorie si intendono, ad esempio, le azioni
          disciplinari ingiustificate e ogni altra forma di ritorsione che
          determini condizioni di lavoro intollerabili e, in ogni caso,
          peggiori rispetto a quelle vissute in precedenza.
        </p>
        <p>
          Le persone segnalanti e i soggetti a esso assimilati, già
          richiamati nella presente procedura, possono comunicare
          all&rsquo;ANAC le ritorsioni che ritengono di avere subito.
          L&rsquo;ANAC provvederà a informare l&apos;Ispettorato nazionale
          del lavoro, per i provvedimenti di propria competenza.
        </p>
        <p>
          Inoltre, si segnala che il D. Lgs. n. 24/2023 prevede l&rsquo;
          applicazione da parte dell&rsquo;ANAC di una sanzione
          amministrativa pecuniaria, da 10.000 a 50.000 euro, quando accerta
          che la persona fisica individuata come responsabile abbia
          commesso ritorsioni. Inoltre, il D. lgs. n. 24/2023 prevede alcune
          limitazioni della responsabilità del segnalante rispetto alla
          rivelazione e alla diffusione di alcune categorie di informazioni,
          che altrimenti lo esporrebbero a responsabilità penali, civili e
          amministrative.
        </p>
        <p>
          In particolare, il segnalante non sarà chiamato a rispondere né
          penalmente, né in sede civile e amministrativa:
        </p>
        <BulletList
          items={[
            "di rivelazione e utilizzazione del segreto d’ufficio;",
            "di rivelazione del segreto professionale;",
            "di rivelazione dei segreti scientifici e industriali;",
            "di violazione del dovere di fedeltà e di lealtà;",
            "di violazione delle disposizioni relative alla tutela del diritto d’autore;",
            "di violazione delle disposizioni relative alla protezione dei dati personali;",
            "di rivelazione o diffusione di informazioni sulle violazioni che offendono la reputazione della persona coinvolta.",
          ]}
        />
        <p>
          Tali limitazioni di responsabilità operano al ricorrere di due
          condizioni, ovvero:
        </p>
        <PlainList
          items={[
            <>
              1) al momento della rivelazione o della diffusione, il
              segnalante abbia fondati motivi per ritenere che le
              informazioni siano necessarie per svelare la violazione
              oggetto di segnalazione; in tali casi, è esclusa altresì ogni
              ulteriore responsabilità, anche di natura civile o
              amministrativa;
            </>,
            <>
              2) la segnalazione sia effettuata nel rispetto delle
              condizioni previste dal Decreto per beneficiare della tutela
              contro le ritorsioni (fondati motivi per ritenere veritieri i
              fatti segnalati, la violazione sia tra quelle segnalabili e
              siano rispettate le modalità e le condizioni di accesso alla
              segnalazione).
            </>,
          ]}
        />
        <p>
          Le misure di tutela previste nella presente procedura non si
          applicano, in linea con la normativa di riferimento e salve le
          ipotesi di limitazioni della responsabilità, quando è accertata,
          anche con sentenza di primo grado, la responsabilità penale della
          persona segnalante per i reati di diffamazione o di calunnia o
          comunque per i medesimi reati commessi con la denuncia
          all&apos;autorità giudiziaria o contabile ovvero la sua
          responsabilità civile, per lo stesso titolo, nei casi di dolo o
          colpa grave e al segnalante è altresì irrogata una sanzione
          disciplinare.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Tutele del Segnalato">
        <p>
          K-City S.r.l., in attuazione della normativa di riferimento,
          estende al segnalato le stesse garanzie di riservatezza
          riconosciute al segnalante, fatta salva ogni ulteriore ipotesi di
          legge che imponga l&rsquo;obbligo di comunicare il nominativo del
          segnalato (es. richieste dell&rsquo;Autorità giudiziaria, ecc.).
        </p>
        <p>
          Il Gestore valuta l&rsquo;opportunità e le modalità con cui
          informare il segnalato dell&rsquo;esistenza della segnalazione,
          nel rispetto degli obblighi di riservatezza rispetto all&rsquo;
          identità del segnalante e considerata la necessità di non
          pregiudicare le esigenze di accertamento.
        </p>
        <p>
          In ogni caso, il segnalato ha diritto di essere sentito nel corso
          dell&rsquo;istruttoria, anche producendo documentazione a
          supporto delle proprie osservazioni.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Reportistica">
        <p>
          Il Gestore competente predispone una relazione annuale relativa
          alle segnalazioni ricevute, alle verifiche eventualmente svolte e
          ai relativi esiti, presentati in forma aggregata.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Segnalazioni esterne all’Anac">
        <p>
          In base alla normativa di riferimento, il segnalante può
          effettuare una segnalazione esterna all&rsquo;ANAC se, al momento
          della sua presentazione, ricorre una delle seguenti condizioni:
        </p>
        <BulletList
          items={[
            "non è stato attivato un canale di segnalazione interna o, anche se attivato, non è conforme a quanto previsto dal Decreto;",
            "la persona segnalante ha già effettuato una segnalazione interna e la stessa non ha avuto seguito;",
            "la persona segnalante ha fondati motivi di ritenere che, se effettuasse una segnalazione interna, alla stessa non sarebbe dato efficace seguito ovvero che la stessa segnalazione possa determinare il rischio di ritorsione;",
            "la persona segnalante ha fondato motivo di ritenere che la violazione possa costituire un pericolo imminente o palese per il pubblico interesse.",
          ]}
        />
        <p>
          Per la segnalazione su canale esterno si rimanda all&rsquo;art. 7
          D.lgs. 24/2023 e informazioni/atti/regolamenti/circolari nel tempo
          pubblicati sul sito ANAC.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Allegati">
        <SubHeading>
          Allegato 1 - Informativa sul trattamento dei dati personali
        </SubHeading>
        <p>
          Ai sensi del Regolamento Ue n. 679/2016 (c.d. GDPR), in questa
          sezione vengono fornite le informazioni in merito al trattamento
          dei dati personali nell&rsquo;ambito della gestione delle
          segnalazioni ricevute ai sensi della presente procedura. Tali
          informazioni non riguardano le segnalazioni effettuate mediante
          canale esterno o divulgazione pubblica.
        </p>

        <SubHeading>Titolare del trattamento</SubHeading>
        <p>
          K-City S.r.l., con sede legale in Portici (Napoli), corso
          Giuseppe Garibaldi 159.
        </p>

        <SubHeading>Interessati e fonte dei dati</SubHeading>
        <p>
          Nei limiti delle finalità e delle modalità definite nella
          presente informativa, sono oggetto di trattamento:
        </p>
        <NumberedList
          items={[
            "i dati del segnalante, forniti direttamente da quest’ultimo per l’invio della segnalazione;",
            "i dati del segnalato, forniti dal segnalante all’interno della segnalazione e/o acquisiti nel corso delle necessarie attività istruttorie (es. terzi intervistati) e/o forniti dallo stesso segnalato eventualmente sentito durante la procedura di gestione della segnalazione;",
            "i dati del facilitatore, forniti dal segnalante all’interno della segnalazione e/o forniti dallo stesso interessato durante la procedura di gestione della segnalazione;",
            "i dati delle persone a diverso titolo menzionate e/o coinvolte nella procedura di gestione della segnalazione, forniti dal segnalante all’interno della segnalazione e/o acquisiti nel corso delle necessarie attività istruttorie (es. terzi intervistati) e/o forniti dallo stesso interessato durante la procedura di gestione della segnalazione.",
          ]}
        />

        <SubHeading>Tipologie di dati trattati</SubHeading>
        <p>
          Nei limiti delle finalità e delle modalità definite nella
          presente informativa, sono oggetto di trattamento:
        </p>
        <NumberedList
          items={[
            "dati personali comuni, quali, ad esempio, i dati identificativi degli interessati, i dati di contatto del segnalante, i dati relativi al relativo ruolo/mansione lavorativa dell’interessato, i dati contenuti nel documento di identità del segnalante, la voce del segnalante registrata tramite il sistema di messaggistica vocale e/o durante l’incontro diretto richiesto dallo stesso;",
            "categorie particolari di dati personali di cui all’art. 9 del GDPR, quali, ad esempio, le informazioni relative a condizioni di salute dell’interessato, le opinioni politiche dell’interessato, le convinzioni religiose e l’appartenenza sindacale dell’interessato;",
            "dati personali relativi a condanne penali e reati di cui all’art. 10 del GDPR.",
          ]}
        />
        <p>
          Nell&rsquo;ambito della procedura di segnalazione, saranno
          raccolti esclusivamente i dati personali manifestamente utili al
          trattamento della specifica segnalazione, pertanto, K-City S.r.l.
          invita a trasmettere solo i dati personali strettamente e
          obiettivamente necessari a verificare la fondatezza della
          segnalazione medesima e a garantirne la gestione. I dati personali
          di assoluta e palese irrilevanza per la gestione della
          segnalazione saranno prontamente cancellati.
        </p>

        <SubHeading>Finalità e base giuridica del trattamento</SubHeading>
        <p>I dati personali saranno trattati esclusivamente per:</p>
        <NumberedList
          items={[
            "gestire le segnalazioni, svolgere le opportune attività di verifica e adottare i conseguenti provvedimenti decisionali;",
            "esigenze di esercizio, difesa o accertamento dei diritti della società adottante il presente protocollo Whistleblowing, in relazione e/o in conseguenza alla ricezione delle segnalazioni.",
          ]}
        />
        <p>La base giuridica del trattamento è costituita da:</p>
        <PlainList
          items={[
            <>
              a) l&rsquo;adempimento di un obbligo legale cui è soggetto il
              Titolare (obbligo di istituire un canale di segnalazione ai
              sensi del D. Lgs n. 24/2023); pertanto, ai sensi e per gli
              effetti dell&rsquo;art. 6, par. 1, lett. c) e parr. 2 e 3,
              dell&rsquo;art. 9, par. 2, lett. b), dell&rsquo;art. art. 10 e
              dell&rsquo;art. 88 del GDPR, il trattamento non necessita del
              consenso dell&rsquo;interessato;
            </>,
            <>
              b) il consenso del segnalante per: i) la rivelazione della sua
              identità e di qualsiasi altra informazione da cui possa
              evincersi, direttamente o indirettamente, tale identità a
              persone diverse da quelle competenti a ricevere o a dare
              seguito alle segnalazioni; ii) la registrazione delle
              segnalazioni raccolte tramite il sistema di messaggistica
              vocale; iii) la registrazione dell&rsquo;eventuale incontro
              diretto richiesto dal segnalante;
            </>,
            <>
              c) il perseguimento del legittimo interesse del Titolare o di
              terzi, rappresentato dal diritto di accertare, esercitare e
              difendere i propri diritti in ogni sede competente; pertanto,
              ai sensi e per gli effetti dell&rsquo;art. 6, par. 1, lett. f)
              del GDPR, il trattamento non necessita del consenso
              dell&rsquo;interessato. Il trattamento per le finalità basate
              sul legittimo interesse del Titolare non è obbligatorio e
              l&rsquo;interessato può opporsi all&rsquo;utilizzo dei suoi
              dati, salvo il caso in cui il Titolare dimostri la presenza
              di motivi legittimi cogenti per l&rsquo;accertamento,
              l&rsquo;esercizio o la difesa di un diritto ai sensi
              dell&rsquo;art. 21 del GDPR.
            </>,
          ]}
        />

        <SubHeading>Natura del conferimento dei dati personali</SubHeading>
        <p>
          Il conferimento dei dati identificativi e di contatto del
          segnalante è necessario ai fini della presentazione e della
          gestione della segnalazione; un eventuale rifiuto a conferirli
          pregiudica la valutazione della segnalazione.
        </p>

        <SubHeading>Modalità, ambito e durata del trattamento</SubHeading>
        <p>
          Il trattamento dei dati personali sarà effettuato con modalità
          cartacee e, per le segnalazioni raccolte tramite il sistema di
          messaggistica vocale, anche tramite modalità informatizzate.
        </p>
        <p>
          I dati personali saranno trattati esclusivamente dal Gestore
          Whistleblowing, preposto alla ricezione e alla gestione delle
          segnalazioni e appositamente autorizzato al trattamento. Il
          Gestore whistleblowing agisce sulla base di specifiche istruzioni
          fornite da K-City S.r.l. in ordine alle finalità e alle modalità
          del trattamento e che lo impegna alla riservatezza, alla
          confidenzialità e alla sicurezza dei dati.
        </p>
        <p>
          I dati personali potranno essere comunicati a strutture esterne,
          che svolgono per conto di K-City S.r.l., compiti di supporto (es.
          servizi informatici), nella loro qualità di Responsabili del
          trattamento, cui sono state impartire apposite istruzioni sulle
          modalità e finalità del trattamento e imposti obblighi di
          riservatezza, confidenzialità e sicurezza dei dati.
        </p>
        <p>
          Ove strettamente necessario ai fini dello svolgimento dell&rsquo;
          istruttoria delle segnalazioni, i dati personali potranno essere
          comunicati a: i) il personale interno di volta in volta
          individuato come competente a supportare le verifiche e
          appositamente autorizzato al trattamento dal membro del Gestore
          whistleblowing preposto, che provvederà, altresì, a fornire
          apposite istruzioni sulle modalità e finalità del trattamento e a
          impegnarli ad adeguati obblighi di riservatezza, confidenzialità
          e sicurezza dei dati; ii) soggetti esterni (es. società di
          consulenza) di volta in volta individuati come necessari per
          supportare le verifiche e appositamente designati quali
          Responsabili del trattamento dal membro del Gestore whistleblowing
          preposto, che provvederà, altresì, a fornire apposite istruzioni
          sulle modalità e finalità del trattamento e a impegnarli ad
          adeguati obblighi di riservatezza, confidenzialità e sicurezza
          dei dati.
        </p>
        <p>
          Per l&rsquo;adempimento di obblighi di legge o per dare seguito
          alle disposizioni impartite da Autorità a ciò legittimate, i dati
          personali potranno, altresì, essere comunicati a soggetti
          pubblici (es. Autorità Giudiziaria, Organi di Polizia, ANAC), che
          svolgeranno le rispettive attività di trattamento in qualità di
          autonomi titolari.
        </p>
        <p>
          Inoltre, in caso di esigenze di esercizio, difesa o accertamento
          dei diritti della società adottante il protocollo, in relazione
          e/o in conseguenza alla ricezione delle segnalazioni, i dati
          potranno essere comunicati a professionisti (es. avvocati,
          consulenti). I dati personali non saranno oggetto di diffusione
          e, pertanto, mai pubblicati, esposti o messi a
          disposizione/consultazione di soggetti indeterminati.
        </p>
        <p>
          I dati personali saranno conservati per il tempo necessario al
          trattamento della segnalazione e comunque non oltre 5 (cinque)
          anni a decorrere dalla data della comunicazione dell&rsquo;esito
          finale della procedura di segnalazione, salvi i casi in cui,
          prima della scadenza del periodo di conservazione, siano avviati
          procedimenti precontenziosi e/o contenziosi, anche disciplinari,
          derivanti da una segnalazione. In quest&rsquo;ultimo caso il
          periodo di conservazione dei dati seguirà il percorso del
          relativo procedimento precontenzioso e/o contenzioso.
        </p>
        <p>
          Al termine del periodo di conservazione, i dati personali saranno
          cancellati o conservati in una forma che non consenta l&rsquo;
          identificazione dell&rsquo;interessato (es. anonimizzazione
          irreversibile).
        </p>

        <SubHeading>Diritti degli interessati</SubHeading>
        <p>
          In qualsiasi momento, gli interessati hanno il diritto di
          accedere ai propri dati personali, di chiederne la rettifica,
          l&rsquo;aggiornamento e la relativa cancellazione. È, altresì,
          possibile richiedere la limitazione del trattamento e la
          portabilità del dato ovvero opporsi al trattamento. Queste
          richieste potranno essere rivolte a e-mail:{" "}
          <a
            href="mailto:privacy@k-city.it"
            className="font-semibold text-cyan-600"
          >
            privacy@k-city.it
          </a>
          . Inoltre, nel caso in cui si ritenga che il trattamento sia stato
          svolto in violazione della normativa sulla protezione dei dati
          personali, è riconosciuto il diritto di presentare reclamo
          all&rsquo;Autorità Garante per la protezione dei dati personali,
          Piazza Venezia, 11 - 00187 - Roma.
        </p>
        <p>
          Al riguardo, si informa che, ai sensi dell&rsquo;art. 2-undecies,
          co. 1, lett. f) del D. Lgs n. 196/2003 (c.d. Codice privacy), i
          predetti diritti non possono essere esercitati da parte di alcuni
          interessati coinvolti nella segnalazione (es. segnalati e/o altre
          persone coinvolte e/o menzionate nella segnalazione), qualora
          dall&rsquo;esercizio di tali diritti possa derivare un
          pregiudizio effettivo e concreto alla riservatezza dell&rsquo;
          identità del segnalante. In particolare, l&rsquo;esercizio di
          tali diritti potrà essere ritardato, limitato o escluso con
          comunicazione motivata e resa senza ritardo all&rsquo;
          interessato, a meno che la comunicazione possa compromettere la
          finalità della limitazione, per il tempo e nei limiti in cui ciò
          costituisca una misura necessaria e proporzionata, tenuto conto
          dei diritti fondamentali e dei legittimi interessi dell&rsquo;
          interessato, al fine di salvaguardare la riservatezza dell&rsquo;
          identità del segnalante. In tali casi, gli interessati potranno
          rivolgersi, con le modalità di cui all&rsquo;art. 160 del Codice
          Privacy, all&rsquo;Autorità Garante per la protezione dei dati
          personali.
        </p>
      </LegalSection>
    </>
  );
}

import {
  BulletList,
  LegalSection,
  PlainList,
  StepHeading,
  SubHeading,
} from "./legal-ui";

export function ProtocolloAnticorruzioneContent() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
        Procedura interna — vers. 1.0 / 21.10.2024
      </p>

      <h1 className="mt-3 text-4xl font-black tracking-[-0.03em]">
        Protocollo Anticorruzione
      </h1>

      <p className="mt-4 text-base leading-7 text-slate-500">
        Deliberato dall&rsquo;organo amministrativo con determina del 21
        ottobre 2024.
      </p>

      <LegalSection number="1" title="Introduzione">
        <p>
          Il Protocollo Anticorruzione (di seguito, anche il &ldquo;PAC&rdquo;)
          definisce i principi, le regole di comportamento ed i controlli
          che i soggetti che lavorano per, e con, K-City S.r.l. (di seguito,
          anche la &ldquo;Società&rdquo;) devono adottare, al fine di
          prevenire la corruzione, in tutte le sue forme, verso Funzionari
          Pubblici e/o soggetti privati.
        </p>
        <p>
          L&rsquo;Organo Amministrativo della Società ha adottato il
          presente PAC in conformità alle norme penali ed amministrative
          vigenti, ai principi espressi nel Codice Etico e alle normative,
          anche internazionali, applicabili in materia di prevenzione della
          corruzione.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Obiettivi">
        <p>
          La Società, specializzata in &ldquo;sistemi di intelligenza
          artificiale per la viabilità&rdquo; e nella &ldquo;gestione di
          servizi pubblici&rdquo;, riconosce l&rsquo;importanza primaria di
          condurre il proprio business nel rispetto della legalità e con
          integrità, trasparenza e correttezza.
        </p>
        <p>
          Il PAC ha, pertanto, l&rsquo;obiettivo di fornire un quadro
          sistematico di riferimento degli strumenti che la Società adotta
          per prevenire condotte di corruzione attiva e passiva, verso
          Funzionari Pubblici e/o soggetti privati, ispirandosi alle più
          rigorose previsioni in materia anticorruzione e alle best practice
          internazionali.
        </p>
      </LegalSection>

      <LegalSection number="3" title="Le Leggi Anticorruzione">
        <p>
          La Società ha sede in Italia ed è sottoposta alla legge italiana
          che prevede la responsabilità amministrativa della Società nei
          casi di corruzione - anche tentata - di Funzionari Pubblici e/o di
          soggetti privati in Italia, nell&rsquo;interesse o a vantaggio
          della Società.
        </p>
        <p>
          In generale, si configura un reato di corruzione quando si
          verifica un evento che:
        </p>
        <BulletList
          items={[
            "coinvolge un Funzionario Pubblico - anche di un Paese diverso da quello in cui si opera - e/o un soggetto privato;",
            "riguarda l’offerta, la promessa (corruzione attiva) o la ricezione di richieste non dovute (corruzione passiva) di denaro, vantaggi, omaggi o altre utilità, per svolgere attività contrarie ai doveri d’ufficio o agevolare prestazioni, comunque dovute.",
          ]}
        />
        <p>
          Il presente PAC mira a contrastare i rischi di pratiche illecite
          nella conduzione degli affari e delle attività aziendali,
          fornendo regole e principi di prevenzione.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Destinatari">
        <p>
          I Destinatari sono gli amministratori ed i dipendenti della
          Società, nonché tutti coloro che, direttamente o indirettamente,
          stabilmente o temporaneamente, instaurano con la Società, rapporti
          e relazioni.
        </p>
      </LegalSection>

      <LegalSection number="5" title="Ruoli e Responsabilità">
        <p>
          L&rsquo;adozione e le successive modifiche del PAC competono
          all&rsquo;Organo Amministrativo.
        </p>
        <p>
          Tutti i Destinatari sono chiamati a conoscere, rispettare ed
          applicare, in relazione alla funzione esercitata e al livello di
          responsabilità assunto, le previsioni del Protocollo
          Anticorruzione.
        </p>
      </LegalSection>

      <LegalSection number="6" title="Principi Generali Anticorruzione">
        <p>
          Con riferimento alle attività svolte da Società sono stati
          individuati alcuni ambiti nei quali il rischio corruzione, attiva
          o passiva, si presenta più elevato. In relazione a ciascuna area
          di rischio sono stati definiti dei principi generali di
          comportamento a cui i Destinatari sono chiamati ad attenersi.
        </p>
        <p>Le aree a rischio sono suddivise in relazione alle seguenti categorie:</p>
        <PlainList
          items={[
            "A − Rapporti a rischio corruzione",
            "B − Attività strumentali a rischio corruzione",
          ]}
        />

        <SubHeading>A. Rapporti a rischio corruzione</SubHeading>
        <p>
          Sono di seguito riportate, suddivise per tipologia di controparte,
          le relazioni intrattenute dalla Società nelle quali emergono
          potenziali rischi di corruzione.
        </p>

        <StepHeading>Rapporti con la Pubblica Amministrazione</StepHeading>
        <p>
          Le interazioni che possono occorrere tra la Società e le Pubbliche
          Amministrazioni (di seguito anche &ldquo;PA&rdquo;) possono creare
          potenziali situazioni di rischio, in quanto la Società potrebbe
          essere ritenuta responsabile per atti di corruzione intrapresi o
          tentati verso Funzionari Pubblici, i quali potrebbero richiedere
          benefici impropri per agire in modo non conforme ai propri doveri
          o in violazione degli obblighi inerenti il proprio ufficio.
        </p>
        <p>
          I rapporti con le Pubbliche Amministrazioni riguardano,
          principalmente, le seguenti categorie:
        </p>
        <BulletList
          items={[
            "rapporti con la PA in qualità di committente = tali rapporti possono generare rischi di corruzione nel processo di affidamento di un appalto, nella gestione dello stesso e in qualsiasi altra fase;",
            "ottenimento di provvedimenti amministrativi di competenza della PA = tali attività possono generare rischi di corruzione nel corso delle attività per l’ottenimento di atti/adempimenti di competenza della PA (tra cui licenze, permessi, registrazioni, concessioni e altre autorizzazioni necessarie alla conduzione degli affari);",
            "adempimenti di obblighi nei confronti della PA = la necessità di soddisfare tali obblighi, tra cui l’attuazione di prescrizioni normative, l’esecuzione di specifiche verifiche, la presentazione di dichiarazioni, etc.;",
            "verifiche e/o controlli da parte della PA = la gestione di richieste nell’ambito di ispezioni, verifiche, controlli, indagini, etc.;",
            "contenziosi legali = i contenziosi con gli Enti della Pubblica Amministrazione ed i contenziosi con soggetti privati generano potenziali situazioni a rischio di corruzione nei rapporti con le Autorità Giudiziarie.",
          ]}
        />
        <p>In relazione ai suddetti ambiti di rischio, la Società:</p>
        <BulletList
          items={[
            "proibisce qualsivoglia pagamento, utilità o altro beneficio non dovuto a favore di Funzionari Pubblici, anche se questi dovessero essere esplicitamente richiesti, ovvero anche se fosse consuetudine in un determinato contesto, e ciò dovesse comportare un qualsiasi tipo di svantaggio per Società o per il suo personale;",
            "vieta favori, comportamenti collusivi, sollecitazioni dirette e/o attraverso terzi finalizzati ad influenzare impropriamente le decisioni del Funzionario Pubblico;",
            "identifica i soggetti autorizzati ad intrattenere rapporti con la PA, sia nei casi in cui la PA sia committente di un’opera, sia nei casi di visite ispettive.",
          ]}
        />

        <StepHeading>Rapporti con Soggetti privati</StepHeading>
        <p>
          La Società, nello svolgimento delle proprie attività di business,
          intrattiene rapporti con varie tipologie di terze parti - quali
          clienti, fornitori, partner commerciali, etc. - con finalità
          differenti.
        </p>
        <p>
          Di seguito, si riportano le principali categorie di soggetti, i
          rischi che possono derivare dalla gestione del rapporto con le
          stesse ed i principi di controllo.
        </p>

        <SubHeading>I. Clienti</SubHeading>
        <p>
          Accanto a Clienti pubblici, altre categorie di Clienti della
          Società sono rappresentate da soggetti privati. In relazione ad
          essi, i rischi di corruzione possono essere rappresentati
          dall&rsquo;eventualità che la Società sia ritenuta responsabile
          per atti di corruzione intrapresi o tentati verso il Cliente o
          suoi dipendenti o, viceversa, che il Cliente possa imporre alla
          Società di lavorare con un determinato fornitore con cui il
          Cliente stesso ha rapporti consolidati al fine di ottenere
          benefici personali, oppure che l&rsquo;operazione o la vendita
          rappresentino il pagamento del prezzo per un atto corruttivo.
        </p>
        <p>In relazione ai suddetti ambiti di rischio, la Società:</p>
        <BulletList
          items={[
            "svolge delle verifiche sul potenziale cliente;",
            "identifica dei soggetti autorizzati ad intrattenere rapporti con i clienti, sia in fase di predisposizione della proposta di offerta che in fase di presentazione, al fine di assicurare il rispetto del principio di segregazione di attività/processi;",
            "vieta favori, comportamenti collusivi, sollecitazioni dirette e/o attraverso terzi finalizzati ad influenzare impropriamente le decisioni della controparte;",
            "garantisce la trasmissione al Cliente della documentazione richiesta, assicurandone completezza, accuratezza e veridicità.",
          ]}
        />

        <SubHeading>II. Fornitori</SubHeading>
        <p>
          Le attività poste in essere da - parte o a favore di - fornitori
          (ivi inclusi subappaltatori, consulenti e prestatori di servizi
          professionali) possono essere considerate a rischio corruzione in
          quanto, a titolo esemplificativo, il prezzo del servizio\attività
          resa potrebbe nascondere provviste per il pagamento di atti
          corruttivi oppure il fornitore potrebbe corrompere i dipendenti
          della Società per ottenere benefici.
        </p>
        <p>In relazione ai suddetti ambiti di rischio, la Società:</p>
        <BulletList
          items={[
            "vieta qualsiasi comportamento in contrasto con i principi del PAC prevedendo l’obbligo, per tutti i fornitori, di sottoscrivere una specifica clausola contrattuale di “Compliance” con cui si impegnano ad agire nel rispetto del Codice Etico e dei principi previsti dal PAC, pena la risoluzione del contratto;",
            "seleziona fornitori affidabili e di comprovata reputazione;",
            "prevede che i contratti con i fornitori rilevanti vengano redatti per iscritto;",
            "monitora che non siano corrisposti compensi, provvigioni o commissioni in misura non congrua rispetto alle prestazioni rese alla Società, non conformi all’incarico conferito e alle condizioni/prassi esistenti sul mercato o determinate da tariffe professionali;",
            "prevede l’obbligo per i fornitori di sottoscrivere una dichiarazione in cui la controparte (i) garantisce che il corrispettivo esigibile sia esclusivamente ricevuto quale corrispettivo dei servizi definiti nel contratto; (ii) garantisce di essere il destinatario finale del pagamento del corrispettivo oppure si obbliga ad indicare tale destinatario finale, con diritto di Società di risolvere il contratto nel caso in cui le verifiche sul predetto soggetto non diano esito positivo.",
          ]}
        />

        <SubHeading>B. Attività strumentali a rischio corruzione</SubHeading>
        <p>
          Con attività strumentali al rischio corruzione si fa riferimento a
          quelle operazioni o ai processi in cui sono gestiti strumenti di
          tipo finanziario e/o da cui possono derivare utilità o mezzi con
          cui supportare la commissione del reato di corruzione.
        </p>

        <StepHeading>1. Sponsorizzazioni</StepHeading>
        <p>
          Le sponsorizzazioni possono essere effettuate solo se rientrano
          tra le iniziative che hanno l&rsquo;esclusivo scopo di promozione
          istituzionale del brand, creazione di visibilità e reputazione
          positiva per la Società. Le attività di sponsorizzazione non
          devono realizzare una forma dissimulata di conferimento di un
          beneficio ad una terza parte al fine di ottenere un vantaggio
          indebito per la Società.
        </p>
        <p>
          La Società prescrive le modalità di autorizzazione, stipula e
          gestione dei contratti di sponsorizzazione, i quali devono
          rispettare i seguenti principi:
        </p>
        <BulletList
          items={[
            "le sponsorizzazioni devono essere effettuate in coerenza con il budget approvato;",
            "i partner in contratti di sponsorizzazione devono essere soltanto enti noti, affidabili e di comprovata reputazione;",
            "si deve effettua una due diligence sui potenziali partner del contratto di sponsorizzazione e la verifica della legittimità del contratto in base alle leggi applicabili;",
            <>
              i contratti di sponsorizzazione devono essere redatti per
              iscritto e prevedere:
              <PlainList
                items={[
                  "a) un’adeguata descrizione circa la natura e la finalità della singola iniziativa, il corrispettivo, i termini e le condizioni di pagamento;",
                  "b) una dichiarazione della controparte che il corrispettivo pagato sia esclusivamente usato ai fini dell’iniziativa;",
                  "c) la clausola con cui la controparte si impegna ad agire nel rispetto del Codice Etico e dei principi previsti dal PAC;",
                  "d) il diritto della Società di effettuare controlli sulla controparte, nel caso in cui abbia un ragionevole sospetto che la controparte stessa possa aver violato le disposizioni previste dalle normative applicabili, del Codice Etico e/o del PAC.",
                ]}
              />
            </>,
          ]}
        />

        <StepHeading>2. Erogazioni liberali - Donazioni</StepHeading>
        <p>
          Le erogazioni liberali verso Enti Pubblici e/o soggetti privati
          sono ammesse se rientrano nella sfera delle iniziative che
          abbiano finalità di solidarietà sociale, di tipo umanitario, di
          promozione sociale ed economica, ricerca scientifica, educazione,
          protezione e sviluppo del patrimonio naturale ed artistico,
          sostegno ad eventi/enti a valore sociale/ambientale di particolare
          rilevanza. Tali erogazioni non prevedono alcuna
          controprestazione.
        </p>
        <p>
          Le modalità operative relative all&rsquo;autorizzazione e
          all&rsquo;erogazione di contributi liberali rispettano i seguenti
          principi:
        </p>
        <BulletList
          items={[
            "gli enti beneficiari devono essere ben noti, affidabili e di eccellente reputazione. Sono vietati i contributi individuali effettuati direttamente a un Funzionario Pubblico e/o a un soggetto privato;",
            "i contributi in denaro devono essere effettuati tramite mezzi di pagamento tracciabili e non trasferibili;",
            "le erogazioni in natura (ossia fornitura di prodotti e/o servizi), oltre a rispettare i principi e requisiti sopra descritti, devono essere adeguatamente rendicontate producendo la necessaria documentazione amministrativo-contabile di supporto;",
            "ove appropriato, possono essere richieste dichiarazioni e garanzie da parte del destinatario riguardo all’uso di fondi/beni donati o la previsione di altri strumenti di rendicontazione, qualora necessario, al fine di monitorare i fondi donati.",
          ]}
        />

        <StepHeading>
          3. Spese di rappresentanza e di ospitalità, omaggi e altre
          utilità
        </StepHeading>
        <p>
          Le spese di rappresentanza e di ospitalità, omaggi e altre
          utilità devono essere effettuati in conformità ai principi di cui
          alla presente Procedura.
        </p>
        <p>
          Per spese di rappresentanza e di ospitalità si intendono i costi
          sostenuti per l&rsquo;acquisto di un bene o servizio a favore di
          persone, enti o società terze rispetto alla Società, giustificati
          da attività commerciali o finalizzati a promuovere il brand
          aziendale. Le visite alla sede, le riunioni fuori sede e le spese
          correlate (per esempio, il trasporto, la sistemazione, i pasti e
          le spese supplementari) sostenuti per Funzionari Pubblici e/o
          dipendenti e/o amministratori di un cliente, di un partner
          commerciale e\o di un fornitore possono generare rischi di
          corruzione.
        </p>
        <p>
          Sono ammesse soltanto spese di rappresentanza ragionevoli ed
          effettuate in buona fede, con le seguenti caratteristiche:
        </p>
        <BulletList
          items={[
            "non prevedono la forma di pagamento in contanti;",
            "non prevedono un corrispettivo;",
            "sono effettuate in relazione a finalità di business legittime e non hanno quale scopo principale visite ad attrazioni turistiche o visite per motivi personali dei soggetti destinatari della spesa;",
            "non sono motivate dal desiderio di esercitare un’influenza impropria o dall’aspettativa di reciprocità;",
            "sono conformi agli standard di cortesia professionale generalmente accettati.",
          ]}
        />
        <p>
          Tutte le spese di rappresentanza devono essere registrate in
          maniera accurata e trasparente nei libri contabili della Società
          con sufficiente dettaglio e devono essere supportata da adeguata
          documentazione giustificativa al fine di individuare il nome dei
          beneficiari, nonché la finalità del pagamento.
        </p>
        <p>
          Omaggi o altre utilità possono essere effettuati o ricevuti
          qualora rientrino nel contesto di atti di cortesia commerciale e
          siano tali da non compromettere l&rsquo;integrità e/o la
          reputazione di una delle parti e tali da non poter essere
          interpretati da un osservatore imparziale come finalizzati a
          creare un obbligo di gratitudine o ad acquisire vantaggi in modo
          improprio. La Società vieta l&rsquo;effettuazione e
          l&rsquo;accettazione, diretta o indiretta, di qualsiasi forma di
          regalìa rivolta all&rsquo;ottenimento di un improprio vantaggio,
          personale o di business, o che possa essere interpretata come
          tale.
        </p>
        <p>
          Le uniche forme di regalie ammesse, quale forma di cortesia
          commerciale:
        </p>
        <BulletList
          items={[
            "non devono eccedere il valore effettivo o stimato di euro 150 o equivalente in valuta locale;",
            "concesse in buona fede e secondo il buon costume;",
            "conformi agli standard di cortesia professionale generalmente accettati (ad es. pacco di Natale) o aventi scopi promozionali/dimostrativi;",
            "non effettuate in forma di pagamento in contanti (o qualsiasi altro mezzo di pagamento equivalente);",
            "debitamente autorizzate, registrate e tracciabili;",
            "non è consentito offrire regali, omaggi o altre utilità a un Funzionario Pubblico;",
            "tali principi non ammettono alcuna forma di deroga.",
          ]}
        />

        <StepHeading>4. Pagamenti agevolativi</StepHeading>
        <p>
          La Società proibisce la corresponsione e la promessa,
          direttamente o indirettamente, di pagamenti, benefici o altre
          utilità a favore di Funzionari Pubblici al fine di velocizzare,
          favorire o assicurare prestazioni di routine e non discrezionali,
          comunque dovute nell&rsquo;ambito dei loro doveri di ufficio,
          quali, ad esempio:
        </p>
        <BulletList
          items={[
            "l’ottenimento di permessi di natura non discrezionale per lo svolgimento delle attività;",
            "i procedimenti di natura non discrezionale, quali pratiche doganali o visti;",
            "la fornitura di un pubblico servizio.",
          ]}
        />

        <StepHeading>5. Contributi politici</StepHeading>
        <p>
          La Società rifiuta qualsiasi forma, diretta e indiretta, di
          pressione e/o influenza su esponenti politici e ha stabilito, di
          non erogare contributi diretti o indiretti a partiti politici,
          movimenti, comitati e organizzazioni politiche e sindacali, né a
          loro rappresentanti.
        </p>

        <StepHeading>6. Tenuta dei conti e contabilità</StepHeading>
        <p>
          Le scritture contabili riflettono in modo completo e accurato i
          fatti alla base di ogni operazione, ogni transazione sia
          tracciabile e ragionevolmente supportata sotto il profilo
          documentale, in conformità con i principi contabili adottati
          dalla Società.
        </p>
        <p>
          Tutti i costi e gli addebiti, le entrate e gli incassi, gli
          introiti, i pagamenti e gli impegni di spesa devono quindi essere
          inseriti tempestivamente tra le informazioni finanziarie, in
          maniera completa e accurata, e devono avere adeguati documenti di
          supporto, emessi in conformità con tutte le leggi applicabili e
          con le relative disposizioni del sistema di controllo interno.
        </p>
        <p>I fondi e i conti non registrati opportunamente in contabilità sono vietati.</p>
        <p>In particolare, non si deve:</p>
        <BulletList
          items={[
            "mai acconsentire a richieste di registrazione di una fattura per prestazione non resa o differente rispetto all’oggetto del contratto;",
            "procedere al pagamento di spese insolite, eccessive, non descritte adeguatamente, non documentate a sufficienza;",
            "alterare alcuna documentazione contabile o modificare altri documenti correlati, in qualsiasi modo che possa rendere poco chiara o contraffare la vera natura dell’operazione;",
            "prendere o dare seguito a disposizioni che abbiano come effetto la registrazione di voci inaccurate nei libri contabili e nella documentazione di Società;",
            "approvare e\\o procedere al pagamento di prestazioni o servizi se sussiste un accordo esplicito o implicito che una parte del pagamento dovrà essere utilizzata per uno scopo diverso da quello descritto nella documentazione a supporto del pagamento stesso;",
            "effettuare pagamenti in contanti (o qualsiasi altro mezzo di pagamento equivalente).",
          ]}
        />
        <p>
          Questi requisiti si applicano a tutte le operazioni, a prescindere
          dalla rilevanza finanziaria.
        </p>
        <p>
          I relativi controlli sono verificati periodicamente dagli organi
          societari di controllo e dal Revisore.
        </p>

        <StepHeading>7. Assunzione e gestione del personale</StepHeading>
        <p>
          Il processo di selezione, assunzione e gestione del personale deve
          essere tale da assicurare che le risorse possiedano
          professionalità e competenze tecniche e/o manageriali in linea
          con le necessità e le esigenze aziendali, evitando favoritismi e
          agevolazioni di ogni sorta ed ispirando le proprie scelte
          esclusivamente a criteri meritocratici. Tali processi sono
          ispirati ai predetti criteri e ai seguenti principi:
        </p>
        <BulletList
          items={[
            "l’assunzione di personale deve essere giustificata da reali e concrete esigenze e/o necessità aziendali;",
            "i candidati devono essere valutati da più persone e sotto differenti profili, e gli esiti dell’intero processo di valutazione sono adeguatamente tracciati;",
            "la remunerazione ed eventuali premi aggiuntivi devono essere coerenti con il ruolo, la responsabilità e le politiche societarie.",
          ]}
        />
      </LegalSection>

      <LegalSection number="7" title="Sistema di Monitoraggio e Reporting">
        <p>
          La Funzione Amministrativa della Società è incaricata dello
          svolgimento delle verifiche relative alla corretta applicazione
          dei presidi anticorruzione e all&rsquo;individuazione di
          potenziali aree di miglioramento in relazione
          all&rsquo;evoluzione organizzativa della Società, alla normativa
          di riferimento e/o alle best practices. Le verifiche possono
          essere attivate anche a seguito di segnalazioni pervenute tramite
          gli appositi canali o suggerimenti e raccomandazioni provenienti
          da terzi.
        </p>
        <p>
          Tutti i destinatari del PAC sono tenuti a segnalare ogni eventuale
          violazione del Sistema Anticorruzione in generale e\o di
          qualsiasi Legge Anticorruzione di cui abbiano avuto conoscenza,
          anche indiretta, nel corso della propria attività.
        </p>
        <p>
          La Società richiede, altresì, a tutti i destinatari di comunicare
          immediatamente ogni eventuale richiesta ritenuta illegittima
          ricevuta da parte di Funzionari Pubblici o soggetti privati,
          ovvero ogni dubbio che dovesse sorgere in merito al comportamento
          da tenere nella gestione dei rapporti con i terzi.
        </p>
        <p>Le segnalazioni possono essere effettuate tramite:</p>
        <PlainList
          items={[
            <>
              i. email:{" "}
              <a
                href="mailto:castaldo.gestioneaziendale@gmail.com"
                className="font-semibold text-cyan-600"
              >
                castaldo.gestioneaziendale@gmail.com
              </a>
            </>,
            <>
              ii. lettera riservata inviata all&rsquo;Avv. Aldo Favarolo, in
              Portici (Napoli) al Corso Garibaldi n. 159, attuale Gestore
              delle Segnalazioni Whistleblowing della Società, che può
              fungere anche da soggetto indipendente ed esterno,
              destinatario di informazioni e segnalazioni di tentati di
              corruzione.
            </>,
          ]}
        />
        <p>
          La Funzione Amministrativa acquisisce ed esamina le segnalazioni
          concernenti le possibili violazioni del PAC e delle Leggi
          Anticorruzione, anche in forma anonima. Al fine di proteggere e
          salvaguardare l&rsquo;autore della segnalazione, Società
          assicura, tramite apposite misure di sicurezza, la riservatezza
          sull&rsquo;identità del segnalante nell&rsquo;intero processo di
          gestione delle segnalazioni, dalla fase di ricezione a quelle
          istruttoria e conclusiva.
        </p>
        <p>
          Le attività di investigazione sono coordinate dalla Funzione
          Amministrativa sulla base delle apposite procedure adottate dalla
          Società.
        </p>
        <p>
          Ai segnalanti è garantita tutela da qualsiasi forma di ritorsione,
          discriminazione o penalizzazione, fatti salvi gli obblighi di
          legge e la tutela dei diritti della Società o delle persone in
          caso di utilizzo strumentale o in mala fede di una segnalazione.
        </p>
        <p>
          Società non consente ritorsioni di alcun tipo contro un
          dipendente che riferisca in buona fede episodi sospetti di
          illeciti.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Il Sistema Sanzionatorio">
        <p>
          La violazione dei principi e delle prescrizioni del presente PAC,
          da parte del personale della Società costituisce grave
          inadempimento contrattuale, per il quale la Società si riserva la
          facoltà di sanzionare tali violazioni nel rispetto della
          disciplina legale e/o contrattuale applicabile al singolo
          rapporto, tanto con sanzioni conservative quanto tramite la
          risoluzione del rapporto contrattuale medesimo (licenziamento
          ovvero recesso). Resta altresì ed in ogni caso ferma la facoltà
          della Società di esperire azioni di risarcimento danni secondo la
          vigente normativa.
        </p>
        <p>
          A titolo meramente esemplificativo e non esaustivo, la Società
          potrà irrogare sanzioni nei confronti del personale Società che:
        </p>
        <BulletList
          items={[
            "violi le Leggi Anticorruzione o il Protocollo Anticorruzione della Società;",
            "ometta immotivatamente di rilevare o riportare eventuali violazioni o che minacci o adotti ritorsioni contro altri che riportano eventuali violazioni.",
          ]}
        />
        <p>
          Le violazioni da parte del personale saranno sanzionate – nel
          rispetto delle procedure, modalità e tempistiche previste dalla
          disciplina legale e/o contrattuale applicabile – con
          tempestività ed immediatezza, attraverso l&rsquo;irrogazione di
          provvedimenti disciplinari adeguati e proporzionati (i) alla
          gravità della violazione; (ii) alle conseguenze della violazione;
          (iii) al grado soggettivo di colpevolezza e intenzionalità e (iv)
          alla posizione ricoperta, tenuto conto anche dell&rsquo;eventuale
          rilevanza penale delle condotte in violazione del Protocollo
          Anticorruzione e dell&rsquo;eventuale instaurazione di un
          procedimento penale.
        </p>
        <p>
          Le sanzioni, per quanto compatibili, si applicano anche agli
          amministratori, ai sindaci della Società e agli altri
          Destinatari.
        </p>
        <p>
          Non sarà applicata alcuna sanzione disciplinare nel caso di
          rifiuto da parte dei Destinatari di adottare un comportamento che
          violi il PAC e/o le Leggi Anticorruzione, anche se ciò dovesse
          comportare per Società una perdita di attività commerciali o
          dovesse ripercuotersi negativamente sui suoi programmi.
        </p>
        <p>
          La violazione dei principi e delle prescrizioni del PAC da parte
          delle Terze Parte costituisce grave inadempimento contrattuale, a
          seguito del quale la Società si riserva la facoltà di risolvere
          il rapporto contrattuale stesso.
        </p>
      </LegalSection>

      <LegalSection
        number="9"
        title="Comunicazione del Protocollo Anticorruzione"
      >
        <p>
          La Società diffonde i contenuti del presente Protocollo mediante
          pubblicazione sul sito aziendale.
        </p>
        <p>
          In aggiunta, i neo-assunti ricevono una copia del PAC e del
          Codice Etico e sottoscrivono una dichiarazione di impegno al
          rispetto dei principi in esso contenuti.
        </p>
      </LegalSection>
    </>
  );
}

import {
  BulletList,
  LegalSection,
  NumberedList,
  StepHeading,
  SubHeading,
} from "./legal-ui";

export function CodiceDisciplinareContent() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
        Procedura interna — vers. 1.0 / 09.10.2023
      </p>

      <h1 className="mt-3 text-4xl font-black tracking-[-0.03em]">
        Codice Disciplinare e Regolamento Aziendale
      </h1>

      <p className="mt-4 text-base leading-7 text-slate-500">
        Deliberato dall&rsquo;organo amministrativo con determina del 9
        ottobre 2023.
      </p>

      <div className="mt-14 border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-black tracking-[-0.02em] text-slate-950">
          Premessa
        </h2>
        <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
          <p>Il presente regolamento interno:</p>
          <BulletList
            items={[
              "è stato predisposto dalla K-City S.r.l. (di seguito anche solo “KCY” o “Società”, per comodità espositiva) ed adottato con verbale dei soci del 9 ottobre 2023;",
              "verrà pubblicato sul sito aziendale, affisso nelle bacheche aziendali e consegnato in copia a ciascun dipendente, alle società di somministrazione (agenzie interinali) ed a ogni altro soggetto interessato che ne faccia richiesta.",
            ]}
          />
          <p>
            Le disposizioni del presente regolamento riguardano tutti i
            dipendenti della KCY e, per le parti applicabili, tutti i
            lavoratori somministrati.
          </p>
          <p>
            Per quanto non previsto dal presente regolamento, si fa
            riferimento al C.C.N.L. &ldquo;Autorimesse ed autonoleggio&rdquo;,
            allo statuto della KCY, alle comunicazioni interne con contenuti
            dispositivi pubblicati nelle bacheche aziendali ed a ogni altra
            disposizione normativa applicabile.
          </p>
          <p>
            Eventuali disposizioni del presente regolamento che dovessero
            risultare non conformi rispetto al C.C.N.L. &ldquo;Autorimesse ed
            autonoleggio&rdquo; sono da considerare:
          </p>
          <BulletList
            items={[
              "applicabili a tutti gli effetti se più favorevoli al lavoratore;",
              "non applicabili (in tal caso varrà quanto riportato nel CCNL di categoria) se meno favorevoli al lavoratore. Ad ogni buon conto le stesse non inficeranno il resto del regolamento.",
            ]}
          />
        </div>
      </div>

      <LegalSection number="1" title="Orario di lavoro">
        <p>
          L&rsquo;orario di lavoro deve essere rispettato sulla base di
          quanto indicato dalla Società. È fatto divieto di non rispettare
          l&rsquo;inizio del lavoro e anticiparne la cessazione senza
          preavviso e senza giustificato motivo. Nel caso in cui non venga
          rispettato l&rsquo;orario di lavoro, sarà operata una trattenuta
          di importo pari alle spettanze corrispondenti al ritardo o alla
          cessazione anticipata, fatta salva l&rsquo;applicazione della
          sanzione prevista dal CCNL in vigore.
        </p>
        <p>
          Salvo il caso di legittimo impedimento, la cui dimostrazione
          incombe sul lavoratore, l&rsquo;onere della prova - e fermo
          restando l&rsquo;obbligo di dare immediata notizia dell&rsquo;
          assenza alla Società - le assenze devono essere giustificate per
          iscritto presso l&rsquo;azienda entro 48 ore. Nel caso di assenze
          ingiustificate sarà operata la trattenuta per le ore non
          lavorate, fatta salva l&rsquo;applicazione della sanzione
          prevista dal CCNL in vigore.
        </p>
        <p>
          Gli orari stabiliti per ciascun turno di lavoro devono intendersi
          di lavoro effettivo. Prima dell&rsquo;inizio stabilito dal
          programma dei servizi, pertanto, ciascun lavoratore dovrà
          trovarsi all&rsquo;interno della sede aziendale, in condizioni
          tali da poter iniziare tempestivamente il proprio lavoro.
        </p>
        <p>
          Le operazioni connesse ed accessorie allo svolgimento della
          propria mansione lavorativa dovranno essere effettuate fuori
          dell&rsquo;orario di lavoro. Le attività presso gli uffici
          amministrativi della società devono essere svolte fuori
          dall&rsquo;orario di lavoro, previo appuntamento da fissare con
          gli uffici competenti.
        </p>
        <p>
          Le registrazioni degli ingressi, delle uscite e delle eventuali
          pause devono essere indicate nel foglio lavoro, esclusivamente
          dal lavoratore. Le infrazioni a questa regola ed, in generale,
          alle formalità per il controllo delle presenze, costituiscono
          mancanza grave che determina l&rsquo;applicazione delle relative
          sanzioni. Qualsiasi errore o anomalia di timbratura deve essere
          segnalato al responsabile, mediante apposito modulo che,
          sottoscritto da entrambi, dovrà essere fatto pervenire, ad onere
          e a cura del lavoratore presso l&rsquo;ufficio del personale.
        </p>
        <p>
          In caso d&rsquo;impossibilità di registrazione dell&rsquo;
          ingresso e/o dell&rsquo;uscita, agli effetti del calcolo delle
          ore lavorate verrà considerata valida la dichiarazione congiunta
          del lavoratore e del responsabile registrata nell&rsquo;apposito
          modulo, da sottoscrivere e far pervenire all&rsquo;ufficio del
          personale. Il suddetto modulo dovrà essere compilato nella stessa
          giornata.
        </p>
        <p>
          Durante l&rsquo;orario di lavoro nessun lavoratore potrà
          abbandonare il proprio posto senza giustificato motivo e senza
          autorizzazione dei responsabili aziendali, né svolgere attività
          che lo distolgano dal suo normale lavoro.
        </p>
        <p>
          Il lavoratore che abbia necessità di uscire prima dell&rsquo;ora
          prevista per la cessazione del lavoro ne farà preventiva richiesta
          al Responsabile di Ufficio e/o di Area, il quale, compatibilmente
          con le esigenze di servizio, potrà concedere il relativo
          permesso, se riterrà la richiesta sufficientemente motivata; in
          caso contrario non autorizzerà l&rsquo;uscita anticipata,
          comunicandone le motivazioni al lavoratore e, se necessario o
          richiesto dal lavoratore, all&rsquo;Amministratore Unico.
        </p>
        <p>
          Sono concesse al lavoratore una pausa di 5 min. al mattino e 5
          minuti al pomeriggio. Alla fine di ogni mese i minuti in eccesso,
          così come quelli di ulteriori altre pause, verranno detratti
          dagli eventuali straordinari spettanti o, in assenza di questi
          ultimi, detratti con una trattenuta dallo stipendio.
        </p>
        <p>
          È fatto inoltre divieto di consumare cibi, spuntini, snack e
          merende o quant&rsquo;altro alla postazione di lavoro. È vietato
          assumere sostanze superalcoliche o alcoliche prima o durante
          l&rsquo;attività lavorativa, così come il divieto di fumo è
          assoluto in qualsiasi locale aziendale. È consentito fumare
          soltanto all&rsquo;esterno. Il contravvenire a tale divieto,
          oltre che non rispettare le leggi e le normative esistenti, reca
          danno e rischio a persone e cose che si trovano all&rsquo;interno
          dei locali stessi. È vietato, inoltre, durante l&rsquo;orario di
          lavoro indossare auricolari per ascoltare musica, conversare al
          telefono (tranne che con colleghi e per ragioni di lavoro
          inerenti il servizio in svolgimento), utilizzare altri apparecchi
          personali.
        </p>
      </LegalSection>

      <LegalSection number="2" title="Organizzazione del lavoro">
        <p>
          È obiettivo della Società perseguire l&rsquo;eccellenza
          operativa, anche attraverso un&rsquo;adeguata ed efficiente
          organizzazione del lavoro.
        </p>
        <p>
          Ogni lavoratore della KCY, durante il proprio turno di lavoro, è
          tenuto ad operare nel pieno rispetto delle disposizioni del
          proprio Responsabile. Il lavoro dei dipendenti viene coordinato
          dai capi turno o dai responsabili, i quali acquisiscono direttive
          e disposizioni dai vertici aziendali.
        </p>
        <p>
          Per far fronte ad esigenze di servizio anche straordinarie e/o
          imprevedibili e/o di carattere eccezionale, la KCY potrà operare
          spostamenti di personale, da un servizio all&rsquo;altro. Per
          detti spostamenti, sarà assicurato per quanto possibile, un
          criterio di rotazione. Gli spostamenti avverranno solo a seguito
          di espresse disposizioni da parte del responsabile operativo o
          della direzione aziendale e, comunque, nel rispetto delle vigenti
          disposizioni del CCNL di categoria e del presente regolamento.
        </p>
        <p>
          Il lavoratore deve adempiere la prestazione dovuta con la
          diligenza richiesta dalla natura della prestazione stessa e
          dall&apos;interesse dell&apos;impresa, rispettando i criteri
          qualitativi e quantitativi stabiliti per la prestazione stessa.
        </p>
        <p>La violazione dell&apos;obbligo di diligenza può comportare:</p>
        <BulletList
          items={[
            "l’irrogazione di sanzioni disciplinari come previsto dal CCNL in vigore e, nei casi più gravi, l’intimazione del licenziamento;",
            "l’obbligo del lavoratore di risarcire la Società, a titolo di responsabilità contrattuale del danno eventualmente riconducibile alla condotta negligente o imprudente del lavoratore.",
          ]}
        />
      </LegalSection>

      <LegalSection number="3" title="Codice di comportamento">
        <p>
          Ciascun lavoratore ha l&rsquo;obbligo di usare modi cortesi e
          rispettosi con gli altri dipendenti e con i clienti della
          Società, e di tenere una condotta conforme ai civici doveri. Si
          richiama il diritto-dovere di ognuno di pretendere e a rispettare
          il decoro nell&rsquo;abbigliamento e nell&rsquo;igiene sui
          luoghi di lavoro. L&rsquo;utilizzo dei beni e dei prodotti
          aziendali deve avvenire esclusivamente per l&rsquo;assolvimento
          delle mansioni lavorative: non sono ammessi l&rsquo;
          appropriazione e l&rsquo;uso per scopi personali.
        </p>
        <p>
          Ciascun lavoratore è responsabile dei mezzi, delle attrezzature
          e dei materiali affidatigli per lo svolgimento del lavoro, della
          loro custodia e della loro pulizia. Non può utilizzare gli stessi
          per scopi diversi da quelli per i quali gli sono stati affidati.
          Il lavoratore è tenuto a svolgere le attività lavorative, a
          custodire e ad utilizzare i mezzi, i materiali e le attrezzature
          aziendali facendo uso della dovuta diligenza, prudenza e perizia.
          Il lavoratore è tenuto, altresì, ad informare l&rsquo;azienda di
          eventuali danneggiamenti - anche a lui non imputabili - ai
          materiali, ai mezzi e attrezzature aziendali. Il dolo e/o
          l&rsquo;accertata negligenza, imperizia, imprudenza, incuria o
          trascuratezza nello svolgimento dell&rsquo;attività lavorativa,
          nella custodia e utilizzo dei materiali, dei mezzi e delle
          attrezzature aziendali determineranno l&rsquo;avvio di
          procedimenti disciplinari a carico dei trasgressori e
          legittimeranno l&rsquo;azienda a richiedere il ristoro totale o
          parziale dei danni.
        </p>
        <p>
          Il lavoratore che accerti vizi/danni/difetti di funzionalità dei
          mezzi, delle attrezzature o dei materiali a lui affidati per
          l&rsquo;esecuzione del lavoro dovrà darne immediata comunicazione
          al relativo Responsabile ad inizio turno se il vizio/danno/difetto
          già sussiste o nel corso dei turni di lavoro negli altri casi, e
          dovrà effettuare la segnalazione scritta da far pervenire al
          Responsabile.
        </p>
        <p>
          Il lavoratore agirà impiegando le proprie capacità e non potrà
          autonomamente delegare a terzi, in tutto o in parte,
          l&rsquo;esecuzione degli incarichi affidatigli.
        </p>
        <p>
          Il lavoratore impossibilitato a portare a termine l&rsquo;
          incarico affidatogli per gravi e comprovati motivi, è tenuto a
          darne segnalazione sul rapportino di servizio e tempestivamente
          comunicazione al proprio Responsabile, che provvederà ad
          attivare le opportune soluzioni organizzative per il
          completamento delle attività.
        </p>
        <p>
          Ciascun lavoratore è tenuto ad effettuare con precisione e cura
          la compilazione dei documenti e delle registrazioni relative sia
          alle attività svolte (es. rapportini lavoro, ecc.), sia a quelle
          omesse, nonché a dare tempestiva comunicazione delle
          problematiche insorte e/o sopraggiunte, degli impedimenti e di
          ogni altro elemento utile (es. sinistri, diverbi, guasti,
          anomalie, richieste di utenti o fornitori, ecc.) allo svolgimento
          del servizio affidato nelle modalità e nei tempi richiesti dal
          proprio capo operai o responsabile.
        </p>
        <p>
          L&rsquo;azienda mette a disposizione di ogni lavoratore i
          dispositivi di protezione individuali (DPI) ed un cartellino di
          riconoscimento da esporre obbligatoriamente durante l&rsquo;
          attività. A discrezione dell&rsquo;azienda verrà consegnato un
          cellulare aziendale corredato di scheda SIM. In caso di
          deterioramento, per il ritiro del nuovo è necessario riconsegnare
          l&rsquo;oggetto deteriorato. In caso di furto del materiale
          consegnato, affinché si possa procedere alla riconsegna del
          nuovo, il lavoratore dovrà darne idonea giustificazione per
          iscritto (es. denuncia di furto alle autorità), in mancanza della
          quale provvederà ad indennizzare KCY per un importo pari al
          valore della sostituzione. Negli altri casi (es. smarrimento,
          distruzione, danneggiamento, ecc.) la riconsegna gratuita potrà
          avvenire solo in assenza (comprovata) di colpa del lavoratore.
          Per motivi di sicurezza l&rsquo;uso degli indumenti dei DPI e del
          tesserino di riconoscimento è obbligatorio per tutti i
          lavoratori. In caso di risoluzione del rapporto di lavoro, tutto
          il materiale consegnato, dagli abiti al telefono, deve essere
          riconsegnato all&rsquo;azienda. In mancanza verrà addebitato il
          corrispettivo valore e verranno adottati gli opportuni
          provvedimenti.
        </p>
        <p>
          È fatto divieto di utilizzare gli indumenti e i DPI aziendali e
          il tesserino di riconoscimento fuori dall&rsquo;orario di lavoro
          o in ambiti extralavorativi.
        </p>
        <p>
          I Responsabili non sono dispensati dall&rsquo;obbligo di
          indossare il tesserino di riconoscimento.
        </p>
        <p>
          I rapporti tra lavoratori e diretti responsabili debbono essere
          improntati sul rispetto reciproco, con riconoscimento dei ruoli e
          delle differenti posizioni gerarchiche. Il lavoratore è tenuto ad
          eseguire scrupolosamente (quando non palesemente illegittima),
          ogni disposizione del superiore, anche se non condivisa. Ove non
          eseguita, il lavoratore è tenuto a segnalare la circostanza e le
          motivazioni sul rapportino di servizio, dandone tempestiva
          comunicazione al Responsabile.
        </p>
        <p>
          Tutti i lavoratori che, nell&rsquo;esercizio delle proprie
          mansioni, utilizzano mezzi aziendali sono responsabili delle
          sanzioni (es. contravvenzioni) a loro imputabili per infrazione
          al codice della strada o ad altra normativa applicabile per la
          quale l&rsquo;azienda esige dal lavoratore un determinato
          comportamento. Il lavoratore dovrà dare comunicazione all&rsquo;
          azienda della contestazione ricevuta, anche in caso di avvenuto
          pagamento. L&rsquo;azienda provvederà, inoltre, ad addebitare al
          lavoratore trasgressore l&rsquo;intero importo delle sanzioni
          amministrative comminate e farà pervenire al medesimo
          contestazione disciplinare qualora l&rsquo;infrazione contestata
          abbia compromesso o comprometta in maniera significativa la
          funzionalità del mezzo e abbia messo o metta in pericolo la
          sicurezza dei lavoratori o di terzi.
        </p>
        <p>
          Qualora non fosse direttamente rintracciabile l&rsquo;autore
          dell&rsquo;infrazione si provvederà ad effettuare una
          ripartizione proporzionale del danno con tutto il personale
          addetto al settore interessato.
        </p>
        <p>
          Non è consentita alcuna attività di promozione commerciale e/o di
          servizi, finanziari e non, non è permessa propaganda elettorale
          e/o sociale proveniente da banche, assicurazioni, associazioni
          e/o movimenti socio-politici, candidati a qualunque titolo,
          aziende o Enti o società terze rivolta ai dipendenti, ad
          eccezione di quelle attività previste nello statuto di KCY. In
          conformità al principio del &ldquo;neminem ledere&rdquo;
          contenuto nel codice civile, i danni cagionati ai mezzi aziendali
          a seguito di incidente RCA, RCT saranno risarciti alla KCY dal
          lavoratore che li ha causati.
        </p>
        <p>
          La società, sentito il lavoratore ed eventuali testimoni, preso
          atto di rapporti delle Autorità (ove sussistenti) ed acquisito
          ogni altro elemento utile disponibile, definisce con
          provvedimento motivato, comunicato al lavoratore, la tipologia e
          la classificazione del danno da lui cagionato, nonché
          l&rsquo;entità dell&rsquo;eventuale risarcimento dovuto dal
          lavoratore. I costi di sostituzione o ripristino sono individuati
          previo confronto tra più preventivi pervenuti da vari fornitori
          selezionati dall&rsquo;azienda. Il provvedimento può essere
          impugnato per iscritto dal lavoratore. Nell&rsquo;impugnazione
          dovrà indicare e/o produrre elementi a suffragio della propria
          difesa nel termine di 15 giorni dalla ricezione della
          comunicazione. Non saranno prese in considerazione le impugnative
          prive di motivazione. La società si pronuncia con provvedimento
          definitivo nei successivi 10 giorni. Se il lavoratore dissente
          dal giudizio potrà, comunque, adire l&rsquo;Autorità Giudiziaria.
          L&rsquo;addebito al lavoratore può essere effettuato (su
          esplicita richiesta dello stesso) con rateizzazione dell&rsquo;
          importo in busta paga fino ad un numero di rate tali da
          comportare un rimborso mensile di entità compresa tra 150 e 200
          €, salvo diverse percentuali o modalità imposte da situazioni
          particolari di durata contrattuale (es. lavoratori impiegati a
          tempo determinato), debitorie o di incapienza. Nel caso del
          lavoratore somministrato, l&rsquo;importo verrà richiesto
          integralmente al lavoratore ed alla società di somministrazione
          obbligata in solido con lo stesso.
        </p>
        <p>
          Il dipendente o il lavoratore interinale che smarrisce o che
          subisce il furto del telefonino o altro materiale aziendale è
          tenuto a denunciare immediatamente il fatto alle autorità
          competenti e ad avvisare immediatamente l&rsquo;ufficio del
          personale cui va consegnata copia della denuncia. Nel caso in cui
          lo smarrimento sia dovuto a cause imputabili al lavoratore, la
          sostituzione del telefono aziendale comporterà l&rsquo;addebito
          al lavoratore stesso del costo aziendale (iva esclusa) dell&rsquo;
          apparato. L&rsquo;addebito al dipendente di KCY può essere
          effettuato con rateizzazione dell&rsquo;importo (se richiesto)
          fino ad un numero di mensilità tali da comportare un rimborso
          mensile di entità compresa tra i 40 € e 50 €, mentre al
          lavoratore interinale l&rsquo;importo verrà richiesto
          integralmente alla società di lavoro interinale che provvederà a
          scomputarlo dalle competenze del mese corrente.
        </p>
        <p>
          Il dipendente o il lavoratore interinale che hanno completato il
          servizio assegnato è tenuto a contattare il Responsabile, al fine
          di verificare la sussistenza di eventuali ulteriori servizi da
          compiere.
        </p>
      </LegalSection>

      <LegalSection number="4" title="Comunicazioni con l’azienda">
        <p>
          Tutte le assenze devono essere comunicate e giustificate con
          specifica documentazione ed in particolare:
        </p>

        <SubHeading>Malattia</SubHeading>
        <p>
          In caso di malattia il lavoratore deve avvertire l&rsquo;azienda
          entro il primo giorno di assenza ed inviare alla medesima entro
          due giorni dall&rsquo;inizio dell&rsquo;assenza il codice di
          trasmissione telematica del certificato da parte del medico
          curante. L&rsquo;eventuale prosecuzione deve essere comunicata
          all&rsquo;azienda entro il primo giorno in cui il lavoratore
          avrebbe dovuto riprendere servizio e, deve essere attestata da
          certificati medici.
        </p>

        <SubHeading>Congedi parentali</SubHeading>
        <p>
          La fruizione degli stessi avverrà secondo quanto previsto dalle
          normative contrattuali e dalla legge. Sarà cura del lavoratore
          provvedere alla consegna dell&rsquo;apposita documentazione
          giustificativa ai responsabili aziendali (ad esempio certificati
          di morte o autocertificazione del parente deceduto, certificati
          medici di malattia dei figli e dichiarazione di non fruizione del
          congedo dell&apos;altro coniuge).
        </p>
        <NumberedList
          items={[
            "il dipendente è tenuto a comunicare direttamente all’ufficio del personale ogni cambiamento di residenza o domicilio, anche se temporaneo ed ogni variazione del nucleo familiare;",
            "il dipendente dovrà, altresì, comunicare ogni variazione relativa alla patente di guida, anche nel caso di ritiro della stessa da parte dell’autorità competente.",
          ]}
        />
      </LegalSection>

      <LegalSection number="6" title="Regali, compensi e altre utilità">
        <p>Il dipendente non chiede, né sollecita, per sé o per altri, regali o altre utilità.</p>
        <p>
          Il dipendente non accetta, per sé o per altri, regali o altre
          utilità, salvo quelli d&apos;uso di modico valore effettuati
          occasionalmente nell&apos;ambito delle normali relazioni di
          cortesia e nell&apos;ambito delle consuetudini internazionali. In
          ogni caso, indipendentemente dalla circostanza che il fatto
          costituisca reato, il dipendente non chiede, per sé o per altri,
          regali o altre utilità, neanche di modico valore a titolo di
          corrispettivo per compiere o per aver compiuto un atto del
          proprio ufficio da soggetti che possano trarre benefici da
          decisioni o attività inerenti all&apos;ufficio, né da soggetti
          nei cui confronti è o sta per essere chiamato a svolgere o a
          esercitare attività o potestà proprie dell&apos;ufficio ricoperto.
        </p>
        <p>
          Il dipendente non accetta, per sé o per altri, da un proprio
          subordinato, direttamente o indirettamente, regali o altre
          utilità, salvo quelli d&apos;uso di modico valore. Il dipendente
          non offre, direttamente o indirettamente, regali o altre utilità
          a un proprio sovraordinato, salvo quelli d&apos;uso di modico
          valore.
        </p>
        <p>
          I regali e le altre utilità comunque ricevuti fuori dai casi
          consentiti dal presente articolo, a cura dello stesso dipendente
          cui siano pervenuti, sono immediatamente messi a disposizione
          dell&apos;amministrazione per la restituzione o per essere
          devoluti a fini istituzionali.
        </p>
        <p>
          Ai fini del presente articolo, per regali o altre utilità di
          modico valore s&rsquo;intendono quelle di valore non superiore,
          in via orientativa, a 150 euro, anche sotto forma di sconto.
        </p>
        <p>
          Il dipendente non accetta incarichi di collaborazione da
          soggetti privati che abbiano, o abbiano avuto nel biennio
          precedente, un interesse economico significativo in decisioni o
          attività inerenti all&apos;ufficio di appartenenza.
        </p>
        <p>
          Al fine di preservare il prestigio e l&apos;imparzialità della
          Società, il Responsabile dell&apos;ufficio vigila sulla corretta
          applicazione del presente articolo.
        </p>
      </LegalSection>

      <LegalSection number="7" title="Codice disciplinare aziendale">
        <p>
          In applicazione di quanto disposto dall&rsquo;art. 7, comma 1,
          della Legge 20 maggio 1970, n. 300 e dal Contratto Collettivo
          Nazionale di Lavoro, si portano a conoscenza dei lavoratori - il
          cui rapporto è regolamentato dal CCNL del settore &ldquo;Piccola
          e Media Industria Alimentari&rdquo; - le seguenti norme
          disciplinari relative sia alla procedura di contestazione delle
          infrazioni disciplinari, sia alle sanzioni applicabili per
          ciascuna di esse.
        </p>
        <p>
          Il presente Codice Disciplinare resterà permanentemente affisso
          presso le bacheche aziendali ed una copia dello stesso sarà
          depositata presso ciascuna Divisione aziendale. Esso resterà
          permanentemente depositato presso la Direzione Risorse Umane che
          provvederà a dare idonea comunicazione e diffusione di eventuali
          modifiche ed integrazioni che dovessero in seguito intervenire,
          nonché a consegnare copia del testo aggiornato agli interessati
          che ne facessero richiesta.
        </p>
      </LegalSection>

      <LegalSection number="8" title="Normativa di riferimento">
        <p>
          &ldquo;Norme di legge in materia di disciplina e obblighi del
          lavoratore la cui inosservanza comporta l&rsquo;applicazione di
          sanzioni disciplinari&rdquo;. Di seguito si richiamano le
          disposizioni delle diverse fonti che costituiscono le norme
          disciplinari a cui fa riferimento il presente Codice, e che
          rappresentano casistiche a titolo esemplificativo e non
          esaustivo.
        </p>

        <StepHeading>1) Lo Statuto dei Lavoratori</StepHeading>
        <p>
          In ambito aziendale si applicano le disposizioni dell&rsquo;art.
          7 della legge 20 maggio 1970, n. 300 &ldquo;Statuto dei
          Lavoratori&rdquo; e successive modificazioni ed integrazioni in
          quanto compatibili. In particolare, si richiama il seguente:
        </p>
        <SubHeading>Art. 7 — Sanzioni disciplinari</SubHeading>
        <p>
          Le norme disciplinari relative alle sanzioni, alle infrazioni in
          relazione alle quali ciascuna di esse può essere applicata ed
          alle procedure di contestazione delle stesse, devono essere
          portate a conoscenza dei lavoratori mediante affissione in luogo
          accessibile a tutti. Esse devono applicare quanto in materia è
          stabilito da accordi e contratti di lavoro ove esistano.
        </p>
        <p>
          Il datore di lavoro non può adottare alcun provvedimento
          disciplinare nei confronti del lavoratore senza avergli
          preventivamente contestato l&apos;addebito e senza averlo sentito
          a sua difesa.
        </p>
        <p>
          Il lavoratore potrà farsi assistere da un rappresentante
          dell&apos;associazione sindacale cui aderisce o conferisce
          mandato.
        </p>
        <p>
          Fermo restando quanto disposto dalla legge 15 luglio 1966, n.
          604, non possono essere disposte sanzioni disciplinari che
          comportino mutamenti definitivi del rapporto di lavoro; inoltre
          la multa non può essere disposta per un importo superiore a
          quattro ore della retribuzione base e la sospensione dal servizio
          e dalla retribuzione per più di dieci giorni.
        </p>
        <p>
          In ogni caso, i provvedimenti disciplinari più gravi del
          rimprovero verbale non possono essere applicati prima che siano
          trascorsi cinque giorni dalla contestazione per iscritto del
          fatto che vi ha dato causa.
        </p>
        <p>
          Salvo analoghe procedure previste dai contratti collettivi di
          lavoro e ferma restando la facoltà di adire l&apos;autorità
          giudiziaria, il lavoratore al quale sia stata applicata una
          sanzione disciplinare può promuovere, nei venti giorni
          successivi, anche per mezzo dell&apos;associazione alla quale sia
          iscritto ovvero conferisca mandato, la costituzione, tramite
          l&apos;ufficio provinciale del lavoro e della massima
          occupazione, di un collegio di conciliazione ed arbitrato,
          composto da un rappresentante di ciascuna delle parti e da un
          terzo membro scelto di comune accordo o, in difetto di accordo,
          nominato dal direttore dell&apos;ufficio del lavoro. La sanzione
          disciplinare resta sospesa fino alla pronuncia da parte del
          collegio.
        </p>
        <p>
          Qualora il datore di lavoro non provveda, entro dieci giorni
          dall&apos;invito rivoltogli dall&apos;ufficio del lavoro, a
          nominare il proprio rappresentante in seno al collegio di cui al
          comma precedente, la sanzione disciplinare non ha effetto. Se il
          datore di lavoro adisce l&apos;autorità giudiziaria, la sanzione
          disciplinare resta sospesa fino alla definizione del giudizio.
        </p>
        <p>
          Non può tenersi conto ad alcun effetto delle sanzioni
          disciplinari decorsi due anni dalla loro applicazione.
        </p>

        <StepHeading>2) Il Codice Civile</StepHeading>
        <p>
          Il presente Codice Disciplinare assume e fa proprie le
          disposizioni di diritto privato del Codice Civile in materia di
          diligenza del prestatore di lavoro subordinato in tema di
          obbligo di fedeltà, direzione dell&rsquo;impresa e sanzioni
          disciplinari ed, in particolare, i seguenti articoli:
        </p>
        <SubHeading>Art. 2086 — Direzione e gerarchia nell&apos;impresa</SubHeading>
        <p>
          L&apos;imprenditore è il capo dell&apos;impresa e da lui dipendono
          gerarchicamente i suoi collaboratori.
        </p>
        <SubHeading>Art. 2104 — Diligenza del prestatore di lavoro</SubHeading>
        <p>
          Il prestatore di lavoro deve usare la diligenza richiesta dalla
          natura della prestazione dovuta, dall&apos;interesse
          dell&apos;impresa e da quello superiore della produzione
          nazionale.
        </p>
        <p>
          Deve inoltre osservare le disposizioni per l&apos;esecuzione e
          per la disciplina del lavoro impartite dall&apos;imprenditore e
          dai collaboratori di questo dai quali gerarchicamente dipende.
        </p>
        <SubHeading>Art. 2105 — Obbligo di fedeltà</SubHeading>
        <p>
          Il prestatore di lavoro non deve trattare affari, per conto
          proprio o di terzi, in concorrenza con l&apos;imprenditore, né
          divulgare notizie attinenti all&apos;organizzazione e ai metodi
          di produzione dell&apos;impresa, o farne uso in modo da poter
          recare ad essa pregiudizio.
        </p>
        <SubHeading>Art. 2106 — Sanzioni disciplinari</SubHeading>
        <p>
          L&apos;inosservanza delle disposizioni contenute nei due articoli
          precedenti può dar luogo alla applicazione di sanzioni
          disciplinari, secondo la gravità dell&apos;infrazione.
        </p>
        <SubHeading>Art. 2118 — Recesso dal contratto a tempo indeterminato</SubHeading>
        <p>
          Ciascuno dei contraenti può recedere dal contratto di lavoro a
          tempo indeterminato, dando il preavviso nel termine e nei modi
          stabiliti, dagli usi o secondo equità.
        </p>
        <p>
          In mancanza di preavviso, il recedente è tenuto verso l&apos;
          altra parte a un&apos;indennità equivalente all&apos;importo
          della retribuzione che sarebbe spettata per il periodo di
          preavviso. La stessa indennità è dovuta dal datore di lavoro nel
          caso di cessazione del rapporto per morte del prestatore di
          lavoro.
        </p>
        <SubHeading>Art. 2119 — Recesso per giusta causa</SubHeading>
        <p>
          Ciascuno dei contraenti può recedere dal contratto prima della
          scadenza del termine, se il contratto è a tempo determinato, o
          senza preavviso, se il contratto è a tempo indeterminato,
          qualora si verifichi una causa che non consenta la prosecuzione,
          anche provvisoria, del rapporto.
        </p>
        <p>
          Se il contratto è a tempo indeterminato, al prestatore di lavoro
          che recede per giusta causa compete l&apos;indennità indicata nel
          secondo comma dell&apos;articolo precedente.
        </p>
        <p>
          Non costituisce giusta causa di risoluzione del contratto il
          fallimento dell&apos;imprenditore o la liquidazione coatta
          amministrativa dell&apos;azienda.
        </p>

        <StepHeading>3) Il D. Lgs. 81/2008</StepHeading>
        <p>
          Il presente Codice Disciplinare assume e fa proprie le
          disposizioni di cui al D. Lgs. 81/2008 ed, in particolare, quanto
          previsto dall&rsquo;art. 20 (Obblighi dei lavoratori).
        </p>
        <SubHeading>Art. 20 — Obblighi dei lavoratori</SubHeading>
        <p>
          Ogni lavoratore deve prendersi cura della propria salute e
          sicurezza e di quella delle altre persone presenti sul luogo di
          lavoro, su cui ricadono gli effetti delle sue azioni o omissioni,
          conformemente alla sua formazione, alle istruzioni e ai mezzi
          forniti dal datore di lavoro.
        </p>
        <p>I lavoratori devono in particolare:</p>
        <BulletList
          items={[
            "contribuire, insieme al datore di lavoro, ai dirigenti e ai preposti, all'adempimento degli obblighi previsti a tutela della salute e sicurezza sui luoghi di lavoro;",
            "osservare le disposizioni e le istruzioni impartite dal datore di lavoro, dai dirigenti e dai preposti, ai fini della protezione collettiva ed individuale;",
            "utilizzare correttamente le attrezzature di lavoro, le sostanze e i preparati pericolosi, i mezzi di trasporto, nonché i dispositivi di sicurezza;",
            "utilizzare in modo appropriato i dispositivi di protezione messi a loro disposizione;",
            "segnalare immediatamente al datore di lavoro, al dirigente o al preposto le deficienze dei mezzi e dei dispositivi di cui alle lettere c) e d), nonché qualsiasi eventuale condizione di pericolo di cui vengano a conoscenza, adoperandosi direttamente, in caso di urgenza, nell'ambito delle proprie competenze e possibilità e fatto salvo l'obbligo di cui alla lettera f) per eliminare o ridurre le situazioni di pericolo grave e incombente, dandone notizia al rappresentante dei lavoratori per la sicurezza;",
            "non rimuovere o modificare senza autorizzazione i dispositivi di sicurezza o di segnalazione o di controllo;",
            "non compiere di propria iniziativa operazioni o manovre che non sono di loro competenza ovvero che possono compromettere la sicurezza propria o di altri lavoratori;",
            "partecipare ai programmi di formazione e di addestramento organizzati dal datore di lavoro;",
            "sottoporsi ai controlli sanitari previsti dal decreto legislativo o comunque disposti dal medico competente.",
          ]}
        />
        <p>
          I lavoratori di aziende che svolgono attività in regime di
          appalto o subappalto, devono esporre apposita tessera di
          riconoscimento, corredata di fotografia, contenente le
          generalità del lavoratore e l&apos;indicazione del datore di
          lavoro. Tale obbligo grava anche in capo ai lavoratori autonomi
          che esercitano direttamente la propria attività nel medesimo
          luogo di lavoro, i quali sono tenuti a provvedervi per proprio
          conto.
        </p>

        <StepHeading>4) CCNL</StepHeading>
        <p>
          Il presente Codice Disciplinare assume e fa proprie le
          disposizioni contenute nei Contratti Collettivi Nazionali di
          Lavoro di riferimento: Commercio e Terziario - Confcommercio.
        </p>
        <p>
          Nella bacheca aziendale verrà esposto in fotocopia l&rsquo;art.
          238 del CCNL (ai sensi dell&rsquo;art. 7 della Legge n.
          300/1970), insieme al regolamento aziendale interno.
        </p>
        <p>
          L&rsquo;inosservanza dei doveri da parte del personale
          dipendente comporta i seguenti provvedimenti, che saranno presi
          dal datore di lavoro in relazione alla entità delle mancanze e
          alle circostanze che le accompagnano:
        </p>
        <NumberedList
          items={[
            "biasimo inflitto verbalmente per le mancanze lievi;",
            "biasimo inflitto per iscritto nei casi di recidiva delle infrazioni di cui al precedente punto 1);",
            "multa in misura non eccedente l’importo di 4 ore della normale retribuzione di cui all’art. 193;",
            "sospensione dalla retribuzione e dal servizio per un massimo di giorni 10;",
            "licenziamento disciplinare senza preavviso e con le altre conseguenze di ragione e di legge.",
          ]}
        />
        <p>Il provvedimento della multa si applica nei confronti del lavoratore che:</p>
        <BulletList
          items={[
            "ritardi nell’inizio del lavoro senza giustificazione, per un importo pari all’ammontare della trattenuta;",
            "esegua con negligenza il lavoro affidatogli;",
            "si assenti dal lavoro fino a tre giorni nell’anno solare senza comprovata giustificazione;",
            "non dia immediata notizia all’azienda di ogni mutamento della propria dimora, sia durante il servizio che durante i congedi.",
          ]}
        />
        <p>
          Il provvedimento della sospensione dalla retribuzione e dal
          servizio si applica nei confronti del lavoratore che:
        </p>
        <BulletList
          items={[
            "arrechi danno alle cose ricevute in dotazione ed uso, con dimostrata responsabilità;",
            "si presenti in servizio in stato di manifesta ubriachezza;",
            "commetta recidiva, oltre la terza volta nell’anno solare, in qualunque delle mancanze che prevedono la multa, salvo il caso dell’assenza ingiustificata.",
          ]}
        />
        <p>
          Salva ogni altra azione legale, il provvedimento di cui al punto
          5) (licenziamento disciplinare) si applica esclusivamente per le
          seguenti mancanze:
        </p>
        <BulletList
          items={[
            "assenza ingiustificata oltre tre giorni nell’anno solare;",
            "recidiva nei ritardi ingiustificati oltre la quinta volta nell’anno solare, dopo formale diffida per iscritto;",
            "grave violazione degli obblighi di cui all’art. 220, 1° e 2° comma;",
            "infrazione alle norme di legge circa la sicurezza per la lavorazione, deposito, vendita e trasporto;",
            "l’abuso di fiducia, la concorrenza, la violazione del segreto d’ufficio; l’esecuzione, in concorrenza con l’attività dell’azienda, di lavoro per conto proprio o di terzi, fuori dell’orario di lavoro;",
            "la recidiva, oltre la terza volta nell’anno solare in qualunque delle mancanze che prevedono la sospensione, fatto salvo quanto previsto per la recidiva nei ritardi.",
          ]}
        />
        <p>
          L&rsquo;importo delle multe sarà destinato al Fondo pensioni dei
          lavoratori dipendenti. Il lavoratore ha facoltà di prendere
          visione della documentazione relativa al versamento.
        </p>

        <SubHeading>
          Estratto di interesse — Capo XXI: doveri del personale e norme
          disciplinari
        </SubHeading>

        <StepHeading>Articolo 233 — Obbligo del prestatore di lavoro</StepHeading>
        <p>
          Il lavoratore ha l&apos;obbligo di osservare nel modo più
          scrupoloso i doveri e il segreto di ufficio, di usare modi
          cortesi col pubblico e di tenere una condotta conforme ai civici
          doveri.
        </p>
        <p>
          Il lavoratore ha l&apos;obbligo di conservare diligentemente le
          merci e i materiali, di cooperare alla prosperità dell&apos;
          impresa.
        </p>

        <StepHeading>Articolo 234 — Divieti</StepHeading>
        <p>
          È vietato al personale ritornare nei locali dell&apos;azienda e
          trattenersi oltre l&apos;orario prescritto, se non per ragioni di
          servizio e con l&apos;autorizzazione della azienda, salvo quanto
          previsto dall&apos;art. 32 del presente contratto. Non è
          consentito al personale di allontanarsi dal servizio durante
          l&apos;orario se non per ragioni di lavoro e con permesso
          esplicito.
        </p>
        <p>
          Il datore di lavoro, a sua volta, non potrà trattenere il
          proprio personale oltre l&apos;orario normale, salvo nel caso di
          prestazione di lavoro straordinario.
        </p>
        <p>
          Il lavoratore, previa espressa autorizzazione, può allontanarsi
          dal lavoro anche per ragioni estranee al servizio. In tal caso è
          in facoltà del datore di lavoro richiedere il recupero delle ore
          di assenza con altrettante ore di lavoro normale nella misura
          massima di un&apos;ora al giorno senza diritto ad alcuna
          maggiorazione.
        </p>
        <p>
          Al termine dell&apos;orario di lavoro, prima che sia dato il
          segnale di uscita, è assolutamente vietato abbandonare il
          proprio posto.
        </p>

        <StepHeading>Articolo 235 — Giustificazione delle assenze</StepHeading>
        <p>
          Salvo i casi di legittimo impedimento, di cui sempre incombe al
          lavoratore l&apos;onere della prova, e fermo restando
          l&apos;obbligo di dare immediata notizia dell&apos;assenza al
          datore di lavoro, le assenze devono essere giustificate per
          iscritto presso l&apos;azienda entro 48 ore per gli eventuali
          accertamenti.
        </p>
        <p>
          In relazione alla giustificazione delle assenze in caso di
          malattia, e fermo restando l&apos;obbligo di dare immediata
          notizia dell&apos;assenza al datore di lavoro, quanto previsto
          dal presente si realizza anche mediante la comunicazione
          scritta, a mezzo di fax, mail certificata o raccomandata, del
          numero di protocollo identificativo del certificato medico
          inviato per via telematica dal medico all&apos;Inps.
        </p>
        <p>
          Nel caso di assenze non giustificate sarà operata la trattenuta
          di tante quote giornaliere della retribuzione di fatto di cui
          all&apos;art. 208 quante sono le giornate di assenza, fatta salva
          l&apos;applicazione della sanzione prevista dal successivo art.
          238.
        </p>

        <StepHeading>Articolo 236 — Rispetto orario di lavoro</StepHeading>
        <p>
          I lavoratori hanno l&apos;obbligo di rispettare l&apos;orario di
          lavoro. Nei confronti dei ritardatari sarà operata una
          trattenuta, che dovrà figurare sul prospetto paga, di importo
          pari alle spettanze corrispondenti al ritardo, fatta salva
          l&apos;applicazione della sanzione prevista dal successivo art.
          238.
        </p>

        <StepHeading>Articolo 237 — Comunicazione mutamento di domicilio</StepHeading>
        <p>
          È dovere del personale di comunicare immediatamente all&apos;
          azienda ogni mutamento della propria dimora sia durante il
          servizio che durante i congedi.
        </p>
        <p>
          Il personale ha altresì l&apos;obbligo di rispettare ogni altra
          disposizione emanata dalla azienda per regolare il servizio
          interno, in quanto non contrasti con le norme del presente
          contratto e con le leggi vigenti, e rientri nelle normali
          attribuzioni del datore di lavoro.
        </p>
        <p>
          Tali norme dovranno essere rese note al personale con
          comunicazione scritta o mediante affissione nell&apos;interno
          dell&apos;azienda.
        </p>

        <StepHeading>Articolo 238 — Provvedimenti disciplinari</StepHeading>
        <p>
          La inosservanza dei doveri da parte del personale dipendente
          comporta i seguenti provvedimenti, che saranno presi dal datore
          di lavoro in relazione alla entità delle mancanze e alle
          circostanze che le accompagnano:
        </p>
        <NumberedList
          items={[
            "biasimo inflitto verbalmente per le mancanze lievi;",
            "biasimo inflitto per iscritto nei casi di recidiva delle infrazioni di cui al precedente punto 1);",
            "multa in misura non eccedente l'importo di 4 ore della normale retribuzione di cui all'art. 206;",
            "sospensione dalla retribuzione e dal servizio per un massimo di giorni 10;",
            "licenziamento disciplinare senza preavviso e con le altre conseguenze di ragione e di legge.",
          ]}
        />
        <p>Il provvedimento della multa si applica nei confronti del lavoratore che:</p>
        <BulletList
          items={[
            "ritardi nell'inizio del lavoro senza giustificazione, per un importo pari all'ammontare della trattenuta;",
            "esegua con negligenza il lavoro affidatogli;",
            "si assenti dal lavoro fino a tre giorni nell'anno solare senza comprovata giustificazione;",
            "non dia immediata notizia all'azienda di ogni mutamento della propria dimora, sia durante il servizio che durante i congedi.",
          ]}
        />
        <p>
          Il provvedimento della sospensione dalla retribuzione e dal
          servizio si applica nei confronti del lavoratore che:
        </p>
        <BulletList
          items={[
            "arrechi danno alle cose ricevute in dotazione ed uso, con dimostrata responsabilità;",
            "si presenti in servizio in stato di manifesta ubriachezza;",
            "commetta recidiva, oltre la terza volta nell'anno solare, in qualunque delle mancanze che prevedono la multa, salvo il caso dell'assenza ingiustificata.",
          ]}
        />
        <p>
          Salva ogni altra azione legale, il provvedimento di cui al punto
          5) (licenziamento disciplinare) si applica esclusivamente per le
          seguenti mancanze:
        </p>
        <BulletList
          items={[
            "assenza ingiustificata oltre tre giorni nell'anno solare;",
            "recidiva nei ritardi ingiustificati oltre la quinta volta nell'anno solare, dopo formale diffida per iscritto;",
            "grave violazione degli obblighi di cui all'art. 233, 1° e 2° comma;",
            "infrazione alle norme di legge circa la sicurezza per la lavorazione, deposito, vendita e trasporto;",
            "l'abuso di fiducia, la concorrenza, la violazione del segreto d'ufficio; l'esecuzione, in concorrenza con l'attività dell'azienda, di lavoro per conto proprio o di terzi, fuori dell'orario di lavoro;",
            "la recidiva, oltre la terza volta nell'anno solare in qualunque delle mancanze che prevedono la sospensione, fatto salvo quanto previsto per la recidiva nei ritardi.",
          ]}
        />
        <p>
          L&apos;importo delle multe sarà destinato al Fondo pensioni dei
          lavoratori dipendenti. Il lavoratore ha facoltà di prendere
          visione della documentazione relativa al versamento.
        </p>

        <StepHeading>Articolo 239 — Codice disciplinare</StepHeading>
        <p>
          Ai sensi e per gli effetti dell&apos;art. 7 della Legge
          20.5.1970, n. 300, le disposizioni contenute negli articoli di
          cui al presente Capo XXI nonché quelle contenute nei regolamenti
          o accordi aziendali in materia di sanzioni disciplinari devono
          essere portate a conoscenza dei lavoratori mediante affissione
          in luogo accessibile a tutti, ovvero altro strumento equipollente
          accessibile a tutti.
        </p>
        <p>
          Il lavoratore colpito da provvedimento disciplinare il quale
          intenda impugnare la legittimità del provvedimento stesso può
          avvalersi delle procedure di conciliazione previste dall&apos;
          art. 7, Legge 20.5.1970, n. 300 o di quelle previste dalla
          Sezione Terza del presente contratto.
        </p>

        <StepHeading>Articolo 240 — Normativa provvedimenti disciplinari</StepHeading>
        <p>
          L&apos;eventuale adozione del provvedimento disciplinare dovrà
          essere comunicata al lavoratore con lettera raccomandata con
          avviso di ricevimento o altro mezzo idoneo a certificare la data
          di ricevimento, entro 15 giorni dalla scadenza del termine
          assegnato al lavoratore stesso per presentare le sue
          controdeduzioni.
        </p>
        <p>
          Per esigenze dovute a difficoltà nella fase di valutazione delle
          controdeduzioni e di decisione nel merito, il termine di cui
          sopra può essere prorogato di 30 giorni, purché l&apos;azienda ne
          dia preventiva comunicazione scritta al lavoratore interessato.
        </p>
      </LegalSection>

      <LegalSection number="9" title="Delegazioni di pagamento">
        <p>
          L&rsquo;Azienda non accetterà deleghe di pagamento per prestiti
          contratti dai dipendenti con società finanziarie od istituti
          similari e, pertanto, non rilascerà a questi ultimi alcun
          benestare per gli incombenti previsti in capo al delegato e non
          assumerà alcun obbligo verso il delegatario (dipendente).
        </p>
      </LegalSection>

      <LegalSection number="10" title="Modifiche">
        <p>
          Durante la vigenza del presente regolamento potranno essere
          effettuate osservazioni o revisione da parte della Società.
        </p>
        <p>
          Le revisioni verranno regolarmente portate a conoscenza dei
          dipendenti e depositate nelle opportune sedi.
        </p>
      </LegalSection>
    </>
  );
}

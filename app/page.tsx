"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Camera,
  Check,
  ChevronRight,
  Cpu,
  Gauge,
  Leaf,
  Menu,
  MonitorDot,
  ParkingCircle,
  Plus,
  RadioTower,
  Route,
  ShieldCheck,
  Ticket,
  TrafficCone,
  Truck,
  UserCheck,
  X,
} from "lucide-react";

type SolutionDetail = {
  heading?: string;
  paragraphs: string[];
  listTitle: string;
  points: string[];
  closing?: string;
};

type Solution = {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  detail?: SolutionDetail;
};

const solutions: Solution[] = [
  {
    icon: ParkingCircle,
    title: "Smart Parking",
    detail: {
      paragraphs: [
        "K-City sviluppa soluzioni di Smart Parking per rendere più semplice, efficiente e digitale la gestione della sosta urbana.",
        "Attraverso sensori, dispositivi IoT e piattaforme software, il sistema consente di conoscere in tempo reale la disponibilità degli stalli e di raccogliere informazioni utili per migliorare la gestione delle aree di parcheggio.",
      ],
      listTitle: "Tra le principali funzionalità",
      points: [
        "Rilevazione in tempo reale dello stato degli stalli",
        "Monitoraggio delle aree di sosta",
        "Raccolta e analisi dei dati",
        "Integrazione con parcometri e sistemi di pagamento",
        "Supporto alla ricerca degli stalli disponibili",
        "Statistiche sull’utilizzo delle aree di parcheggio",
      ],
      closing:
        "L’obiettivo è migliorare l’esperienza dell’utente e fornire alle Amministrazioni strumenti concreti per una gestione più efficiente della mobilità urbana.",
    },
  },
  {
    icon: RadioTower,
    title: "Sensori IoT",
    detail: {
      paragraphs: [
        "K-City progetta e integra sensori IoT per il monitoraggio intelligente degli spazi e delle infrastrutture urbane.",
        "I dispositivi permettono di raccogliere informazioni dal territorio e trasmetterle alle piattaforme di gestione, consentendo il controllo e l’analisi dei dati anche in tempo reale.",
      ],
      listTitle: "Le principali applicazioni comprendono",
      points: [
        "Rilevazione dell’occupazione degli stalli",
        "Monitoraggio di infrastrutture e aree urbane",
        "Trasmissione automatica dei dati",
        "Controllo remoto dei dispositivi",
        "Integrazione con reti e piattaforme Smart City",
        "Raccolta di dati utili alla pianificazione urbana",
      ],
      closing:
        "Un’infrastruttura connessa permette di trasformare i dati provenienti dal territorio in strumenti di supporto alle decisioni.",
    },
  },
  {
    icon: Camera,
    title: "Visione Artificiale",
    detail: {
      paragraphs: [
        "K-City utilizza sistemi di Visione Artificiale e Intelligenza Artificiale per automatizzare il monitoraggio della mobilità e delle infrastrutture urbane.",
        "Attraverso telecamere e algoritmi dedicati è possibile analizzare immagini e flussi video, ricavando informazioni utili per il controllo del territorio.",
      ],
      listTitle: "Le soluzioni possono consentire",
      points: [
        "Riconoscimento e classificazione dei veicoli",
        "Lettura automatica delle targhe",
        "Conteggio dei transiti",
        "Analisi dei flussi veicolari",
        "Rilevazione di situazioni o eventi specifici",
        "Produzione di statistiche e report",
      ],
      closing:
        "La tecnologia consente di ottenere dati precisi e aggiornati riducendo la necessità di controlli manuali.",
    },
  },
  {
    icon: Route,
    title: "Flussi di traffico",
    detail: {
      paragraphs: [
        "K-City offre sistemi per il monitoraggio e l’analisi dei flussi di traffico, permettendo alle Amministrazioni di conoscere in modo più preciso come si muovono veicoli e utenti all’interno del territorio urbano.",
        "I dati raccolti possono essere utilizzati per individuare criticità, pianificare interventi e migliorare la gestione della viabilità.",
      ],
      listTitle: "Tra le principali funzionalità",
      points: [
        "Conteggio dei veicoli",
        "Classificazione dei mezzi",
        "Analisi dei volumi di traffico",
        "Individuazione delle fasce orarie più congestionate",
        "Monitoraggio dei principali assi viari",
        "Elaborazione di statistiche e report",
      ],
      closing:
        "I dati diventano così uno strumento concreto per progettare una mobilità più efficiente e sostenibile.",
    },
  },
  {
    icon: TrafficCone,
    title: "ZTL & Accessi",
    detail: {
      heading: "ZTL e Controllo Accessi",
      paragraphs: [
        "K-City sviluppa e gestisce soluzioni tecnologiche per il controllo degli accessi alle Zone a Traffico Limitato, supportando le Amministrazioni nella regolamentazione della mobilità urbana.",
        "I sistemi consentono di monitorare automaticamente i veicoli in ingresso e in uscita attraverso dispositivi di rilevazione, telecamere e piattaforme software dedicate.",
      ],
      listTitle: "Tra le principali funzionalità",
      points: [
        "Rilevazione automatica delle targhe",
        "Controllo dei varchi ZTL",
        "Gestione dei veicoli autorizzati",
        "Monitoraggio dei transiti",
        "Gestione delle liste di autorizzazione",
        "Analisi dei flussi veicolari",
        "Integrazione con altri sistemi di mobilità urbana",
      ],
      closing:
        "L’obiettivo è garantire un controllo efficace degli accessi e una migliore gestione delle aree urbane più sensibili.",
    },
  },
  {
    icon: Leaf,
    title: "Qualità dell'aria",
    detail: {
      heading: "Qualità dell’Aria",
      paragraphs: [
        "K-City integra sistemi per il monitoraggio della qualità dell’aria all’interno delle infrastrutture Smart City.",
        "Attraverso centraline e sensori ambientali è possibile raccogliere dati relativi alle condizioni dell’ambiente urbano e correlarli con traffico e mobilità.",
      ],
      listTitle: "Il sistema può consentire",
      points: [
        "Monitoraggio dei principali parametri ambientali",
        "Raccolta continua dei dati",
        "Visualizzazione delle informazioni da piattaforma",
        "Analisi dello storico dei rilevamenti",
        "Individuazione di variazioni e criticità",
        "Integrazione dei dati ambientali con quelli relativi al traffico",
      ],
      closing:
        "Uno strumento utile per supportare politiche orientate alla sostenibilità e alla qualità della vita urbana.",
    },
  },
  {
    icon: Truck,
    title: "Rimozione forzata",
    detail: {
      heading: "Rimozione Forzata",
      paragraphs: [
        "K-City supporta la gestione del servizio di rimozione forzata dei veicoli, contribuendo al mantenimento della sicurezza e della corretta fruizione degli spazi pubblici.",
        "Il servizio può essere coordinato con le attività di controllo della sosta e con gli altri sistemi di gestione della mobilità.",
      ],
      listTitle: "Le principali attività comprendono",
      points: [
        "Supporto alla gestione degli interventi di rimozione",
        "Coordinamento operativo del servizio",
        "Gestione dei veicoli rimossi",
        "Monitoraggio degli interventi",
        "Registrazione delle operazioni effettuate",
        "Supporto alle Amministrazioni e agli organi competenti",
      ],
      closing:
        "Una gestione organizzata del servizio contribuisce a mantenere libere e sicure le aree destinate alla circolazione e alla sosta.",
    },
  },
  {
    icon: Gauge,
    title: "Rilevatori di velocità",
    detail: {
      heading: "Rilevatori di Velocità",
      paragraphs: [
        "K-City propone soluzioni tecnologiche per il monitoraggio della velocità dei veicoli e l’analisi dei comportamenti di guida sulle strade urbane.",
        "I dispositivi possono essere utilizzati per raccogliere informazioni utili alla sicurezza stradale e alla pianificazione degli interventi sulla viabilità.",
      ],
      listTitle: "Le principali funzionalità comprendono",
      points: [
        "Rilevazione della velocità dei veicoli",
        "Conteggio dei transiti",
        "Classificazione dei mezzi",
        "Individuazione delle velocità medie",
        "Analisi delle fasce orarie",
        "Produzione di statistiche e report",
      ],
      closing:
        "I dati raccolti rappresentano un importante supporto per individuare le aree maggiormente critiche e migliorare la sicurezza stradale.",
    },
  },
  {
    icon: Ticket,
    title: "Parcometri",
    detail: {
      paragraphs: [
        "K-City fornisce soluzioni tecnologiche per la gestione della sosta a pagamento attraverso parcometri di nuova generazione, integrabili con sistemi digitali e piattaforme di controllo.",
        "I dispositivi possono essere configurati in funzione delle esigenze dell’Amministrazione e delle caratteristiche delle singole aree di sosta.",
      ],
      listTitle: "Tra le principali funzionalità",
      points: [
        "Pagamento della sosta",
        "Gestione delle tariffe",
        "Controllo remoto dei dispositivi",
        "Monitoraggio dello stato dei parcometri",
        "Raccolta dei dati relativi alle transazioni",
        "Integrazione con applicazioni e sistemi di pagamento digitale",
        "Supporto alla manutenzione",
      ],
      closing:
        "L’obiettivo è rendere il pagamento e la gestione della sosta più semplici, affidabili e digitali.",
    },
  },
  {
    icon: MonitorDot,
    title: "Pannelli a messaggio variabile",
    detail: {
      heading: "Pannelli a Messaggio Variabile",
      paragraphs: [
        "K-City integra pannelli a messaggio variabile per fornire agli utenti informazioni aggiornate sulla mobilità e sulle condizioni della viabilità.",
        "I pannelli possono essere collegati alle piattaforme di gestione e aggiornati da remoto sulla base delle esigenze operative.",
      ],
      listTitle: "Possono essere utilizzati per comunicare",
      points: [
        "Disponibilità dei parcheggi",
        "Informazioni sul traffico",
        "Modifiche alla viabilità",
        "Deviazioni e chiusure stradali",
        "Eventi o situazioni temporanee",
        "Messaggi di pubblica utilità",
      ],
      closing:
        "La comunicazione in tempo reale contribuisce a migliorare l’orientamento degli utenti e la gestione dei flussi di traffico.",
    },
  },
  {
    icon: UserCheck,
    title: "Ausiliari della sosta",
    detail: {
      heading: "Ausiliari della Sosta",
      paragraphs: [
        "K-City svolge il servizio di controllo della sosta attraverso personale selezionato sul territorio e specificamente formato per garantire professionalità, efficienza e correttezza nello svolgimento delle attività.",
        "Gli operatori, previa acquisizione della qualifica di Accertatori della Sosta, ai sensi dell’art. 17, comma 132, della Legge 15 maggio 1997 n. 127 e successive modifiche, vengono preparati attraverso percorsi di formazione dedicati e attività di affiancamento con i responsabili di commessa.",
        "La formazione viene costantemente aggiornata per assicurare una corretta applicazione delle procedure e un servizio efficace nei confronti dell’utenza e delle Amministrazioni.",
      ],
      listTitle: "Tra le principali attività svolte rientrano",
      points: [
        "Controllo della regolarità della sosta nelle aree affidate",
        "Contrasto alla sosta e alla fermata non consentite",
        "Controllo delle aree e degli stalli riservati alle persone con disabilità",
        "Supporto al corretto utilizzo degli spazi destinati alla sosta",
        "Presidio e monitoraggio delle aree assegnate",
      ],
    },
  },
];

const cities = [
  "Napoli",
  "Benevento",
  "Avellino",
  "Caserta",
  "Matera",
  "Messina",
  "Ischia",
  "Ercolano",
];

const certifications = ["ISO 9001", "ISO 14001", "ISO 27001"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Solution | null>(null);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#" aria-label="K-City — home">
            <Image
              src="/brand/k-city-logo.svg"
              alt="K-City"
              width={150}
              height={44}
              priority
              className="h-11 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a className="nav-link" href="#azienda">
              Azienda
            </a>
            <a className="nav-link" href="#soluzioni">
              Soluzioni
            </a>
            <a className="nav-link" href="#tecnologia">
              Tecnologia
            </a>
            <a className="nav-link" href="#progetti">
              Progetti
            </a>

            <a
              href="#contatti"
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#06131f] transition hover:bg-cyan-300"
            >
              Contattaci
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-900 lg:hidden"
            aria-label="Apri menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-5">
              {[
                ["Azienda", "#azienda"],
                ["Soluzioni", "#soluzioni"],
                ["Tecnologia", "#tecnologia"],
                ["Progetti", "#progetti"],
                ["Contatti", "#contatti"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-slate-900"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="hero-grid relative min-h-screen overflow-hidden bg-[#06131f] pt-[76px] text-white">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Your City. Your Future.
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[82px]">
              La città diventa
              <span className="block text-cyan-300">intelligente.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
              Hardware, software e Intelligenza Artificiale per trasformare
              mobilità, parcheggi e infrastrutture urbane in un ecosistema
              digitale connesso.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#soluzioni"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-[#06131f] transition hover:bg-cyan-300"
              >
                Scopri le soluzioni
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#azienda"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Scopri K-City
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-cyan-300" />
                IoT
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-cyan-300" />
                Artificial Intelligence
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-cyan-300" />
                Smart Mobility
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-cyan-300" />
                Cloud Platform
              </span>
            </div>
          </motion.div>

          {/* MOCKUP DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[22px] bg-[#0b1d2b] p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      K-City Platform
                    </p>
                    <p className="mt-1 font-bold text-white">
                      Urban Mobility Dashboard
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                    Live
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <DashboardCard
                    icon={<ParkingCircle size={19} />}
                    label="Smart Parking"
                    value="Live"
                  />
                  <DashboardCard
                    icon={<Camera size={19} />}
                    label="AI Cameras"
                    value="Active"
                  />
                  <DashboardCard
                    icon={<RadioTower size={19} />}
                    label="IoT Network"
                    value="Online"
                  />
                  <DashboardCard
                    icon={<BarChart3 size={19} />}
                    label="Analytics"
                    value="Real time"
                  />
                </div>

                <div className="relative mt-4 h-52 overflow-hidden rounded-2xl border border-white/5 bg-[#071722]">
                  <div className="city-map-lines" />

                  <div className="absolute left-[20%] top-[40%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,.8)]" />
                  <div className="absolute left-[62%] top-[25%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,.8)]" />
                  <div className="absolute left-[75%] top-[65%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,.8)]" />
                  <div className="absolute left-[38%] top-[70%] h-2.5 w-2.5 rounded-full bg-cyan-300" />

                  <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-[#0c2232]/90 px-4 py-3 backdrop-blur">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">
                      Network
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      Connected City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      </section>

      {/* STATS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          <Stat value="137" label="Paesi abilitati" />
          <Stat value="99,8%" label="Affidabilità dichiarata" />
          <Stat value="10 anni" label="Lifetime sensori" />
        </div>
      </section>

      {/* AZIENDA */}
      <section id="azienda" className="scroll-mt-24 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/brand/k-city-badge.svg"
              alt="K-City"
              width={144}
              height={144}
              className="mb-8 h-32 w-32 lg:h-36 lg:w-36"
            />

            <SectionLabel>K-City</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Tecnologia che comprende
              <span className="block text-cyan-600">come si muove una città.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg leading-8 text-slate-600">
              K-City sviluppa hardware e software per l&apos;implementazione di
              sistemi IoT dedicati al controllo delle aree di sosta, della
              viabilità e dei flussi veicolari.
            </p>

            <p className="mt-5 leading-7 text-slate-500">
              Un&apos;infrastruttura digitale capace di mettere in comunicazione
              sensori, telecamere, parcometri, sistemi di accesso e strumenti di
              analisi in un&apos;unica piattaforma.
            </p>

            <a
              href="#tecnologia"
              className="mt-7 inline-flex items-center gap-2 font-bold text-slate-950"
            >
              La nostra tecnologia
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SOLUZIONI */}
      <section
        id="soluzioni"
        className="scroll-mt-20 bg-[#f4f7f9] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Soluzioni</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Una piattaforma.
              <span className="block text-slate-400">Una città connessa.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Soluzioni modulari che trasformano i dati urbani in strumenti
              concreti per amministrazioni, operatori e cittadini.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const detail = solution.detail;

              return (
                <motion.article
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.04 }}
                  {...(detail && {
                    role: "button",
                    tabIndex: 0,
                    "aria-haspopup": "dialog" as const,
                    onClick: () => setSelected(solution),
                    onKeyDown: (e: React.KeyboardEvent) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelected(solution);
                      }
                    },
                  })}
                  className={`group relative flex w-[calc(50%-6px)] flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg hover:shadow-slate-200/60 sm:w-[calc(50%-8px)] sm:flex-row sm:items-center sm:gap-4 md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] ${
                    detail ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#06131f] text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-[#06131f]">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-sm font-bold leading-snug sm:text-base">
                    {solution.title}
                  </h3>

                  {detail && (
                    <Plus
                      size={16}
                      aria-hidden
                      className="absolute right-3 top-3 text-slate-400 transition group-hover:text-cyan-600 sm:static sm:ml-auto sm:shrink-0"
                    />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="tecnologia"
        className="scroll-mt-20 overflow-hidden bg-[#06131f] py-24 text-white lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionLabel dark>Intelligent Suite</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Infinite
              <span className="block text-cyan-300">possibilities.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Una piattaforma web-based progettata per centralizzare dati,
              dispositivi e servizi di mobilità urbana.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Aggiornamento in tempo reale",
                "Accesso multi-utenza",
                "Scalabilità",
                "Analisi dei dati",
                "Sicurezza",
                "Integrazione IoT",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-300">
                    <Check size={14} />
                  </div>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-400/10 blur-[90px]" />

            <div className="relative grid grid-cols-2 gap-4">
              <TechBox icon={<Cpu />} value="IoT" label="Connected devices" />
              <TechBox
                icon={<Camera />}
                value="AI"
                label="Computer vision"
              />
              <TechBox
                icon={<RadioTower />}
                value="LoRaWAN"
                label="Wireless network"
              />
              <TechBox
                icon={<BarChart3 />}
                value="DATA"
                label="Urban analytics"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="progetti" className="scroll-mt-20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <SectionLabel>Territorio</SectionLabel>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
                La smart city
                <span className="block text-cyan-600">diventa realtà.</span>
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-slate-600">
                K-City porta tecnologie e soluzioni per la mobilità intelligente
                in numerosi territori italiani.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {cities.map((city) => (
                <div
                  key={city}
                  className="flex min-h-28 items-end rounded-2xl border border-slate-200 bg-slate-50 p-5 font-bold transition hover:border-cyan-300 hover:bg-cyan-50"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-4">
            <ShieldCheck size={34} className="text-cyan-600" />
            <div>
              <p className="font-bold">Sistemi di gestione certificati</p>
              <p className="text-sm text-slate-500">
                Qualità, ambiente e sicurezza delle informazioni
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((certification) => (
              <span
                key={certification}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold"
              >
                {certification}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contatti" className="scroll-mt-20 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-cyan-400 px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#06131f]/60">
                Costruiamo la città del futuro
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-[#06131f] sm:text-5xl lg:text-6xl">
                Rendiamo intelligente la tua città.
              </h2>
            </div>

            <a
              href="mailto:supporto@k-city.it"
              className="inline-flex h-fit items-center justify-center gap-2 rounded-full bg-[#06131f] px-7 py-4 font-bold text-white transition hover:scale-[1.02]"
            >
              Parliamo del progetto
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06131f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <Image
                src="/brand/k-city-logo-white-payoff.svg"
                alt="K-City — your city, your future"
                width={154}
                height={45}
                className="h-11 w-auto"
              />
              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                Sistemi intelligenti per la mobilità urbana e le Smart Cities.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold">K-City Factory</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Via Giacomo Leopardi
                <br />
                San Sebastiano al Vesuvio (NA)
                <br />
                Italia
              </p>
            </div>

            <div>
              <p className="text-sm font-bold">Contatti</p>
              <a
                href="mailto:supporto@k-city.it"
                className="mt-3 block text-sm text-cyan-300"
              >
                supporto@k-city.it
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row">
            <span>© 2026 K-City S.r.l. — Tutti i diritti riservati.</span>

            <div className="flex gap-5">
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Whistleblowing</a>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selected?.detail && (
          <SolutionModal solution={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

function SolutionModal({
  solution,
  onClose,
}: {
  solution: Solution;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { detail } = solution;
  const Icon = solution.icon;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!detail) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-[#06131f]/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="solution-modal-title"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:rounded-[28px]"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Chiudi"
          className="absolute right-4 top-4 z-10 bg-white/90 flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:right-5 sm:top-5"
        >
          <X size={22} />
        </button>

        <div className="max-h-[92vh] overflow-y-auto p-7 sm:p-10">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06131f] text-cyan-300">
          <Icon size={26} />
        </div>

        <h3
          id="solution-modal-title"
          className="mt-6 pr-10 text-3xl font-black tracking-[-0.03em] sm:text-4xl"
        >
          {detail.heading ?? solution.title}
        </h3>

        <div className="mt-6 space-y-4 leading-7 text-slate-600">
          {detail.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-cyan-600">
          {detail.listTitle}
        </p>

        <ul className="mt-4 space-y-3">
          {detail.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-slate-700">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-700">
                <Check size={14} />
              </span>
              {point}
            </li>
          ))}
        </ul>

        {detail.closing && (
          <p className="mt-8 leading-7 text-slate-600">{detail.closing}</p>
        )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`text-xs font-black uppercase tracking-[0.22em] ${
        dark ? "text-cyan-300" : "text-cyan-600"
      }`}
    >
      {children}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-6 py-10 text-center">
      <div className="text-4xl font-black tracking-tight text-[#06131f]">
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500">{label}</div>
    </div>
  );
}

function DashboardCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.04] p-4">
      <div className="text-cyan-300">{icon}</div>
      <div className="mt-5 text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-bold text-white">{value}</div>
    </div>
  );
}

function TechBox({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
      <div className="text-cyan-300">{icon}</div>
      <div className="mt-10 text-2xl font-black">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, animate, motion, useInView } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  Gauge,
  Leaf,
  Loader2,
  MonitorDot,
  ParkingCircle,
  Plus,
  RadioTower,
  Route,
  ShieldCheck,
  Ticket,
  TrafficCone,
  TrendingUp,
  Car,
  X,
} from "lucide-react";
import ItalyMap from "./components/ItalyMap";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

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
    icon: BarChart3,
    title: "Statistiche & Reporting",
    detail: {
      heading: "Statistiche & Reporting",
      paragraphs: [
        "K-City sviluppa strumenti di statistica e reporting per trasformare i dati raccolti dai sistemi di mobilità in informazioni chiare e facilmente consultabili.",
      ],
      listTitle: "Le principali funzionalità comprendono",
      points: [
        "Dashboard personalizzate",
        "Report periodici e riepilogativi",
        "Analisi delle performance dei servizi",
        "Confronto dei dati nel tempo",
        "Visualizzazione di indicatori e trend",
        "Supporto alle attività di monitoraggio",
      ],
      closing:
        "L’obiettivo è offrire alle Amministrazioni una lettura immediata e strutturata dei dati utili alla gestione del territorio.",
    },
  },
  {
    icon: Database,
    title: "Analisi Dati",
    detail: {
      heading: "Analisi Dati",
      paragraphs: [
        "K-City integra strumenti di Data Analysis per organizzare, elaborare e interpretare i dati provenienti dai diversi sistemi urbani.",
      ],
      listTitle: "Le principali attività comprendono",
      points: [
        "Raccolta e integrazione dei dati",
        "Elaborazione delle informazioni",
        "Analisi dei comportamenti e dei fenomeni urbani",
        "Individuazione di trend e criticità",
        "Correlazione tra diverse fonti informative",
        "Supporto alle decisioni operative e strategiche",
      ],
      closing:
        "I dati diventano così uno strumento concreto per migliorare l’efficienza dei servizi e la pianificazione urbana.",
    },
  },
  {
    icon: TrendingUp,
    title: "Analisi Predittive",
    detail: {
      heading: "Analisi Predittive",
      paragraphs: [
        "K-City utilizza modelli di analisi predittiva per anticipare l’evoluzione di fenomeni legati alla mobilità e alla gestione urbana.",
      ],
      listTitle: "Le soluzioni consentono di",
      points: [
        "Individuare tendenze ricorrenti",
        "Prevedere variazioni dei flussi di traffico",
        "Stimare la domanda di sosta",
        "Identificare possibili criticità",
        "Supportare la pianificazione degli interventi",
        "Migliorare l’allocazione delle risorse",
      ],
      closing:
        "L’obiettivo è passare da una gestione reattiva a una gestione più preventiva e consapevole del territorio.",
    },
  },
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
    icon: Bot,
    title: "Chatbot AI",
    detail: {
      heading: "Chatbot AI",
      paragraphs: [
        "K-City sviluppa Chatbot basati su Intelligenza Artificiale per migliorare l’accesso alle informazioni e semplificare il rapporto tra cittadini, operatori e Amministrazioni.",
      ],
      listTitle: "I chatbot possono essere utilizzati per",
      points: [
        "Fornire informazioni sui servizi",
        "Rispondere alle domande più frequenti",
        "Guidare l’utente nelle procedure",
        "Supportare la consultazione di tariffe e regolamenti",
        "Fornire assistenza automatizzata",
        "Alleggerire il carico degli uffici e dei canali tradizionali",
      ],
      closing:
        "Una soluzione disponibile in modo continuativo per rendere i servizi digitali più accessibili, semplici e immediati.",
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
    title: "Gestione Contravvenzioni",
    detail: {
      paragraphs: [
        "K-City offre un servizio integrato per la gestione delle contravvenzioni, supportando Enti Pubblici e Polizie Locali in tutte le principali fasi del procedimento sanzionatorio.",
      ],
      listTitle: "Il servizio comprende",
      points: [
        "Inserimento e gestione dei dati",
        "Digitalizzazione e archiviazione degli atti",
        "Predisposizione e notifica dei verbali",
        "Notifiche tramite posta, PEC e piattaforma SEND",
        "Acquisizione degli esiti di notifica",
        "Aggiornamento e tracciabilità delle pratiche",
        "Supporto operativo agli uffici competenti",
      ],
      closing:
        "Grazie all’integrazione tra software, servizi digitali e personale specializzato, K-City consente di semplificare le procedure, ridurre i tempi di gestione e garantire maggiore controllo sull’intero ciclo sanzionatorio.",
    },
  },
];

const territoryRegions = [
  {
    region: "Campania",
    cities: [
      "Napoli",
      "Avellino",
      "Benevento",
      "Caserta",
      "Atrani",
      "Bacoli",
      "Cardito",
      "Castellammare di Stabia",
      "Ercolano",
      "Giugliano in Campania",
      "Maiori",
      "Minori",
      "Portici",
      "Quarto",
      "San Giorgio a Cremano",
      "San Giuseppe Vesuviano",
      "San Marzano sul Sarno",
      "Sant'Anastasia",
      "Volla",
      "Vesuvio",
    ],
  },
  {
    region: "Lazio",
    cities: [
      "Latina",
      "Anguillara Sabazia",
      "Bracciano",
      "Civita Castellana",
      "Formello",
      "Frascati",
    ],
  },
  {
    region: "Puglia",
    cities: ["Manduria", "Maruggio", "Oria", "Torricella"],
  },
  {
    region: "Lombardia",
    cities: ["Mantova", "Angera", "Saronno", "Pero"],
  },
  {
    region: "Sicilia",
    cities: ["Messina", "Oliveri"],
  },
  {
    region: "Sardegna",
    cities: ["Golfo degli Aranci", "Isola Rossa"],
  },
  {
    region: "Basilicata",
    cities: ["Matera"],
  },
  {
    region: "Toscana",
    cities: ["Monte Argentario"],
  },
];

const cities = territoryRegions.flatMap((r) => r.cities);

const territoryHighlights = [
  {
    icon: ParkingCircle,
    title: "Smart Parking",
    description: "Soluzioni digitali per la sosta.",
  },
  {
    icon: Car,
    title: "ZTL & Accessi",
    description: "Controllo e gestione degli accessi.",
  },
  {
    icon: BarChart3,
    title: "Mobilità urbana",
    description: "Dati e tecnologie per città più smart.",
  },
];

const certifications = [
  { name: "ISO 9001", logo: "/certifications/iso-9001.png" },
  { name: "ISO 14001", logo: "/certifications/iso-14001.png" },
  { name: "ISO 27001:2022", logo: "/certifications/iso-27001.png" },
  {
    name: "ACN Cloud Marketplace",
    logo: "/certifications/acn.png",
    href: "https://www.acn.gov.it/portale/w/sa-6284",
  },
  { name: "AGCM Rating Legalità", logo: "/certifications/agcm.png" },
];

type FormStatus = "idle" | "sending" | "sent" | "error";

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const submitting = useRef(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Invio non riuscito. Riprova tra poco.");
      }
      setValues({ name: "", email: "", message: "", website: "" });
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invio non riuscito. Riprova tra poco.");
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-400/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Sito web</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={handleChange} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-slate-500"
          >
            Nome e cognome *
          </label>
          <input
            id="name"
            maxLength={120}
            autoComplete="name"
            disabled={status === "sending"}
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Mario Rossi"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-slate-500"
          >
            Email *
          </label>
          <input
            id="email"
            maxLength={254}
            autoComplete="email"
            disabled={status === "sending"}
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="mario.rossi@comune.it"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-bold uppercase tracking-[0.08em] text-slate-500"
        >
          Messaggio *
        </label>
        <textarea
          id="message"
          maxLength={5000}
          disabled={status === "sending"}
          name="message"
          required
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Raccontaci il tuo progetto o la tua richiesta..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-semibold text-red-600">
          {error} Puoi anche scriverci a <a href="mailto:supporto@k-city.it" className="underline">supporto@k-city.it</a>.
        </p>
      )}

      {status === "sent" && (
        <p role="status" className="text-sm font-semibold text-emerald-600">
          La tua richiesta è stata inviata. Ti risponderemo al più presto.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06131f] px-7 py-4 text-sm font-bold text-white transition hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Invio in corso...
          </>
        ) : (
          <>
            Invia richiesta
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<Solution | null>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  const scrollTicker = (direction: 1 | -1) => {
    tickerRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

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
              <div className="relative min-h-[600px] overflow-hidden rounded-[22px] bg-[#0b1d2b]">
                <Image
                  src="/dashboard/heatmap-source.png"
                  alt="Mappa reale K-City con disponibilità posti e zone ad alta intensità"
                  fill
                  className="object-cover"
                  style={{
                    filter:
                      "grayscale(0.1) brightness(0.5) contrast(1.3) saturate(1.6)",
                  }}
                />
                <div className="absolute inset-0 bg-[#052235]/40 mix-blend-multiply" />

                <div className="pointer-events-none absolute inset-x-0 top-0 h-[230px] bg-gradient-to-b from-[#0b1d2b] via-[#0b1d2b]/75 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[160px] bg-gradient-to-t from-[#0b1d2b] via-[#0b1d2b]/40 to-transparent" />

                <div className="relative p-5 sm:p-7">
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

                  <div className="mt-6 grid grid-cols-2 gap-3">
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
                </div>

                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  {/* <div className="rounded-2xl border border-white/10 bg-[#0b1d2b]/85 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 text-cyan-300">
                          <ParkingCircle size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white">
                            San Giuseppe Vesuviano
                          </p>
                          <p className="text-xs text-slate-400">
                            Zona Via Piave
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-emerald-300">82%</p>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                    </div>
                  </div> */}

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Disponibile
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      Alta intensità
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      </section>

      {/* STATS */}
      {/* <section className="border-b border-slate-200 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8"
        >
          <Stat value="137" label="Paesi abilitati" />
          <Stat value="99,8%" label="Affidabilità dichiarata" />
          <Stat value="10 anni" label="Lifetime sensori" />
        </motion.div>
      </section> */}

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
             K-City sviluppa soluzioni hardware e software per la mobilità urbana e le Smart Cities, unendo una consolidata esperienza nella gestione della sosta alle più moderne tecnologie IoT, Data Analytics e Intelligenza Artificiale.
            </p>

            <p className="mt-5 leading-7 text-slate-500">
             Trasformiamo i dati del territorio in strumenti concreti per migliorare mobilità, sicurezza, sostenibilità e qualità della vita.
            </p>

            <a
              href="/azienda"
              className="mt-7 inline-flex items-center gap-2 font-bold text-slate-950"
            >
              Scopri K-City
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-14 grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"
        >
          <TechCard icon={<Cpu size={22} />} value="IoT" label="Connected devices" />
          <TechCard icon={<Camera size={22} />} value="AI" label="Computer vision" />
          <TechCard
            icon={<RadioTower size={22} />}
            value="LoRaWAN"
            label="Wireless network"
          />
          <TechCard
            icon={<BarChart3 size={22} />}
            value="DATA"
            label="Urban analytics"
          />
        </motion.div>
      </section>

      {/* SOLUZIONI */}
      <section
        id="soluzioni"
        className="scroll-mt-20 bg-[#f4f7f9] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <SectionLabel>Soluzioni</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Una piattaforma.
              <span className="block text-slate-400">Una città connessa.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Soluzioni modulari che trasformano i dati urbani in strumenti
              concreti per amministrazioni, operatori e cittadini.
            </p>
          </motion.div>

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

      {/* PROJECTS */}
      <section id="progetti" className="scroll-mt-20 bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionLabel>Territorio</SectionLabel>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
                La smart city
                <span className="block text-cyan-600">diventa realtà.</span>
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-slate-600">
                K-City porta tecnologie e soluzioni per la mobilità intelligente
                in numerosi territori italiani.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
                <div>
                  <div className="text-5xl font-black tracking-tight text-cyan-600">
                    {cities.length}+
                  </div>
                  <p className="mt-1 text-xs font-black uppercase leading-5 tracking-wide text-slate-500">
                    Città e territori serviti
                  </p>
                </div>

                <div className="hidden h-12 w-px bg-slate-300 sm:block" />

                <p className="max-w-[220px] text-sm leading-6 text-slate-600">
                  Insieme alle amministrazioni locali per città più vivibili,
                  connesse e sostenibili.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {territoryHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                        <Icon size={18} />
                      </div>

                      <p className="mt-3 text-sm font-bold text-[#06131f]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative flex h-[640px] items-center justify-center overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8"
            >
              <div className="relative mx-auto h-full w-auto aspect-[610/792.6]">
                <ItalyMap className="h-full w-full" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-14 flex items-center gap-4 rounded-full border border-slate-200 bg-white px-4 py-3"
          >
            <button
              onClick={() => scrollTicker(-1)}
              aria-label="Precedente"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-cyan-300 hover:text-cyan-600"
            >
              <ChevronLeft size={18} />
            </button>

            <div
              ref={tickerRef}
              className="no-scrollbar flex flex-1 gap-3 overflow-x-auto scroll-smooth"
            >
              {cities.map((city, index) => (
                <span
                  key={city}
                  className="flex shrink-0 items-center gap-3 text-sm font-semibold text-slate-700"
                >
                  {city}
                  {index < cities.length - 1 && (
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  )}
                </span>
              ))}
            </div>

            <button
              onClick={() => scrollTicker(1)}
              aria-label="Successivo"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-cyan-300 hover:text-cyan-600"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-4">
            <ShieldCheck size={34} className="text-cyan-600" />
            <div>
              <p className="font-bold">Sistemi di gestione certificati</p>
              <p className="text-sm text-slate-500">
                Qualità, ambiente e sicurezza delle informazioni
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {certifications.map((certification) => {
              const image = (
                <Image
                  src={certification.logo}
                  alt={certification.name}
                  fill
                  className="object-contain"
                />
              );

              return certification.href ? (
                <Link
                  key={certification.name}
                  href={certification.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-20 w-20 transition-opacity hover:opacity-80"
                >
                  {image}
                </Link>
              ) : (
                <div key={certification.name} className="relative h-20 w-20">
                  {image}
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-cyan-400 px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
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
              href="#contatti"
              className="inline-flex h-fit items-center justify-center gap-2 rounded-full bg-[#06131f] px-7 py-4 font-bold text-white transition hover:scale-[1.02]"
            >
              Parlaci del tuo progetto
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="scroll-mt-20 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">
                Contatti
              </p>

              {/* <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                Parliamo del tuo progetto.
              </h2> */}

              <p className="mt-5 leading-7 text-slate-600">
                Raccontaci le esigenze della tua Amministrazione o della tua
                azienda: ti risponderemo il prima possibile per capire come
                K-City può aiutarti.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />

      <ScrollToTopButton />

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

function parseStatValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/);

  if (!match) {
    return { prefix: "", target: 0, decimals: 0, suffix: value };
  }

  const [, prefix, numStr, suffix] = match;
  const decimalMatch = numStr.match(/[.,](\d+)$/);
  const decimals = decimalMatch ? decimalMatch[1].length : 0;
  const target = parseFloat(numStr.replace(",", "."));

  return { prefix, target, decimals, suffix };
}

function formatStatNumber(n: number, decimals: number) {
  if (decimals > 0) {
    return n.toFixed(decimals).replace(".", ",");
  }
  return Math.round(n).toString();
}

function Stat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { prefix, target, decimals, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(
    () => prefix + formatStatNumber(0, decimals) + suffix
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(prefix + formatStatNumber(latest, decimals) + suffix);
      },
    });

    return () => controls.stop();
  }, [isInView, target, decimals, prefix, suffix]);

  return (
    <div ref={ref} className="px-6 py-10 text-center">
      <div className="text-4xl font-black tracking-tight text-[#06131f]">
        {display}
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
    <div className="rounded-2xl border border-white/10 bg-[#0b1d2b]/70 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 text-cyan-300">
          {icon}
        </div>
        <ChevronRight size={15} className="text-slate-500" />
      </div>
      <div className="mt-4 text-xs text-slate-400">{label}</div>
      <div className="mt-1 flex items-center gap-1.5 text-sm font-bold text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {value}
      </div>
    </div>
  );
}

function TechCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#06131f] text-cyan-300">
        {icon}
      </div>
      <div className="mt-5 text-xl font-black text-[#06131f]">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

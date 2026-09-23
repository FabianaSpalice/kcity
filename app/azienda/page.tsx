"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  HardHat,
  Lightbulb,
  RadioTower,
  Route,
  Scale,
  Settings,
  ShieldCheck,
  Target,
  UserRound,
  Users,
  Leaf,
} from "lucide-react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const experienceStats = [
  { value: "10+ anni", label: "Esperienza nel settore della mobilità" },
  { value: "Smart Mobility", label: "Soluzioni integrate per la città" },
  { value: "IoT & AI", label: "Tecnologie connesse e intelligenti" },
  { value: "Data Driven", label: "Decisioni supportate dai dati" },
];

const teamMembers = [
  {
    name: "Peppe Morelli",
    role: "CEO",
    description: "Guida la strategia e lo sviluppo di K-City, coordinando innovazione, partnership e crescita aziendale.",
    photo: "/team/ceo.jpg",
    linkedin: "https://www.linkedin.com/in/peppe-morelli-1595a422a/",
  },
  {
    name: "Sebastiano Spina",
    role: "Ingegnere Informatico / It Manager",
    description:
      "Esperienza pluriennale nello sviluppo software e nel coordinamento di team IT.",
    photo: "/team/sebastiano-spina.jpg",
    linkedin: "https://www.linkedin.com/in/sebastiano-spina-3670a6154/",
    objectPosition: "center",
  },
  {
    name: "Alessandro Polverino",
    role: "Ingegnere Informatico / Account Manager",
    description:
      "Progettazione e sviluppo di sistemi software, gestione dei rapporti con clienti, partner e Pubblica Amministrazione.",
    photo: "/team/alessandro-polverino.jpg",
    linkedin: "https://www.linkedin.com/in/alessandropolverino/",
  },
  {
    name: "Luca Piccirillo",
    role: "Full Stack Web Developer",
    description:
      "Esperienza nello sviluppo di software e web application, con competenze in linguaggi web, database e framework.",
    photo: "/team/luca-piccirillo.jpg",
    linkedin: "https://www.linkedin.com/in/luca-piccirillo-463930232/",
  },
  {
    name: "Fabiana Spalice",
    role: "Architetto / Web Designer",
    description:
      "Esperienza nel design architettonico e digitale, con competenze in web design, app design e sviluppo.",
    photo: "/team/fabiana-spalice.png",
    linkedin: "https://www.linkedin.com/in/fabiana-spalice-aa665a112/",
  },
  {
    name: "Matteo Pio Gemmi",
    role: "Full Stack Developer",
    description:
      "Full-Stack Developer con competenze in Smart Mobility, IoT, Machine Learning e sistemi real-time.",
    photo: "/team/matteo-pio-gemmi.jpg",
    linkedin: "https://www.linkedin.com/in/matteo-pio-gemmi-developer/",
  },
  {
    name: "Antonio Onorato",
    role: "Software Developer",
    description:
      "Laureato in Informatica, con competenze nello sviluppo software e nella gestione di sistemi informatici.",
    photo: "/team/antonio-onorato.jpg",
    linkedin: "https://www.linkedin.com/in/antonio-onorato-48704824b/",
  },
  {
    name: "Gaetano Raia",
    role: "Responsabile Area Tecnica",
    description:
      "Responsabile installazioni e manutenzione di sistemi elettrici e IoT, con competenze nel coordinamento.",
    photo: "/team/gaetano-raia.png",
    linkedin: "https://www.linkedin.com/in/gaetano-raia-446128387/",
    objectPosition: "center",
  },
  {
    name: "Gianluca Ariante",
    role: "Logistica & Installazioni",
    description:
      "Esperienza pluriennale nella logistica e messa in opera di sensori wireless sul territorio italiano.",
    photo: "/team/gianluca-ariante.png",
    objectPosition: "center",
  },
  {
    name: "Massimo Schiavoni",
    role: "Responsabile Commerciale",
    description: "Esperienza pluriennale nella logistica e messa in opera di sensori wireless.",
    photo: "/team/massimo-schiavoni.png",
  },
  {
    name: "Enza Miceli",
    role: "Responsabile Amministrativo",
    description:
      "Gestione amministrativa e contabile, con competenze in cash flow, forecast e budgeting aziendale.",
    photo: "/team/enza-miceli.png",
    objectPosition: "center 20%",
  },
  {
    name: "Biase Celano",
    role: "Ingegnere Meccatronico",
    description:
      "Specializzato in C++, progettazione hardware e meccanica, sicurezza informatica e sviluppo software.",
    photo: "/team/biase-celano.jpg",
    objectPosition: "center",
    linkedin: "https://www.linkedin.com/in/biase-celano/",
  },
];

const teamGroups = [
  {
    icon: Users,
    title: "Team tecnico",
    description: "Ingegneri, sviluppatori e specialisti IoT",
  },
  {
    icon: Settings,
    title: "Team operativo",
    description: "Gestione servizi e attività sul territorio",
  },
  {
    icon: BarChart3,
    title: "Data & AI",
    description: "Analisti, data scientist e ricercatori",
  },
  {
    icon: HardHat,
    title: "Personale sul territorio",
    description: "Ausiliari, operatori e tecnici",
  },
];

const peopleStats = [
  {
    icon: Users,
    value: "20+",
    label: "anni di esperienza nel settore",
  },
  {
    icon: Lightbulb,
    value: "50+",
    label: "professionisti e collaboratori",
  },
  {
    icon: Building2,
    value: "Progetti",
    label: "in tutta Italia",
  },
  {
    icon: Target,
    value: "Un unico obiettivo",
    label: "città più intelligenti",
  },
];

const ecosystemCards = [
  {
    icon: Route,
    title: "Smart Mobility",
    description:
      "Soluzioni per la gestione della sosta, della viabilità, degli accessi e dei flussi veicolari.",
  },
  {
    icon: RadioTower,
    title: "Connected City & IoT",
    description:
      "Sensori e infrastrutture connesse per raccogliere informazioni dal territorio in tempo reale.",
  },
  {
    icon: BarChart3,
    title: "Data & Artificial Intelligence",
    description:
      "Analisi dati, statistiche, modelli predittivi, Computer Vision e Intelligenza Artificiale a supporto delle decisioni.",
  },
  {
    icon: Settings,
    title: "Servizi per la mobilità",
    description:
      "Tecnologia e attività operative integrate per supportare Enti e Amministrazioni nella gestione quotidiana del territorio.",
  },
];

const technologies = [
  "IoT",
  "LoRaWAN",
  "Artificial Intelligence",
  "Computer Vision",
  "Data Analytics",
  "Predictive Analytics",
  "Cloud Platform",
  "Web App",
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovazione",
    description:
      "Sviluppiamo tecnologie capaci di generare un impatto concreto sui servizi e sulla qualità della vita urbana.",
  },
  {
    icon: ShieldCheck,
    title: "Affidabilità",
    description:
      "Progettiamo soluzioni orientate alla continuità del servizio, alla sicurezza e alla qualità.",
  },
  {
    icon: Leaf,
    title: "Sostenibilità",
    description:
      "Utilizziamo tecnologia e dati per contribuire a una mobilità più razionale e a città più vivibili.",
  },
  {
    icon: Scale,
    title: "Responsabilità",
    description:
      "Operiamo secondo principi di correttezza, trasparenza e attenzione nei confronti di clienti, cittadini e territorio.",
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

export default function AziendaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      {/* HERO */}
      <section className="hero-grid relative overflow-hidden bg-[#06131f] pt-[calc(76px+4rem)] pb-20 text-white lg:pb-28">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl px-6 text-center lg:px-8"
        >
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Your City. Your Future.
          </div>

          <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl">
            Tecnologia, esperienza e innovazione per la città.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            K-City sviluppa soluzioni integrate per la mobilità urbana e le
            Smart Cities, combinando esperienza operativa, tecnologia, dati e
            Intelligenza Artificiale.
          </p>
        </motion.div>
      </section>

      {/* CHI SIAMO */}
      <section className="py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl px-6 lg:px-8"
        >
          <SectionLabel>Chi siamo</SectionLabel>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
            Tecnologia che comprende
            <span className="block text-cyan-600">come si muove una città.</span>
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              K-City è una realtà specializzata nello sviluppo di soluzioni
              tecnologiche per la mobilità urbana e le Smart Cities, nata
              dall&rsquo;esperienza consolidata di professionisti attivi da
              oltre vent&rsquo;anni nel settore della sosta e della gestione
              della mobilità.
            </p>
            <p>
              L&rsquo;azienda integra competenze operative e tecnologiche,
              sviluppando hardware, software e sistemi IoT per il
              monitoraggio della viabilità, dei parcheggi, dei flussi
              veicolari e delle infrastrutture urbane.
            </p>
            <p>
              Sensori, reti connesse, sistemi di visione artificiale,
              Intelligenza Artificiale, piattaforme web e dispositivi
              dedicati diventano parte di un unico ecosistema capace di
              trasformare i dati raccolti sul territorio in strumenti
              concreti di gestione.
            </p>
            <p>
              La nostra idea di Smart City parte da un principio semplice:
              la tecnologia deve migliorare concretamente la vita delle
              persone e il modo in cui le città vengono amministrate.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ESPERIENZA */}
      <section className="bg-[#f4f7f9] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <SectionLabel>Esperienza</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              L&rsquo;esperienza incontra
              <span className="block text-cyan-600">l&rsquo;innovazione.</span>
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                K-City nasce dall&rsquo;unione tra una consolidata
                esperienza nella gestione della mobilità e una forte
                vocazione tecnologica.
              </p>
              <p>
                La conoscenza diretta delle problematiche operative del
                territorio ci permette di progettare soluzioni che non
                nascono soltanto in laboratorio, ma rispondono alle reali
                esigenze di Amministrazioni, operatori e cittadini.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-14 grid grid-cols-1 divide-y divide-slate-200 rounded-[28px] border border-slate-200 bg-white sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4"
          >
            {experienceStats.map((stat) => (
              <div key={stat.label} className="px-6 py-10 text-center">
                <div className="text-2xl font-black tracking-tight text-[#06131f]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-10 lg:grid-cols-2 lg:gap-14"
          >
            <div>
              <SectionLabel>Il nostro team</SectionLabel>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
                Competenze diverse,
                <span className="block text-cyan-600">
                  una visione comune.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Un team di professionisti con esperienza, passione e
                competenze complementari per costruire città più
                intelligenti.
              </p>
            </div>

            <div className="space-y-5 leading-7 text-slate-600 lg:pt-2">
              <p>
                K-City nasce dall&rsquo;incontro tra esperienza nel settore
                della mobilità, competenze tecnologiche e capacità operative.
              </p>
              <p>
                Lavoriamo con un approccio multidisciplinare, integrando
                competenze tecniche, organizzative e operative per
                trasformare le esigenze del territorio in soluzioni
                concrete.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300"
              >
                <div className="relative flex h-52 items-center justify-center bg-slate-100 text-slate-300">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover grayscale"
                      style={{
                        objectPosition: member.objectPosition ?? "top",
                      }}
                    />
                  ) : (
                    <UserRound size={44} />
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold leading-snug">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-cyan-600">
                    {member.role}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm leading-5 text-slate-600">
                    {member.description}
                  </p>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Profilo LinkedIn di ${member.name}`}
                      className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-cyan-50 hover:text-cyan-600"
                    >
                      <LinkedinIcon size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-700">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold">+ {group.title}</p>
                    <p className="text-sm text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-16 bg-[#06131f] py-14 text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-16 lg:px-8"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-white/30" />
                <SectionLabel dark>Il valore delle persone</SectionLabel>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.03em]">
                Tecnologia, territorio e persone.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                È dall&rsquo;integrazione di queste competenze che nascono le
                soluzioni K-City.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 lg:grid-cols-4 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              {peopleStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div key={stat.label} className="text-center">
                    <Icon size={26} className="mx-auto text-cyan-300" />
                    <p className="mt-3 text-xl font-black">{stat.value}</p>
                    <p className="mt-1 text-sm leading-5 text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionLabel>Mission</SectionLabel>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
              Rendere la mobilità più semplice, efficiente e intelligente.
            </h2>

            <div className="mt-6 space-y-5 leading-7 text-slate-600">
              <p>
                La nostra missione è sviluppare strumenti capaci di
                migliorare la gestione della città attraverso
                l&rsquo;integrazione di tecnologia, servizi e dati.
              </p>
              <p>
                Supportiamo le Amministrazioni nella digitalizzazione dei
                processi e nella costruzione di modelli di mobilità più
                efficienti, sostenibili e accessibili.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <SectionLabel>Vision</SectionLabel>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
              Una città capace di osservare, comprendere e anticipare.
            </h2>

            <div className="mt-6 space-y-5 leading-7 text-slate-600">
              <p>
                Immaginiamo città in cui infrastrutture, persone e servizi
                siano realmente connessi.
              </p>
              <p>
                Una città intelligente non si limita a raccogliere
                informazioni: le interpreta, individua le criticità e
                utilizza i dati per migliorare continuamente i propri
                servizi.
              </p>
              <p>
                Il nostro obiettivo è contribuire alla costruzione di città
                più vivibili, sicure e sostenibili.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COSA FACCIAMO */}
      <section className="bg-[#f4f7f9] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <SectionLabel>Cosa facciamo</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Un unico ecosistema.
              <span className="block text-slate-400">Più possibilità.</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ecosystemCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06131f] text-cyan-300">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{card.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <Link
            href="/#soluzioni"
            className="group mt-10 inline-flex items-center gap-2 font-bold text-slate-950 transition hover:text-cyan-600"
          >
            Scopri tutte le soluzioni
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* TECNOLOGIA */}
      <section className="overflow-hidden bg-[#06131f] py-24 text-white lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl px-6 text-center lg:px-8"
        >
          <SectionLabel dark>Tecnologia</SectionLabel>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
            Dalla strada al dato.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            K-City integra tecnologie differenti all&rsquo;interno di un
            unico ecosistema digitale. Dai dispositivi installati sul
            territorio alle piattaforme cloud, ogni componente contribuisce
            alla raccolta, elaborazione e interpretazione delle informazioni
            necessarie per una gestione più evoluta della città.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-14 text-2xl font-bold tracking-[-0.01em] text-white">
            Connettere il territorio significa comprenderlo meglio.
          </p>
        </motion.div>
      </section>

      {/* VALORI */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <SectionLabel>I nostri valori</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Innovazione con uno scopo.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-5 rounded-2xl border border-slate-200 p-7 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-700">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">{value.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITÀ E CERTIFICAZIONI */}
      <section className="border-t border-slate-200 bg-[#f4f7f9] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
          >
            <div className="max-w-2xl">
              <SectionLabel>Qualità e certificazioni</SectionLabel>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                La qualità è parte del processo.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                K-City adotta sistemi e procedure orientati al miglioramento
                continuo, alla tutela dell&rsquo;ambiente e alla sicurezza
                delle informazioni.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
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
        </div>
      </section>

      <SiteFooter />

      <ScrollToTopButton />
    </main>
  );
}

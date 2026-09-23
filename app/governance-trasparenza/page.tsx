"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Gavel,
  Megaphone,
  Network,
  ShieldAlert,
  X,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { CodiceDisciplinareContent } from "./codice-disciplinare-content";
import { CodiceEticoContent } from "./codice-etico-content";
import { OrganigrammaContent } from "./organigramma-content";
import { ProtocolloAnticorruzioneContent } from "./protocollo-anticorruzione-content";
import { WhistleblowingContent } from "./whistleblowing-content";

type GovernanceDoc = {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
  content: React.ReactNode;
  wide?: boolean;
};

const documents: GovernanceDoc[] = [
  {
    icon: BookOpen,
    title: "Codice Etico",
    description:
      "I principi e i valori che orientano la condotta di K-City verso dipendenti, partner e Amministrazioni.",
    content: <CodiceEticoContent />,
  },
  {
    icon: ShieldAlert,
    title: "Protocollo Anticorruzione",
    description:
      "Le misure adottate da K-City per la prevenzione e il contrasto dei fenomeni corruttivi.",
    content: <ProtocolloAnticorruzioneContent />,
  },
  {
    icon: Gavel,
    title: "Codice Disciplinare",
    description:
      "Il sistema disciplinare che regola le conseguenze delle violazioni delle regole aziendali.",
    content: <CodiceDisciplinareContent />,
  },
  {
    icon: Network,
    title: "Organigramma",
    description:
      "La struttura organizzativa di K-City, con ruoli, funzioni e linee di responsabilità.",
    content: <OrganigrammaContent />,
    wide: true,
  },
  {
    icon: Megaphone,
    title: "Whistleblowing",
    description:
      "La procedura interna per la segnalazione di illeciti e violazioni, con le relative tutele per il segnalante.",
    content: <WhistleblowingContent />,
  },
];

export default function GovernanceTrasparenzaPage() {
  const [selected, setSelected] = useState<GovernanceDoc | null>(null);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <article className="mx-auto max-w-5xl px-6 pt-[calc(76px+4rem)] pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Azienda
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[-0.03em]">
            Governance e Trasparenza
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
            I documenti che definiscono i principi, le regole e l&rsquo;assetto
            organizzativo di K-City S.r.l.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {documents.map((doc, index) => {
            const Icon = doc.icon;

            return (
              <motion.button
                key={doc.title}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onClick={() => setSelected(doc)}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 p-6 text-left transition hover:border-cyan-300 hover:shadow-lg"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06131f] text-cyan-300">
                    <Icon size={22} />
                  </div>

                  <h2 className="mt-5 text-lg font-bold">{doc.title}</h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {doc.description}
                  </p>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
                  Leggi il documento
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </article>

      <SiteFooter />

      <AnimatePresence>
        {selected && (
          <DocumentModal document={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

function DocumentModal({
  document: doc,
  onClose,
}: {
  document: GovernanceDoc;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#06131f]/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="document-modal-title"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[90vh] w-[90vw] max-w-5xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Chiudi"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:right-6 sm:top-6"
        >
          <X size={22} />
        </button>

        <div id="document-modal-title" className="sr-only">
          {doc.title}
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-12 sm:px-12 sm:py-14">
          <div className={doc.wide ? "mx-auto" : "mx-auto max-w-3xl"}>
            {doc.content}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

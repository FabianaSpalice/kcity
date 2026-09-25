"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { CookiePolicyContent } from "../cookie-policy/cookie-policy-content";
import { PrivacyPolicyContent } from "../privacy-policy/privacy-policy-content";

type LegalDoc = "privacy" | "cookie" | null;

export default function SiteFooter() {
  const [open, setOpen] = useState<LegalDoc>(null);

  return (
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

          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold">Sede legale</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Piazza Vanvitelli 26, 81100
                <br />
                Caserta (CE)
                <br />
                Italia
              </p>
            </div>

            <div>
              <p className="text-sm font-bold">K-City Factory</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Via Giacomo Leopardi, FC11
                <br />
                Struttura K-City, 80040
                <br />
                San Sebastiano al Vesuvio (NA)
                <br />
                Italia
              </p>
            </div>
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
          <span>
            © 2026 K-City S.r.l. — Tutti i diritti riservati. P.IVA 08445211215
          </span>

          <div className="flex gap-5">
            <button
              type="button"
              onClick={() => setOpen("privacy")}
              className="transition hover:text-slate-300"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setOpen("cookie")}
              className="transition hover:text-slate-300"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <LegalModal onClose={() => setOpen(null)}>
            {open === "privacy" ? <PrivacyPolicyContent /> : <CookiePolicyContent />}
          </LegalModal>
        )}
      </AnimatePresence>
    </footer>
  );
}

export function LegalModal({
  children,
  onClose,
}: {
  children: React.ReactNode;
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

  // Portal to body: an animated (transformed) ancestor would otherwise become the
  // containing block of this fixed overlay, e.g. when opened from the contact form.
  return createPortal(
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
        initial={{ opacity: 0, transform: "translateY(30px) scale(0.97)" }}
        animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
        exit={{ opacity: 0, transform: "translateY(20px) scale(0.98)" }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[80vh] w-[85vw] max-w-2xl flex-col overflow-hidden rounded-[28px] bg-white text-slate-950 shadow-2xl"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Chiudi"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:right-6 sm:top-6"
        >
          <X size={22} />
        </button>

        <div className="flex-1 overflow-y-auto px-6 py-10 sm:px-10 sm:py-12">
          {children}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

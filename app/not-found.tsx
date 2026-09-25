import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  robots: { index: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-950">
      <SiteHeader />
      <section className="mx-auto flex max-w-3xl flex-1 flex-col items-start justify-center px-6 pt-[calc(76px+4rem)] pb-24">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-600">
          Errore 404
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.035em] sm:text-5xl">
          Pagina non trovata.
        </h1>
        <p className="mt-5 leading-7 text-slate-600">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#06131f] px-7 py-4 text-sm font-bold text-white transition hover:scale-[1.01]"
        >
          Torna alla home
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-[76px] border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" aria-label="K-City — home">
          <Image
            src="/brand/k-city-logo.svg"
            alt="K-City"
            width={150}
            height={44}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <Link className="nav-link" href="/azienda">
            Azienda
          </Link>
          <Link className="nav-link" href="/governance-trasparenza">
            Governance e Trasparenza
          </Link>

          <Link
            href="/#contatti"
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-[#06131f] transition hover:bg-cyan-300"
          >
            Contattaci
          </Link>
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
              ["Home", "/"],
              ["Azienda", "/azienda"],
              ["Governance e Trasparenza", "/governance-trasparenza"],
              ["Contattaci", "/#contatti"],
            ].map(([label, link]) => (
              <Link
                key={label}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-slate-900"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

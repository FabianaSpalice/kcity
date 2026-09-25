import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Azienda",
  description:
    "Chi è K-City: team, mission, vision, tecnologie e certificazioni per la mobilità urbana e le Smart Cities.",
  alternates: { canonical: "/azienda/" },
};

export default function AziendaLayout({ children }: { children: React.ReactNode }) {
  return children;
}

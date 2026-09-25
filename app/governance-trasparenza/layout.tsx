import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Governance e Trasparenza",
  description:
    "Codice Etico, Protocollo Anticorruzione, Codice Disciplinare, Organigramma e procedura Whistleblowing di K-City S.r.l.",
  alternates: { canonical: "/governance-trasparenza/" },
};

export default function GovernanceLayout({ children }: { children: React.ReactNode }) {
  return children;
}

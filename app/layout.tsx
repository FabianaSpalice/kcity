import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K-City | Smart Mobility & Smart Cities",
  description:
    "K-City sviluppa sistemi IoT, Intelligenza Artificiale e soluzioni digitali per la mobilità urbana e le Smart Cities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
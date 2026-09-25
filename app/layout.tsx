import type { Metadata } from "next";
import { preload } from "react-dom";
import "./globals.css";
import { SITE_URL } from "./site";

const description =
  "K-City sviluppa sistemi IoT, Intelligenza Artificiale e soluzioni digitali per la mobilità urbana e le Smart Cities.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "K-City | Smart Mobility & Smart Cities",
    template: "%s | K-City",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "K-City",
    title: "K-City | Smart Mobility & Smart Cities",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Titles use this font above the fold: fetch it with the HTML, not after the CSS.
  preload("/fonts/kcity-display.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
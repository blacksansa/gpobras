import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "GM Obras | Construtora",
  description:
    "GM Obras: construtora no Paraná com foco em estruturas metálicas, pré-moldados, barracões e obras ágeis para empresas, comércios e indústrias.",
  keywords: [
    "GM Obras",
    "construtora no Paraná",
    "estruturas metálicas",
    "pré-moldados",
    "barracão metálico",
    "galpão pré-moldado",
    "laje pré-moldada",
    "obra industrial",
  ],
  openGraph: {
    title: "GM Obras | Obras rápidas com estrutura, prazo e confiança",
    description:
      "Construtora no Paraná com foco em estruturas metálicas, pré-moldados, barracões e lajes para empresas, comércios e indústrias.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "GM Obras | Obras rápidas com estrutura, prazo e confiança",
    description:
      "Construtora no Paraná com foco em estruturas metálicas, pré-moldados, barracões e lajes para empresas, comércios e indústrias.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}

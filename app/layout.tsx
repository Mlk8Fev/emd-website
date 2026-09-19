import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Nunito, Lora } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.ong-emd.com"),
  title: {
    default: "Ensemble pour un Monde Durable | ONG - San Pedro, Côte d'Ivoire",
    template: "%s | Ensemble pour un Monde Durable",
  },
  description:
    "ONG ivoirienne dédiée au développement local durable, à l'autonomisation des communautés et à la réalisation des Objectifs de Développement Durable (ODD) à San Pedro.",
  keywords: [
    "ONG Côte d'Ivoire",
    "développement durable",
    "ODD",
    "San Pedro",
    "solidarité",
    "Afrique de l'Ouest",
  ],
  openGraph: {
    title: "Ensemble pour un Monde Durable",
    description:
      "ONG ivoirienne dédiée au développement local durable à San Pedro, Côte d'Ivoire, œuvrant pour les 17 Objectifs de Développement Durable.",
    url: "/",
    siteName: "Ensemble pour un Monde Durable",
    locale: "fr_CI",
    type: "website",
    images: [
      {
        url: "/images/og-emd.jpg",
        width: 1200,
        height: 630,
        alt: "ONG Ensemble pour un Monde Durable — Agir ensemble aujourd'hui pour un avenir durable demain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ensemble pour un Monde Durable",
    description:
      "ONG ivoirienne dédiée au développement local durable et aux Objectifs de Développement Durable, basée à San Pedro.",
    images: ["/images/og-emd.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${nunito.variable} ${lora.variable} font-body antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}

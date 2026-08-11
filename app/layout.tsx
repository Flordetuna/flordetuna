import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flordetuna.com.br"),

  title: {
    default: "Flor de Tuna | Arte em Madeira",
    template: "%s | Flor de Tuna",
  },

  description:
    "Peças artesanais exclusivas em madeira maciça e resina. Design, natureza e sofisticação para transformar ambientes.",

  keywords: [
    "madeira maciça",
    "mesa de madeira",
    "mesa com resina",
    "tábua de churrasco",
    "tábua artesanal",
    "arte em madeira",
    "decoração",
    "design",
    "móveis",
    "Nova Prata",
    "Flor de Tuna",
  ],

  authors: [
    {
      name: "BP Resultados",
    },
  ],

  creator: "BP Resultados",

  publisher: "Flor de Tuna",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://flordetuna.com.br",
    title: "Flor de Tuna",
    description:
      "Peças artesanais exclusivas em madeira maciça e resina.",

    siteName: "Flor de Tuna",

    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Flor de Tuna",
    description:
      "Peças artesanais exclusivas em madeira maciça e resina.",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
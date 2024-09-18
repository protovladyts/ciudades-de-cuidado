import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "./components/";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ciudades de Cuidado",
  description: "Ciudades de Cuidado",
  icons: {
    icon: ["/favicon.ico"]
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Ciudades de Cuidado",
    url: "https://ciudadesdecuidado.com",
    title: "Ciudades de Cuidado",
    description: "Ciudades de Cuidado",
    images: [
      {
        url: "https://ciudadesdecuidado.com/background.png",
        width: 1200,
        height: 630,
        alt: "Ciudades de cuidado",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

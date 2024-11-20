import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "./components/";
import Head from "next/head";
import { metadata as localizedMetadata, SITE_LOCALE } from "./config";
import { LanguageProvider } from "./LanguageContext";

export const metadata: Metadata = localizedMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = SITE_LOCALE;

  return (
    <html lang={language} className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <LanguageProvider>
          <Navbar/>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

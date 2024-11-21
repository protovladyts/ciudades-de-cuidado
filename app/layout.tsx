import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "./components/";
import Head from "next/head";
import { metadata as localizedMetadata, SITE_LOCALE } from "./config";
import { LanguageProvider } from "./LanguageContext";
import { fetchPage } from "./api/wordpress/services/fetchPage";

export const metadata: Metadata = localizedMetadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = SITE_LOCALE;
  const homeContent = await fetchPage("home");

  return (
    <html lang={language} className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <LanguageProvider>
          <Navbar content={homeContent}/>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "./components/";
import Head from "next/head";
import { metadata as localizedMetadata, SITE_LOCALE } from "./config";
import { LanguageProvider } from "./LanguageContext";
import { fetchLayout } from "./api/wordpress/services/fetchLayout";

export const metadata: Metadata = localizedMetadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = SITE_LOCALE;
  const layout = await fetchLayout();

  if (!layout.acf?.footer?.content?.de) {
    throw new Error("Missing German translation in layout footer");
  }

  if (!layout.acf?.footer?.content?.es) {
    throw new Error("Missing Spanish translation in layout footer");
  }

  if (!layout.acf?.footer?.content?.en) {
    throw new Error("Missing English translation in layout footer");
  }

  return (
    <html lang={language} className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <LanguageProvider>
          <Navbar content={layout} />
          {children}
          <Footer content={layout} />
        </LanguageProvider>
      </body>
    </html>
  );
}

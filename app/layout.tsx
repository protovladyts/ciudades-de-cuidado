import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/app/components";
import Head from "next/head";
import { metadata as localizedMetadata, SERVER_LOCALE } from "./config";
import { LanguageProvider } from "./LanguageContext";
import { fetchLayout } from "./api/wordpress/services/fetchLayout";

export const metadata: Metadata = localizedMetadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = SERVER_LOCALE;

  const layout = await fetchLayout();

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

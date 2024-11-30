import { Unbounded, Roboto_Condensed, DM_Sans } from "@next/font/google";
import type { Metadata } from "next";
import { Language } from "./types";

export const titleFont = Unbounded({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const focusFont = Roboto_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const basicFont = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const SITE_LOCALE = (() => {
  const envLocale = process.env.NEXT_PUBLIC_LOCALE?.toLowerCase();

  // Lista de idiomas permitidos
  const validLocales: Language[] = ["es", "en", "de"];

  // Verifica si el valor de entorno es válido
  if (validLocales.includes(envLocale as Language)) {
    return envLocale as Language; // Type assertion segura
  }

  // Retorna un idioma predeterminado si el valor no es válido
  return "es";
})();

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;

export const IS_LOCAL_ENV = ENVIRONMENT?.toLowerCase() === "local";

export const SITE_URL = {
  es: process.env.NEXT_PUBLIC_URL_ES_SITE ?? "https://ciudades-de-cuidado.org",
  en: process.env.NEXT_PUBLIC_URL_EN_SITE ?? "https://caring-cities.org",
  de: process.env.NEXT_PUBLIC_URL_DE_SITE ?? "https://sorgende-staedte.org",
};

export const SERVER_LOCALE = (() => {
  const envLocale = process.env.LOCALE?.toLowerCase();

  const validLocales: Language[] = ["es", "en", "de"];

  if (validLocales.includes(envLocale as Language)) {
    return envLocale as Language;
  }

  return "de";
})();

const metadataByLanguage: Record<string, Metadata> = {
  es: {
    title: "Ciudades de Cuidado",
    description: "Estrategias para la socialización feminista",
    icons: {
      icon: ["/favicon.ico"],
    },
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName: "Ciudades de Cuidado",
      url: "https://ciudades-de-cuidado.org",
      title: "Ciudades de Cuidado",
      description: "Estrategias para la socialización feminista",
      images: [
        {
          url: "https://ciudades-de-cuidado.org/background.png",
          width: 1200,
          height: 630,
          alt: "Ciudades de Cuidado",
        },
      ],
    },
  },
  en: {
    title: "Caring Cities",
    description: "Strategies for feminist socialization",
    icons: {
      icon: ["/favicon.ico"],
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Caring Cities",
      url: "https://caring-cities.org",
      title: "Caring Cities",
      description: "Strategies for feminist socialization",
      images: [
        {
          url: "https://caring-cities.org/background.png",
          width: 1200,
          height: 630,
          alt: "Caring Cities",
        },
      ],
    },
  },
  de: {
    title: "Sorgende Städte",
    description: "Strategien für feministisches Vergesellschaften",
    icons: {
      icon: ["/favicon.ico"],
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: "Sorgende Städte",
      url: "https://sorgende-staedte.org",
      title: "Sorgende Städte",
      description: "Strategien für feministisches Vergesellschaften",
      images: [
        {
          url: "https://sorgende-staedte.org/background.png",
          width: 1200,
          height: 630,
          alt: "Sorgende Städte",
        },
      ],
    },
  },
};

// Seleccionar metadata basada en el idioma actual
export const metadata: Metadata =
  metadataByLanguage[SITE_LOCALE] || metadataByLanguage.es;

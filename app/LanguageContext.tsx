"use client";
import React, { createContext, useContext, useState } from "react";
import { IS_LOCAL_ENV, SITE_URL } from "./config";
import { Language } from "./types";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("es");

  const handleSetLanguage = (lang: Language) => {
    console.log('🎈handleSetLanguage', {IS_LOCAL_ENV}, {lang})
    if (IS_LOCAL_ENV) {
      console.log('🎈es local! setting', lang)
      setLanguage(lang); // Cambia el idioma en local
    } else {
      const languageMap: Record<string, string> = {
        es: SITE_URL.es,
        de: SITE_URL.de,
        en: SITE_URL.en,
      };
      window.location.href = languageMap[lang]; // Redirige en producción
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

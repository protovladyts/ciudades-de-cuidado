"use client";
import React, { createContext, useContext, useState } from "react";
import { SITE_LOCALE, SITE_URL } from "./config";
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
  const [language] = useState<Language>(SITE_LOCALE);

  const handleSetLanguage = (lang: Language) => {
    const languageMap: Record<string, string> = {
      es: SITE_URL.es,
      de: SITE_URL.de,
      en: SITE_URL.en,
    };
    window.location.href = languageMap[lang];
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      <div className="relative">{children}</div>
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

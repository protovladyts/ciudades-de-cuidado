export type AcfHomeResponse = {
  hero: LanguageHero;
  concept: LanguageSections;
  projects: LanguageSections & Image;
  municipalism: LanguageMunicipalism;
};

export type LanguageSections = {
  es: SectionContent;
  en: SectionContent;
  de: SectionContent;
};

export type Image = {
  more_image: string;
}

export type LanguageHero = {
  es: HeroContent;
  en: HeroContent;
  de: HeroContent;
};

export type LanguageMunicipalism = {
  es: MunicipalismContent;
  en: MunicipalismContent;
  de: MunicipalismContent;
};

export type SectionContent = {
  title: string;
  description: string;
  cta_label: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  description: string;
};

export type MunicipalismContent = {
  title: string;
  description: string;
  end_title: string;
};

export type LanguageHeader = {
  es: Header;
  en: Header;
  de: Header;
}

export type Header = {
  concept: string;
  projects: string;
  municipalism: string;
}

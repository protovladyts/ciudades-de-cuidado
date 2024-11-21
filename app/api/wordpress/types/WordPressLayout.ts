export type HeaderContent = {
  concept: string;
  projects: string;
  municipalism: string;
};

export type FooterContent = {
  text: string;
  contact: string;
};

export type FooterTranslations = {
  es: FooterContent;
  en: FooterContent;
  de: FooterContent;
};

type HeaderTranslations = {
  es: HeaderContent;
  en: HeaderContent;
  de: HeaderContent;
};

export type SocialMediaLinks = {
  instagram_link: string;
  whatsapp_link: string;
  twitter_link: string;
  custom_link: string;
};

export type WordPressLayout = {
  id: number;
  slug: string;
  title: string;
  content: string;
  acf: {
    header: HeaderTranslations;
    footer: {
      social_media: SocialMediaLinks;
      content: FooterTranslations;
    };
  };
};

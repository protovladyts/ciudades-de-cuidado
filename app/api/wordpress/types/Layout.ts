import { FooterContent, HeaderContent, SocialMediaLinks } from "./WordPressLayout";

export type LocalizedPost = {
  image: string;
  title: string;
  text: string;
  slug: string;
};

export type FooterContentWithLinks = FooterContent & {
  social_media: SocialMediaLinks;
};

export type HeaderLanguagesContent = {
  en: HeaderContent,
  es: HeaderContent,
  de: HeaderContent,
};

export type FooterLanguagesContent = {
  en: FooterContentWithLinks,
  es: FooterContentWithLinks,
  de: FooterContentWithLinks,
}

export type Layout = {
  header: HeaderLanguagesContent,
  footer: FooterLanguagesContent
};

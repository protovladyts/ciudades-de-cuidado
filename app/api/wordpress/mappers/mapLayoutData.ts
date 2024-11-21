import { Layout } from "../types/Layout";
import {
  FooterTranslations,
  SocialMediaLinks,
  WordPressLayout,
} from "../types/WordPressLayout";

const mapFooterForLanguage = (
  footer: {
    social_media: SocialMediaLinks;
    content: FooterTranslations;
  },
  language: "en" | "es" | "de"
) => ({
  social_media: footer.social_media,
  text: footer.content[language].text,
  contact: footer.content[language].contact,
});
const mapFooter = (footer: {
  social_media: SocialMediaLinks;
  content: FooterTranslations;
}) => ({
  en: mapFooterForLanguage(footer, "en"),
  es: mapFooterForLanguage(footer, "es"),
  de: mapFooterForLanguage(footer, "de"),
});
export function mapLayoutData(raw: WordPressLayout): Layout {
  return {
    header: raw.acf.header,
    footer: mapFooter(raw.acf.footer),
  };
}

import { Layout } from "../types/Layout";
import { FooterTranslations, WordPressLayout } from "../types/WordPressLayout";

export function mapLayoutData(raw: WordPressLayout): Layout {
  // Validar existencia explícita de todas las claves antes de mapear
  const validateFooterContent = (content: FooterTranslations) => {
    return {
      en: content.en || { text: "", contact: "" },
      es: content.es || { text: "", contact: "" },
      de: content.de || { text: "", contact: "" },
    };
  };

  const footerContent = validateFooterContent(raw.acf.footer.content);
  const footerLinks = raw.acf.footer.social_media;

  return {
    header: raw.acf.header,
    footer: {
      en: {
        social_media: footerLinks,
        text: footerContent.en?.text || "Translation missing",
        contact: footerContent.en?.contact || "Contact missing",
      },
      es: {
        social_media: footerLinks,
        text: footerContent.es?.text || "Translation missing",
        contact: footerContent.es?.contact || "Contact missing",
      },
      de: {
        social_media: footerLinks,
        text: footerContent.de?.text || "Translation missing",
        contact: footerContent.de?.contact || "Contact missing",
      },
    },
  };
}

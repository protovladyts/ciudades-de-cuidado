import {
  ConceptItem,
  ConceptLabelsParsed,
  WordPressConceptPage,
} from "../types/Concept";

export function mapLocalizedConcept(
  page: WordPressConceptPage,
  language: "es" | "en" | "de"
): ConceptLabelsParsed {
  // Parsear y validar el campo "items"
  const parseAndValidateItems = (itemsString: string): Array<ConceptItem> => {
    try {
      const items = JSON.parse(itemsString);

      // Validación básica de los campos de cada objeto
      if (!Array.isArray(items)) {
        throw new Error("Items is not a valid array");
      }

      return items.map((item) => {
        if (
          typeof item.title !== "string" ||
          typeof item.image !== "string" ||
          typeof item.link !== "string"
        ) {
          throw new Error("Invalid item structure");
        }
        return item;
      });
    } catch (error) {
      console.error("Error parsing or validating items:", error);
      return []; // Devuelve un array vacío en caso de error
    }
  };

  return {
    title: page.acf.concept[language].title,
    description: page.acf.concept[language].description,
    items: parseAndValidateItems(page.acf.concept[language].items),
  };
}

import { ConceptLabels, WordPressConceptPage } from "../types/Concept";

export function mapLocalizedConcept(
  page: WordPressConceptPage,
  language: "es" | "en" | "de"
): ConceptLabels {
  return {
    title: page.acf.concept[language].title,
    description: page.acf.concept[language].description,
  };
}

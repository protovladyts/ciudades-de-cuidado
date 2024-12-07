import { AcfHomeResponse } from "../types/AcfHomeResponse";

export function mapLocalizedData(
  acf: AcfHomeResponse,
  language: "es" | "en" | "de"
) {
  return {
    hero: acf.hero[language],
    concept: acf.concept[language],
    projects: acf.projects[language],
    municipalism: acf.municipalism[language],
  };
}

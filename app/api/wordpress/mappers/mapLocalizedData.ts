import { AcfResponse } from "../types/AcfResponse";

export function mapLocalizedData(
  acf: AcfResponse,
  language: "es" | "en" | "de"
) {
  return {
    header: acf.header[language],
    hero: acf.hero[language],
    concept: acf.concept[language],
    projects: acf.projects[language],
    municipalism: acf.municipalism[language],
  };
}

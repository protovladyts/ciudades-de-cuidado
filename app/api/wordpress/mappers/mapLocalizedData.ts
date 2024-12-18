import { AcfHomeResponse } from "../types/AcfHomeResponse";

export function mapLocalizedData(
  acf: AcfHomeResponse,
  language: "es" | "en" | "de"
) {
  return {
    hero: acf.hero[language],
    concept: acf.concept[language],
    projects: {...acf.projects[language], more_image: acf.projects.more_image },
    municipalism: acf.municipalism[language],
  };
}

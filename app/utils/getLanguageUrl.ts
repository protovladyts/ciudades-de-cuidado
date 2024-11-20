export function getLanguageUrl(language: "es" | "de" | "en"): string {
  switch (language) {
    case "es":
      return process.env.NEXT_PUBLIC_URL_ES_SITE || "/";
    case "de":
      return process.env.NEXT_PUBLIC_URL_DE_SITE || "/";
    case "en":
      return process.env.NEXT_PUBLIC_URL_EN_SITE || "/";
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
}

import { Language } from "@/app/types";
import { fetchFromApi } from "../../helpers/fetchFromApi";
import { mapPostData } from "../mappers/mapPostData";
import { WordPressPost } from "../types/WordPressPost";

export const fetchPosts = async (language: Language) => {
  const categoryLanguage = {
    en: "4",
    es: "3",
    de: "5",
  };
  const data = await fetchFromApi<WordPressPost[]>(
    `https://admin.ciudades-de-cuidado.org/wp-json/wp/v2/posts?_embed=true&acf_format=standard&categories=${
      categoryLanguage[language] ?? "4"
    }`
  );
  return data.map(mapPostData);
};

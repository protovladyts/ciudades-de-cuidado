import { notFound } from "next/navigation";
import { fetchFromApi } from "../../helpers/fetchFromApi";
import { mapPostData } from "../mappers/mapPostData";
import { WordPressPost } from "../types/WordPressPost";

export const fetchPost = async (slug: string) => {
  const data = await fetchFromApi<WordPressPost[]>(
    `https://ciudades-de-cuidado.org/wp-json/wp/v2/posts?_embed=true&acf_format=standard&slug=${slug}`
  );

  if (data.length === 0) notFound();

  return data.map(mapPostData);
};

import { Post } from "../types/Post";
import { WordPressPost } from "../types/WordPressPost";

export function mapPostData(rawPost: WordPressPost): Post {
  const mapLocalizedData = (locale: "en" | "es" | "de") => ({
    title: rawPost.acf?.project?.[locale]?.title ?? "",
    image: rawPost.acf?.project?.image ?? "",
    text: rawPost.acf?.project?.[locale]?.text ?? "",
    slug: rawPost.slug ?? "",
    display_on_homepage: rawPost.acf?.project?.display_on_homepage === true,
  });

  return {
    en: mapLocalizedData("en"),
    es: mapLocalizedData("es"),
    de: mapLocalizedData("de"),
  };
}

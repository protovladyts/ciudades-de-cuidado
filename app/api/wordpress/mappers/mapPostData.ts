import { Post } from "../types/Post";
import { PostTypeOption, WordPressPost } from "../types/WordPressPost";

export function mapPostData(rawPost: WordPressPost): Post {
  const {
    acf: {
      project: { config, text, image },
    },
    title,
    slug,
  } = rawPost;

  if (config.post_type.length < 1) throw new Error("POST TYPE NOT DEFINED");

  return {
    image: image ?? "",
    title: title.rendered ?? "",
    text: text ?? "",
    slug: slug ?? "",
    display_on_homepage: config?.display_on_homepage ?? false,
    language: config.language.value ?? "en",
    post_types: config.post_type.map(
      (post_type: PostTypeOption) => post_type.value
    ),
    redirect_url: config.redirect_url ?? "",
  };
}

import { LocalizedPost, Post } from "../types/Post";

export function mapLocalizedPosts(
  posts: Array<Post>,
  language: "es" | "en" | "de"
): Array<LocalizedPost> {
  return posts.map((post: Post) => ({
    title: post[language].title,
    text: post[language].text,
    image: post[language].image,
    slug: post[language].slug,
  }));
}

export type PostType = "concept" | "project";

export type Post = {
  image: string;
  title: string;
  text: string;
  slug: string;
  display_on_homepage: boolean;
  language: string;
  post_types: Array<PostType>;
  redirect_url?: string;
};

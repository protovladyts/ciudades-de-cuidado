export type LocalizedPost = {
  image: string;
  title: string;
  text: string;
  slug: string;
  display_on_homepage: boolean;
};

export type Post = {
  en: LocalizedPost;
  es: LocalizedPost;
  de: LocalizedPost;
};

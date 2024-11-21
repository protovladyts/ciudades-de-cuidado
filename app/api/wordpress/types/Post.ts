export type LocalizedPost = {
  image: string;
  title: string;
  text: string;
  slug: string;
};

export type Post = {
  en: LocalizedPost,
  es: LocalizedPost,
  de: LocalizedPost,
};

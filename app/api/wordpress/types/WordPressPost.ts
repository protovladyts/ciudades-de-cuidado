import { Language } from "@/app/types";
import { PostType } from "./Post";

export interface PostTypeOption {
  value: PostType;
  label: string;
}

// Tipo base de la respuesta de WordPress
export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  acf: {
    project: {
      config: {
        redirect_url?: string;
        language: {
          value: Language;
          label: string;
        };
        display_on_homepage: boolean;
        post_type: Array<PostTypeOption>;
      };
      text?: string;
      image?: string;
    };
  };
  _embedded?: {
    author?: {
      name: string;
    }[];
    "wp:term"?: {
      id: number;
      name: string;
      slug: string;
    }[][];
  };
}

// Definir un array de posts
export type WordPressPosts = WordPressPost[];

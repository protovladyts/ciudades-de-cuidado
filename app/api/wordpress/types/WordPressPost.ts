// Tipo base de la respuesta de WordPress
export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  acf?: {
    project?: {
      display_on_homepage?: boolean;
      image?: string;
      en?: {
        title?: string;
        text?: string;
      };
      es?: {
        title?: string;
        text?: string;
      };
      de?: {
        title?: string;
        text?: string;
      };
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

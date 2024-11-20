import { WordPressPage } from '../types/WordPressPage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapPageData(rawPage: any): WordPressPage {
  return {
    id: rawPage.id,
    slug: rawPage.slug,
    title: rawPage.title.rendered,
    content: rawPage.content.rendered,
    acf: rawPage.acf,
  };
}

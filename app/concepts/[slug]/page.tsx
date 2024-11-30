import { fetchPage } from "@/app/api/wordpress/services/fetchPage";
import { fetchPost } from "@/app/api/wordpress/services/fetchPost";
import { fetchPosts } from "@/app/api/wordpress/services/fetchPosts";
import { WordPressProjectsPage } from "@/app/api/wordpress/types/Projects";
import { SERVER_LOCALE } from "@/app/config";
import { ConceptSection } from "@/app/sections/concepts/concept";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Concept({ params }: Props) {
  const serverLanguage = SERVER_LOCALE;
  const { slug } = params;
  const posts = await fetchPost(slug);
  const relatedPosts = await fetchPosts(serverLanguage);
  const relatedConcepts = shuffleArray(
    relatedPosts.filter((post) => post.post_types.includes("concept"))
  );
  const page = await fetchPage<WordPressProjectsPage>("projects");

  return (
    <ConceptSection
      content={posts[0]}
      relatedPosts={relatedConcepts}
      slug={slug}
      pageContent={page}
    />
  );
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]; // Crear una copia del array original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

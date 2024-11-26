import { fetchPage } from "@/app/api/wordpress/services/fetchPage";
import { fetchPost } from "@/app/api/wordpress/services/fetchPost";
import { fetchPosts } from "@/app/api/wordpress/services/fetchPosts";
import { WordPressProjectsPage } from "@/app/api/wordpress/types/Projects";
import { ProjectSection } from "@/app/sections/projects/project";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Project({ params }: Props) {
  const { slug } = params;
  const posts = await fetchPost(slug);
  let relatedPosts = await fetchPosts();
  const page = await fetchPage<WordPressProjectsPage>("projects");

  relatedPosts = shuffleArray(relatedPosts);

  return (
    <ProjectSection
      content={posts[0]}
      relatedPosts={relatedPosts}
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

import { fetchPage } from "@/app/api/wordpress/services/fetchPage";
import { fetchPost } from "@/app/api/wordpress/services/fetchPost";
import { fetchPosts } from "@/app/api/wordpress/services/fetchPosts";
import { WordPressProjectsPage } from "@/app/api/wordpress/types/Projects";
import { SERVER_LOCALE } from "@/app/config";
import { ProjectSection } from "@/app/sections/projects/project";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Project({ params }: Props) {
  const serverLanguage = SERVER_LOCALE;
  const { slug } = params;
  const posts = await fetchPost(slug);

  if (posts[0].redirect_url) notFound();

  let relatedPosts = await fetchPosts(serverLanguage);
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

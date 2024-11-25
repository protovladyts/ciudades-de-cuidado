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
  const relatedPosts = await fetchPosts();
  const page = await fetchPage<WordPressProjectsPage>("projects");

  return <ProjectSection content={posts[0]} relatedPosts={relatedPosts} slug={slug} pageContent={page}/>;
}

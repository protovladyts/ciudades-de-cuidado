import { fetchPost } from "@/app/api/wordpress/services/fetchPost";
import { fetchPosts } from "@/app/api/wordpress/services/fetchPosts";
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

  return <ProjectSection content={posts[0]} relatedPosts={relatedPosts} slug={slug} />;
}

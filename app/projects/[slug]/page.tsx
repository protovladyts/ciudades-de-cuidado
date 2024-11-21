import { fetchPost } from "@/app/api/wordpress/services/fetchPost";
import { ProjectSection } from "@/app/sections/projects/project";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Project({ params }: Props) {
  const { slug } = params;
  const posts = await fetchPost(slug);

  return <ProjectSection content={posts[0]} />;
}

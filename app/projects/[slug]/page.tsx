import { fetchPost } from '@/app/api/wordpress/services/fetchPost';
import { Template } from '@/app/components';
import { ProjectSection } from '@/app/sections/projects/project';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Project({params}: Props) {
  const { slug } = params; 
  const posts = await fetchPost(slug)

  return (
    <Template>
      <ProjectSection content={posts[0]}/>
    </Template>
  );
}
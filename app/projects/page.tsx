import { Template } from '../components';
import { fetchPosts } from '../api/wordpress/services/fetchPosts';
import { ProjectsSection } from '../sections/projects';

export default async function ProjectsPage() {
  const projects = await fetchPosts()

  return (
    <Template>
      <ProjectsSection content={projects}/>
    </Template>
  );
}

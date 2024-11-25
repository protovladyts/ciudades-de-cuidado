import { fetchPage } from "../api/wordpress/services/fetchPage";
import { fetchPosts } from "../api/wordpress/services/fetchPosts";
import { WordPressProjectsPage } from "../api/wordpress/types/Projects";
import { ProjectsSection } from "../sections/projects";

export default async function ProjectsPage() {
  const projects = await fetchPosts();
  const page = await fetchPage<WordPressProjectsPage>("projects");

  return <ProjectsSection content={projects} pageContent={page} />;
}

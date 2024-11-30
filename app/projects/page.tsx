import { fetchPage } from "../api/wordpress/services/fetchPage";
import { fetchPosts } from "../api/wordpress/services/fetchPosts";
import { WordPressProjectsPage } from "../api/wordpress/types/Projects";
import { SERVER_LOCALE } from "../config";
import { ProjectsSection } from "../sections/projects";

export default async function ProjectsPage() {
  const serverLanguage = SERVER_LOCALE;
  const posts = await fetchPosts(serverLanguage);

  const projects = posts.filter((post) => {
    console.log("POST TYPE", post.title, post.post_types);
    return post.post_types.includes("project");
  });

  const page = await fetchPage<WordPressProjectsPage>("projects");

  return <ProjectsSection content={projects} pageContent={page} />;
}

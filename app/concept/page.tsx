import { fetchPage } from "../api/wordpress/services/fetchPage";
import { fetchPosts } from "../api/wordpress/services/fetchPosts";
import { WordPressConceptPage } from "../api/wordpress/types/Concept";
import { ConceptSection } from "../sections/concept";

export default async function ConceptPage() {
  const projects = await fetchPosts();
  const page = await fetchPage<WordPressConceptPage>("concept");
  return <ConceptSection content={projects} pageContent={page} />;
}

import { fetchPage } from "../api/wordpress/services/fetchPage";
import { fetchPosts } from "../api/wordpress/services/fetchPosts";
import { WordPressConceptPage } from "../api/wordpress/types/Concept";
import { SERVER_LOCALE } from "../config";
import { ConceptsSection } from "../sections/concepts";

export default async function ConceptPage() {
  const serverLanguage = SERVER_LOCALE;
  const posts = await fetchPosts(serverLanguage);
  const concepts = posts.filter((post) => post.post_types.includes("concept"));

  const page = await fetchPage<WordPressConceptPage>("concept");
  return <ConceptsSection pageContent={page} content={concepts} />;
}

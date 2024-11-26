import { fetchPage } from "../api/wordpress/services/fetchPage";
import { WordPressConceptPage } from "../api/wordpress/types/Concept";
import { ConceptSection } from "../sections/concept";

export default async function ConceptPage() {
  const page = await fetchPage<WordPressConceptPage>("concept");
  return <ConceptSection pageContent={page} />;
}

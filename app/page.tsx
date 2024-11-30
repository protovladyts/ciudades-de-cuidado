import { HomeSections } from "./sections/home";
import { fetchPage } from "./api/wordpress/services/fetchPage";
import { fetchPosts } from "./api/wordpress/services/fetchPosts";
import { SERVER_LOCALE } from "./config";

export default async function Home() {
  const serverLanguage = SERVER_LOCALE;

  // Obtén el contenido localizado
  const homeContent = await fetchPage("home");
  const posts = await fetchPosts(serverLanguage);

  return (
    <main>
      <HomeSections content={homeContent} posts={posts} />
    </main>
  );
}

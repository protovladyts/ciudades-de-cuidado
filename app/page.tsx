import { HomeSections } from "./sections/home";
import { fetchPage } from "./api/wordpress/services/fetchPage";
import { fetchPosts } from "./api/wordpress/services/fetchPosts";

export default async function Home() {
  // Obtén el contenido localizado
  const homeContent = await fetchPage("home");
  const posts = await fetchPosts();

  return (
    <main>
      <div>
        <HomeSections content={homeContent} posts={posts} />
      </div>
    </main>
  );
}

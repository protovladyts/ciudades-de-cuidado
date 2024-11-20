import { HomeSections } from "./sections/home";
import { fetchPage } from "./api/wordpress/services/fetchPage";

export default async function Home() {
  // Obtén el contenido localizado
  const homeContent = await fetchPage("home");

  return (
    <main>
      <div>
        <HomeSections content={homeContent} />
      </div>
    </main>
  );
}

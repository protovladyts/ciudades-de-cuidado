import { fetchLocalizedPage } from "./api/wordpress/services/fetchLocalizedPage";
import { sections } from "./sections/home";
import { SITE_LOCALE } from "./config";

export default async function Home() {
  // Detecta el idioma basado en el host
  const language = SITE_LOCALE

  // Obtén el contenido localizado
  const content = await fetchLocalizedPage("home", language);

  return (
    <main>
      <div>
        {sections.map(({ component: Component, key }) => (
          <div key={key} id={key}>
            <Component data={content[key]} />
          </div>
        ))}
      </div>
    </main>
  );
}

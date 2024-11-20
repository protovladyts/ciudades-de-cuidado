import { fetchLocalizedPage } from "./api/wordpress/services/fetchLocalizedPage";
import { sections } from "./sections/home";

export default async function Home() {
  const language = 'de'; // Obtén esto dinámicamente según el idioma del sitio
  const content = await fetchLocalizedPage('home', language);

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
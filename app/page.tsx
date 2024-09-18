import { sections } from "./sections/home";

export default function Home() {
  return (
    <main>
      <div>
        {sections.map(({ component: Component, key }) => (
          <div key={key} id={key}>
            <Component />
          </div>
        ))}
      </div>
    </main>
  );
}

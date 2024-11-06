import { Template } from "./components";
import { focusFont, titleFont } from "./config";

export default function NotFound() {
  return (
    <Template className={`bg-white text-black ${focusFont.className}`}>
      <h1 className={`${titleFont.className} pb-4`}>Página no encontrada</h1>
      <p>Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
    </Template>
  );
}

import { fetchFromApi } from "../../helpers/fetchFromApi";

export async function fetchLayout() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [page] = await fetchFromApi<any[]>(
    `https://ciudades-de-cuidado.org/wp-json/wp/v2/cms?_embed=true&acf_format=standard&slug=layout`,
    3600
  );

  if (!page) {
    throw new Error(`Layout with slug not found`);
  }

  if (!page.acf?.footer || !page.acf?.header) {
    throw new Error("Invalid layout data structure");
  }

  return page;
}

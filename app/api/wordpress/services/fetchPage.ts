import { fetchFromApi } from "../../helpers/fetchFromApi";

export async function fetchPage<T>(slug: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [page] = await fetchFromApi<T[]>(
    `https://admin.ciudades-de-cuidado.org/wp-json/wp/v2/pages?_embed=true&acf_format=standard&slug=${slug}`,
    3600
  );

  if (!page) {
    throw new Error(`Page with slug "${slug}" not found`);
  }

  return page;
}

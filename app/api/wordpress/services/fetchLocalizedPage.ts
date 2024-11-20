import { fetchFromApi } from '../../helpers/fetchFromApi';
import { mapLocalizedData } from '../mappers/mapLocalizedData';
import { AcfResponse } from '../types/AcfResponse';

export async function fetchLocalizedPage(
  slug: string,
  language: 'es' | 'en' | 'de'
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [page] = await fetchFromApi<any[]>(
    `https://ciudades-de-cuidado.org/wp-json/wp/v2/pages?_embed=true&acf_format=standard&slug=${slug}`
  );

  if (!page) {
    throw new Error(`Page with slug "${slug}" not found`);
  }

  const localizedContent = mapLocalizedData(page.acf as AcfResponse, language);

  return localizedContent;
}

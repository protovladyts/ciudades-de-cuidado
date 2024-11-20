import { WordPressPage } from '../types/WordPressPage';
import { fetchFromApi } from '../../helpers/fetchFromApi';
import { mapPageData } from '../mappers/mapPageData';

export async function fetchPages(): Promise<WordPressPage[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = await fetchFromApi<any[]>(
    'https://ciudades-de-cuidado.org/wp-json/wp/v2/pages?_embed=true&acf_format=standard'
  );

  return data.map(mapPageData);
}


//'https://ciudades-de-cuidado.org/wp-json/wp/v2/pages?_embed=true&acf_format=standard&slug=home'

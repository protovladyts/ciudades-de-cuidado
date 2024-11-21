import { AcfHomeResponse } from './AcfHomeResponse';

export type WordPressPage = {
  id: number;
  slug: string;
  title: string;
  content: string;
  acf: AcfHomeResponse; // Relación con la estructura reutilizable de `acf`
};

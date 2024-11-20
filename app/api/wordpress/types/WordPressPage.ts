import { AcfResponse } from './AcfResponse';

export type WordPressPage = {
  id: number;
  slug: string;
  title: string;
  content: string;
  acf: AcfResponse; // Relación con la estructura reutilizable de `acf`
};

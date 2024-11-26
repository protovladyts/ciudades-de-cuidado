export type ConceptItem = {
  title: string;
  image: string;
  link: string;
};

export type ConceptLabels = {
  title: string;
  description: string;
  items: string;
};

export type ConceptLabelsParsed = {
  title: string;
  description: string;
  items: Array<ConceptItem>;
};

type AcfConceptsResponse = {
  concept: {
    es: ConceptLabels;
    en: ConceptLabels;
    de: ConceptLabels;
  };
};

export type WordPressConceptPage = {
  id: number;
  slug: string;
  title: string;
  content: string;
  acf: AcfConceptsResponse; // Relación con la estructura reutilizable de `acf`
};

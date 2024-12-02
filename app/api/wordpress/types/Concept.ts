export type ConceptLabels = {
  title: string;
  description: string;
  back_btn_label: string;
  other_concepts_label: string;
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

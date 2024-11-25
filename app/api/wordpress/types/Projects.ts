export type ProjectsLabels = {
  title: string;
  back_btn_label: string;
  other_projects_label: string;
};

type AcfProjectsresponse = {
  project: {
    es: ProjectsLabels;
    en: ProjectsLabels;
    de: ProjectsLabels;
  };
};

export type WordPressProjectsPage = {
  id: number;
  slug: string;
  title: string;
  content: string;
  acf: AcfProjectsresponse; // Relación con la estructura reutilizable de `acf`
};

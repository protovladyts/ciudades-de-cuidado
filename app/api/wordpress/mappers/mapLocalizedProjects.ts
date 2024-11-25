import { ProjectsLabels, WordPressProjectsPage } from "../types/Projects";

export function mapLocalizedProjects(
  page: WordPressProjectsPage,
  language: "es" | "en" | "de"
): ProjectsLabels {
  return {
    title: page.acf.project[language].title,
    back_btn_label: page.acf.project[language].back_btn_label,
    other_projects_label: page.acf.project[language].other_projects_label
  };
}

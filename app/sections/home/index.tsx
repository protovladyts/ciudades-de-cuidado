"use client";

import { Hero } from "./Hero";
import { Concept } from "./Concept";
import { Projects } from "./Projects";
import { Municipalism } from "./Municipalism";
import { AcfResponse } from "@/app/api/wordpress/types/AcfResponse";
import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedData } from "@/app/api/wordpress/mappers/mapLocalizedData";

type SectionKey = keyof AcfResponse;

export const sections: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  key: SectionKey;
}[] = [
  { component: Hero, key: "hero" },
  { component: Concept, key: "concept" },
  { component: Projects, key: "projects" },
  { component: Municipalism, key: "municipalism" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HomeSections = ({ content }: any) => {
  const { language } = useLanguage();

  const localizedContent = mapLocalizedData(
    content.acf as AcfResponse,
    language
  );

  return (
    <>
      {sections.map(({ component: Component, key }) => (
        <div key={key} id={key}>
          <Component data={localizedContent[key]} />
        </div>
      ))}
    </>
  );
};

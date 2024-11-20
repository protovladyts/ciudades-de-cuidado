import { Hero } from "./Hero";
import { Concept } from "./Concept";
import { Projects } from "./Projects";
import { Municipalism } from "./Municipalism";
import { AcfResponse } from "@/app/api/wordpress/types/AcfResponse";

type SectionKey = keyof AcfResponse;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sections: { component: React.ComponentType<any>; key: SectionKey }[] = [
  { component: Hero, key: "hero" },
  { component: Concept, key: "concept" },
  { component: Projects, key: "projects" },
  { component: Municipalism, key: "municipalism" },
];

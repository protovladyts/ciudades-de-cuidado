"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { WordPressLayout } from "../api/wordpress/types/WordPressLayout";

export const DynamicNavbar = ({ content }: { content: WordPressLayout }) => {
  const pathname = usePathname();
  const isSlugPage =
    pathname.startsWith("/projects/") && pathname.split("/").length > 2;
  const isProjectsPage = pathname.startsWith("/projects");
  const isConceptPage = pathname.startsWith("/concept");
  const displayNavButtons = !(isProjectsPage || isConceptPage || isSlugPage);
  return <Navbar content={content} displayNavButtons={displayNavButtons} />;
};

"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export const DynamicNavbar = ({ content }: { content: any }) => {
  const pathname = usePathname();

  // Detecta si estás en /projects/[slug]
  const isSlugPage =
    pathname.startsWith("/projects/") && pathname.split("/").length > 2;

  return <Navbar content={content} displayNavButtons={!isSlugPage} />;
};

"use client";

import { Hero } from "./Hero";
import { Concept } from "./Concept";
import { Projects } from "./Projects";
import { Municipalism } from "./Municipalism";
import { AcfHomeResponse } from "@/app/api/wordpress/types/AcfHomeResponse";
import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedData } from "@/app/api/wordpress/mappers/mapLocalizedData";
import { mapLocalizedPosts } from "@/app/api/wordpress/mappers/mapLocalizedPosts";
import { Post } from "@/app/api/wordpress/types/Post";
import { BackToTopButton } from "@/app/components";
import { useEffect, useState } from "react";

type SectionKey = keyof AcfHomeResponse;

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

export const HomeSections = ({
  content,
  posts,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  posts: Array<Post>;
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { language } = useLanguage();

  const localizedContent = mapLocalizedData(
    content.acf as AcfHomeResponse,
    language
  );

  const localizedPosts = mapLocalizedPosts(posts, language);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {sections.map(({ component: Component, key }) => (
        <div key={key} id={key}>
          <Component data={localizedContent[key]} posts={localizedPosts} />
        </div>
      ))}
      <BackToTopButton showBackToTop={showBackToTop} />
    </>
  );
};

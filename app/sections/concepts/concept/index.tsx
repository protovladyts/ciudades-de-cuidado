"use client";

import { useLanguage } from "@/app/LanguageContext";
import { Post } from "@/app/api/wordpress/types/Post";
import {
  BackToTopButton,
  GradientArrowButton,
  GradientUnderlineButton,
  Template,
} from "@/app/components";
import MarkdownWrapper from "@/app/components/MarkdownWrapper";
import { RelatedCard } from "@/app/components/";
import { useEffect, useState } from "react";
import { basicFont } from "@/app/config";
import { useBackToTopVisibility } from "@/app/hooks/useBackToTopVisibility";
import { WordPressConceptPage } from "@/app/api/wordpress/types/Concept";
import { mapLocalizedConcept } from "@/app/api/wordpress/mappers/mapLocalizedConcept";

// Configuración: Número máximo de posts
const MAX_POSTS_MOBILE = 2; // Configurable para mobile
const MAX_POSTS_DESKTOP = 5; // Configurable para desktop

export const ConceptSection = ({
  content: localizedPost,
  relatedPosts,
  slug,
  pageContent,
}: {
  content: Post;
  relatedPosts: Array<Post>;
  slug: string;
  pageContent: WordPressConceptPage;
}) => {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const showBackToTop = useBackToTopVisibility();

  const localizedPageContent = mapLocalizedConcept(pageContent, language);
  // Detectar si el dispositivo es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile si el ancho es menor a 768px
    };

    handleResize(); // Detectar en el primer render
    window.addEventListener("resize", handleResize); // Detectar cambios de tamaño

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filtrar y limitar los posts relacionados
  const filteredRelatedPosts = relatedPosts
    .filter((post) => post.slug !== slug) // Remover el post con el mismo slug
    .slice(0, isMobile ? MAX_POSTS_MOBILE : MAX_POSTS_DESKTOP); // Limitar posts

  return (
    <Template className="w-full !mx-0" fullScreen={false}>
      <div>
        <div className="my-8">
          <div className="px-6 md:px-10 lg:px-16 xl:px-56 grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="md:col-span-2 space-y-4">
              <MarkdownWrapper content={localizedPost.text} />
            </article>

            <aside className="space-y-4">
              <h3
                className={`text-xl 3xl:text-5xl ${basicFont.className} font-bold`}
              >
                {localizedPageContent.other_concepts_label}
              </h3>
              {filteredRelatedPosts.map((item) => (
                <RelatedCard
                  key={item.slug}
                  image={item.image}
                  title={item.title}
                  link={`/projects/${item.slug}`}
                />
              ))}
              <div className="col-span-2 w-full flex justify-end">
                <GradientUnderlineButton>
                  <GradientArrowButton href="/projects" isRotated={true}>
                    {localizedPageContent.back_btn_label}
                  </GradientArrowButton>
                </GradientUnderlineButton>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <BackToTopButton showBackToTop={showBackToTop} />
    </Template>
  );
};

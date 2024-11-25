"use client";

import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedPosts } from "@/app/api/wordpress/mappers/mapLocalizedPosts";
import { Post } from "@/app/api/wordpress/types/Post";
import {
  GradientArrowButton,
  GradientUnderlineButton,
  Image,
  Template,
} from "@/app/components";
import MarkdownWrapper from "@/app/components/MarkdownWrapper";
import { RelatedCard } from "@/app/components/";
import { useEffect, useState } from "react";
import { basicFont } from "@/app/config";
import { WordPressProjectsPage } from "@/app/api/wordpress/types/Projects";
import { mapLocalizedProjects } from "@/app/api/wordpress/mappers/mapLocalizedProjects";

// Configuración: Número máximo de posts
const MAX_POSTS_MOBILE = 2; // Configurable para mobile
const MAX_POSTS_DESKTOP = 5; // Configurable para desktop

export const ProjectSection = ({
  content,
  relatedPosts,
  slug,
  pageContent,
}: {
  content: Post;
  relatedPosts: Array<Post>;
  slug: string;
  pageContent: WordPressProjectsPage
}) => {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  const localizedPageContent = mapLocalizedProjects(pageContent,language);
  // Detectar si el dispositivo es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile si el ancho es menor a 768px
    };

    handleResize(); // Detectar en el primer render
    window.addEventListener("resize", handleResize); // Detectar cambios de tamaño

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Obtener contenido localizado
  const localizedContent = mapLocalizedPosts([content], language);
  const localizedPost = localizedContent[0];

  // Filtrar y limitar los posts relacionados
  const localizedPosts = mapLocalizedPosts(relatedPosts, language)
    .filter((post) => post.slug !== slug) // Remover el post con el mismo slug
    .slice(0, isMobile ? MAX_POSTS_MOBILE : MAX_POSTS_DESKTOP); // Limitar posts

  return (
    <Template className="w-full !mx-0" fullScreen={false}>
      <div>
        <section className="relative w-full">
          <Image
            src={`${localizedPost.image}`}
            alt="Background"
            className="w-full 4xs:h-[12rem] md:h-[18rem] 3xl:h-[24rem] 4xl:h-[36rem] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-3xl 3xl:text-5xl 4xl:text-6xl font-bold text-white text-center">
              {localizedPost.title}
            </h1>
          </div>
        </section>
        <div className="my-8">
          <div className="px-6 md:px-10 lg:px-16 xl:px-56 grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="md:col-span-2 space-y-4">
              <MarkdownWrapper content={localizedPost.text} />
            </article>

            <aside className="space-y-4">
              <h3
                className={`text-xl 3xl:text-5xl ${basicFont.className} font-bold`}
              >
                {localizedPageContent.other_projects_label.toUpperCase()}
              </h3>
              {localizedPosts.map((item) => (
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
                    {localizedPageContent.back_btn_label.toUpperCase()}
                  </GradientArrowButton>
                </GradientUnderlineButton>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Template>
  );
};

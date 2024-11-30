"use client";

import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedProjects } from "@/app/api/wordpress/mappers/mapLocalizedProjects";
import { Post } from "@/app/api/wordpress/types/Post";
import { WordPressProjectsPage } from "@/app/api/wordpress/types/Projects";
import { Image, SmallCard, Template } from "@/app/components";

export const ProjectsSection = ({
  content,
  pageContent,
}: {
  content: Array<Post>;
  pageContent: WordPressProjectsPage;
}) => {
  const { language } = useLanguage();
  const localizedPageContent = mapLocalizedProjects(pageContent, language);

  const bgImages = (
    <>
      <Image
        src="https://i.ibb.co/ngZwpMr/Recurso-9-2x-8-3-2.png"
        alt="background image left"
        className="
        md:block hidden
        absolute
        -z-10
        top-40
        w-[450px]
        "
      />
      <Image
        src="https://i.ibb.co/p1YTzd5/Recurso-9-2x-8-2.png"
        alt="background image right"
        className="
        md:block hidden
        absolute
        -z-10
        top-1/2
        right-0
        w-[450px]
        "
      />
    </>
  );

  return (
    <div className="relative">
      {bgImages}
      <Template>
        <div className="w-full">
          <div className="pt-8 px-8 xl:px-52">
            <h1 className="text-3xl 3xl:text-5xl 4xl:text-6xl font-bold text-black pb-8 pl-4 lg:pb-16 lg:pl-16 xl:pl-64">
              {localizedPageContent.title}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8 place-items-center">
              {content.map((post: Post) => (
                <SmallCard
                  key={post.title}
                  imageSrc={post.image}
                  title={post.title}
                  alt={post.title}
                  link={`projects/${post.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Template>
    </div>
  );
};

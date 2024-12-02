"use client";

import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedProjects } from "@/app/api/wordpress/mappers/mapLocalizedProjects";
import { Post } from "@/app/api/wordpress/types/Post";
import { WordPressProjectsPage } from "@/app/api/wordpress/types/Projects";
import { Image, SmallCard, Template, Title } from "@/app/components";

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
      <Template fullScreen={false}>
        <div className="w-full px-6">
          <section className="w-full mt-8 mb-16 lg:px-8 lg:mt-16 xl:px-52 relative">
            <Title>{localizedPageContent.title}</Title>
          </section>
          <div className="pt-8 xl:px-52">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8 place-items-center">
              {content.map((post: Post) => (
                <SmallCard
                  key={post.title}
                  imageSrc={post.image}
                  title={post.title}
                  alt={post.title}
                  link={
                    post.redirect_url
                      ? post.redirect_url
                      : `concepts/${post.slug}`
                  }
                  className="2xl:!text-xl 4xl:!text-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      </Template>
    </div>
  );
};

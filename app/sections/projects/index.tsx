"use client";

import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedPosts } from "@/app/api/wordpress/mappers/mapLocalizedPosts";
import { mapLocalizedProjects } from "@/app/api/wordpress/mappers/mapLocalizedProjects";
import { LocalizedPost, Post } from "@/app/api/wordpress/types/Post";
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

  /*   console.log("🎈",{pageContent})
   */
  const localizedContent = mapLocalizedPosts(content, language);
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
          <section className="relative !w-full">
            <Image
              src="https://s3-alpha-sig.figma.com/img/2a31/5a2b/7b410d1a8da12063c8371d6b53df1c3a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdafrY-m06M~wOKzhxEwoXchMxFpt9hh21UkHyc7YkWGCtld3XdDdQJgI96KY6-r9EDFxSgS82bW7eSAZ9ByzuiCp75aCsmrzYMW~Cgoq8DHiocW2MPMmXANnuhgzF-hWKKb6sZ-jg2kFWoTaQakFf~CVN4KEwpjwuoK1Q-qK~B2fpWV9kpFXIsnQU1klwgC13B38Fy4soKV2RaCkqI86hGjeRNBMKm0KddshxcrmIFw6J9Hp9Ji~voOnLLJwNv2LqX7iK9hDFIcb3nKg7BLGmgHbUPWc8cfQoGhPr9VoQhWrjh09fUqG5H7QtzOKc2XXRpb5qFgZhZC7X1g9pCWNA__"
              alt="Background"
              className="w-full 4xs:h-[12rem] md:h-[18rem] 3xl:h-[24rem] 4xl:h-[36rem] object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-start bg-white bg-opacity-50">
              <h1 className="text-3xl 3xl:text-5xl 4xl:text-6xl font-bold text-black text-center pb-4 pl-4 lg:pb-8 lg:pl-16 xl:pl-64">
                {localizedPageContent.title}
              </h1>
            </div>
          </section>
          <div className="pt-8 px-8 xl:px-52">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8 place-items-center">
              {localizedContent.map((post: LocalizedPost) => (
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

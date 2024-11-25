"use client";

import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedPosts } from "@/app/api/wordpress/mappers/mapLocalizedPosts";
import { LocalizedPost, Post } from "@/app/api/wordpress/types/Post";
import { Image, SmallCard, Template } from "@/app/components";

export const ProjectsSection = ({ content }: { content: Array<Post> }) => {
  const { language } = useLanguage();

  const localizedContent = mapLocalizedPosts(content, language);

  return (
    <div className="relative">
      <Template>
        <div className="w-full">
          <section className="relative !w-full">
            <Image
              src="https://s3-alpha-sig.figma.com/img/2a31/5a2b/7b410d1a8da12063c8371d6b53df1c3a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdafrY-m06M~wOKzhxEwoXchMxFpt9hh21UkHyc7YkWGCtld3XdDdQJgI96KY6-r9EDFxSgS82bW7eSAZ9ByzuiCp75aCsmrzYMW~Cgoq8DHiocW2MPMmXANnuhgzF-hWKKb6sZ-jg2kFWoTaQakFf~CVN4KEwpjwuoK1Q-qK~B2fpWV9kpFXIsnQU1klwgC13B38Fy4soKV2RaCkqI86hGjeRNBMKm0KddshxcrmIFw6J9Hp9Ji~voOnLLJwNv2LqX7iK9hDFIcb3nKg7BLGmgHbUPWc8cfQoGhPr9VoQhWrjh09fUqG5H7QtzOKc2XXRpb5qFgZhZC7X1g9pCWNA__"
              alt="Background"
              className="w-full 4xs:h-[12rem] md:h-[18rem] 3xl:h-[24rem] 4xl:h-[36rem] object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-start bg-white bg-opacity-50">
              <h1 className="text-3xl 3xl:text-5xl 4xl:text-6xl font-bold text-black text-center pb-4 pl-4">
                PROJECTS
              </h1>
            </div>
          </section>
          <div className="pt-8 px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
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

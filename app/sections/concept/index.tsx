"use client";

import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedConcept } from "@/app/api/wordpress/mappers/mapLocalizedConcept";
import {
  ConceptItem,
  WordPressConceptPage,
} from "@/app/api/wordpress/types/Concept";
import { Image, Paragraph, SmallCard, Template, Title } from "@/app/components";

export const ConceptSection = ({
  pageContent,
}: {
  pageContent: WordPressConceptPage;
}) => {
  const { language } = useLanguage();
  const localizedPageContent = mapLocalizedConcept(pageContent, language);

  const bgImages = (
    <>
      <Image
        src="https://i.ibb.co/YNk4f9b/Clip-path-group-1.png"
        alt="background image left"
        className="
        md:hidden
        absolute
        -z-10
        right-0
        top-96
        xs:top-[33rem]
        w-[100px]
        "
      />
      <Image
        src="https://i.ibb.co/3htGs4G/Recurso-9-2x-8-4-1.png"
        alt="background image right"
        className="
        md:hidden
        absolute
        -z-10
        top-1/2
        right-0
        w-[350px]
        "
      />
      <Image
        src="https://i.ibb.co/hYrNmRY/Clip-path-group-2.png"
        alt="background desktop image 1 right"
        className="
        md:block hidden
        absolute
        -z-10
        top-1/3
        right-0
        w-[150px]
        xl:w-[200px]
        "
      />
      <Image
        src="https://i.ibb.co/H4Yjcbg/Recurso-9-2x-8-2-1.png"
        alt="background desktop image 2 right"
        className="
        md:block hidden
        absolute
        -z-10
        top-2/3
        right-0
        w-[300px]
        xl:w-[450px]
        "
      />
      <Image
        src="https://i.ibb.co/HNQGNdq/Recurso-9-2x-8-3-3.png"
        alt="background desktop image right"
        className="
        md:block hidden
        absolute
        -z-10
        top-1/2
        left-0
        w-[300px]
        xl:w-[450px]
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
            <Paragraph className="pt-6 lg:pt-12">
              {localizedPageContent.description}
            </Paragraph>
          </section>
          <div className="pt-8 xl:px-52">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8 place-items-center">
              {localizedPageContent.items.map((post: ConceptItem) => (
                <SmallCard
                  key={post.title}
                  imageSrc={post.image}
                  title={post.title}
                  alt={post.title}
                  link={post.link}
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

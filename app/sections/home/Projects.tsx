import Image from "next/image";

import { SmallCard, Template, Divider, Title, BigCard } from "../../components";
import { Post } from "@/app/api/wordpress/types/Post";
import MarkdownWrapper from "@/app/components/MarkdownWrapper";

type ProjectsProps = {
  data: {
    title: string;
    description: string;
    cta_label: string;
    more_image: string;
  };
  posts: Array<Post>;
};

export function Projects({ data, posts }: ProjectsProps) {
  const filteredPosts = posts
    .filter((post) => post.display_on_homepage === true)
    .slice(0, 3);

  const BgImage = (
    <Image
      src="https://i.ibb.co/8PFqG48/Group-31.png"
      alt="Tree background desktop"
      className="
      absolute 
      z-10 
      md:block 
      hidden
      top-60 
      md:w-[80px]
      md:right-0
      lg:w-[80px] 
      lg:right-0 
      xl:right-0 
      xl:top-48 
      3xl:w-[150px] 
      "
      width={100}
      height={100}
    />
  );

  const ProjectsTitle = (
    <Title className="mt-8 sm:mt-0 mb-4 4xs:mb-12">
      {data.title.toUpperCase()}
    </Title>
  );

  const ProjectsDescription = (
    <div className="mb-8 4xs:mb-12">
      <MarkdownWrapper content={data.description}></MarkdownWrapper>
    </div>
  );

  return (
    <div className="relative">
      {BgImage}
      <Template className="text-left">
        <div className="w-full relative 4xs:py-24">
          <div className="max-w-6xl container mx-auto px-8 md:px-20 2xl:px-0">
            {ProjectsTitle}
            {ProjectsDescription}
            {/* SmallCards for the secondary posts */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 place-items-center">
              {filteredPosts.map((post, index) => (
                <SmallCard
                  key={post.title}
                  imageSrc={post.image || ""}
                  title={post.title || "No title available"}
                  alt={`Project ${index + 2}`}
                  link={`projects/${post.slug}`}
                />
              ))}
              <BigCard
                key="projects-more-card"
                imageSrc={data.more_image}
                title={data.cta_label.toUpperCase()}
                alt="projects more card"
                link={`/projects`}
              />
            </div>
          </div>
        </div>
        <Divider className="absolute bottom-0 !w-2/3" />
      </Template>
    </div>
  );
}

import Image from "next/image";

import {
  BigCard,
  SmallCard,
  GradientArrowButton,
  GradientUnderlineButton,
  Template,
  Divider,
  Paragraph,
  Title,
} from "../../components";
import { LocalizedPost } from "@/app/api/wordpress/types/Post";

type ProjectsProps = {
  data: {
    title: string;
    description: string;
    cta_label: string;
  };
  posts: Array<LocalizedPost>;
};

export function Projects({ data, posts }: ProjectsProps) {
  const mainPost = posts[0]; // The first post for the BigCard
  const secondaryPosts = posts.slice(1, 5); // The next 4 posts for SmallCards

  const BgImage = (
    <Image
      src="https://i.ibb.co/8PFqG48/Group-31.png"
      alt="Tree background desktop"
      className="absolute 4xl:w-[150px] lg:w-[80px] lg:right-0 xl:right-0 top-60 xl:top-48 z-10 md:block hidden"
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
    <Paragraph className="mb-8 4xs:mb-12">{data.description}</Paragraph>
  );

  return (
    <div className="relative">
      {BgImage}
      <Template className="text-left">
        <div className="w-full relative 4xs:py-24">
          <div className="max-w-6xl container mx-auto  px-8 md:px-20 2xl:px-0">
            {ProjectsTitle}
            {ProjectsDescription}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
              {/* BigCard for the main post */}
              {mainPost && (
                <BigCard
                  imageSrc={mainPost.image || ""}
                  title={mainPost.title || "No title available"}
                  alt="Main Project"
                  className="col-span-5 hidden lg:block"
                  link={`projects/${mainPost.slug}`}
                />
              )}

              {/* SmallCards for the secondary posts */}
              <div className="col-span-7 grid sm:grid-cols-2 gap-x-16 gap-y-5 place-items-center">
                {secondaryPosts.map((post, index) => (
                  <SmallCard
                    key={post.title}
                    imageSrc={post.image || ""}
                    title={post.title || "No title available"}
                    alt={`Project ${index + 2}`}
                    link={`projects/${post.slug}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end pb-8 sm:pb-0">
              <GradientUnderlineButton>
                <GradientArrowButton href="/projects">
                  {data.cta_label.toUpperCase()}
                </GradientArrowButton>
              </GradientUnderlineButton>
            </div>
          </div>
        </div>
        <Divider className="absolute bottom-0 !w-2/3" />
      </Template>
    </div>
  );
}

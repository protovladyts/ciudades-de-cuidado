"use client";

import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedPosts } from "@/app/api/wordpress/mappers/mapLocalizedPosts";
import { LocalizedPost, Post } from "@/app/api/wordpress/types/Post";
import { SmallCard, Template } from "@/app/components";

export const ProjectsSection = ({ content }: { content: Array<Post> }) => {
  const { language } = useLanguage();

  const localizedContent = mapLocalizedPosts(content, language);

  return (
    <div className="relative">
      <Template>
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
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
      </Template>
    </div>
  );
};

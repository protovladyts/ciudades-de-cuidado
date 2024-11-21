"use client";

import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedPosts } from "@/app/api/wordpress/mappers/mapLocalizedPosts";
import { LocalizedPost, Post } from "@/app/api/wordpress/types/Post";
import { SmallCard, Template } from "@/app/components";
import Link from "next/link";

export const ProjectsSection = ({ content }: { content: Array<Post> }) => {
  const { language } = useLanguage();

  const localizedContent = mapLocalizedPosts(content, language);

  return (
    <div className="relative">
      <Template>
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
          {localizedContent.map((post: LocalizedPost) => (
            <Link key={post.title} href={`projects/${post.slug}`}>
              <SmallCard
                imageSrc={post.image}
                title={post.title}
                alt={post.title}
              />
            </Link>
          ))}
        </div>
      </Template>
    </div>
  );
};

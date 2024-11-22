"use client";

import { useLanguage } from "@/app/LanguageContext";
import { mapLocalizedPosts } from "@/app/api/wordpress/mappers/mapLocalizedPosts";
import { Post } from "@/app/api/wordpress/types/Post";
import { Image, Template } from "@/app/components";
import ReactMarkdown from "react-markdown";

export const ProjectSection = ({ content }: { content: Post }) => {
  const { language } = useLanguage();

  const localizedContent = mapLocalizedPosts([content], language);
  const localizedPost = localizedContent[0];

  return (
    <Template className="container mx-auto px-4" fullScreen={true}>
      <div className="pt-40">
        <section className="relative">
          <Image
            src={`${localizedPost.image}`}
            alt="Background"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-3xl font-bold text-white text-center">
              {localizedPost.title}
            </h1>
          </div>
        </section>
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="md:col-span-2 space-y-4">
              <ReactMarkdown className="prose lg:prose-xl">
                {localizedPost.text}
              </ReactMarkdown>
            </article>

            <aside className="space-y-4">
              <h3 className="text-xl font-bold">Otras entradas</h3>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow"
                >
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Thumbnail"
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </Template>
  );
};

"use client";

import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import { basicFont } from "@/app/config";

interface MarkdownWrapperProps {
  content: string;
}

const markdownComponents: Components = {
  h1: ({ ...props }) => (
    <h1
      className="text-4xl 3xl:text-5xl 3xl:mb-6 3xl:mt-8 4xl:text-6xl font-bold mt-4 mb-2"
      {...props}
    >
      {props.children}
    </h1>
  ),
  h2: ({ ...props }) => (
    <h2
      className="text-3xl 3xl:text-4xl 3xl:mb-4 3xl:mt-6 4xl:text-5xl font-semibold mt-3 mb-2"
      {...props}
    >
      {props.children}
    </h2>
  ),
  h3: ({ ...props }) => (
    <h3
      className="text-2xl 3xl:text-3xl 3xl:mb-6 3xl:mt-6 4xl:text-4xl font-medium mt-2 mb-2"
      {...props}
    >
      {props.children}
    </h3>
  ),
  p: ({ ...props }) => (
    <p className="leading-relaxed 3xl:text-xl 4xl:text-2xl mb-4" {...props} />
  ),
  a: ({ ...props }) => (
    <a className="text-blue-500 underline hover:text-blue-700" {...props}>
      {props.children}
    </a>
  ),
  ul: ({ ...props }) => (
    <ul className="list-disc pl-6 mb-4 3xl:text-xl 4xl:text-2xl" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol
      className="list-decimal pl-6 mb-4 3xl:text-xl 4xl:text-2xl"
      {...props}
    />
  ),
  blockquote: ({ ...props }) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-500 3xl:text-xl 4xl:text-2xl"
      {...props}
    />
  ),
  img: ({ ...props }) => (
    <img className="rounded-lg shadow-lg my-4" {...props} />
  ),
};

const MarkdownWrapper: React.FC<MarkdownWrapperProps> = ({ content }) => {
  return (
    <div className={`prose lg:prose-xl max-w-none ${basicFont.className}`}>
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownWrapper;

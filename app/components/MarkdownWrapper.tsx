"use client";

import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import { basicFont } from "@/app/config";


interface MarkdownWrapperProps {
  content: string;
}

const markdownComponents: Components = {
  h1: ({ ...props }) => (
    <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-2" {...props}>
      {props.children}
    </h1>
  ),
  h2: ({ ...props }) => (
    <h2 className="text-3xl font-semibold text-gray-700 mt-3 mb-2" {...props}>
      {props.children}
    </h2>
  ),
  h3: ({ ...props }) => (
    <h3 className="text-2xl font-medium text-gray-600 mt-2 mb-2" {...props}>
      {props.children}
    </h3>
  ),
  p: ({ ...props }) => (
    <p className="text-gray-600 leading-relaxed mb-4" {...props} />
  ),
  a: ({ ...props }) => (
    <a className="text-blue-500 underline hover:text-blue-700" {...props}>
      {props.children}
    </a>
  ),
  ul: ({ ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
  ol: ({ ...props }) => (
    <ol className="list-decimal pl-6 mb-4" {...props} />
  ),
  blockquote: ({ ...props }) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-500"
      {...props}
    />
  ),
  img: ({ ...props }) => (
    <img className="rounded-lg shadow-lg my-4" {...props} />
  ),
  code: ({ ...props }) => (
    <code
      className="bg-gray-100 text-sm text-red-500 px-2 py-1 rounded"
      {...props}
    />
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

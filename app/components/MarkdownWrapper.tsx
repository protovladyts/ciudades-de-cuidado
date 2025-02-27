"use client";

import React, { useMemo } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import { basicFont } from "@/app/config";
import { GradientLink } from "./Gradient/GradientLink";
import { Paragraph } from "./index";
import { Dropdown } from "./Dropdown";

interface MarkdownWrapperProps {
  content: string;
}

const DROPDOWN_REGEX = /:::{"([^"]+)"}\s*([\s\S]*?):::/g;

const processNestedDropdowns = (content: string, level = 1): React.ReactNode => {
  if (!content.includes(":::{")) {
    return <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>;
  }

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  const regex = new RegExp(DROPDOWN_REGEX.source, "g");
  
  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <ReactMarkdown key={`md-${lastIndex}`} components={markdownComponents}>
          {content.substring(lastIndex, match.index)}
        </ReactMarkdown>
      );
    }

    const title = match[1];
    const dropdownContent = match[2].trim();

    // Procesar contenido anidado
    const processedContent = processNestedDropdowns(dropdownContent, level + 1);

    // Añadir el dropdown
    parts.push(
      <Dropdown key={`dropdown-${match.index}`} title={title} level={level}>
        {processedContent}
      </Dropdown>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < content.length) {
    parts.push(
      <ReactMarkdown key={`md-${lastIndex}`} components={markdownComponents}>
        {content.substring(lastIndex)}
      </ReactMarkdown>
    );
  }

  return parts;
};

const markdownComponents: Components = {
  h1: ({ ...props }) => (
    <h1 className="text-4xl 3xl:text-5xl 3xl:mb-6 3xl:mt-8 4xl:text-6xl font-bold mt-4 mb-2" {...props}>
      {props.children}
    </h1>
  ),
  h2: ({ ...props }) => (
    <h2 className="text-3xl 3xl:text-4xl 3xl:mb-4 3xl:mt-6 4xl:text-5xl font-semibold mt-3 mb-2" {...props}>
      {props.children}
    </h2>
  ),
  h3: ({ ...props }) => (
    <h3 className="text-2xl 3xl:text-3xl 3xl:mb-6 3xl:mt-6 4xl:text-4xl font-medium mt-2 mb-2" {...props}>
      {props.children}
    </h3>
  ),
  p: ({ ...props }) => <Paragraph className="mb-4">{props.children}</Paragraph>,
  a: ({ ...props }) => (
    <GradientLink href={props.href ?? ""} {...props}>
      {props.children}
    </GradientLink>
  ),
  ul: ({ ...props }) => <ul className="list-disc pl-6 mb-4 3xl:text-xl 4xl:text-2xl" {...props} />,
  ol: ({ ...props }) => <ol className="list-decimal pl-6 mb-4 3xl:text-xl 4xl:text-2xl" {...props} />,
  blockquote: ({ ...props }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-500 3xl:text-xl 4xl:text-2xl" {...props} />
  ),
  img: ({ ...props }) => <img className="rounded-lg shadow-lg my-4" {...props} />,
};

const MarkdownWrapper: React.FC<MarkdownWrapperProps> = ({ content }) => {
  // Procesar el contenido para detectar y transformar los dropdowns
  const processedContent = useMemo(() => processNestedDropdowns(content), [content]);

  // Renderizar el contenido procesado
  return <div className={`prose lg:prose-xl max-w-none ${basicFont.className}`}>{processedContent}</div>;
};

export default MarkdownWrapper;

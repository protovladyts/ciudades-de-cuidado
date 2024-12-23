"use client";

import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import { basicFont } from "@/app/config";
import { GradientLink } from "./Gradient/GradientLink";
import { CollapsibleList, Paragraph } from "./index";

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
  p: ({ ...props }) => <Paragraph className="mb-4">{props.children}</Paragraph>,
  a: ({ ...props }) => (
    <GradientLink href={props.href ?? ""} {...props}>
      {props.children}
    </GradientLink>
  ),
  ul: ({ ...props }) => {
    const children = React.Children.toArray(props.children).filter(
      (child) => child !== "\n"
    );

    if (
      children.length === 2 &&
      React.isValidElement(children[0]) &&
      Array.isArray(children[0].props.children)
    ) {
      const liItems = children.map((child) => {
        if (child && React.isValidElement(child) && child.props?.children) {
          if (Array.isArray(child.props.children)) {
            const el = child.props.children.filter(
              (nestedChild: unknown) => nestedChild !== "\n"
            )[0];
            return `${el.key}#.-${el.props.children}`;
          }
          return child.props.children;
        }
        return null;
      });
      if (liItems.every(Boolean)) {
        return <CollapsibleList items={liItems} />;
      }
    }

    return (
      <ul className="list-disc pl-6 mb-4 3xl:text-xl 4xl:text-2xl" {...props} />
    );
  },
  ol: ({ ...props }) => {
    const children = React.Children.toArray(props.children).filter(
      (child) => child !== "\n"
    );

    if (
      children.length === 2 &&
      React.isValidElement(children[0]) &&
      Array.isArray(children[0].props.children)
    ) {
      const liItems = children.map((child) => {
        if (child && React.isValidElement(child) && child.props.children) {
          if (Array.isArray(child.props.children)) {
            return child.props.children.filter(
              (nestedChild: unknown) => nestedChild !== "\n"
            )[0].props.children;
          }
          return child.props.children;
        }
        return null;
      });
      if (liItems.every(Boolean)) {
        return <CollapsibleList items={liItems} />;
      }
    }

    return (
      <ol
        className="list-decimal pl-6 mb-4 3xl:text-xl 4xl:text-2xl"
        {...props}
      />
    );
  },
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

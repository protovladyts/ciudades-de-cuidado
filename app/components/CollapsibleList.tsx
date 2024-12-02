"use client";
import React, { useState } from "react";

interface CollapsibleListProps {
  items: Array<string>;
}

const headingStyles = {
  h1: (text: string) => (
    <h1 className="text-4xl 3xl:text-5xl 3xl:mb-6 3xl:mt-8 4xl:text-6xl font-bold mt-4 mb-2">
      {text}
    </h1>
  ),
  h2: (text: string) => (
    <h2 className="text-3xl 3xl:text-4xl 3xl:mb-4 3xl:mt-6 4xl:text-5xl font-semibold mt-3 mb-2">
      {text}
    </h2>
  ),
  h3: (text: string) => (
    <h3 className="text-2xl 3xl:text-3xl 3xl:mb-6 3xl:mt-6 4xl:text-4xl font-medium mt-2 mb-2">
      {text}
    </h3>
  ),
};

function selectHeadingStyle(key: string, title: string) {
  if (key === "h4-0") return headingStyles.h3(title);
  if (key === "h3-0") return headingStyles.h3(title);
  if (key === "h2-0") return headingStyles.h2(title);
  return headingStyles.h1(title);
}

export const CollapsibleList: React.FC<CollapsibleListProps> = ({ items }) => {
  const [key, title] = items[0].split("#.-");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <li className="list-none py-2">
      <div
        className="cursor-pointer font-bold text-lg flex items-center"
        onClick={toggleExpand}
      >
        <span className="flex align-center">
          {isExpanded
            ? selectHeadingStyle(key, `▼ ${title}`)
            : selectHeadingStyle(key, `▶ ${title}`)}
        </span>
      </div>
      {isExpanded && <div className="pl-6 pt-2">{items[1]}</div>}
    </li>
  );
};

"use client";

import React, { useState } from "react";

export function GradientArrowButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="inline-flex items-center text-sm 4xs:text-[0.7rem] font-semibold transition-colors duration-200 ease-in-out hover:text-gray-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <svg
        className="ml-2 w-5 h-5 transition-opacity duration-200 ease-in-out"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5L21 12M21 12L14 19M21 12H3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isHovered ? "opacity-0" : "opacity-100"}
        />
        <path
          d="M14 5L21 12M21 12L14 19M21 12H3"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isHovered ? "opacity-100" : "opacity-0"}
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E551C7" />
            <stop offset="0.33" stopColor="#D47C45" />
            <stop offset="0.66" stopColor="#E5D548" />
            <stop offset="1" stopColor="#83F42F" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
}

"use client"

import { useState } from "react";

export function BorderBox({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        relative
        px-6 py-2
        rounded-full
        transition-all duration-300 ease-in-out
        ${isHovered ? "border-transparent" : "border-2 border-[#EBEAED]"}
        text-gray-800
        overflow-hidden
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`
          absolute inset-0 
          rounded-full 
          transition-opacity duration-300 ease-in-out
          bg-gradient-to-r from-[#E551C7] via-[#D47C45] via-[#E5D548] to-[#83F42F]
          opacity-0
          ${isHovered ? "opacity-100" : ""}
        `}
      />
      <span
        className={`
          absolute inset-[2px]
          rounded-full 
          bg-white
          transition-all duration-300 ease-in-out
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
      />
    </button>
  );
}

"use client";

import { useState } from "react";

export function GradientUnderlineButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative bg-transparent bg-white text-black px-4 py-2 rounded transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#E551C7] via-[#D47C45] via-[#E5D548] to-[#83F42F] transition-all duration-300 ease-in-out ${
          isHovered ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      ></span>
    </button>
  );
}

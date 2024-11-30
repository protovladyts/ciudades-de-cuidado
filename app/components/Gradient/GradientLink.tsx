import React from "react";

interface GradientLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const GradientLink: React.FC<GradientLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <a
      href={href}
      className={`bg-gradient-to-r from-[#E551C7] via-[#D47C45] via-[#E5D548] to-[#83F42F] text-transparent bg-clip-text hover:opacity-90 transition-opacity duration-200 ${className}`}
    >
      {children}
    </a>
  );
};

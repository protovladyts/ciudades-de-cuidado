import { ReactNode } from "react";

export const Paragraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`
        4xs:text-sm
        3xs:text-base
        xs:text-base 
        sm:text-base
        md:text-base
        2xl:text-lg
        3xl:text-xl
        4xl:text-2xl
        ${className ?? ""}`}
    >
      {children}
    </p>
  );
};

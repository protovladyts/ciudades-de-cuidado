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
        text-xs
        4xs:text-[0.6rem] 4xs:leading-4
        3xs:text-sm
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

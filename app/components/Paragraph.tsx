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
        xs:text-lg
        sm:text-lg
        md:text-lg
        lg:text-lg
        2xl:text-lg
        3xl:text-xl
        4xl:text-2xl
        ${className ?? ""}`}
    >
      {children}
    </p>
  );
};

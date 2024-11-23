import { titleFont } from "../config";

export const Title = ({
  children,
  className,
}: Readonly<{
  children: string;
  className?: string;
}>) => {
  return (
    <h1
      className={`${className ?? ""}
        4xs:text-lg
        3xs:text-xl
        xs:text-2xl
        sm:!text-3xl
        md:!text-4xl
        lg:!text-4xl
        xl:!text-4xl
        2xl:!text-5xl
        3xl:!text-5xl
        4xl:!text-6xl
        font-bold
        tracking-tight
        ${titleFont.className}
        `}
    >
      {children}
    </h1>
  );
};

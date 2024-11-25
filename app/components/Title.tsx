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
        xs:text-4xl 
        sm:!text-4xl
        md:!text-4xl
        lg:!text-5xl
        xl:!text-5xl
        2xl:!text-6xl
        3xl:!text-6xl
        4xl:!text-7xl
        font-bold
        tracking-tight
        break-words
        w-full
        ${titleFont.className}
        `}
    >
      {children}
    </h1>
  );
};

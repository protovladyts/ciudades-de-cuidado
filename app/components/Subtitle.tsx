import { titleFont } from "../config";

export const Subtitle = ({
  children,
  className,
}: Readonly<{
  children: string;
  className?: string;
}>) => {
  return (
    <h2
      className={`${titleFont.className}
      text-2xl
      4xs:text-base
      3xs:text-lg
      sm:text-2xl
      md:text-3xl
      lg:text-3xl
      xl:text-3xl
      2xl:text-4xl
      3xl:text-5xl
      font-bold
      ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: children }}
    ></h2>
  );
};

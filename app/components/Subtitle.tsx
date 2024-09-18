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
      className={`${titleFont.className} text-5xl lg:text-8xl drop-shadow-2xl ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: children }}
    ></h2>
  );
};

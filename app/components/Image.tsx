export const Image = ({
  src,
  className,
  alt,
}: Readonly<{
  src: string;
  className?: string;
  alt: string;
}>) => {

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      className={`${className ?? ""}`}
      alt={alt}
    />
  );
};

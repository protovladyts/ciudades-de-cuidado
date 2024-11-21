export function GenericSection({
  children,
  backgroundImage,
  backgroundColor,
  className,

}: {
  readonly children: React.ReactNode;
  readonly backgroundImage?: string;
  readonly backgroundColor?: string;
  readonly className?: string;
}) {
  return (
    <section
      className={`bg-cover bg-center  ${className ?? ""}`}
      style={{
        backgroundImage: backgroundImage,
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </section>
  );
}

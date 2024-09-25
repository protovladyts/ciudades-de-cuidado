import { GenericSection } from "./GenericSection";

export function Template({
  children,
  backgroundImage,
  backgroundColor,
  noHScreenInSm = false,
  className,
}: Readonly<{
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  noHScreenInSm?: boolean;
  className?: string;
}>) {
  return (
    <GenericSection
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      className={className}
      noHScreenInSm={noHScreenInSm}
    >
      <div className="w-full container">
        <div className="flex items-center justify-center h-full flex-col">
          {children}
        </div>
      </div>
    </GenericSection>
  );
}

import { GenericSection } from "./GenericSection";

export function Template({
  children,
  backgroundImage,
  backgroundColor,
  fullScreen,
  className,
}: Readonly<{
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  fullScreen?: boolean;
  className?: string;
}>) {
  return (
    <GenericSection
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      className={className}

    >
      <div className={`w-full ${fullScreen ? "h-screen" : "min-h-screen"}`}>
        <div className="flex items-center justify-center">
          {children}
        </div>
      </div>
    </GenericSection>
  );
}
import { basicFont } from "@/app/config";

export function GenericSection({
  children,
  backgroundImage,
  backgroundColor,
  className,
  noHScreen = false,
}: {
  readonly children: React.ReactNode;
  readonly backgroundImage?: string;
  readonly backgroundColor?: string;
  readonly className?: string;
  readonly noHScreen?: boolean;
}) {
  return (
    <section
      className={`${noHScreen ? "" : "h-screen"} ${className ?? ""} ${basicFont.className}`}
      style={{
        backgroundImage: backgroundImage,
        backgroundColor: backgroundColor,
      }}
    >
      <div className="flex items-center justify-center  h-full flex-col">
        {children}
      </div>
    </section>
  );
}

import Image from "next/image";

interface CardGrandeProps {
  imageSrc: string;
  title: string;
  alt: string;
  className?: string;
}

export function BigCard({ imageSrc, title, alt, className }: CardGrandeProps) {
  console.log({imageSrc})
  return (
    <div className={`relative h-full ${className}`}>
      <div className="absolute inset-0 rounded-3xl bg-black/20 blur-xl -z-10 scale-[0.95] translate-y-4" />
      <div className="relative h-full w-full overflow-hidden rounded-3xl">
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 p-6 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-4xl font-bold text-white drop-shadow-lg">{title}</h3>
        </div>
      </div>
    </div>
  );
}

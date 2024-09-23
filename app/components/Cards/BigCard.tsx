import Image from "next/image";

interface CardGrandeProps {
  imageSrc: string;
  title: string;
  alt: string;
  className?: string;
}

export function BigCard({ imageSrc, title, alt, className }: CardGrandeProps) {
  return (
    <div
      className={`relative shadow-xl rounded-lg h-full min-h-[400px]  ${className}`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute w-full h-full p-6 text-white bg-black bg-opacity-40">
        <div className="top-64 w-2/3 relative flex items-center justify-center">
          <h3 className="text-4xl font-bold drop-shadow-2xl">{title}</h3>
        </div>
      </div>
    </div>
  );
}

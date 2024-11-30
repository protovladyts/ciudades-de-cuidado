import Image from "next/image";
import Link from "next/link";

interface CardPequenaProps {
  imageSrc: string;
  title: string;
  alt: string;
  link: string;
  className?: string;
}

export function SmallCard({
  imageSrc,
  title,
  alt,
  link,
  className,
}: CardPequenaProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl w-full sm:w-4/5 transform transition-transform duration-300 hover:scale-105">
      <Link href={link}>
        <div className="relative lg:h-40 sm:h-40 4xs:h-20">
          <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover" />
        </div>
        <div className="lg:h-14 sm:h-36 4xs:h-10">
          <h3
            className={`font-bold px-4 pt-6 4xl:text-xl lg:text-base 4xs:pt-2 4xs:text-sm ${
              className ?? ""
            }`}
          >
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
}

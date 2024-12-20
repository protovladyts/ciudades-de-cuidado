import { Image } from "@/app/components";
import Link from "next/link";

export const RelatedCard = ({
  image,
  title,
  link,
}: {
  image: string;
  title: string;
  link: string;
}) => {
  return (
    <div className="3xl:text-2xl 4xl:text-3xl relative w-full h-40 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <Link href={link}>
        {/* Imagen que ocupa tdo el rectángulo */}
        <Image
          src={image}
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />

        {/* Capa semitransparente con el título */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h4 className="text-white font-semibold text-center px-4">{title}</h4>
        </div>
      </Link>
    </div>
  );
};

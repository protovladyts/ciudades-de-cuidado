import React from "react";
import { FaXTwitter, FaLink, FaInstagram, FaWhatsapp } from "react-icons/fa6";


import Image from "next/image";

const GradientSeparator = () => (
  <div className="w-full h-0.5 bg-gradient-to-r from-[#E551C7] via-[#D47C45] via-[#E5D548] to-[#83F42F] mt-0 md:mt-12 lg:mt-6" />
);

const CircleLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href="#"
    className="text-[#383D38] hover:text-[#5a5c5a] border-[2.5px] rounded-full p-1 border-[#383D38] hover:border-[#5a5c5a] transition-colors"
  >
    {children}
  </a>
);

const ContactLinks = ({className}:{className?:string}) => {
  return (
    <div className={`grid grid-cols-4 gap-2 mb-4 ${className}`}>
      <CircleLink>
        <span className="sr-only">Instagram</span>
        <FaInstagram className="h-10 w-10 md:h-6 md:w-6" />
      </CircleLink>
      <CircleLink>
        <span className="sr-only">WhatsApp</span>
        <FaWhatsapp className="h-10 w-10 md:h-6 md:w-6" />
      </CircleLink>
      <CircleLink>
        <span className="sr-only">Twitter</span>
        <FaXTwitter className="h-10 w-10 md:h-6 md:w-6" />
      </CircleLink>
      <CircleLink>
        <span className="sr-only">Website</span>
        <FaLink className="h-10 w-10 md:h-6 md:w-6" />
      </CircleLink>
    </div>
  );
};

export function Footer() {
  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="https://i.ibb.co/QH9ZYRG/Recurso-1-2x-3-3.png"
          alt="Background"
          width={600}
          height={460}
          objectFit="cover"
          className="absolute opacity-95 -rotate-12 right-1/4"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
          <div className="w-full grid grid-cols-12 place-items-center md:place-items-start">
            <ContactLinks className="col-span-8" />

            <div className="flex sm:hidden col-span-4 place-self-end">
              <Image
                src="https://i.ibb.co/8PFqG48/Group-31.png"
                alt="Tree"
                width={24}
                height={24}
                layout="responsive"
                className="object-contain"
              />
            </div>
          </div>

          <GradientSeparator />
          <p className="mt-4 text-xs md:text-base">
            La Rosa-Luxemburg-Stiftung es una organización sin ánimo de lucro de
            formación política, de izquierdas y activa a nivel internacional,
            cercana al partido DIE LINKE en Alemania. Trabajamos por un mundo
            más justo basado en la solidaridad internacional.
          </p>
          <p className="mt-4 text-xs md:text-base">
            Contacto: Alex Wischnewski, alex.wischnewski@rosalux.org
          </p>
        </div>

        <div className="md:w-1/3 hidden sm:block">
          <Image
            src="https://i.ibb.co/fp5dFBj/Tren-3.png"
            alt="Ilustración de estación de tren"
            width={300}
            height={200}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
      </div>
    </footer>
  );
}

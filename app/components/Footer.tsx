"use client";
import React from "react";
import { FaXTwitter, FaLink, FaInstagram, FaWhatsapp } from "react-icons/fa6";

import Image from "next/image";
import { useLanguage } from "../LanguageContext";
import { mapLayoutData } from "../api/wordpress/mappers/mapLayoutData";
import { WordPressLayout } from "../api/wordpress/types/WordPressLayout";

const GradientSeparator = () => (
  <div className="w-full h-0.5 bg-gradient-to-r from-[#E551C7] via-[#D47C45] via-[#E5D548] to-[#83F42F] mt-0 md:mt-12 lg:mt-6" />
);

const CircleLink = ({ children }: { children: React.ReactNode }) => (
  <a
    href="#"
    className="border-[2.5px] rounded-full border-[#383D38]  text-[#383D38] hover:text-[#5a5c5a] min-[360]:border-[2.5px] min-[360]:rounded-full p-1 min-[360]:border-[#383D38] hover:border-[#5a5c5a] transition-colors"
  >
    {children}
  </a>
);

const ContactLinks = ({ className }: { className?: string }) => {
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

export function Footer({ content }: { content: WordPressLayout }) {
  const { language } = useLanguage();
  const { footer } = mapLayoutData(content);
  const localizedFooter = footer[language];

  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8">
      <Image
        src={"https://i.ibb.co/Q8D8Lj1/Group-69.png"}
        alt="Background"
        width={600}
        height={500}
        className="-z-10 absolute right-0 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/PQ1Dcbv/Casas-8.png"}
        alt="Background"
        width={150}
        height={150}
        className="z-10 absolute right-0 -top-24 md:hidden block"
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 3xl:w-3/4 mb-8 md:mb-0 md:pr-8 xl:ml-52 2xl:ml-36 3xl:ml-0">
          <div className="w-full grid grid-cols-12 place-items-center md:place-items-start">
            <ContactLinks className="col-span-8" />

            <div className="flex md:hidden col-span-4 place-self-end">
              <Image
                src="https://i.ibb.co/Q8D8Lj1/Group-69.png"
                alt="Tree"
                width={24}
                height={24}
                layout="responsive"
                className="object-contain  md:block hidden"
              />
            </div>
          </div>

          <GradientSeparator />
          <p className="mt-4 text-xs md:text-base">{localizedFooter.text}</p>
          <p className="mt-4 text-xs md:text-base">{localizedFooter.contact}</p>
        </div>
      </div>
    </footer>
  );
}

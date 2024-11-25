"use client";

import React from "react";
import { FaXTwitter, FaLink, FaInstagram, FaWhatsapp } from "react-icons/fa6";

import Image from "next/image";
import { useLanguage } from "../LanguageContext";
import { mapLayoutData } from "../api/wordpress/mappers/mapLayoutData";
import { WordPressLayout } from "../api/wordpress/types/WordPressLayout";
import { Paragraph } from "./Paragraph";

// Separadores y componentes estilizados
const GradientSeparator = () => (
  <div className="w-full h-0.5 bg-gradient-to-r from-[#E551C7] via-[#D47C45] via-[#E5D548] to-[#83F42F] mt-0 md:mt-12 lg:mt-6" />
);

const CircleLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={label}
    className="border-[2.5px] rounded-full border-[#383D38]  text-[#383D38] hover:text-[#5a5c5a] min-[360]:border-[2.5px] min-[360]:rounded-full p-1 min-[360]:border-[#383D38] hover:border-[#5a5c5a] transition-colors"
  >
    {children}
  </a>
);

const ContactLinks = ({ className }: { className?: string }) => {
  const links = [
    { href: "#", label: "Instagram", icon: <FaInstagram /> },
    { href: "#", label: "WhatsApp", icon: <FaWhatsapp /> },
    { href: "#", label: "Twitter", icon: <FaXTwitter /> },
    { href: "#", label: "Website", icon: <FaLink /> },
  ];

  return (
    <div className={`grid grid-cols-4 gap-4 mb-4 ${className}`}>
      {links.map(({ href, label, icon }) => (
        <CircleLink key={label} href={href} label={label}>
          <span className="sr-only">{label}</span>
          {React.cloneElement(icon, {
            className:
              "h-10 w-10 3xl:h-12 3xl:w-12 md:h-8 md:w-8 4xs:h-8 4xs:w-8",
          })}
        </CircleLink>
      ))}
    </div>
  );
};

// Footer principal
export function Footer({ content }: { content: WordPressLayout }) {
  const { language } = useLanguage();
  const { footer } = mapLayoutData(content);
  const localizedFooter = footer[language];

  // Imágenes de fondo del Footer
  const BackgroundImages = (
    <>
      <Image
        src={"https://i.ibb.co/Q8D8Lj1/Group-69.png"}
        alt="Background footer desktop"
        width={600}
        height={500}
        className="-z-10 absolute 4xl:w-[700px] xl:right-0 md:block hidden lg:w-[400px] lg:right-20 lg:-bottom-24"
      />
      <Image
        src={"https://i.ibb.co/PQ1Dcbv/Casas-8.png"}
        alt="Background"
        width={150}
        height={150}
        className="
          z-10
          md:hidden block
          absolute
          4xs:w-[80px]
          4xs:-top-4
          4xs:right-0
        "
        /*           3xs:w-[80px]
          3xs:-top-6
          h-667:w-[80px]
          h-667:-top-6
          h-640:w-[80px]
          h-640:-top-8
          right-0
          -top-24 */
      />
    </>
  );


  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8">
      {/* Imágenes de fondo */}
      {BackgroundImages}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 lg:w-3/4 xl:w-3/5 3xl:w-3/4 mb-8 md:mb-0 md:pr-8 lg:ml-16 xl:ml-52 2xl:ml-36 3xl:ml-0">
          <div className="w-full grid grid-cols-12 place-items-start">
            <ContactLinks className="col-span-10" />
          </div>

          <GradientSeparator />

          {/* Texto localizado */}
          <Paragraph className="mt-4">{localizedFooter.text}</Paragraph>
          <Paragraph className="mt-4">{localizedFooter.contact}</Paragraph>
        </div>
      </div>
    </footer>
  );
}

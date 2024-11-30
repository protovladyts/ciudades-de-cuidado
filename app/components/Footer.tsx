"use client";

import React from "react";

import Image from "next/image";
import { useLanguage } from "../LanguageContext";
import { mapLayoutData } from "../api/wordpress/mappers/mapLayoutData";
import { WordPressLayout } from "../api/wordpress/types/WordPressLayout";
import MarkdownWrapper from "./MarkdownWrapper";

// Separadores y componentes estilizados
const GradientSeparator = () => (
  <div className="w-full h-0.5 bg-gradient-to-r from-[#E551C7] via-[#D47C45] via-[#E5D548] to-[#83F42F] mt-0 md:mt-12 lg:mt-6" />
);

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
        className="
          -z-10
          absolute
          hidden
          md:block
          md:w-[350px]
          md:right-0
          md:-bottom-24
          lg:w-[400px]
          lg:right-20
          lg:-bottom-24
          xl:right-0
          xl:w-[470px]
          2xl:w-[500px]
          3xl:w-[700px]
          4xl:w-[700px] 
          "
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
        <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/5 3xl:w-3/4 mb-8 md:mb-0 md:pr-8 lg:ml-16 xl:ml-52 2xl:ml-36 3xl:ml-0">
          <div className="w-full grid grid-cols-12 place-items-start">
            <Image
              className="w-auto col-span-10 mt-2 mx-0 3xs:h-16 4xs:h-10 2xl:h-20 3xl:h-20 4xl:h-24"
              src="https://i.ibb.co/Pw54pkm/LOGO-FRL-02.png"
              alt="fundation logo"
              width={100}
              height={100}
            />
          </div>

          <GradientSeparator />

          {/* Texto localizado */}
          <div className="mt-4">
            <MarkdownWrapper content={localizedFooter.text} />
          </div>
          <div className="mt-4">
            <MarkdownWrapper content={localizedFooter.contact} />
          </div>
        </div>
      </div>
    </footer>
  );
}

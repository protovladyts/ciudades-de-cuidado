"use client";
import Link from "next/link";
import { basicFont } from "../config";
import { Image } from "./Image";
import { Divider } from "./Divider";
import { GradientUnderlineButton } from "./Gradient/GradientUnderlineButton";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "../LanguageContext";
import { Header } from "../api/wordpress/types/AcfHomeResponse";
import { mapLayoutData } from "../api/wordpress/mappers/mapLayoutData";
import { WordPressLayout } from "../api/wordpress/types/WordPressLayout";

const ReferenceButtons = ({ concept, projects, municipalism }: Header) => {
  return (
    <ul className="col-span-2 grid grid-cols-3 gap-0 place-items-center">
      <li className="col-span-1">
        <GradientUnderlineButton>
          <Link href="/concept" className="px-6 py-2">
            {concept.toUpperCase()}
          </Link>
        </GradientUnderlineButton>
      </li>
      <li className="col-span-1">
        <GradientUnderlineButton>
          <Link href="/projects" className="px-6 py-2">
            {projects.toUpperCase()}
          </Link>
        </GradientUnderlineButton>
      </li>
      <li className="col-span-1">
        <GradientUnderlineButton>
          <Link href="/#municipalism" className="px-6 py-2">
            {municipalism.toUpperCase()}
          </Link>
        </GradientUnderlineButton>
      </li>
    </ul>
  );
};

export function Navbar({
  content,
  displayNavButtons = true,
}: Readonly<{ content: WordPressLayout; displayNavButtons?: boolean }>) {
  const { language, setLanguage } = useLanguage();
  const { header } = mapLayoutData(content);
  const localizedHeader = header[language];

  const Logo = (
    <div className="
      4xl:col-span-10
      3xl:col-span-10
      2xl:col-span-10
      xl:col-span-9
      lg:col-span-9
      md:col-span-10
      sm:col-span-10
      col-span-6
      4xs:col-span-8
      p-0">
      <Link href="/">
        <Image
          src="https://i.ibb.co/NpSbzWp/logo.png"
          alt=""
          className="3xs:h-12 p-0 4xs:h-8 2xl:h-16 3xl:h-16 4xl:h-20"
        />
      </Link>
    </div>
  );

  const LngSelector = (
    <LanguageSelector
      selectedLanguage={language}
      onLanguageChange={(lang) => {
        setLanguage(lang.toLowerCase() as "es" | "de" | "en");
      }}
      className="
        min-[2500px]:col-span-2
        3xl:col-span-2
        2xl:col-span-2
        xl:col-span-3
        lg:col-span-3 
        md:col-span-2 
        sm:col-span-2 
        col-span-6 
        4xs:col-span-4 
        grid 
        grid-cols-3"
    />
  );

  const refBtns = (
    <div
      className="
      w-full
      4xs:py-0
      py-2
      text-[0.6rem]
      leading-3
      xs:text-[0.75rem]
      sm:text-lg
      lg:text-base
      xl:text-base
      3xl:text-xl
      4xl:text-xl"
    >
      <ReferenceButtons {...localizedHeader} />
    </div>
  );

  return (
    <nav
      className={`relative top-0 z-50 w-full ${
        displayNavButtons ? "4xs:py-2 py-4" : "4xs:pt-2 pt-4"
      } px-6 sm:px-8 lg:px-16 xl:px-60 text-sm lg:text-xl text-center  ${
        basicFont.className
      }`}
    >
      <div className="grid grid-cols-12 py-2">
        {Logo}
        {LngSelector}
      </div>

      <div className="w-full 4xs:py-0 py-2">
        <Divider />
      </div>

      {displayNavButtons && refBtns}
    </nav>
  );
}

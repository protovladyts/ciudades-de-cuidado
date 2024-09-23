"use client";
import Link from "next/link";
import { basicFont } from "../config";
import { Image } from "./Image";
import { Divider } from "./Divider";
import { GradientUnderlineButton } from "./Gradient/GradientUnderlineButton";
import { LanguageSelector } from "./LanguageSelector";

const ReferenceButtons = () => {
  return (
    <ul className="col-span-2 grid grid-cols-3 gap-0 place-items-center">
      <li className="col-span-1">
        <GradientUnderlineButton>
          <Link href="#home" className="px-6 py-2">
            CONCEPTO
          </Link>
        </GradientUnderlineButton>
      </li>
      <li className="col-span-1">
        <GradientUnderlineButton>
          <Link href="#home" className="px-6 py-2">
            PROYECTOS
          </Link>
        </GradientUnderlineButton>
      </li>
      <li className="col-span-1">
        <GradientUnderlineButton>
          <Link href="#home" className="px-6 py-2">
            MUNICIPALISMO
          </Link>
        </GradientUnderlineButton>
      </li>
    </ul>
  );
};

export function Navbar() {
  return (
    <nav
      className={`absolute top-0 z-50 w-full py-4 px-8 lg:px-16 xl:px-60 text-sm lg:text-xl text-center  ${basicFont.className}`}
    >
      <div className="grid grid-cols-12 py-2">
        <div className="min-[2500px]:col-span-11 2xl:col-span-10 xl:col-span-9 lg:col-span-8 md:col-span-10 sm:col-span-10 col-span-8 p-0">
          <Link href="#home p-0">
            <Image
              src="https://i.ibb.co/NpSbzWp/logo.png"
              alt=""
              className="h-12 p-0"
            />
          </Link>
        </div>
        <LanguageSelector className="min-[2500px]:col-span-1 2xl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-2 sm:col-span-2 col-span-4 grid grid-cols-3" />
      </div>

      <div className="w-full py-2">
        <Divider />
      </div>

      <div className="w-full py-2">
        <ReferenceButtons />
      </div>
    </nav>
  );
}

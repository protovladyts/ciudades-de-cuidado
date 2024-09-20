"use client";
import Link from "next/link";
import { buttonFont } from "../config";
import { Image } from "./Image";
import { Divider } from "./Divider";
import { GradientUnderlineButton } from "./GradientUnderlineButton";
import { LanguageSelector } from "./LanguageSelector";

export function Navbar() {
  return (
    <nav
      className={`w-full py-4 px-60 text-sm lg:text-xl text-center  ${buttonFont.className}`}
    >
      <div className="grid grid-cols-12 py-2">
        <div className="col-span-9 p-0">
          <Link href="#home p-0">
            <Image
              src="https://i.ibb.co/NpSbzWp/logo.png"
              alt=""
              className="h-12 p-0"
            />
          </Link>
        </div>
        <LanguageSelector className="col-span-3" />

      </div>

      <div className="w-full py-2">
        <Divider />
      </div>

      <div className="w-full py-2">
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
      </div>
    </nav>
  );
}

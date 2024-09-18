"use client";
import Link from "next/link";
import { buttonFont } from "../config";
import { Image } from "./Image";
import { Divider } from "./Divider";
import { BorderBox } from "./BorderBox";

export function Navbar() {
  return (
    <nav
      className={`w-full py-4 px-60 text-sm lg:text-xl text-center  ${buttonFont.className}`}
    >
      <div className="grid grid-cols-12 py-2">
        <div className="col-span-10 p-0">
          <Link href="#home p-0">
            <Image
              src="https://i.ibb.co/NpSbzWp/logo.png"
              alt=""
              className="h-12 p-0"
            />
          </Link>
        </div>
        <ul className="col-span-2 grid grid-cols-3 gap-0 place-items-center">
          <li className="col-span-1">
            <BorderBox>
              <Link
                href="#home"
                className="border-[#EBEAED] bg-white px-2 border-2 rounded-full"
              >
                ES
              </Link>
            </BorderBox>
          </li>
          <li className="col-span-1">
            <Link
              href="#home"
              className="border-[#EBEAED] border-2 rounded-full px-6 py-2"
            >
              EN
            </Link>
          </li>
          <li className="col-span-1">
            <Link
              href="#home"
              className="border-[#EBEAED] border-2 rounded-full px-6 py-2"
            >
              DE
            </Link>
          </li>
        </ul>

      </div>

      <div className="w-full py-2">
        <Divider />
      </div>

      <div className="w-full py-2">
        <ul className="col-span-2 grid grid-cols-3 gap-0 place-items-center">
          <li className="col-span-1">
            <Link href="#home" className="px-6 py-2">
              CONCEPTO
            </Link>
          </li>
          <li className="col-span-1">
            <Link href="#home" className="px-6 py-2">
              PROYECTOS
            </Link>
          </li>
          <li className="col-span-1">
            <Link href="#home" className="px-6 py-2">
              MUNICIPALISMO
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

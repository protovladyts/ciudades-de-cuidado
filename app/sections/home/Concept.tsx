import Image from "next/image";
import { Template } from "../../components";
import { titleFont } from "@/app/config";
import { GradientArrowButton, GradientUnderlineButton } from "@/app/components";

export function Concept() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co/nLdH4Mh/background02.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <Template>
        <div className="relative z-10 max-w-6xl container mx-auto  px-8 md:px-12 lg:px-20 2xl:px-0">
          <div className="flex flex-col md:grid md:grid-cols-2 items-start md:items-center justify-between gap-4">
            <h2
              className={`text-4xl lg:text-5xl font-bold md:mb-0 mb-4 ${titleFont.className}`}
            >
              CONCEPTO
            </h2>
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium.
            </p>
            <div className="col-span-2 w-full flex justify-end">
              <GradientUnderlineButton>
                <GradientArrowButton>LEER MÁS</GradientArrowButton>
              </GradientUnderlineButton>
            </div>
          </div>
        </div>
      </Template>
    </div>
  );
}

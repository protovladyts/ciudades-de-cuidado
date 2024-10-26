import Image from "next/image";
import { Divider, Template } from "../../components";
import { titleFont } from "@/app/config";
import { GradientArrowButton, GradientUnderlineButton } from "@/app/components";

export function Concept() {
  return (
    <div className="relative">
      <Image
        src={"https://i.ibb.co/3SKmx4R/Recurso-9-2x-8-3.png"}
        alt="Background"
        width={300}
        height={300}
        className="-z-10 absolute right-0 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/rGFCZxx/Capa-1.png"}
        alt="Background"
        width={300}
        height={300}
        className="-z-10 absolute left-0 top-52 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/CQy4mFd/Clip-path-group.png"}
        alt="Background"
        width={150}
        height={150}
        className="absolute left-0 bottom-48 md:hidden block"
      />
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
        <Divider className="absolute bottom-0 !w-2/3" />
      </Template>
    </div>
  );
}

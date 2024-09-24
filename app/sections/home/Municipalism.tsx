import Image from "next/image";
import { titleFont } from "@/app/config";
import { Template } from "../../components";

export function Municipalism() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co/L5DQhcq/background03.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <Template>
        <div className="relative z-10 max-w-6xl container mx-auto px-20 2xl:px-0">
          <div className="flex flex-col">
            <h2
              className={`text-5xl font-bold md:mb-0 md:w-1/3 pb-12 ${titleFont.className}`}
            >
              MUNICIPALISMO
            </h2>
            <p className="text-lg pb-12">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibu
            </p>
            <h2
              className={`text-5xl font-bold text-right ${titleFont.className}`}
            >
              Y CIUDADES SIN MIEDO
            </h2>
          </div>
        </div>
      </Template>
    </div>
  );
}

import Image from "next/image";
import { Template, GradientUnderline } from "../../components";
import { titleFont, focusFont } from "@/app/config";

export function Hero() {
  return (
    <div className="relative">
      <Image
        src="https://i.ibb.co/PDBBGnN/Recurso-1-2x-3-2.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />
      <Template>
        <div className="relative container mx-auto px-8 md:px-12 lg:px-4 py-16">
          <div className="hidden md:block pb-20">
            <Image
              src="https://i.ibb.co/NpSbzWp/logo.png"
              alt="Houses"
              width={400}
              height={200}
              className="mx-auto mb-8"
            />
          </div>

          <div className="">
            <Image
              src="https://i.ibb.co/WszWd0X/Casas-7.png"
              alt="Houses"
              width={100}
              height={50}
              className="mx-auto mb-8 md:hidden absolute -top-24 right-0 -z-50 -top-20 min-[458px]:-top-16 min-[458px]:h-24 min-[458px]:w-auto"
            />
            <Image
              src="https://i.ibb.co/TKD8t7b/CASA-04-2.png"
              alt="Houses"
              width={110}
              height={55}
              className="mx-auto mb-8 md:hidden absolute -top-20 left-0 -z-50 min-[458px]:h-30 min-[458px]:w-auto"
            />
          </div>

          <div className="absolute -top-24 xs:relative md:relative lg:relative xl:relative 2xl:relative text-center">
            <h1
              className={`text-left sm:text-center text-3xl -top-20 sm:text-4xl md:text-6xl font-bold mb-4 tracking-tight ${titleFont.className}`}
            >
              CIUDADES DE CUIDADO
            </h1>

            <div className="mb-8 hidden md:block">
              <GradientUnderline>
                <p
                  className={`text-2xl lg:text-4xl mb-4 font-medium tracking-wide ${focusFont.className}`}
                >
                  ESTRATEGIAS PARA LA SOCIALIZACIÓN FEMINISTA
                </p>
              </GradientUnderline>
            </div>
            <div className="block md:hidden pr-8">
              <p
                className={`text-left text-xl lg:text-4xl mb-4 font-medium tracking-wide ${focusFont.className}`}
              >
                ESTRATEGIAS PARA LA
              </p>
              <p
                className={`text-xl lg:text-4xl mb-4 font-medium tracking-wide ${focusFont.className}`}
              >
                SOCIALIZACIÓN
              </p>
              <p
                className={`text-right text-xl lg:text-4xl mb-4 font-medium tracking-wide ${focusFont.className}`}
              >
                FEMINISTA
              </p>
            </div>

            <p className="max-w-3xl mx-auto text-sm sm:text-lg text-left pr-6 sm:p-0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt.
            </p>
          </div>
        </div>
      </Template>
    </div>
  );
}

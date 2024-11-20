import Image from "next/image";
import { Divider, Template } from "../../components";
import { titleFont, focusFont } from "@/app/config";

type HeroProps = {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
};

export function Hero({ data }: HeroProps) {
  return (
    <div className="relative">
      <Image
        src={"https://i.ibb.co/w7Zc62d/Group-65.png"}
        alt="Background"
        width={500}
        height={500}
        className="-z-10 absolute right-0 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/S62McZM/Recurso-9-2x-8-1.png"}
        alt="Background"
        width={200}
        height={200}
        className="-z-10 absolute left-0 top-28 md:block hidden"
      />
      <Template>
        <div className="relative container mx-auto px-8 md:px-12 lg:px-4 py-0 md:py-16">
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
              src="https://i.ibb.co/Xtg0Yfw/Group.png"
              alt="Houses"
              width={150}
              height={50}
              className="mx-auto mb-8 md:hidden absolute right-0 -z-50 min-[458px]:-top-16 min-[458px]:h-24 min-[458px]:w-auto"
            />
            <Image
              src="https://i.ibb.co/D5MYc7D/Recurso-9-2x-8-4.png"
              alt="Houses"
              width={200}
              height={50}
              className="mx-auto mb-8 md:hidden absolute -top-36 left-0 -z-50 min-[458px]:h-30 min-[458px]:w-auto"
            />
          </div>

          <div className="text-center">
            <h1
              className={`text-left sm:text-center text-3xl sm:text-4xl md:text-6xl font-bold mb-28 md:mb-4 tracking-tight ${titleFont.className}`}
            >
              {data.title.toUpperCase()}
            </h1>

            <div className="mb-8 hidden md:block">
              <p
                className={`text-2xl lg:text-4xl mb-4 font-medium tracking-wide ${focusFont.className}`}
              >
                {data.subtitle}
              </p>
            </div>
            <div
              className={`block md:hidden pr-8 text-right text-xl lg:text-4xl font-medium tracking-wide ${focusFont.className}`}
            >
              <p>ESTRATEGIAS PARA LA</p>
              <p>SOCIALIZACIÓN</p>
              <p>FEMINISTA</p>
            </div>

            <p className="max-w-3xl mx-auto text-sm sm:text-lg text-left pr-6 sm:p-0 sm:mt-0 mt-20">
              {data.description}
            </p>
          </div>
        </div>
        <Divider className="absolute bottom-0 !w-2/3" />
      </Template>
    </div>
  );
}

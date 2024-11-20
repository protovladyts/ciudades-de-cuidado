import { titleFont } from "@/app/config";
import { Divider, Template } from "../../components";
import Image from "next/image";

type MunicipalismProps = {
  data: {
    title: string;
    description: string;
    end_title: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Municipalism({ data }: MunicipalismProps) {
  return (
    <div className="relative">
      <Image
        src={"https://i.ibb.co/BcxbNmx/Recurso-9-2x-8-3-1.png"}
        alt="Background"
        width={150}
        height={300}
        className="-z-10 absolute right-0 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/LxRHgnv/Group-68.png"}
        alt="Background"
        width={500}
        height={300}
        className="-z-10 absolute left-0 top-52 md:block hidden"
      />
      <Template>
        <div className="relative z-10 max-w-6xl container mx-auto px-8 md:px-20 2xl:px-0">
          <div className="flex flex-col">
            <h2
              className={`text-xl md:text-5xl font-bold md:mb-0 md:w-1/3 pb-12 ${titleFont.className}`}
            >
              {data.title.toUpperCase()}
            </h2>
            <p className="text-base md:text-lg pb-12">
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
              className={`text-xl md:text-5xl font-bold text-right ${titleFont.className}`}
            >
              Y CIUDADES SIN MIEDO
            </h2>
          </div>
        </div>
        <Divider className="absolute bottom-0 !w-2/3  md:block hidden" />
      </Template>
    </div>
  );
}

//https://i.ibb.co/BcxbNmx/Recurso-9-2x-8-3-1.png

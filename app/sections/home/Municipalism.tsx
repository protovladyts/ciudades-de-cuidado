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
        className="-z-10 absolute lg:-right-16 xl:right-0 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/LxRHgnv/Group-68.png"}
        alt="Background"
        width={500}
        height={300}
        className="-z-10 absolute lg:-left-8 xl:left-0 lg:top-40 xl:top-52 md:block hidden"
      />
      <Template fullScreen={true}>
        <div className="relative z-10 max-w-6xl container mx-auto px-8 md:px-20 2xl:px-0">
          <div className="flex flex-col">
            <h2
              className={`text-2xl 4xs:text-base 3xs:text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold md:mb-0 md:w-1/3 pb-12 ${titleFont.className}`}
            >
              {data.title.toUpperCase()}
            </h2>
            <p className="text-sm sm:text-base 2xl:text-lg pb-12 4xs:text-[0.6rem] 4xs:leading-4 3xs:text-sm">{data.description}</p>
            <h2
              className={`text-2xl 4xs:text-base 3xs:text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold text-right ${titleFont.className}`}
            >
              {data.end_title.toLocaleUpperCase()}
            </h2>
          </div>
        </div>
        <Divider className="absolute bottom-0 lg:w-5/6 xl:w-2/3  md:block hidden" />
      </Template>
    </div>
  );
}

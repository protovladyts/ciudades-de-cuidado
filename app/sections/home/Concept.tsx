import Image from "next/image";
import { Divider, Template } from "../../components";
import { titleFont } from "@/app/config";
import { GradientArrowButton, GradientUnderlineButton } from "@/app/components";

type ConceptProps = {
  data: {
    title: string;
    description: string;
    cta_label: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Concept({ data }: ConceptProps) {
  return (
    <div className="relative">
      <Image
        src={"https://i.ibb.co/3SKmx4R/Recurso-9-2x-8-3.png"}
        alt="Background"
        width={300}
        height={300}
        className="-z-10 absolute lg:-right-8 xl:right-0 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/rGFCZxx/Capa-1.png"}
        alt="Background"
        width={300}
        height={300}
        className="-z-10 absolute lg:-left-24 xl:left-0 top-52 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/CQy4mFd/Clip-path-group.png"}
        alt="Background"
        width={150}
        height={150}
        className="absolute left-0 bottom-40 xs:bottom-48 md:hidden block"
      />
      <Template fullScreen={true}>
        <div className="relative z-10 max-w-6xl container mx-auto  px-8 md:px-12 lg:px-20 2xl:px-0">
          <div className="flex flex-col md:grid md:grid-cols-2 items-start md:items-center justify-between gap-4">
            <h2
              className={`text-right text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold md:mb-0 mb-4 ${titleFont.className}`}
            >
              {data.title.toUpperCase()}
            </h2>
            <p className="pl-0 md:pl-8 text-sm sm:text-base 2xl:text-lg">
              {data.description}
            </p>
            <div className="col-span-2 w-full flex justify-end">
              <GradientUnderlineButton>
                <GradientArrowButton href="/concept">
                  {data.cta_label.toUpperCase()}
                </GradientArrowButton>
              </GradientUnderlineButton>
            </div>
          </div>
        </div>
        <Divider className="absolute bottom-0 !w-2/3" />
      </Template>
    </div>
  );
}

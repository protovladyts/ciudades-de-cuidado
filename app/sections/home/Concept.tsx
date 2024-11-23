import Image from "next/image";
import { Divider, Paragraph, Template, Title } from "../../components";
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
        alt="Background concept desktop right"
        width={300}
        height={300}
        className="-z-10 absolute 4xl:w-[350px] lg:w-[250px] lg:right-0 xl:right-0 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/rGFCZxx/Capa-1.png"}
        alt="Background concept desktop left"
        width={300}
        height={300}
        className="-z-10 absolute 4xl:w-[500px] lg:top-24 lg:-left-24 xl:left-0 top-52 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/CQy4mFd/Clip-path-group.png"}
        alt="Background concept mobile"
        width={150}
        height={150}
        className="absolute left-0 bottom-40 4xs:w-[80px] 3xs:w-[120px] h-667:bottom-24 xs:bottom-48 md:hidden block"
      />
      <Template fullScreen={true}>
        <div className="relative z-10 max-w-7xl  container mx-auto  px-8 md:px-12 lg:px-20 2xl:px-0">
          <div className="flex flex-col md:grid md:grid-cols-2 items-start md:items-center justify-between gap-4">
            <Title className="md:mb-0 mb-4">{data.title.toUpperCase()}</Title>

            <Paragraph className="pl-0 md:pl-8 4xl:pl-24">{data.description}</Paragraph>

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

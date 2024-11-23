import { Divider, Paragraph, Title, Template } from "../../components";
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
        alt="Background desktop municipalism right"
        width={150}
        height={300}
        className="-z-10 absolute 4xl:w-[200px] lg:top-10 lg:right-0 xl:right-0 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/LxRHgnv/Group-68.png"}
        alt="Background desktop municipalism right"
        width={500}
        height={300}
        className="-z-10 absolute 4xl:w-[700px] lg:left-0 xl:left-0 lg:top-20 xl:top-52 md:block hidden"
      />
      <Template fullScreen={true}>
        <div className="relative z-10 max-w-6xl container mx-auto px-8 md:px-20 2xl:px-0">
          <div className="flex flex-col">
            <Title className="md:mb-0 md:w-1/3 pb-12">{data.title.toUpperCase()}</Title>
            <Paragraph className="pb-12">{data.description}</Paragraph>
            <Title className="text-right">{data.end_title.toUpperCase()}</Title>
          </div>
        </div>
        <Divider className="absolute bottom-0 lg:w-5/6 xl:w-2/3  md:block hidden" />
      </Template>
    </div>
  );
}

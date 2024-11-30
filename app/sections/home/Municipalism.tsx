import MarkdownWrapper from "@/app/components/MarkdownWrapper";
import { Divider, Title, Template } from "../../components";
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
  const BgImagesDesktop = (
    <>
      <Image
        src={"https://i.ibb.co/BcxbNmx/Recurso-9-2x-8-3-1.png"}
        alt="Background desktop municipalism right"
        width={150}
        height={300}
        className="
          -z-10
          absolute
          md:block
          hidden
          md:right-0
          md:w-[110px]
          lg:top-40
          lg:right-0
          xl:right-0
          3xl:w-[200px]
          "
      />
      <Image
        src={"https://i.ibb.co/LxRHgnv/Group-68.png"}
        alt="Background desktop municipalism right"
        width={500}
        height={300}
        className="
          -z-10
          absolute
          md:block
          hidden
          md:w-[370px]
          md:top-72
          lg:left-0
          lg:top-32
          xl:left-0
          xl:top-52
          3xl:w-[700px]
          "
      />
    </>
  );
  const MunicipalismTitle = (
    <Title className="md:mb-0 pb-12">{data.title.toUpperCase()}</Title>
  );
  const MunicipalismDescription = (
    <div className="pb-12">
      <MarkdownWrapper content={data.description} />
    </div>
  );
  const MunicipalismEndTitle = (
    <Title className="text-right">{data.end_title.toUpperCase()}</Title>
  );
  return (
    <div className="relative">
      {BgImagesDesktop}
      <Template fullScreen={false}>
        <div className="container relative z-10 max-w-6xl 4xs:py-24 md:py-64 lg:py-64 3xl:py-96 px-8 md:px-20 2xl:px-0">
          <div className="flex flex-col">
            {MunicipalismTitle}
            {MunicipalismDescription}
            {MunicipalismEndTitle}
          </div>
        </div>
        <Divider className="absolute bottom-0 lg:w-5/6 xl:w-2/3 md:block hidden" />
      </Template>
    </div>
  );
}

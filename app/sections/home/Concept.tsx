import Image from "next/image";
import { Divider, Template, Title } from "../../components";
import { GradientArrowButton, GradientUnderlineButton } from "@/app/components";
import MarkdownWrapper from "@/app/components/MarkdownWrapper";

type ConceptProps = {
  data: {
    title: string;
    description: string;
    cta_label: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Concept({ data }: ConceptProps) {
  const DesktopBgImages = (
    <>
      <Image
        src={"https://i.ibb.co/3SKmx4R/Recurso-9-2x-8-3.png"}
        alt="Background concept desktop right"
        width={300}
        height={300}
        className="
          -z-10
          absolute
          md:block
          hidden
          
          md:w-[200px]
          md:right-0

          lg:w-[250px]
          lg:right-0
          xl:right-0
          3xl:w-[350px]
          "
      />
      <Image
        src={"https://i.ibb.co/rGFCZxx/Capa-1.png"}
        alt="Background concept desktop left"
        width={300}
        height={300}
        className="
          -z-10
          absolute
          md:block
          hidden
          top-52
          md:w-[250px]
          lg:top-24
          lg:-left-24
          xl:left-0
          3xl:w-[450px]
          "
      />
    </>
  );

  const MobilepBgImages = (
    <Image
      src={"https://i.ibb.co/CQy4mFd/Clip-path-group.png"}
      alt="Background concept mobile"
      width={150}
      height={150}
      className="
        absolute
        md:hidden
        block
        4xs:w-[80px]
        4xs:top-96
        3xs:w-[120px]
        3xs:top-2/3
        "
    />
  );

  const ConceptTitle = (
    <Title className="md:mb-0 mb-4">{data.title.toUpperCase()}</Title>
  );

  const ConceptDescription = (
    <div className="pl-0 md:pl-8 4xl:pl-24">
      <MarkdownWrapper content={data.description} />
    </div>
  );

  return (
    <div className="relative">
      {DesktopBgImages}
      {MobilepBgImages}

      <Template fullScreen={false}>
        <div className="relative container z-10 max-w-7xl 4xs:py-24 md:py-64 lg:py-64 3xl:py-96 px-8 md:px-12 lg:px-20 2xl:px-0">
          <div className="flex flex-col md:grid md:grid-cols-2 items-start md:items-center justify-between gap-4">
            {ConceptTitle}
            {ConceptDescription}

            <div className="col-span-2 w-full flex justify-end">
              <GradientUnderlineButton>
                <GradientArrowButton href="/concepts">
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

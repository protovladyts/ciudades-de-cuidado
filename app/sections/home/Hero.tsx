import Image from "next/image";
import { Divider, Template, Title } from "../../components";
import { focusFont } from "@/app/config";
import MarkdownWrapper from "@/app/components/MarkdownWrapper";

type HeroProps = {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
};

export function Hero({ data }: HeroProps) {
  const DesktopBgImages = (
    <>
      <Image
        src={"https://i.ibb.co/w7Zc62d/Group-65.png"}
        alt="Background hero right desktop"
        width={500}
        height={500}
        className="
          md:block hidden
          absolute
          -z-10

          md:w-[300px]
          md:top-0
          md:right-0

          lg:w-[400px]
          lg:-top-40
          lg:right-0

          xl:right-0
          3xl:w-[600px]
          4xl:w-[600px]
          "
      />
      <Image
        src={"https://i.ibb.co/S62McZM/Recurso-9-2x-8-1.png"}
        alt="Background hero left desktop"
        width={200}
        height={200}
        className="
          -z-10
          md:block
          hidden
          absolute
          top-28
          
          md:top-20
          md:w-[120px]
          
          lg:-left-12
          xl:left-0
          3xl:w-[300px]
          4xl:w-[300px]
          "
      />
    </>
  );

  const DesktopHeroLogo = (
    <div className="hidden md:block 3xl:pb-20">
      <Image
        src="https://i.ibb.co/NpSbzWp/logo.png"
        alt="Houses"
        width={400}
        height={200}
        className="mx-auto mb-8 w-[200px] xl:w-[200px] 2xl:w-[300px] 3xl:w-[400px]"
      />
    </div>
  );

  const MobileBgImages = (
    <div className="md:hidden">
      <Image
        src="https://i.ibb.co/Xtg0Yfw/Group.png"
        alt="Houses"
        width={150}
        height={50}
        className={`
          mx-auto
          absolute
          right-0
          -z-50
          4xs:w-[60px]
          3xs:w-[100px]
        `}
        /*         h-667:w-[70px]
        min-[458px]:-top-16
        min-[458px]:h-24
        min-[458px]:w-auto
        xs:-top-16
        3xs:top-0
        3xs:h-24
        3xs:right-0
        3xs:!w-auto
        4xs:-right-2 */
      />
      <Image
        src="https://i.ibb.co/D5MYc7D/Recurso-9-2x-8-4.png"
        alt="Houses"
        width={200}
        height={50}
        className={`
          opacity-60
          absolute
          -z-50
          4xs:w-[100px]
          4xs:-top-16
          3xs:w-[125px]
          3xs:-top-8
        `}

        /*         -top-24
        -left-8
        h-667:-left-24
        xs:-top-36
        xs:-left-32
        xs:h-[400px]
        4xs:h-60
        4xs:right-40
        4xs:w-auto
        4xs:top-8
        3xs:h-80
        3xs:-left-32
        3xs:w-auto
        3xs:-top-4
        min-[458px]:h-30
        min-[458px]:w-auto */
      />
    </div>
  );

  const HeroTitle = (
    <Title
      className={`
      text-left
      sm:text-center
      3xs:mb-0
      h-667:mb-0
      xs:mb-12
      md:mb-4
      mb-2
      lg:!mb-2
      `}
    >
      {data.title.toUpperCase()}
    </Title>
  );

  const HeroDesktopSubtitle = (
    <div className="mb-8 hidden md:block">
      <p
        className={`lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl mb-4 font-medium tracking-wide ${focusFont.className}`}
      >
        {data.subtitle.toUpperCase()}
      </p>
    </div>
  );

  const HeroMobileSubtitle = (
    <div
      className={`flex justify-end md:hidden w-full text-right xs:text-xl 3xs:text-lg 4xs:text-base 4xs:leading-5 lg:text-4xl font-medium tracking-wide ${focusFont.className}`}
    >
      <p className="w-3/4 xs:w-3/5">{data.subtitle.toUpperCase()}</p>
    </div>
  );

  const HeroDescription = (
    <div className="max-w-3xl 2xl:max-w-5xl mx-auto text-left p-0 sm:mt-0 h-667:mt-2 4xs:mt-4 md:mt-20 xs:mt-8">
      <MarkdownWrapper content={data.description} />
    </div>
  );

  return (
    <div className="relative">
      {DesktopBgImages}
      {MobileBgImages}
      <Template fullScreen={false}>
        <div className="relative container !w-full px-8 md:px-12 lg:px-4 4xs:pt-8 4xs:pb-16 3xs:pt-24 xs:py-16 md:py-16">
          {DesktopHeroLogo}

          <div className="text-center 4xs:mt-2 3xs:mt-0">
            {HeroTitle}

            {HeroDesktopSubtitle}

            {HeroMobileSubtitle}

            {HeroDescription}
          </div>
        </div>
        <Divider className="absolute bottom-0 !w-2/3" />
      </Template>
    </div>
  );
}

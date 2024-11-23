import Image from "next/image";
import {
  Divider,
  Paragraph,
  Template,
  Title,
} from "../../components";
import { focusFont } from "@/app/config";

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
        alt="Background hero right desktop"
        width={500}
        height={500}
        className="-z-10 absolute 4xl:w-[600px] lg:w-[400px] lg:-top-10 lg:right-0 xl:right-0 md:block hidden"
      />
      <Image
        src={"https://i.ibb.co/S62McZM/Recurso-9-2x-8-1.png"}
        alt="Background hero left desktop"
        width={200}
        height={200}
        className="-z-10 absolute 4xl:w-[300px] lg:-left-12 xl:left-0 top-28 md:block hidden"
      />
      <Template fullScreen={true}>
        <div className="relative container mx-auto px-8 md:px-12 lg:px-4 pt-16 xs:py-0 md:py-16">
          <div className="hidden md:block 3xl:pb-20">
            <Image
              src="https://i.ibb.co/NpSbzWp/logo.png"
              alt="Houses"
              width={400}
              height={200}
              className="mx-auto mb-8 w-[200px] xl:w-[200px] 2xl:w-[300px] 3xl:w-[400px]"
            />
          </div>

          <div>
            <Image
              src="https://i.ibb.co/Xtg0Yfw/Group.png"
              alt="Houses"
              width={150}
              height={50}
              className={`
                mx-auto
                mb-8
                md:hidden
                absolute
                right-0
                -z-50
                h-667:w-[70px]
                min-[458px]:-top-16
                min-[458px]:h-24
                min-[458px]:w-auto
                xs:-top-16
                3xs:top-0
                3xs:h-24
                3xs:right-0
                3xs:!w-auto
                4xs:-right-2
                `}
            />
            <Image
              src="https://i.ibb.co/D5MYc7D/Recurso-9-2x-8-4.png"
              alt="Houses"
              width={200}
              height={50}
              className={`
                opacity-60
                mx-auto
                mb-8
                md:hidden
                absolute
                -top-24
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
                -z-50
                min-[458px]:h-30
                min-[458px]:w-auto
                `}
            />
          </div>

          <div className="text-center 4xs:mt-12 3xs:mt-0">
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

            <div className="mb-8 hidden md:block">
              <p
                className={`text-2xl xl:text-3xl 2xl:text-4xl mb-4 font-medium tracking-wide ${focusFont.className}`}
              >
                {data.subtitle.toUpperCase()}
              </p>
            </div>
            <div
              className={`flex justify-end md:hidden w-full text-right xs:text-xl 3xs:text-lg 4xs:text-base 4xs:leading-5 lg:text-4xl font-medium tracking-wide ${focusFont.className}`}
            >
              <p className="w-3/4 xs:w-3/5">{data.subtitle.toUpperCase()}</p>
            </div>

            <Paragraph className="max-w-3xl 2xl:max-w-5xl mx-auto text-left p-0 sm:mt-0 h-667:mt-2 mt-10 md:mt-20 xs:mt-8">
              {data.description}
            </Paragraph>
          </div>
        </div>
        <Divider className="absolute bottom-0 !w-2/3" />
      </Template>
    </div>
  );
}

import Image from "next/image";
import { titleFont } from "@/app/config";

import {
  BigCard,
  SmallCard,
  GradientArrowButton,
  GradientUnderlineButton,
  Template,
  Divider,
} from "../../components";

export function Projects() {
  const projectsUrls = [
    "https://i.ibb.co/3cc3bDY/Rectangle-1.png",
    "https://i.ibb.co/10tyY1w/Rectangle-1-3.png",
    "https://i.ibb.co/HGby1bH/Rectangle-1-2.png",
    "https://i.ibb.co/tztcNgD/Rectangle-1-1.png",
  ];

  return (
    <div className="relative">
      <Image
        src="https://i.ibb.co/8PFqG48/Group-31.png"
        alt="Tree"
        className="absolute right-0 top-60 xl:top-48 z-10 md:block hidden"
        width={100}
        height={100}
      />
      <Template className="text-left" noHScreenInSm={true}>
        <div className="w-full relative">
          <div className="max-w-6xl container mx-auto  px-8 md:px-20 2xl:px-0">
            <h2
              className={`text-2xl md:text-4xl font-bold mt-8 sm:mt-0 mb-4 ${titleFont.className}`}
            >
              PROYECTOS
            </h2>
            <p className="mb-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ornare aliquet leo, id hendrerit lectus porttitor eget. Duis a
              elit interdum, tempor nisl non, elementum tellus. Cras at nisi
              rhoncus, porta risus eget, scelerisque ex. Integer sit amet
              facilisis eros. Cras volutpat quam vitae nisl scelerisque finibus
              vitae in ante. Sed velit eros, luctus vitae auctor at, volutpat
              nec sem. Donec sed elementum lectus. Nam vitae magna est. Nam
              viverra tellus eget convallis eleifend. Duis diam sapien, pharetra
              a convallis eget, mattis vitae tellus. Vivamus non enim mi. Fusce
              commodo nunc vel elit pulvinar consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Phasellus convallis dictum
              sapien, eget convallis tortor vestibulum eros.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
              <BigCard
                imageSrc="https://i.ibb.co/V3wzgW7/bigcardimage.png"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                alt="Proyecto principal"
                className="col-span-5 hidden lg:block"
              />
              <div className="col-span-7 grid sm:grid-cols-2 gap-x-16 gap-y-5 place-items-center">
                {projectsUrls.map((url, index) => (
                  <SmallCard
                    key={index}
                    imageSrc={url}
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    alt={`Proyecto ${index + 2}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end pb-8 sm:pb-0">
              <GradientUnderlineButton>
                <GradientArrowButton>LEER MÁS</GradientArrowButton>
              </GradientUnderlineButton>
            </div>
          </div>
        </div>
        <Divider className="absolute bottom-0 !w-2/3" />
      </Template>
    </div>
  );
}

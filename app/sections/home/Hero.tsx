import Image from "next/image";
import { Template, GradientUnderline } from "../../components";
import { titleFont, focusFont } from "@/app/config";

export function Hero() {
  return (
    <div className="relative">
      <Image
        src="https://i.ibb.co/PDBBGnN/Recurso-1-2x-3-2.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />
      <Template>
        <div className="relative container mx-auto px-4 py-16">
          <Image
            src="https://i.ibb.co/NpSbzWp/logo.png"
            alt="Houses"
            width={400}
            height={200}
            className="mx-auto mb-8"
          />
          <div className="text-center">
            <h1 className={`text-6xl font-bold mb-4 tracking-tight ${titleFont.className}`}>
              CIUDADES DE CUIDADO
            </h1>
            <div className="mb-8">
              <GradientUnderline>
                <p className={`text-4xl mb-4 font-medium tracking-wide ${focusFont.className}`}>
                  ESTRATEGIAS PARA LA SOCIALIZACIÓN FEMINISTA
                </p>
              </GradientUnderline>
            </div>

            <p className="max-w-3xl mx-auto text-lg text-left">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt.
            </p>
          </div>
        </div>
      </Template>
    </div>
  );
}

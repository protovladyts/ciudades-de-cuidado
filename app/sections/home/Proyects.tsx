import { BigCard, SmallCard } from "../../components";
 
export function Proyects() {
  const placeholderImage = "https://i.ibb.co/nLdH4Mh/background02.png"

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">PROYECTOS</h2>
      <p className="mb-8 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare aliquet leo, id hendrerit lectus
        porttitor eget. Duis a elit interdum, tempor nisl non, elementum tellus. Cras at nisi rhoncus, porta risus eget,
        scelerisque ex. Integer sit amet facilisis eros. Cras volutpat quam vitae nisl scelerisque finibus vitae in ante.
        Sed velit eros, luctus vitae auctor at, volutpat nec sem. Donec sed elementum lectus. Nam vitae magna est.
        Nam viverra tellus eget convallis eleifend. Duis diam sapien, pharetra a convallis eget, mattis vitae tellus.
        Vivamus non enim mi. Fusce commodo nunc vel elit pulvinar consequat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus convallis dictum sapien, eget convallis tortor vestibulum eros.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Card grande */}
        <BigCard
          imageSrc="https://i.ibb.co/V3wzgW7/bigcardimage.png"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          alt="Proyecto principal"
          className="col-span-5"
        />

        {/* Grid de cards pequeñas */}
        <div className="col-span-7 grid grid-cols-2 gap-x-20 gap-y-5">
          {[...Array(4)].map((_, index) => (
            <SmallCard
              key={index}
              imageSrc={placeholderImage}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              alt={`Proyecto ${index + 2}`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <a href="#" className="inline-flex items-center text-sm font-semibold">
          LEER MÁS
          <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

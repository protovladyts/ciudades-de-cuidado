import Image from 'next/image'

interface CardPequenaProps {
  imageSrc: string
  title: string
  alt: string
}

export function SmallCard({ imageSrc, title, alt }: CardPequenaProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl w-full sm:w-4/5">
      <div className="relative h-28 lg:!h-28 sm:h-40 4xs:h-20">
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-24 lg:!h-24 sm:h-36 4xs:h-10">
        <h3 className="font-bold px-4 pt-6 lg:!text-base 4xs:pt-2 4xs:text-sm">{title}</h3>
      </div>
    </div>
  )
}
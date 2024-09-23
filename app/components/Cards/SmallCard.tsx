import Image from 'next/image'

interface CardPequenaProps {
  imageSrc: string
  title: string
  alt: string
}

export function SmallCard({ imageSrc, title, alt }: CardPequenaProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl w-4/5">
      <div className="relative h-40">
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-36">
        <h3 className="font-bold px-4 pt-6">{title}</h3>
      </div>
    </div>
  )
}
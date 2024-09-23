import Image from 'next/image'

interface CardPequenaProps {
  imageSrc: string
  title: string
  alt: string
}

export function SmallCard({ imageSrc, title, alt }: CardPequenaProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-2">{title}</h3>
      </div>
    </div>
  )
}
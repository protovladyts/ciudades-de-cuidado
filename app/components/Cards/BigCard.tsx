import Image from 'next/image'

interface CardGrandeProps {
  imageSrc: string
  title: string
  alt: string
  className?: string
}

export function BigCard({ imageSrc, title, alt, className }: CardGrandeProps) {
  return (
    <div className={`relative shadow-md rounded-lg h-full min-h-[400px]  ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="rounded-lg shadow-md absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
      </div>
    </div>
  )
}

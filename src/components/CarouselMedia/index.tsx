import Image, { StaticImageData } from "next/image"

export type CarouselMediaProps = {
  mediaType: "video" | "image"
  src: string | StaticImageData
  label?: string
}

export default function CarouselMedia({
  mediaType,
  src,
  label
}: CarouselMediaProps) {
  return (
    <article className="relative max-h-[420px]">
      {mediaType === "image" ? (
        <Image
          className="h-full"
          src={src ?? ""}
          alt={label ?? ""}
          width={840}
          height={420}
        />
      ) : (
        // adicionar evento para vídeo der autoPlay apenas quando aparecer na tela
        <video className="h-full w-full" autoPlay loop muted>
          <source src={typeof src === "string" ? src : ""} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {label && (
        <span className="absolute bottom-10 left-10 text-2xl font-bold uppercase tracking-wider text-white">
          {label}
        </span>
      )}
    </article>
  )
}

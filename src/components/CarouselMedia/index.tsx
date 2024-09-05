import Image from "next/image"
import React, { HTMLAttributes } from "react"

export type CarouselMediaProps = {
  mediaType?: "video" | "image"
  src: string
  label?: string
} & HTMLAttributes<HTMLDivElement>

export default function CarouselMedia({
  mediaType = "image",
  src,
  label,
  ...props
}: CarouselMediaProps) {
  return (
    <div {...props} className="relative h-full min-w-0">
      {mediaType === "image" ? (
        <Image
          className="h-full"
          src={src}
          alt={label ?? ""}
          width={840}
          height={420}
        />
      ) : (
        <video className="w-full" autoPlay loop muted>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {label && (
        <span className="absolute bottom-10 left-10 text-paragraph font-bold uppercase tracking-wider text-white">
          {label}
        </span>
      )}
    </div>
  )
}

import Autoplay from "embla-carousel-autoplay"
import { StaticImageData } from "next/image"

import CarouselMedia from "../CarouselMedia"
import {
  EmblaCarousel,
  EmblaCarouselContent,
  EmblaCarouselItem
} from "../ui/EmblaCarousel"

export type MediaProps = {
  src: string | StaticImageData
  label?: string
}

export type CarouselProps = {
  autoplay: boolean
  autoplayDelay?: number
  mediaType: "video" | "image"
  contentList?: MediaProps[]
}

export default function Carousel({
  autoplay,
  autoplayDelay = 3000,
  mediaType,
  contentList
}: CarouselProps) {
  const carouselPlugins = autoplay
    ? [
        Autoplay({
          delay: autoplayDelay,
          stopOnMouseEnter: true,
          stopOnInteraction: false
        })
      ]
    : []

  if (!contentList) {
    return null
  }

  return (
    <EmblaCarousel
      className="h-min"
      opts={{ loop: true }}
      plugins={carouselPlugins}>
      <EmblaCarouselContent className="ml-0 h-min">
        {contentList.map((media, i) => (
          <EmblaCarouselItem key={i} className="h-min basis-full pl-0">
            <CarouselMedia
              mediaType={mediaType}
              src={media.src}
              label={media.label}
            />
          </EmblaCarouselItem>
        ))}
      </EmblaCarouselContent>
    </EmblaCarousel>
  )
}

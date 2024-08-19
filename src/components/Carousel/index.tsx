import Autoplay from "embla-carousel-autoplay"
import { StaticImageData } from "next/image"

import {
  EmblaCarousel,
  EmblaCarouselContent,
  EmblaCarouselItem
} from "./emblaCarouselReact"
import CarouselMedia from "../CarouselMedia"

export type CarouselProps = {
  autoplay?: boolean
  autoplayDelay?: number
  mediaType: "video" | "image"
  contentList?: {
    src: string | StaticImageData
    label: string
  }[]
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
      className="aspect-video w-[820px]"
      opts={{ loop: true }}
      plugins={carouselPlugins}>
      <EmblaCarouselContent className="ml-0">
        {contentList.map((media, i) => (
          <EmblaCarouselItem key={i} className="basis-full pl-0">
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

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import { contentTemplateProps } from "./contentTemplate"
import { Carousel, CarouselContent, CarouselItem } from "./emblaCarouselReact"

export type DonateImageCarouselProps = {
  autoplay?: boolean
  autoplayDelay?: number
  carouselImages?: contentTemplateProps[]
}

export default function DonateImageCarousel({
  autoplay,
  autoplayDelay = 3000,
  carouselImages
}: DonateImageCarouselProps) {
  const carouselPlugins = autoplay
    ? [
        Autoplay({
          delay: autoplayDelay,
          stopOnMouseEnter: true,
          stopOnInteraction: false
        })
      ]
    : []

  return (
    <Carousel
      className="aspect-video w-[820px]"
      opts={{ loop: true }}
      plugins={carouselPlugins}>
      <CarouselContent className="ml-0">
        {carouselImages.map((card, index) => (
          <CarouselItem key={index} className="relative basis-full pl-0">
            <Image
              className="h-full w-full"
              src={card.image}
              alt={card.label}
            />
            <span className="absolute bottom-10 left-10 text-2xl font-bold uppercase tracking-wider text-white">
              {card.label}
            </span>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

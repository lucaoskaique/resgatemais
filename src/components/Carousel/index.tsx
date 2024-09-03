import useEmblaCarousel from "embla-carousel-react"

import { cn } from "@/lib/utils"

import CarouselMedia from "../CarouselMedia"

export type CarouselProps = {
  loop?: boolean
  orientation?: "horizontal" | "vertical"
  plugins?: any[]
  slides: {
    src: string
    label?: string
  }[]
}

export default function Carousel({
  loop = true,
  orientation = "horizontal",
  plugins = [],
  slides
}: CarouselProps) {
  const axis = orientation === "horizontal" ? "x" : "y"
  const [emblaRef] = useEmblaCarousel({ loop: loop, axis: axis }, plugins)

  const carouselDisplay =
    orientation === "horizontal"
      ? "grid-flow-col auto-cols-[100%]"
      : "grid-flow-row auto-rows-[100%]"

  return (
    <section className="overflow-hidden" ref={emblaRef}>
      <div className={cn("grid", carouselDisplay)}>
        {slides?.map((item, i) => (
          <CarouselMedia key={i} src={item.src} label={item.label} />
        ))}
      </div>
    </section>
  )
}

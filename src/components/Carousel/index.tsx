import useEmblaCarousel from "embla-carousel-react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

import CarouselMedia from "../CarouselMedia"

export type CarouselProps = {
  loop?: boolean
  direction?: "ltr" | "rtl"
  orientation?: "horizontal" | "vertical"
  plugins?: any[]
  slides: {
    src: string
    label?: string
  }[]
}

export default function Carousel({
  direction = "ltr",
  loop = true,
  orientation = "horizontal",
  plugins = [],
  slides
}: CarouselProps) {
  const axis = orientation === "horizontal" ? "x" : "y"
  const [emblaRef] = useEmblaCarousel(
    { loop: loop, axis: axis, direction: direction },
    plugins
  )

  const carouselDisplay =
    orientation === "horizontal"
      ? "grid-flow-col auto-cols-[100%]"
      : "grid-flow-row auto-rows-[100%]"

  return (
    <section
      dir={direction === "rtl" ? "rtl" : ""}
      className="overflow-hidden"
      ref={emblaRef}>
      {" "}
      <AnimatePresence>
        <motion.div
          className={cn("grid", carouselDisplay)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
          {slides?.map((item, i) => (
            <motion.div
              key={i}
              className="h-full"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}>
              <CarouselMedia src={item.src} label={item.label} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

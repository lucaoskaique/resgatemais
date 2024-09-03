import { Meta, StoryObj } from "@storybook/react"
import Autoplay from "embla-carousel-autoplay"

import { donateSectionData } from "@/mock"

import Carousel, { CarouselProps } from "."

export default {
  title: "ResgateMais/Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered"
  },
  args: {
    plugins: [Autoplay()],
    loop: true,
    orientation: "horizontal",
    slides: donateSectionData.media
  },
  tags: ["autodocs"]
} as Meta<CarouselProps>

export const Default: StoryObj<CarouselProps> = {}

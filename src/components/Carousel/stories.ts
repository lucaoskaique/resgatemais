import { Meta, StoryObj } from "@storybook/react"

import image3 from "@/assets/images/carousel-humaita.png"
import image2 from "@/assets/images/carousel-lami.png"
import image1 from "@/assets/images/carousel-vila-farrapos.png"

import Carousel, { CarouselProps } from "."

const imageTemplate = [
  {
    label: "Vila Farrapos",
    src: image1
  },
  {
    label: "Lami",
    src: image2
  },
  {
    label: "Humaita",
    src: image3
  }
]

export default {
  title: "ResgateMais/Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered"
  },
  args: {
    // carouselImages: contentTemplate,
    autoplay: true
  },
  tags: ["autodocs"]
} as Meta<CarouselProps>

export const ImageCarousel: StoryObj<CarouselProps> = {
  args: {
    mediaType: "image",
    contentList: imageTemplate
  }
}

export const VideoCarousel: StoryObj<CarouselProps> = {}

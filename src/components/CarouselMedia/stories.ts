import { Meta, StoryObj } from "@storybook/react"

import image from "@/assets/images/carousel-vila-farrapos.png"

import CarouselMedia, { CarouselMediaProps } from "."

const imageTemplate = {
  label: "Vila Farrapos",
  image: image
}

const videoTemplate = {
  label: "Video Label",
  video: "https://www.youtube.com/watch?v=QC8iQqtG0hg"
}

export default {
  title: "ResgateMais/Components/Carousel/MediaType",
  component: CarouselMedia,
  parameters: {
    layout: "centered"
  }
} as Meta<CarouselMediaProps>

export const Image: StoryObj<CarouselMediaProps> = {
  args: {
    mediaType: "image",
    src: imageTemplate.image,
    label: imageTemplate.label
  }
}

export const Video: StoryObj<CarouselMediaProps> = {
  args: {
    mediaType: "video",
    vSrc: videoTemplate.video,
    label: videoTemplate.label
  }
}

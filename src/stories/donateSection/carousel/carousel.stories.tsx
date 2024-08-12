import { Meta, StoryObj } from "@storybook/react"

import { contentTemplate } from "@/components/donateSection/carousel/contentTemplate"
import DonateImageCarousel, {
  DonateImageCarouselProps
} from "@/components/donateSection/carousel/imageCarousel"

export default {
  title: "Resgatemais/DonateSection/Carousel",
  component: DonateImageCarousel,
  parameters: {
    layout: "centered"
  },
  args: {
    carouselImages: contentTemplate,
    autoplay: true
  },
  tags: ["autodocs"]
} as Meta<DonateImageCarouselProps>

export const Default: StoryObj<DonateImageCarouselProps> = {}

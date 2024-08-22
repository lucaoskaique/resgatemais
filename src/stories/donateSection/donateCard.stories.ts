import { Meta, StoryObj } from "@storybook/react"

import DonateItemCard, {
  DonateItemCardProps
} from "@/components/donateSection/donateItemCard"

export default {
  title: "Resgatemais/DonateSection/CardItem",
  component: DonateItemCard,
  args: {
    title: "Resgatamos aproximadamente:",
    content: "1.000 pessoas",
    subcontent: "de porto alegre e região metropolitana"
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta<DonateItemCardProps>

export const Default: StoryObj<DonateItemCardProps> = {}

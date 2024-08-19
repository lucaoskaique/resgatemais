import { Meta, StoryObj } from "@storybook/react"

import DonateItemCard, { DonateCardProps } from "."

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
} as Meta<DonateCardProps>

export const Default: StoryObj<DonateCardProps> = {}

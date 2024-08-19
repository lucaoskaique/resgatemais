import { Meta, StoryObj } from "@storybook/react"

import DonateSection, { DonateSectionProps } from "."

export default {
  title: "Resgatemais/DonateSection",
  component: DonateSection,
  args: {
    title: "DOAÇÕES MOBILIZADAS",
    subtitle: "DESDE 06 DE MAIO",
    content:
      "Nossa rede de solidariedade, que já conta com a participação de mais de 50 pessoas, impactou a vida de pelo menos 14 mil gaúchos."
  }
} as Meta<DonateSectionProps>

export const Default: StoryObj<DonateSectionProps> = {}

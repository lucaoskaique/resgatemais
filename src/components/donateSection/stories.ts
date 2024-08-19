import { Meta, StoryObj } from "@storybook/react"

import DonateSection, { DonateSectionProps } from "."

const template = {
  title: "DOAÇÕES MOBILIZADAS",
  subtitle: "DESDE 06 DE MAIO",
  description:
    "Nossa rede de solidariedade, que já conta com a participação de mais de 50 pessoas, impactou a vida de pelo menos 14 mil gaúchos.",
  milestones: [
    {
      title: "Produzimos ao todo:",
      content: "11.300 MARMITAS"
    },
    {
      title: "Resgatamos aproximadamente:",
      content: "1.000 pessoas",
      subcontent: "de porto alegre e região metropolitana"
    },
    {
      title: "Movimentamos aproximadamente:",
      content: "+ de 18 toneladas em doações"
    }
  ]
}

export default {
  title: "ResgateMais/Sections/Donate Section",
  component: DonateSection,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    title: template.title,
    subtitle: template.subtitle,
    description: template.description,
    milestones: template.milestones
  }
} as Meta<DonateSectionProps>

export const Default: StoryObj<DonateSectionProps> = {}

import { Meta, StoryObj } from "@storybook/react"

import Footer, { FooterProps } from "."

export default {
  title: "Resgatemais/Footer",
  component: Footer,
  args: {
    textFooter:
      "Procuramos organizações parceiras, dispostas a contribuir com todas as etapas de reconstrução do Rio Grande do Sul para somar junto com a Resgate+ no desenvolvimento dos nossos projetos.",
    title: "FALE CONOSCO",
    email: "resgatemais@gmail.com",
    instagram: "@resgate.mais",
    phone: "(51) 99114-7322"
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta<FooterProps>

export const Default: StoryObj<FooterProps> = {}

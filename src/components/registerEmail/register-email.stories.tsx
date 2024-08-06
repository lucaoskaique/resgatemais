import { Meta, StoryObj } from "@storybook/react"

import RegisterEmail, { RegisterEmailProps } from "."

export default {
  title: "Resgatemais/RegisterEmail",
  component: RegisterEmail,
  args: {
    title: "Cadastrar email para receber mais infos",
    textLogo: "Organização Audiovisual da Sociedade Civil"
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta<RegisterEmailProps>

export const Default: StoryObj<RegisterEmailProps> = {}

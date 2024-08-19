import { Meta, StoryObj } from "@storybook/react"

import RegisterEmail, { inputProps } from "."
import { inputTemplate } from "./template"

export default {
  title: "Resgatemais/RegisterEmail",
  component: RegisterEmail,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    background: inputTemplate.background,
    title: inputTemplate.title,
    placeholder: inputTemplate.placeholder,
    logo: inputTemplate.logo,
    textLogo: inputTemplate.textLogo
  }
} as Meta<inputProps>

export const Default: StoryObj<inputProps> = {}

import { Meta, StoryObj } from "@storybook/react"

import bgImage from "@/stories/assets/bg-footer.png"

import RegisterEmail, { inputProps } from "."

const template: inputProps = {
  background: bgImage,
  title: "Cadastrar email para receber mais infos",
  placeholder: "exemplo@email.com",
  logo: "/logo-white-noText.png",
  textLogo: "Organização Audiovisual da Sociedade Civil"
}

export default {
  title: "ResgateMais/Components/Input",
  component: RegisterEmail,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    background: template.background,
    title: template.title,
    placeholder: template.placeholder,
    logo: template.logo,
    textLogo: template.textLogo
  }
} as Meta<inputProps>

export const Default: StoryObj<inputProps> = {}

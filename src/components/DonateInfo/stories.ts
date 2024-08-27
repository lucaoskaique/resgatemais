import { Meta, StoryObj } from "@storybook/react"

import DonateInfo, { InfoProps } from "."

export const infoTemplate: InfoProps = {
  title: "COMO DOAR",
  info: "O Fundo Filantrópico Resgate+ aceita doações:",
  pixKey: "resgatemais@sitawi.net",
  bankInfo: "[dados bancários da sitawi]"
}

export default {
  title: "Resgatemais/Donate Page/Donate Info",
  component: DonateInfo,
  parameters: {
    layout: "centered"
  },
  args: {
    title: infoTemplate.title,
    info: infoTemplate.info,
    pixKey: infoTemplate.pixKey,
    bankInfo: infoTemplate.bankInfo
  },
  tags: ["autodocs"]
} as Meta<InfoProps>

export const Default: StoryObj<InfoProps> = {}

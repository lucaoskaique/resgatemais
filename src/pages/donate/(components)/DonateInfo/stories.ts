import { Meta, StoryObj } from "@storybook/react"

import DonateInfo, { InfoProps } from "."
import { infoTemplate as template } from "../template"

export default {
  title: "Resgatemais/Donate Page/Donate Info",
  component: DonateInfo,
  parameters: {
    layout: "centered"
  },
  args: {
    title: template.title,
    info: template.info,
    pixKey: template.pixKey,
    bankInfo: template.bankInfo
  },
  tags: ["autodocs"]
} as Meta<InfoProps>

export const Default: StoryObj<InfoProps> = {}

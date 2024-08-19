import { Meta, StoryObj } from "@storybook/react"

import DonatePageFooter, { FooterProps } from "."
import { footerTemplate } from "../template"

export default {
  title: "Resgatemais/Donate Page/Footer",
  component: DonatePageFooter,
  parameters: {
    layout: "centered"
  },
  args: {
    title: footerTemplate.title,
    info: footerTemplate.info,
    pixKey: footerTemplate.pixKey,
    bankInfo: footerTemplate.bankInfo
  },
  tags: ["autodocs"]
} as Meta<FooterProps>

export const Default: StoryObj<FooterProps> = {}

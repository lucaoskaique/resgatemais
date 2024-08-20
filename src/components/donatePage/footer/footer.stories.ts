import { Meta, StoryObj } from "@storybook/react"

import DonatePageFooter, { DonateFooterProps } from "./footer"
import { footerTemplate } from "../template.json"

export default {
  title: "Resgatemais/DonatePage/Footer",
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
} as Meta<DonateFooterProps>

export const Default: StoryObj<DonateFooterProps> = {}

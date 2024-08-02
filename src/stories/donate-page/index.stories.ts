import { Meta, StoryObj } from "@storybook/react"

import qrCode from "@/assets/images/qr-code.png"
import {
  footerTemplate,
  heroTemplate
} from "@/components/donate-page/template.json"
import DonatePage, { DonatePageProps } from "@/pages/donate"

export default {
  title: "Resgatemais/DonatePage",
  component: DonatePage,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    heroProps: {
      title: heroTemplate.title,
      paragraph1: heroTemplate.paragraph1,
      paragraph2: heroTemplate.paragraph2,
      donateCall: heroTemplate.donateCall,
      qrCode: qrCode,
      backgroundImageUrl: heroTemplate.imageUrl
    },
    footerProps: {
      title: footerTemplate.title,
      info: footerTemplate.info,
      pixKey: footerTemplate.pixKey,
      bankInfo: footerTemplate.bankInfo
    }
  },
  tags: ["autodocs"]
} as Meta<DonatePageProps>

export const Default: StoryObj<DonatePageProps> = {}

import { Meta, StoryObj } from "@storybook/react"

import qrCode from "@/assets/images/qr-code.png"

import DonatePageHero, { DonateHeroProps } from "./hero"
import { heroTemplate } from "../template.json"

export default {
  title: "Resgatemais/DonatePage/Hero",
  component: DonatePageHero,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    backgroundImageUrl: {
      control: { type: "text" }
    }
  },
  args: {
    title: heroTemplate.title,
    paragraph1: heroTemplate.paragraph1,
    paragraph2: heroTemplate.paragraph2,
    donateCall: heroTemplate.donateCall,
    qrCode: qrCode,
    backgroundImageUrl: heroTemplate.imageUrl
  },
  tags: ["autodocs"]
} as Meta<DonateHeroProps>

export const Default: StoryObj<DonateHeroProps> = {}

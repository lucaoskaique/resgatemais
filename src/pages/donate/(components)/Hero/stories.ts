import { Meta, StoryObj } from "@storybook/react"

import DonatePageHero, { HeroProps } from "."
import { heroTemplate } from "../template"

export default {
  title: "Resgatemais/Donate Page/Hero",
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
    qrCode: heroTemplate.qrCode,
    bgHero: heroTemplate.bgHero
  },
  tags: ["autodocs"]
} as Meta<HeroProps>

export const Default: StoryObj<HeroProps> = {}

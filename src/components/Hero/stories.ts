import { Meta, StoryObj } from "@storybook/react"

import Hero, { HeroProps } from "."
import { heroTemplate } from "./template.json"

export default {
  title: "Resgatemais/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen"
  },

  argTypes: {
    imageHeroUrl: {
      control: { type: "text" }
    }
  },

  args: {
    title: "Organização Audiovisual da Sociedade Civil",
    logo: "/icon-red.png",
    imageHeroUrl: heroTemplate.imageUrl
  },
  tags: ["autodocs"]
} as Meta<HeroProps>

export const Default: StoryObj<HeroProps> = {
  args: {
    imageHeroUrl: "/bg-hero.png",
    title: "Organização Audiovisual da Sociedade Civil",
    logo: "/icon-red.png"
  }
}

import { Meta, StoryObj } from "@storybook/react"

import { heroData } from "@/mock"

import Hero, { HeroProps } from "."

export default {
  title: "ResgateMais/Sections/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    bgHero: heroData.bgUrl,
    home: {
      logo: heroData.home.logo,
      title: heroData.home.title
    }
  },
  tags: ["autodocs"]
} as Meta<HeroProps>

export const Default: StoryObj<HeroProps> = {}

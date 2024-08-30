import { Meta, StoryObj } from "@storybook/react"

import { sectionAboutData } from "@/mock"

import SectionAbout, { SectionAboutProps } from "."

export default {
  title: "ResgateMais/Sections/About",
  component: SectionAbout,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    title: sectionAboutData.title,
    content: sectionAboutData.content,
    label: sectionAboutData.label,
    QrCode: sectionAboutData.QrCode,
    image: sectionAboutData.image,
    cards: sectionAboutData.cards
  }
} as Meta<SectionAboutProps>

export const Default: StoryObj<SectionAboutProps> = {}

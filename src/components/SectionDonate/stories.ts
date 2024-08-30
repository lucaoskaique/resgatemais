import { Meta, StoryObj } from "@storybook/react"

import { donateSectionData } from "@/mock"

import DonateSection, { DonateSectionProps } from "."

export default {
  title: "ResgateMais/Sections/Donate Section",
  component: DonateSection,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    title: donateSectionData.title,
    subtitle: donateSectionData.subtitle,
    description: donateSectionData.description,
    milestones: donateSectionData.milestones
  }
} as Meta<DonateSectionProps>

export const Default: StoryObj<DonateSectionProps> = {}

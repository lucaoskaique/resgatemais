import { Meta, StoryObj } from "@storybook/react"

import MilestoneCard, { MilestoneCardProps } from "."

const template = {
  title: "Resgatamos aproximadamente:",
  content: "1.000 pessoas",
  subcontent: "de porto alegre e região metropolitana"
}

export default {
  title: "ResgateMais/Components/Milestone Card",
  component: MilestoneCard,
  parameters: {
    layout: "centered"
  },
  args: {
    title: template.title,
    content: template.content,
    subcontent: template.subcontent
  }
} as Meta<MilestoneCardProps>

export const Default: StoryObj<MilestoneCardProps> = {}

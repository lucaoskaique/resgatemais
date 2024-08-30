import { Meta, StoryObj } from "@storybook/react"

import { donateSectionData } from "@/mock"

import MilestoneCard, { MilestoneCardProps } from "."

export default {
  title: "ResgateMais/Components/Milestone Card",
  component: MilestoneCard,
  parameters: {
    layout: "centered"
  },
  args: {
    title: donateSectionData.milestones[0].title,
    content: donateSectionData.milestones[0].content,
    subcontent: donateSectionData.milestones[0].subcontent
  }
} as Meta<MilestoneCardProps>

export const Default: StoryObj<MilestoneCardProps> = {}

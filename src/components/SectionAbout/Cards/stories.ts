import { Meta, StoryObj } from "@storybook/react"

import Card, { CardProps } from "."

export default {
  title: "ResgateMais/Components/Card",
  component: Card,
  parameters: {
    layout: "centered"
  },
  args: {}
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {}

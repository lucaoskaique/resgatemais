import { Meta, StoryObj } from "@storybook/react"

import DonatePage from "."

export default {
  title: "Pages/Donation",
  component: DonatePage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen"
  }
} as Meta

export const Default: StoryObj = {}

import { Meta, StoryObj } from "@storybook/react"

import { newsletterData } from "@/mock"

import Newsletter, { NewsletterProps } from "."

export default {
  title: "ResgateMais/Sections/Newsletter",

  component: Newsletter,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    background: newsletterData.bgUrl
  }
} as Meta<NewsletterProps>

export const Default: StoryObj<NewsletterProps> = {}

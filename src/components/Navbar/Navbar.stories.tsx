import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { Navbar } from "./navbar"

const meta = {
  title: "Resgatemais/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen"
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn()
  }
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

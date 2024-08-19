import { Meta, StoryObj } from "@storybook/react"

import ThemeToggle, { SwitchProps } from "."

export default {
  title: "ResgateMais/Components/ThemeToggler",
  component: ThemeToggle,
  parameters: {
    layout: "centered"
  }
} as Meta<SwitchProps>

export const Switch: StoryObj<SwitchProps> = {
  args: {
    switcher: true
  }
}

export const Hamburguer: StoryObj<SwitchProps> = {
  args: {
    switcher: false
  }
}

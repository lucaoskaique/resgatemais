import { Meta, StoryObj } from "@storybook/react"

import Button, { ButtonProps } from "."

export default {
  title: "Resgatemais/Componentes/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    textColor: { control: "inline-radio" },
    background: { control: "inline-radio" }
  },
  args: {
    children: "button"
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Transparent: StoryObj<ButtonProps> = {
  args: {
    background: "transparent"
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "small"
  }
}

export const Large: StoryObj<ButtonProps> = {}

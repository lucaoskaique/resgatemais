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
    label: "Botão"
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    textColor: "white",
    background: "red"
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    textColor: "white",
    background: "red"
  }
}

export const SecondaryBorder: StoryObj<ButtonProps> = {
  args: {
    textColor: "white",
    background: "black"
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    textColor: "white",
    background: "red"
  }
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    textColor: "white",
    background: "red"
  }
}

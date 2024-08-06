import { Meta, StoryObj } from "@storybook/react"

import Button, { ButtonProps } from "./button"

export default {
  title: "Resgatemais/Componentes/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    txtColor: { control: "inline-radio" },
    btnColor: { control: "inline-radio" },
    txtSize: { control: "inline-radio" }
  },
  args: {
    label: "Botão"
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    txtColor: "white",
    btnColor: "red"
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    txtColor: "white",
    btnColor: "transparent"
  }
}

export const SecondaryBorder: StoryObj<ButtonProps> = {
  args: {
    txtColor: "white",
    btnColor: "transparent",
    btnBorder: true
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    txtColor: "white",
    btnColor: "red",
    txtSize: "small"
  }
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    txtColor: "white",
    btnColor: "red",
    txtSize: "large"
  }
}

import type { Meta, StoryObj } from "@storybook/react"

import { Navbar, NavbarProps } from "./navbar"

const meta: Meta<NavbarProps> = {
  title: "Resgatemais/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    title: "Organização Audiovisual da Sociedade Civil",
    logos: {
      dark: "/logo-white-red.png",
      light: "/logo-black-red.png",
      small: "/icon-red.png"
    },
    textLinks: ["sobre", "acoes", "doar"]
  }
}

export default meta

export const Default: StoryObj<NavbarProps> = {}

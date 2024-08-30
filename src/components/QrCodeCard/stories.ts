import { Meta, StoryObj } from "@storybook/react"

import QrCodeCard, { QRCodeCardProps } from "."

export default {
  title: "ResgateMais/Components/Qr Code",
  component: QrCodeCard,
  parameters: {
    layout: "center"
  },
  args: {
    label: "DOE AGORA"
  }
} as Meta<QRCodeCardProps>

export const Default: StoryObj<QRCodeCardProps> = {}

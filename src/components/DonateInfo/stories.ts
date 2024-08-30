import { Meta, StoryObj } from "@storybook/react"

import { donateInfoData } from "@/mock"

import DonateInfo, { InfoProps } from "."

export default {
  title: "Resgatemais/Sections/Donate Info",
  component: DonateInfo,
  parameters: {
    layout: "centered"
  },
  args: {
    title: donateInfoData.title,
    info: donateInfoData.info,
    pixKey: donateInfoData.pixKey,
    bankInfo: donateInfoData.bankInfo
  },
  tags: ["autodocs"]
} as Meta<InfoProps>

export const Default: StoryObj<InfoProps> = {}

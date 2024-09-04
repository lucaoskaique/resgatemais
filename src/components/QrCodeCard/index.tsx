import Image from "next/image"
import { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

import Button from "../Button"

export type QRCodeCardProps = {
  url: string
  label?: string
  btnTextColor?: "primary" | "secondary" | "white" | "black" | "red"
  btnBgColor?: "white" | "black" | "red" | "transparent" | "secondary"
} & HTMLAttributes<HTMLDivElement>

export default function QrCodeCard({
  url,
  label,
  btnBgColor = "red",
  btnTextColor = "white",
  ...props
}: QRCodeCardProps) {
  return (
    <div
      {...props}
      className={cn("flex flex-col items-center gap-5", props.className)}>
      <div className="w-full rounded-sm bg-white">
        <Image
          className="w-full"
          src={url}
          alt="QrCode"
          quality={100}
          width={360}
          height={360}
        />
      </div>
      {label && (
        <Button
          className="w-60 rounded-sm text-center tracking-widest"
          textColor={btnTextColor}
          background={btnBgColor}
          size="xlarge"
          href="/donate">
          {label}
        </Button>
      )}
    </div>
  )
}

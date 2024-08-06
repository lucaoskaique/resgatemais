import Link from "next/link"

import { cn } from "@/lib/utils"

export type ButtonProps = {
  label?: string
  linkToPage?: boolean
  href?: string
  btnColor?: "red" | "white" | "black" | "transparent"
  btnBorder?: boolean
  txtColor?: "red" | "white" | "black"
  txtSize: "small" | "medium" | "large"
}

export default function Button({
  label,
  linkToPage = false,
  href,
  btnColor,
  btnBorder = false,
  txtColor,
  txtSize = "small"
}: ButtonProps) {
  // if (btnColor && txtColor && btnColor === txtColor) {
  //     btnColor = "transparent"
  //     txtColor = "black"
  // }

  const background = btnColor === "red" ? "bg-highlight" : `bg-${btnColor}`
  const border = btnBorder && "border border-primary shadow-button"
  const text = txtColor === "red" ? "text-highlight" : `text-${txtColor}`
  const size = {
    small: "text-xs px-4 py-[10px]",
    medium: "text-base px-5 py-4",
    large: "text-lg px-6 py-4"
  }

  return (
    <Link
      className={cn(
        "rounded-md font-bold",
        background,
        border,
        text,
        size[txtSize]
      )}
      href={linkToPage ? `/${href}` : `#${href}`} // Se não for para outra página, faz a ancoragem na própria página pelo Id
      rel="noreferrer noopener"
      target="_blank">
      {label}
    </Link>
  )
}

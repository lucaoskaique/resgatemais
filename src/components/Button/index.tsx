import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode
} from "react"

import { cn } from "@/lib/utils"

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  background?: "red" | "white" | "black" | "transparent"
  size?: "xlarge" | "large" | "medium" | "small"
  icon?: ReactNode
  fullWidth?: boolean
  fontBold?: "bold" | "medium"
  textColor?: "primary" | "secondary" | "white" | "black"
  as?: ElementType
} & ButtonTypes

const Button: ForwardRefRenderFunction<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
> = (
  {
    children,
    size = "large",
    background = "red",
    fullWidth = false,
    icon,
    textColor = "white",
    fontBold = "bold",
    as: Component = "a",
    ...props
  },
  ref
) => {
  const sizeClasses = {
    xlarge: "text-xl px-8 py-4",
    large: "text-lg px-6 py-3",
    medium: "text-base px-4 py-2",
    small: "text-sm px-2 py-1"
  }

  const backgroundClasses = {
    red: "bg-highlight",
    white: "bg-white",
    black: "bg-black",
    transparent: "bg-transparent"
  }

  const textColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    white: "text-white",
    black: "text-black"
  }

  const fontWeightClasses = {
    bold: "font-bold",
    medium: "font-medium"
  }

  return (
    <Component
      className={cn(
        "rounded-md",
        fontWeightClasses[fontBold],
        sizeClasses[size],
        backgroundClasses[background],
        textColorClasses[textColor],
        fullWidth && "w-full",
        icon && "flex items-center justify-center"
      )}
      ref={ref}
      {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children && <span>{children}</span>}
    </Component>
  )
}

export default forwardRef(Button)

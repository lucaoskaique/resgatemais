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
  background?: "white" | "black" | "red" | "transparent" | "secondary"
  size?: "xlarge" | "large" | "medium" | "small"
  icon?: ReactNode
  fullWidth?: boolean
  fontBold?: "bold" | "regular"
  textColor?: "primary" | "secondary" | "white" | "black" | "red"
  as?: ElementType
  className?: string
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
    textColor = "primary",
    fontBold = "bold",
    as: Component = "a",
    className,
    ...props
  },
  ref
) => {
  const sizeClasses = {
    xlarge: "px-6 py-3 text-xl",
    large: "px-4 py-2 text-lg",
    medium: "px-2 py-1",
    small: "px-1 py-[0.125rem] text-sm"
  }

  const backgroundClasses = {
    red: "bg-highlight",
    white: "bg-white",
    black: "bg-black",
    transparent: "bg-transparent",
    secondary: "bg-background"
  }

  const textColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    white: "text-white",
    black: "text-black",
    red: "text-highlight"
  }

  const fontWeightClasses = {
    bold: "font-bold",
    regular: "font-medium"
  }

  return (
    <Component
      className={cn(
        "px- rounded-md tracking-wide transition duration-500 hover:translate-y-[-0.1em] hover:shadow-[0_0.5em_0.5em_-0.2em_#fff]",
        fontWeightClasses[fontBold],
        sizeClasses[size],
        backgroundClasses[background],
        textColorClasses[textColor],
        background === "red" ? "text-white" : "",
        fullWidth && "w-full",
        icon && "flex items-center justify-center",
        className
      )}
      ref={ref}
      {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children && <span>{children}</span>}
    </Component>
  )
}

export default forwardRef(Button)

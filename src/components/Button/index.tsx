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
  background?: "hot" | "ice" | "white"
  size?: "xlarge" | "large" | "medium" | "small"
  icon?: ReactNode
  fullWidth?: boolean
  fontWeight?: boolean
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
    background = "hot",
    fullWidth = false,
    icon,
    textColor = "white",
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
    hot: "bg-red-500",
    ice: "bg-blue-500",
    white: "bg-white"
  }

  const textColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    white: "text-white",
    black: "text-black"
  }

  return (
    <Component
      className={cn(
        "rounded-md font-bold",
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
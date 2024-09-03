/* eslint-disable react/display-name */
import React, { InputHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const TextInput = React.forwardRef(
  ({ label, className, ...props }: TextInputProps, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="mb-1 block text-sm font-medium text-primary">
            {label}
          </label>
        )}
        <input
          className={cn(
            "w-full rounded-xl bg-white py-1 pl-3 text-base text-black sm:text-paragraph",
            "focus:border-highlight focus:ring-highlight",
            className
          )}
          ref={ref as React.LegacyRef<HTMLInputElement>}
          {...props}
        />
      </div>
    )
  }
)

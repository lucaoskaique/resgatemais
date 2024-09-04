/* eslint-disable react/display-name */
import React, { TextareaHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  type?: string
}

export const TextAreaInput = React.forwardRef(
  ({ label, className, ...props }: TextAreaInputProps, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className="mb-1 block text-sm font-medium">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            "w-full rounded-xl bg-white py-1 pl-3 text-base text-black sm:text-paragraph",
            "focus:border-highlight focus:ring-highlight",
            "min-h-[100px] resize-y",
            className
          )}
          ref={ref as React.LegacyRef<HTMLTextAreaElement>}
          {...props}
        />
      </div>
    )
  }
)

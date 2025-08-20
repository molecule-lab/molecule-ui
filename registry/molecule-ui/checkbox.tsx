"use client"

import React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export function Checkbox({
  className,
  checked: checkedProp,
  onCheckedChange: setCheckedProp,
  disabled,
  defaultChecked,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  const [_checked, _setChecked] =
    React.useState<CheckboxPrimitive.CheckedState>(defaultChecked ?? false)

  const checked = checkedProp ?? _checked

  const setChecked = React.useCallback(
    (
      value:
        | CheckboxPrimitive.CheckedState
        | ((value: CheckboxPrimitive.CheckedState) => boolean),
    ) => {
      const checkedState = typeof value === "function" ? value(checked) : value
      if (setCheckedProp) {
        setCheckedProp(checkedState)
      } else {
        _setChecked(checkedState)
      }
    },
    [setCheckedProp, checked],
  )

  return (
    <motion.div
      whileTap={disabled ? undefined : { scale: 0.95 }}
      whileHover={disabled ? undefined : { scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      <CheckboxPrimitive.Root
        checked={checked}
        onCheckedChange={(value) => setChecked(!!value)}
        disabled={disabled}
        className={cn(
          "border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:border-primary/20 flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-200 outline-none hover:shadow-sm focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <motion.svg
          className="h-full w-full"
          viewBox="0 0 12 12"
          fill="none"
          initial={false}
          style={{ scale: 1, opacity: 1 }}
        >
          <motion.path
            d="M2.5 6L4.5 8L9.5 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            animate={checked ? "checked" : "unchecked"}
            variants={{
              checked: {
                pathLength: 1,
                strokeDasharray: "1 1",
                opacity: 1,
                transition: {
                  pathLength: { duration: 0.2, ease: "easeInOut", delay: 0.1 },
                  strokeDasharray: {
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.1,
                  },
                  opacity: { duration: 0.1, ease: "easeInOut" },
                },
              },
              unchecked: {
                pathLength: 0,
                strokeDasharray: "0 1",
                opacity: 0,
                transition: {
                  pathLength: { duration: 0.3, ease: "easeInOut" },
                  strokeDasharray: {
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.1,
                  },
                  opacity: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
                },
              },
            }}
          />
        </motion.svg>
      </CheckboxPrimitive.Root>
    </motion.div>
  )
}

"use client"

import React from "react"
import { cva } from "class-variance-authority"
import { HTMLMotionProps, motion } from "motion/react"

import { cn } from "@/lib/utils"

const spinningCircleVariants = cva("flex gap-2 items-center justify-center", {
  variants: {
    messagePlacement: {
      bottom: "flex-col",
      top: "flex-col-reverse",
      right: "flex-row",
      left: "flex-row-reverse",
    },
  },
  defaultVariants: {
    messagePlacement: "bottom",
  },
})

export interface SpinningCircleProps {
  message?: string
  /**
   * Position of the message relative to the spinner.
   * @default bottom
   */
  messagePlacement?: "top" | "bottom" | "left" | "right"
}

export function SpinningCircle({
  className,
  message,
  messagePlacement = "bottom",
  ...props
}: HTMLMotionProps<"div"> & SpinningCircleProps) {
  return (
    <div className={cn(spinningCircleVariants({ messagePlacement }))}>
      <motion.div
        className={cn(
          "w-8 h-8 border-4 border-t-foreground rounded-full",
          className,
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        {...props}
      />
      {message && <div>{message}</div>}
    </div>
  )
}

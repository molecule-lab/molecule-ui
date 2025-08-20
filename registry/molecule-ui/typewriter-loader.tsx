"use client"

import React from "react"
import { HTMLMotionProps, motion } from "motion/react"

import { cn } from "@/lib/utils"

export interface TypewriterLoaderProps {
  /**
   * The text to display with the typewriter effect.
   * @default Loading...
   */
  typingText?: string
  /**
   * The speed of the typewriter effect in milliseconds between each character.
   * @default 200
   */
  typingSpeed?: number
}

const DIVIDER = 400

export function TypewriterLoader({
  className,
  typingText = "Loading...",
  typingSpeed = 200,
  ...props
}: HTMLMotionProps<"div"> & TypewriterLoaderProps) {
  const [displayText, setDisplayText] = React.useState("")

  React.useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= typingText.length) {
        setDisplayText(typingText.slice(0, index))
        index++
      } else {
        index = 0
      }
    }, typingSpeed)
    return () => clearInterval(interval)
  }, [typingSpeed, typingText])

  return (
    <div className="flex items-center justify-center font-mono text-lg">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: typingSpeed / DIVIDER,
          repeat: Number.POSITIVE_INFINITY,
        }}
        className={cn("ml-1", className)}
        {...props}
      >
        |
      </motion.span>
    </div>
  )
}

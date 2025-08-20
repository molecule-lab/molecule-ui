"use client"

import React from "react"
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react"

import { cn } from "@/lib/utils"

export interface ExpandableButtonProps {
  /**
   * Controls whether the button is in its expanded state.
   * When true, shows both icon and text. When false, shows only the icon.
   */
  expanded?: boolean
  /**
   * Callback function called when the expanded state changes.
   * @param open - The new expanded state
   */
  onExpandedChange?: (open: boolean) => void
  /**
   * The icon to display in the button.
   * Shows in both collapsed and expanded states.
   */
  icon?: React.ReactNode
}

export function ExpandableButton({
  expanded: expandedProp,
  onExpandedChange: setExpandedProp,
  icon,
  className,
  onClick,
  children,
  ...props
}: HTMLMotionProps<"button"> & ExpandableButtonProps) {
  const [_expanded, _setExpanded] = React.useState(false)

  const expanded = expandedProp ?? _expanded

  const setExpanded = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const expandedState =
        typeof value === "function" ? value(expanded) : value

      if (setExpandedProp) {
        setExpandedProp(expandedState)
      } else {
        _setExpanded(expandedState)
      }
    },
    [setExpandedProp, expanded],
  )

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setExpanded(!expanded)
    onClick?.(e)
  }

  return (
    <motion.button
      layout
      onClick={onClickHandler}
      className={cn(
        "text-primary-foreground bg-primary relative flex h-10 max-w-full min-w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl text-lg font-medium",
        className,
      )}
      initial={false}
      animate={{
        flexGrow: expanded ? 1 : 0,
        maxWidth: expanded ? "100%" : "3rem",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      {...props}
    >
      <AnimatePresence mode="wait">
        {expanded ? (
          <motion.div
            key="active"
            className={cn("flex h-full w-full items-center justify-center")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex w-full items-center justify-center gap-2">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.div>
              <motion.span
                className="whitespace-nowrap"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {children}
              </motion.span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="inactive"
            className={cn("flex items-center justify-center")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {icon}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

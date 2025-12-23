"use client"

import React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

const accordionContentVariants = {
  open: {
    height: "auto",
    opacity: 1,
    filter: "blur(0px)",
  },
  closed: {
    height: 0,
    opacity: 0,
    filter: "blur(4px)",
  },
}

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("bg-primary-foreground rounded-lg border px-5", className)}
      {...props}
    />
  )
}

function AccordionItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("relative border-b last:border-b-0", className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  )
}

function AccordionTrigger({
  children,
  className,
  showIcon = true,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  showIcon?: boolean
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-header"
        className="group active:text-foreground/50 focus-visible:bg-muted flex flex-1 items-start justify-between gap-4 py-4 font-semibold disabled:opacity-50"
        {...props}
      >
        {children}
        {showIcon && (
          <ChevronDown className="size-6 duration-300 group-data-[state=open]:rotate-180" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const element = contentRef.current?.parentElement
    if (!element) return

    const observer = new MutationObserver(() => {
      const state = element.getAttribute("data-state")
      setIsOpen(state === "open")
    })

    observer.observe(element, {
      attributes: true,
      attributeFilter: ["data-state"],
    })

    // Set initial state
    const initialState = element.getAttribute("data-state")
    setIsOpen(initialState === "open")

    return () => observer.disconnect()
  }, [])

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      forceMount
      className="overflow-hidden"
      {...props}
    >
      <motion.div
        ref={contentRef}
        animate={isOpen ? "open" : "closed"}
        initial={"closed"}
        variants={accordionContentVariants}
        transition={{
          height: {
            duration: 0.3,
            ease: "easeOut",
          },
          opacity: {
            duration: 0.2,
            delay: 0.1,
          },
          filter: {
            duration: 0.15,
            delay: 0.05,
          },
        }}
      >
        <div className={cn("text-muted-foreground pb-4", className)}>
          {children}
        </div>
      </motion.div>
    </AccordionPrimitive.Content>
  )
}
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

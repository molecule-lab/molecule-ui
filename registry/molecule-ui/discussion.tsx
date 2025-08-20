import React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

export function Discussion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

export function DiscussionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        "before:from-border before:via-border/60 before:to-border/40 relative mt-2 pl-4 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-gradient-to-b",
        className,
      )}
      {...props}
    />
  )
}

export function DiscussionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Header>) {
  return (
    <AccordionPrimitive.Header className={cn("flex", className)} {...props}>
      {children}
    </AccordionPrimitive.Header>
  )
}

export function DiscussionExpand({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Trigger
      className={cn(
        "text-muted-foreground flex flex-1 items-center gap-1 text-left text-xs font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      Show Replies
      <ChevronDown className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  )
}

export function DiscussionTitle({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("text-sm font-semibold", className)} {...props}>
      {children}
    </div>
  )
}

export function DiscussionBody({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("text-sm leading-relaxed", className)} {...props}>
      {children}
    </div>
  )
}

export function DiscussionReplies({
  children,
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden pl-10 text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Content>
  )
}

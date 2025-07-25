"use client"

import React from "react"
import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

function Sidebar({
  children,
  className,
  "aria-label": ariaLabel = "Main navigation",
  ...props
}: React.ComponentProps<"div"> & {
  "aria-label"?: string
}) {
  return (
    <div
      role="navigation"
      aria-label={ariaLabel}
      className={cn(
        "h-full pr-4 flex-col hidden md:flex overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarContent({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(" overflow-auto flex flex-col gap-2 flex-1", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarGroup({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      className={cn(
        "relative grid grid-flow-row auto-rows-max gap-0.5 text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SidebarGroupContent({
  children,
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul className={cn("list-none space-y-0.5", className)} {...props}>
      {children}
    </ul>
  )
}

function SidebarGroupLabel({
  asChild = false,
  children,
  className,
  id,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
  id?: string
}) {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      id={id}
      role="heading"
      aria-level={3}
      className={cn(
        "ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 text-muted-foreground font-medium",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

function SidebarGroupItem({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li className={cn("group/menu-item relative", className)} {...props}>
      {children}
    </li>
  )
}

function SidebarGroupLink({
  asChild = false,
  children,
  className,
  isActive,
  href,
  "aria-label": ariaLabel,
  ...props
}: React.ComponentProps<"a"> & {
  href: string
  asChild?: boolean
  isActive?: boolean
  "aria-label"?: string
}) {
  const Comp = asChild ? Slot : Link
  return (
    <Comp
      href={href}
      role="link"
      aria-current={isActive ? "page" : undefined}
      aria-label={ariaLabel}
      tabIndex={0}
      className={cn(
        "w-full flex items-center gap-2 rounded-md p-2 text-left outline-hidden ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px]  overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className,
      )}
      data-active={isActive}
      {...props}
    >
      {children}
      {isActive && <span className="sr-only">Current page</span>}
    </Comp>
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupItem,
  SidebarGroupLink,
}

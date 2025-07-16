"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { type DialogProps } from "@radix-ui/react-dialog"
import { FileIcon } from "lucide-react"

import { source } from "@/lib/source"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface CommandGroupItemProps {
  items: typeof source.pageTree.children
  runCommand: (command: () => unknown) => unknown
}

export function Search({ ...props }: DialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  const runCommand = React.useCallback((command: () => unknown) => {
    setIsOpen(false)
    command()
  }, [])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:max-w-40 lg:max-w-64",
        )}
        onClick={() => setIsOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {source.pageTree.children.map((root) => (
            <CommandGroup
              key={root.$id}
              heading={
                root.name === "Introduction" ? "Getting Started" : root.name
              }
            >
              {root.type === "folder" && root.children && (
                <CommandGroupItems
                  runCommand={runCommand}
                  items={[
                    ...(root.index ? [root.index] : []),
                    ...root.children,
                  ]}
                />
              )}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

function CommandGroupItems({ items, runCommand }: CommandGroupItemProps) {
  const router = useRouter()

  return items.map((item) => {
    return (
      item.type === "page" && (
        <CommandItem
          onSelect={() => {
            runCommand(() => router.push(item.url))
          }}
          key={item.url}
        >
          <FileIcon className="mr-2 size-4" />
          {item.name}
        </CommandItem>
      )
    )
  })
}

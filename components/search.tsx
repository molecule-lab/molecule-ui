"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { type DialogProps } from "@radix-ui/react-dialog"
import { FileIcon } from "lucide-react"

import type { PageTree } from "@/lib/source"
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

interface SearchProps extends DialogProps {
  tree: PageTree
}

interface CommandGroupItemProps {
  items: PageTree["children"]
  runCommand: (command: () => unknown) => unknown
}

export function Search({ tree, ...props }: SearchProps) {
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
          "bg-muted/50 text-muted-foreground relative h-8 w-full justify-start rounded-[0.5rem] text-sm font-normal shadow-none sm:pr-12 md:max-w-40 lg:max-w-64",
        )}
        onClick={() => setIsOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="bg-muted pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {tree.children.map((root) => (
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

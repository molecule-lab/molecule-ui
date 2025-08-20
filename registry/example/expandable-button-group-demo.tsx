"use client"

import { useState } from "react"
import { Inbox, Mail, Settings, Star, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { ExpandableButton } from "@/registry/molecule-ui/expandable-button"

export function ExpandableGroupButtonDemo() {
  const [activeId, setActiveId] = useState(0)

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <ExpandableButton
        className={cn(activeId === 1 && "bg-red-400 text-white")}
        onClick={() => setActiveId(1)}
        expanded={activeId === 1}
        icon={<Inbox className="h-5 w-5" />}
      >
        Inbox
      </ExpandableButton>
      <ExpandableButton
        className={cn(activeId === 2 && "bg-yellow-400 text-white")}
        onClick={() => setActiveId(2)}
        expanded={activeId === 2}
        icon={<Mail className="h-5 w-5" />}
      >
        Mail
      </ExpandableButton>
      <ExpandableButton
        className={cn(activeId === 3 && "bg-blue-400 text-white")}
        onClick={() => setActiveId(3)}
        expanded={activeId === 3}
        icon={<Star className="h-5 w-5" />}
      >
        Favorites
      </ExpandableButton>
      <ExpandableButton
        className={cn(activeId === 4 && "bg-orange-400 text-white")}
        onClick={() => setActiveId(4)}
        expanded={activeId === 4}
        icon={<Settings className="h-5 w-5" />}
      >
        Settings
      </ExpandableButton>
      <ExpandableButton
        className={cn(activeId === 5 && "bg-violet-400 text-white")}
        onClick={() => setActiveId(5)}
        expanded={activeId === 5}
        icon={<User className="h-5 w-5" />}
      >
        Profile
      </ExpandableButton>
    </div>
  )
}

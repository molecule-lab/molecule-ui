import { Inbox } from "lucide-react"

import { ExpandableButton } from "@/registry/molecule-ui/expandable-button"

export function ExpandableButtonDemo() {
  return (
    <div className="flex w-full items-center justify-center">
      <ExpandableButton icon={<Inbox className="h-5 w-5" />}>
        Inbox
      </ExpandableButton>
    </div>
  )
}

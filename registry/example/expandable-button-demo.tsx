import { Inbox } from "lucide-react"

import { ExpandableButton } from "@/registry/molecule-ui/expandable-button"

export function ExpandableButtonDemo() {
  return (
    <div className="w-full flex items-center justify-center">
      <ExpandableButton icon={<Inbox className="w-5 h-5" />}>
        Inbox
      </ExpandableButton>
    </div>
  )
}

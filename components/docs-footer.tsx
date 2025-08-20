import Link from "next/link"
import { Item } from "@/types"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface DocsFooterProps {
  neighbors: {
    previous?: Item
    next?: Item
  }
}
export function DocsFooter({ neighbors }: DocsFooterProps) {
  return (
    <div className="mt-auto flex flex-col pb-16">
      <div
        className={`flex items-center ${
          neighbors.previous?.name && neighbors.next?.name
            ? "justify-between"
            : neighbors.previous?.name
              ? "justify-start"
              : "justify-end"
        }`}
      >
        {neighbors.previous?.name && (
          <Button variant="outline" size="sm" asChild>
            <Link href={neighbors.previous.url}>
              <ArrowLeft className="size-4" /> {neighbors.previous?.name}
            </Link>
          </Button>
        )}
        {neighbors.next?.name && (
          <Button variant="outline" size="sm" asChild>
            <Link href={neighbors.next.url}>
              {neighbors.next?.name} <ArrowRight className="size-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

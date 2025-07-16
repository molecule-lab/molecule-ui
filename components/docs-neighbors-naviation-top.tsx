import Link from "next/link"
import { Item } from "@/types"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface DocsTopNavigationProps {
  neighbors: {
    previous?: Item
    next?: Item
  }
}

export function DocsNeighborsNavigationTop({
  neighbors,
}: DocsTopNavigationProps) {
  return (
    <div className="flex gap-1">
      {neighbors.previous && (
        <Link
          href={neighbors.previous.url}
          className="bg-secondary p-1.5 rounded-md hover:bg-secondary/80"
        >
          <ArrowLeft className="size-4" />
        </Link>
      )}
      {neighbors.next && (
        <Link
          href={neighbors.next.url}
          className="bg-secondary p-1.5 rounded-md hover:bg-secondary/80"
        >
          <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  )
}

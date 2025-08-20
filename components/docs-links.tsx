import Link from "next/link"
import { MoveUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"

interface DocsLinksProps {
  docLink?: string
  apiLink?: string
}

export function DocsLinks({ docLink, apiLink }: DocsLinksProps) {
  return (
    <div className="flex gap-2">
      <div>
        {docLink && (
          <Badge asChild variant="secondary">
            <Link
              target="_blank"
              className="flex items-center gap-1 text-xs"
              href={docLink}
            >
              Docs <MoveUpRight className="size-3" />
            </Link>
          </Badge>
        )}
      </div>
      <div>
        {apiLink && (
          <Badge asChild variant="secondary">
            <Link
              target="_blank"
              className="flex items-center gap-1 text-xs"
              href={apiLink}
            >
              Api <MoveUpRight className="size-3" />
            </Link>
          </Badge>
        )}
      </div>
    </div>
  )
}

import { MoveUpRight, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface DocsLinksProps {
  docLink?: string;
  apiLink?: string;
}

export function DocsLinks({ docLink, apiLink }: DocsLinksProps) {
  return (
    <div className="flex gap-2">
      <div>
        {docLink && (
          <Badge asChild variant="secondary">
            <Link className="text-xs flex gap-1 items-center" href={docLink}>
              Docs <MoveUpRight className="size-3" />
            </Link>
          </Badge>
        )}
      </div>
      <div>
        {apiLink && (
          <Badge asChild variant="secondary">
            <Link className="text-xs flex gap-1 items-center" href={apiLink}>
              Api <MoveUpRight className="size-3" />
            </Link>
          </Badge>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export function Announcement() {
  return (
    <Badge asChild variant='secondary' className='rounded-full'>
      <Link href='/docs'>
        Introducing Molecule UI <ChevronRight />
      </Link>
    </Badge>
  );
}

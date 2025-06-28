import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsSidebar } from "@/components/docs-sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex-1 h-full overflow-hidden items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10'>
      <DocsSidebar tree={source.pageTree} />
      <main className=' h-full overflow-auto'>{children}</main>
    </div>
  );
}

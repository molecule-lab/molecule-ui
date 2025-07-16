import type { ReactNode } from "react"
import { DocsLayout } from "fumadocs-ui/layouts/docs"

import { source } from "@/lib/source"
import { DocsSidebar } from "@/components/docs-sidebar"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/nav-bar"
import { baseOptions } from "@/app/layout.config"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}

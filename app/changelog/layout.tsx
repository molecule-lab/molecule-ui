import type { ReactNode } from "react"

import { source } from "@/lib/source"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/nav-bar"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar tree={source.pageTree} />
      <main className="flex-1">
        <div className="container-wrapper">
          <div className="container">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

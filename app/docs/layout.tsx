import type { ReactNode } from "react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/nav-bar"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}

import type { ReactNode } from "react"

import { source } from "@/lib/source"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/nav-bar"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar tree={source.pageTree} />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="before:animate-rainbow pointer-events-none absolute inset-0 h-24 w-full before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-4/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-[length:200%] before:opacity-20 before:[filter:blur(calc(4*1rem))]" />
    </>
  )
}

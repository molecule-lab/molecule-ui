import { Navbar } from "@/components/nav-bar"

import "@/app/global.css"

import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import { RootProvider } from "fumadocs-ui/provider"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="relative flex w-full flex-col justify-center overflow-x-hidden  scroll-smooth bg-background font-sans antialiased">
        <ThemeProvider>
          <RootProvider search={{ enabled: false }}>{children}</RootProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

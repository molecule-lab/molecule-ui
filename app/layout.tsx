import "@/app/global.css"

import type { ReactNode } from "react"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { absoluteUrl, constructMetadata } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = constructMetadata({
  title: "Molecule UI",
  description:
    "A modern React component library focused on intuitive interactions and seamless user experiences.",
  image: absoluteUrl("/og"),
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-background relative flex w-full flex-col justify-center overflow-x-hidden scroll-smooth font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

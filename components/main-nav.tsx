"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { nav } from "@/config/nav"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/icons/logo"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="hidden items-center gap-6 pl-4 text-sm font-medium md:flex md:p-2">
      <Link
        href={"/"}
        aria-label={"Home"}
        className={cn("text-foreground flex items-center justify-center")}
      >
        <div className="flex items-center gap-2 text-lg font-bold">
          <Logo />
          Molecule UI
        </div>
      </Link>
      {nav.map((item) => (
        <Link
          key={item.url}
          href={item.url!}
          aria-label={item.name}
          className={cn(
            "hover:text-foreground/80 text-foreground flex items-center justify-center transition-colors",
            pathname?.startsWith(item.url!)
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

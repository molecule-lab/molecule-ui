"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { nav } from "@/config/nav"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/icons/logo"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="hidden pl-4 md:p-2 md:flex gap-6 items-center text-sm font-medium ">
      <Link
        href={"/"}
        aria-label={"Home"}
        className={cn("flex items-center justify-center text-foreground")}
      >
        <div className="flex gap-2 items-center font-bold text-lg">
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
            "flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground",
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

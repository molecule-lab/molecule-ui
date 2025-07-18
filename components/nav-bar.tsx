import Link from "next/link"

import { Button } from "@/components/ui/button"
import { GithubLink } from "@/components/github-link"
import { Twitter } from "@/components/icons/twitter"
import { MainNav } from "@/components/main-nav"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { Search } from "@/components/search"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b h-14">
      <div className="container h-full flex items-center gap-4">
        <MobileSidebar />
        <div className="flex items-center justify-between flex-1">
          <MainNav />
          <div className="flex items-center md:justify-between flex-1 md:flex-none gap-2 ">
            <div className="flex-1/2">
              <Search />
            </div>
            <GithubLink />
            <Button asChild size="icon" variant="ghost">
              <Link
                href="https://x.com/moleculeui"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="fill-current" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

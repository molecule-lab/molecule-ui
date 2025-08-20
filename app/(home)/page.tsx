import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Announcement } from "@/components/announcement"
import { Examples } from "@/components/examples"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col items-center justify-center gap-2 px-4 py-12 text-center xl:gap-4">
        <Announcement />
        <h1 className="max-w-2xl text-2xl font-bold tracking-tight md:text-3xl xl:text-5xl">
          Build Beautiful Interfaces
        </h1>

        <p className="max-w-xl">
          A modern React component library focused on intuitive interactions and
          seamless user experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="sm">
            <Link href="/docs/components/checkbox">Browse Components</Link>
          </Button>
        </div>
      </section>
      <Examples />
    </main>
  )
}

import { notFound } from "next/navigation"
import { getMDXComponents } from "@/mdx-components"
import { createRelativeLink } from "fumadocs-ui/mdx"

import { changelog } from "@/lib/source"

export default async function Page() {
  const page = changelog.getPage(["changelog"])
  if (!page) {
    notFound()
  }

  const doc = page.data
  const MDX = doc.body

  return (
    <div className="flex min-h-dvh flex-col gap-8 border-r border-l p-6 lg:p-10">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="max-w-2xl text-2xl font-bold">Changelog</div>
        <p className="max-w-xl text-center">
          Keep yourself informed about the most recent additions and
          improvements we've made to Molecule UI
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(changelog, page),
          })}
        />
      </div>
    </div>
  )
}

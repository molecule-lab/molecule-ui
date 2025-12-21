import Link from "next/link"

import { source } from "@/lib/source"

export function ComponentsList() {
  const components = source.pageTree.children
    .filter((dir) => dir.type === "folder")
    .filter(
      (dir) =>
        dir.name === "Components" ||
        dir.name === "Loaders" ||
        dir.name === "Typography",
    )
    .flatMap((child) => child.children)
    .filter((component) => component.type === "page")

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
        {components.map((component) => (
          <Link
            key={component.$id}
            href={component.url}
            className="inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline md:text-base"
          >
            {component.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

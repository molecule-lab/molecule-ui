import { changelog as changelogSource, docs } from "@/.source"
import { loader } from "fumadocs-core/source"

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
})

export const changelog = loader({
  baseUrl: "/changelog",
  source: changelogSource.toFumadocsSource(),
})

// Export type for use in client components
export type PageTree = typeof source.pageTree

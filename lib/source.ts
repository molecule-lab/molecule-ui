import { docs } from "@/.source"
import { loader } from "fumadocs-core/source"

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
})

// Export type for use in client components
export type PageTree = typeof source.pageTree

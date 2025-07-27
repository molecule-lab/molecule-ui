import { createMDXSource } from "@fumadocs/content-collections"
import { allDocs, allMetas } from "content-collections"
import { loader } from "fumadocs-core/source"

const activeDocs = allDocs.filter((doc) => doc.isActive !== false)

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(activeDocs, allMetas),
})

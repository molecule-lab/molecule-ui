import { defineCollection, defineConfig } from "@content-collections/core"
import {
  createMetaSchema,
  transformMDX,
} from "@fumadocs/content-collections/configuration"
import rehypePrettyCode from "rehype-pretty-code"

import { transformers } from "@/lib/transformers"

const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(true),
    date: z.string().optional(),
    links: z
      .object({
        doc: z.string().optional(),
        api: z.string().optional(),
      })
      .optional(),
    featured: z.boolean().optional().default(false),
    component: z.boolean().optional().default(false),
    toc: z.boolean().optional().default(true),
    image: z.string().optional(),
  }),
  transform: (document, context) =>
    transformMDX(document, context, {
      rehypePlugins: (plugins) => {
        plugins.shift()
        plugins.push([
          rehypePrettyCode,
          {
            theme: {
              dark: "github-dark",
              light: "github-light",
            },
            transformers,
          },
        ])
        return plugins
      },
    }),
})

const metas = defineCollection({
  name: "meta",
  directory: "content/docs",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
})

export default defineConfig({
  collections: [docs, metas],
})

import { defineConfig, defineDocs } from "fumadocs-mdx/config"
import rehypePrettyCode from "rehype-pretty-code"

import { transformers } from "@/lib/highlight-code"

export const docs = defineDocs({
  dir: "content/docs",
  // docs: {
  //   schema: frontmatterSchema.extend({
  //     title: z.string(),
  //     description: z.string(),
  //     published: z.boolean().default(true),
  //     date: z.string().optional(),
  //     links: z
  //       .object({
  //         doc: z.string().optional(),
  //         api: z.string().optional(),
  //       })
  //       .optional(),
  //     featured: z.boolean().optional().default(false),
  //     component: z.boolean().optional().default(false),
  //     image: z.string().optional(),
  //     isActive: z.boolean().optional().default(true),
  //   }),
  // },
})

export default defineConfig({
  mdxOptions: {
    rehypePlugins: (plugins) => {
      plugins.shift()
      plugins.push([
        rehypePrettyCode as any,
        {
          theme: {
            dark: "github-dark",
            light: "github-light-default",
          },
          transformers,
        },
      ])

      return plugins
    },
  },
})

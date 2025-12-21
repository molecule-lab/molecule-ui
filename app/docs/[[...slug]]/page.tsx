import { notFound } from "next/navigation"
import { getMDXComponents } from "@/mdx-components"
import fm from "front-matter"
import { findNeighbour } from "fumadocs-core/page-tree"
import { createRelativeLink } from "fumadocs-ui/mdx"
import { z } from "zod"

import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { DocsFooter } from "@/components/docs-footer"
import { DocsLinks } from "@/components/docs-links"
import { DocsNeighborsNavigationTop } from "@/components/docs-neighbors-naviation-top"
import { TableOfContents } from "@/components/table-of-content"

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) {
    notFound()
  }

  const doc = page.data
  const MDX = doc.body

  const raw = await page.data.getText("raw")
  const { attributes } = fm(raw)
  const { links } = z
    .object({
      links: z
        .object({
          doc: z.string().optional(),
          api: z.string().optional(),
        })
        .optional(),
    })
    .parse(attributes)

  const neighbors = await findNeighbour(source.pageTree, page.url)

  return (
    <main className="relative h-full lg:gap-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="flex min-w-0 flex-1 flex-col gap-4 overflow-hidden pt-12">
        <div className="flex flex-col gap-2">
          <div className="flex scroll-m-20 items-center justify-between text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
            <div>{page.data.title}</div>
            <DocsNeighborsNavigationTop neighbors={neighbors} />
          </div>
          <div className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
            {page.data.description}
          </div>
          <DocsLinks apiLink={links?.api} docLink={links?.doc} />
        </div>
        <div></div>
        <div className="flex min-w-0 flex-col gap-4">
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(source, page),
            })}
          />
        </div>
        <DocsFooter neighbors={neighbors} />
      </div>
      {doc.toc && (
        <div className="border-border hidden border-l py-6 pl-6 text-sm xl:block">
          <div className="sticky top-[90px] h-[calc(100vh-3.5rem)] space-y-4">
            <TableOfContents toc={doc.toc} />
          </div>
        </div>
      )}
    </main>
  )
}

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const description =
    page.data.description ||
    "A modern React component library focused on intuitive interactions and seamless user experiences."
  const ogImage = absoluteUrl(
    `/og?title=${encodeURIComponent(page.data.title)}&description=${encodeURIComponent(
      description,
    )}`,
  )

  return {
    title: `${page.data.title} | Molecule UI`,
    description,
    alternates: {
      canonical: absoluteUrl(page.url),
    },
    openGraph: {
      title: page.data.title,
      description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description,
      images: [{ url: ogImage }],
      creator: "@rushildhinoja17",
    },
  }
}

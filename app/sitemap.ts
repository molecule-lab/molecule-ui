import type { MetadataRoute } from "next"
import { headers } from "next/headers"

import { changelog, source } from "@/lib/source"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers()
  const domain = headersList.get("host") as string
  const protocol = "https"

  const allDocs = source.getPages()
  const allChangelogs = changelog.getPages()

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },
    {
      url: `${protocol}://${domain}/docs`,
      lastModified: new Date(),
    },
    {
      url: `${protocol}://${domain}/changelog`,
      lastModified: new Date(),
    },
    ...allDocs.map((page) => ({
      url: `${protocol}://${domain}${page.url}`,
      lastModified: new Date(),
    })),
    ...allChangelogs.map((page) => ({
      url: `${protocol}://${domain}${page.url}`,
      lastModified: new Date(),
    })),
  ]
}

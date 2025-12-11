import { Metadata } from "next"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const DEFAULT_SITE_URL = "https://moleculeui.design"

function getBaseUrl() {
  const base = process.env.NEXT_PUBLIC_APP_URL?.trim()

  if (!base) {
    return DEFAULT_SITE_URL
  }

  return base.endsWith("/") ? base.slice(0, -1) : base
}

export function absoluteUrl(path: string) {
  return `${getBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`
}

export function constructMetadata({
  title = "Molecule UI - Build Beautiful Interfaces",
  description = "A modern React component library focused on intuitive interactions and seamless user experiences.",
  image = absoluteUrl("/og"),
  ...props
}: {
  title?: string
  description?: string
  image?: string
  [key: string]: Metadata[keyof Metadata]
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "React",
      "Tailwind CSS",
      "Motion",
      "Landing Page",
      "Components",
      "Next.js",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@rushildhinoja17",
    },
    icons: "/favicon.ico",
    metadataBase: new URL(getBaseUrl()),
    authors: [
      {
        name: "rushil dhinoja",
        url: "https://twitter.com/rushildhinoja17",
      },
    ],
    creator: "rushil dhinoja",
    ...props,
  }
}

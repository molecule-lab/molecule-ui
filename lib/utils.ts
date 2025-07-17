import { Metadata } from "next"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
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
    metadataBase: new URL("https://moleculeui.design"),
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

import React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Github } from "@/components/icons/github"

export function GithubLink() {
  return (
    <Button asChild variant="ghost" size="sm">
      <Link href="https://github.com/molecule-lab/molecule-ui" target="_blank">
        <Github />
        <React.Suspense>
          <StarsCount />
        </React.Suspense>
      </Link>
    </Button>
  )
}

export async function StarsCount() {
  const data = await fetch(
    "https://api.github.com/repos/molecule-lab/molecule-ui",
    {
      next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    },
  )
  const json = await data.json()

  return (
    <span className="text-muted-foreground text-xs tabular-nums">
      {json.stargazers_count >= 1000
        ? `${(json.stargazers_count / 1000).toFixed(1)}k`
        : json.stargazers_count?.toLocaleString()}
    </span>
  )
}

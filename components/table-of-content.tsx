"use client"

import React from "react"

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "0% 0% -80% 0%" },
    )

    for (const id of itemIds ?? []) {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    }

    return () => {
      for (const id of itemIds ?? []) {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      }
    }
  }, [itemIds])

  return activeId
}

export function TableOfContents({
  toc,
}: {
  toc: { url: string; depth: number; title: string }[]
}) {
  const itemIds = React.useMemo(
    () => toc.map((item) => item.url.replace("#", "")),
    [toc],
  )

  const activeHeading = useActiveItem(itemIds)

  if (!toc?.length) {
    return null
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="text-muted-foreground bg-background sticky top-0 h-6 font-medium">
        On This Page
      </div>
      {toc.map((item) => {
        return (
          <a
            key={item.url}
            href={item.url}
            data-depth={item.depth}
            data-active={item.url === `#${activeHeading}`}
            className={`text-muted-foreground hover:text-foreground data-[active=true]:text-foreground text-[0.8rem] no-underline transition-colors data-[depth=3]:pl-4 data-[depth=4]:pl-6`}
          >
            {item.title}
          </a>
        )
      })}
    </div>
  )
}

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export function Changelog({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative flex gap-4", className)} {...props}>
      {children}
    </div>
  )
}

export function ChangelogMeta({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "sticky top-20 flex shrink-0 flex-col gap-2 self-start md:w-48",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function ChangelogDate({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("text-muted-foreground text-md", className)}>
      {children}
    </div>
  )
}

export function ChangelogVersion({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Badge>) {
  return (
    <Badge variant="outline" className={cn("text-sm", className)} {...props}>
      {children}
    </Badge>
  )
}

export function ChangelogContent({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex gap-4", className)} {...props}>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="bg-foreground/20 sticky top-20 flex size-6 shrink-0 items-center justify-center self-start rounded-4xl">
          <div className="bg-foreground/80 size-3 rounded-4xl" />
        </div>
        <div className="border-muted h-full w-px border-l" />
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  )
}

export function ChangelogTitle({
  children,
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("text-xl font-bold")} {...props}>
      {children}
    </h3>
  )
}

export function ChangelogDescription({
  children,
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3 className={cn("text-muted-foreground")} {...props}>
      {children}
    </h3>
  )
}

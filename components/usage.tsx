import { cn } from "@/lib/utils"

export function Usage({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("mb-6", className)} {...props}>
      <h2
        className={cn(
          "font-heading scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight",
        )}
      >
        Usage
      </h2>
      {children}
    </div>
  )
}

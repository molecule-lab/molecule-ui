import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative rounded-xl border border-border/20 bg-background/10 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_1px_4px_rgba(0,0,0,0.25)] backdrop-blur-[20px] transition-all duration-200 ease-out hover:bg-background/15 active:scale-95 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center gap-2 font-medium dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_1px_4px_rgba(0,0,0,0.4)] dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "h-10 px-5 py-2 text-base",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  },
)

export function LiquidGlassButton({
  className,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ size }), className)}
      {...props}
    />
  )
}

"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

type DialogContextType = {
  open: boolean
  animated: boolean
}

const DialogContext = React.createContext<DialogContextType | undefined>(
  undefined,
)

const useDialog = (): DialogContextType => {
  const context = React.useContext(DialogContext)
  if (!context) {
    throw new Error("useDialog must be used within a Dialog")
  }
  return context
}

function Dialog({
  children,
  open: openProp,
  onOpenChange: setOpenProp,
  animated = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root> & { animated?: boolean }) {
  const [_open, _setOpen] = React.useState(false)

  const open = openProp ?? _open

  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value

      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }
    },
    [setOpenProp, open],
  )

  const contextValue = React.useMemo<DialogContextType>(
    () => ({ open, animated }),
    [open, animated],
  )

  return (
    <DialogContext.Provider value={contextValue}>
      <DialogPrimitive.Root
        data-slot="dialog"
        {...props}
        onOpenChange={setOpen}
      >
        {children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  )
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  animated = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay> & {
  animated?: boolean
}) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className,
      )}
      asChild
      {...props}
    >
      <motion.div
        key="dialog-overlay"
        initial={animated ? { opacity: 0, filter: "blur(4px)" } : {}}
        animate={animated ? { opacity: 1, filter: "blur(0px)" } : {}}
        exit={animated ? { opacity: 0, filter: "blur(4px)" } : {}}
        transition={animated ? { duration: 0.2, ease: "easeInOut" } : {}}
      />
    </DialogPrimitive.Overlay>
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  const { open, animated } = useDialog()

  return (
    <AnimatePresence>
      {open && (
        <DialogPortal forceMount data-slot="dialog-portal">
          <DialogOverlay animated={animated} />
          <DialogPrimitive.Content asChild forceMount {...props}>
            <motion.div
              key="dialog-content"
              data-slot="dialog-content"
              initial={
                animated
                  ? {
                      opacity: 0,
                      filter: "blur(4px)",
                      transform: `perspective(500px) rotateY(30deg) scale(0.8)`,
                    }
                  : {}
              }
              animate={
                animated
                  ? {
                      opacity: 1,
                      filter: "blur(0px)",
                      transform: `perspective(500px) rotateY(0deg) scale(1)`,
                    }
                  : {}
              }
              exit={
                animated
                  ? {
                      opacity: 0,
                      filter: "blur(4px)",
                      transform: `perspective(500px) rotateY(30deg) scale(0.8)`,
                    }
                  : {}
              }
              className={cn(
                "bg-primary-foreground fixed top-[50%] left-[50%] z-50 grid w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border p-4",
                className,
              )}
              transition={
                animated ? { type: "spring", stiffness: 150, damping: 25 } : {}
              }
            >
              {children}
              {showCloseButton && (
                <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              )}
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPortal>
      )}
    </AnimatePresence>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className,
      )}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 border-t pt-4 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "mb-2.5 leading-none font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

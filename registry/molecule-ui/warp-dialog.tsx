"use client"

import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

type WarpDialogContextType = {
  open: boolean
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void
}

const WarpDialogContext = React.createContext<WarpDialogContextType | null>(
  null,
)

export function useWarpDialogContext() {
  const ctx = React.useContext(WarpDialogContext)
  if (!ctx)
    throw new Error("WarpDialog components must be used inside <WarpDialog>")
  return ctx
}

export function WarpDialog({
  open: openProp,
  onOpenChange: setOpenProp,
  ...props
}: React.ComponentProps<"div"> & {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
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

  const contextValue = React.useMemo<WarpDialogContextType>(
    () => ({ open, setOpen }),
    [open, setOpen],
  )

  return (
    <WarpDialogContext.Provider value={contextValue}>
      <div data-slot="dialog" {...props} />
    </WarpDialogContext.Provider>
  )
}

export function WarpDialogTrigger({
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  const { setOpen } = useWarpDialogContext()

  return (
    <Comp
      onClick={() => setOpen((prev) => !prev)}
      data-slot="dialog-trigger"
      {...props}
    />
  )
}

function WarpDialogOverlay({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-red-500/10",
        className,
      )}
      {...props}
    >
      <WarpAnimations />
    </div>
  )
}

export function WarpDialogContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  const { open, setOpen } = useWarpDialogContext()

  return (
    <AnimatePresence>
      {open && (
        <div className={cn("absolute")}>
          <WarpDialogOverlay />

          <motion.div
            onClick={() => setOpen((prev) => !prev)}
            className="fixed inset-0 flex items-center justify-center z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.59, 0, 0.35, 1] }}
            {...props}
          >
            <motion.div
              className="relative flex flex-col items-center justify-center gap-4"
              onClick={(e) => e.stopPropagation()}
              initial={{
                rotateX: -5,
                skewY: -1.5,
                scaleY: 2,
                scaleX: 0.4,
                y: 100,
              }}
              animate={{
                rotateX: 0,
                skewY: 0,
                scaleY: 1,
                scaleX: 1,
                y: 0,
                transition: {
                  duration: 0.35,
                  ease: [0.59, 0, 0.35, 1],
                  y: { type: "spring", visualDuration: 0.7, bounce: 0.2 },
                },
              }}
              exit={{
                rotateX: -5,
                skewY: -1.5,
                scaleY: 2,
                scaleX: 0.4,
                y: 100,
              }}
              transition={{ duration: 0.35, ease: [0.59, 0, 0.35, 1] }}
              style={{
                transformPerspective: 1000,
                originX: 0.5,
                originY: 0,
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function WarpAnimations() {
  const enterDuration = 0.5
  const exitDuration = 0.25
  return (
    <>
      <motion.div
        className="absolute rounded-full h-1/2 w-1/2 blur-lg origin-center will-change-transform left-[25%] top-[100%]"
        initial={{
          scale: 0,
          opacity: 1,
          backgroundColor: "hsl(10, 64%, 77%)",
        }}
        animate={{
          scale: 10,
          opacity: 0.2,
          backgroundColor: "hsl(6, 93%, 56%)",
          transition: {
            duration: enterDuration,
            opacity: { duration: enterDuration, ease: "easeInOut" },
          },
        }}
        exit={{
          scale: 0,
          opacity: 1,
          backgroundColor: "hsl(10, 64%, 77%)",
          transition: { duration: exitDuration },
        }}
      />
      <motion.div
        className=" absolute blur-[100px] rounded-full bg-red-500/90 h-full w-full top-[-25%] left-[-50%]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.9,
          transition: {
            duration: enterDuration,
            scale: {
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.35,
            },
          },
          scale: [1, 0.7, 1],
        }}
        exit={{
          opacity: 0,
          transition: { duration: exitDuration },
        }}
      />
      <motion.div
        className=" absolute blur-[100px] rounded-full bg-red-500/80 w-full h-full top-[25%] left-[50%]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.9,
          transition: {
            duration: enterDuration,
            scale: {
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.35,
            },
          },
          scale: [1, 0.7, 1],
        }}
        exit={{
          opacity: 0,
          transition: { duration: exitDuration },
        }}
      />
    </>
  )
}

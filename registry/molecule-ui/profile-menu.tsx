"use client"

import React from "react"
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react"

import { cn } from "@/lib/utils"

const menuVariants = {
  open: {
    opacity: 1,
    scale: 1,
    pointerEvents: "auto" as const,
  },
  closed: {
    opacity: 0,
    scale: 0.95,
    pointerEvents: "none" as const,
  },
}

const nameVariants = {
  open: {
    width: "auto",
    opacity: 1,
  },
  closed: {
    width: 0,
    opacity: 0,
  },
}

type ProfileMenuContextType = {
  open: boolean
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void
}

const ProfileMenuContext = React.createContext<ProfileMenuContextType | null>(
  null,
)

export function useProfileMenuContext() {
  const ctx = React.useContext(ProfileMenuContext)
  if (!ctx)
    throw new Error("ProfileMenu components must be used inside <ProfileMenu>")
  return ctx
}

export function ProfileMenu({
  open: openProp,
  onOpenChange: setOpenProp,
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const menuRef = React.useRef<HTMLDivElement>(null)
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

  const contextValue = React.useMemo<ProfileMenuContextType>(
    () => ({ open, setOpen }),
    [open, setOpen],
  )

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("pointerdown", handleClick)
    return () => document.removeEventListener("pointerdown", handleClick)
  }, [open, setOpen])

  return (
    <ProfileMenuContext.Provider value={contextValue}>
      <motion.div
        ref={menuRef}
        className={cn(
          "overflow-hidden rounded-md cursor-pointer absolute top-0 right-0 flex flex-col",
          open && "bg-popover border",
          className,
        )}
        style={{ transformOrigin: "top right" }}
        initial={{ width: "auto", height: "auto" }}
        animate={{
          width: open ? "fit-content" : "auto",
          height: open ? "fit-content" : "auto",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        role="menu"
        aria-label="Profile menu"
        {...props}
      >
        {children}
      </motion.div>
    </ProfileMenuContext.Provider>
  )
}

export function ProfileMenuHeader({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const { open } = useProfileMenuContext()
  return (
    <motion.div
      className={cn("flex gap-2 items-center justify-between", className)}
      animate={{
        padding: open ? "0.5rem" : 0,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      role="button"
      aria-label="Toggle profile menu"
      aria-expanded={open}
      aria-haspopup="menu"
      tabIndex={0}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ProfileMenuTrigger({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const { setOpen } = useProfileMenuContext()

  return (
    <motion.div
      onClick={() => setOpen((prev) => !prev)}
      className={cn("ml-auto", className)}
      style={{ transformOrigin: "center right" }}
      role="button"
      aria-label="Profile menu trigger"
      tabIndex={0}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ProfileMenuHeaderContent({
  children,
  ...props
}: HTMLMotionProps<"div">) {
  const { open } = useProfileMenuContext()
  return (
    <motion.div
      variants={nameVariants}
      animate={open ? "open" : "closed"}
      initial="closed"
      style={{
        transformOrigin: "top right",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ProfileMenuContent({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  const { open, setOpen } = useProfileMenuContext()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={() => setOpen((prev) => !prev)}
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          style={{ transformOrigin: "top right" }}
          className={cn("p-1", className)}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          role="menu"
          aria-label="Profile menu options"
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ProfileMenuGroup({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-1", className)}
      role="group"
      aria-label="Menu group"
      {...props}
    >
      {children}
    </div>
  )
}

export function ProfileMenuItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(
        "flex items-center gap-3 px-1 py-1.5 text-sm hover:bg-accent rounded-md transition-colors cursor-pointer",
        className,
      )}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      role="menuitem"
      tabIndex={0}
      {...props}
    >
      {children}
    </motion.div>
  )
}

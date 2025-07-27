"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { WarpOverlay } from "@/registry/molecule-ui/warp-overlay"

export function WarpOverlayDemo() {
  const [showOverlay, setShowOverlay] = useState(false)
  return (
    <div className="w-full h-full relative items-center justify-center flex rounded-2xl overflow-hidden">
      <Button onClick={() => setShowOverlay(true)}>Click Me</Button>
      {showOverlay && <WarpOverlay />}
    </div>
  )
}

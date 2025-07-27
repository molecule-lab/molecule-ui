"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

export function WarpOverlay() {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setSize({
          width: ref.current.clientWidth,
          height: ref.current.clientHeight,
        })
      }
    }

    updateSize()

    // Update size on window resize
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const enterDuration = 0.75
  const exitDuration = 0.5
  const expandingCircleRadius = size.width / 3

  return (
    <div ref={ref} className="w-full h-full absolute overflow-hidden">
      <motion.div
        className="absolute rounded-full bg-red-500/50 blur-lg origin-center will-change-transform expanding-circle"
        initial={{
          scale: 0,
          opacity: 1,
          backgroundColor: "rgb(233, 167, 160)",
        }}
        animate={{
          scale: 10,
          opacity: 0.2,
          backgroundColor: "rgb(246, 63, 42)",
          transition: {
            duration: enterDuration,
            opacity: { duration: enterDuration, ease: "easeInOut" },
          },
        }}
        exit={{
          scale: 0,
          opacity: 1,
          backgroundColor: "rgb(233, 167, 160)",
          transition: { duration: exitDuration },
        }}
        style={{
          left: `calc(50% - ${expandingCircleRadius / 2}px)`,
          top: "100%",
          width: expandingCircleRadius,
          height: expandingCircleRadius,
          originX: 0.5,
          originY: 1,
        }}
      />

      <motion.div
        className=" absolute blur-[100px] rounded-full  bg-red-500/90"
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
        style={{
          width: size.width,
          height: size.width,
          top: -size.width / 2,
          left: -size.width / 2,
        }}
      />

      <motion.div
        className=" absolute blur-[100px] rounded-full bg-red-500/80"
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
        style={{
          width: size.width,
          height: size.width,
          top: size.height - size.width / 2,
          left: size.width / 2,
        }}
      />
    </div>
  )
}

"use client"

import React from "react"
import {
  motion,
  MotionValue,
  transform,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react"

const grid = new Array(10).fill([0, 1, 2, 3, 4, 5, 6, 7])

export const icon = {
  margin: 20,
  size: 100,
}

interface UseIconTransformProps {
  x: MotionValue<number>
  y: MotionValue<number>
  scale: MotionValue<number>
  planeX: MotionValue<number>
  planeY: MotionValue<number>
  xOffset: number
  yOffset: number
}

export function useIconTransform({
  x,
  y,
  scale,
  planeX,
  planeY,
  xOffset,
  yOffset,
}: UseIconTransformProps) {
  // Keep track of our calculated x and y scales - we'll
  // set scale to the smallest of the two
  const xScale = React.useRef(1)
  const yScale = React.useRef(1)

  // Handle planeX changes
  useMotionValueEvent(planeX, "change", (v: number) => {
    // Calculate the offset of the icon relative to its position on the screen
    const screenOffset = v + xOffset + 20

    // Save the xScale to also be used in the planeY changes below.
    xScale.current = mapScreenXToScale(screenOffset)
    const newScale = Math.min(xScale.current, yScale.current)

    // Any changed motion values are only rendered once per frame,
    // so we can repeat the scale.set and it'll only render once,
    // with latest values passed to it
    scale.set(newScale)
    x.set(mapScreenToXOffset(screenOffset))
  })

  // Handle planeY changes
  useMotionValueEvent(planeY, "change", (v: number) => {
    const screenOffset = v + yOffset + 20
    yScale.current = mapScreenYToScale(screenOffset)
    const newScale = Math.min(xScale.current, yScale.current)
    scale.set(newScale)
    y.set(mapScreenToYOffset(screenOffset))
  })
}

// As the draggable plane moves around we want to map each icon's position
// on the screen to new x/y positions and scale. As they get smaller we move them
// back into the screen slightly until they disappear.
// This function basically generates an inputRange for the `transform` function
// that's maps from when an icon is 60px outside an edge of the screen to
// when it's 80px inside the screen.
const createScreenRange = () => [
  -60,
  80,
  600 - (icon.size + icon.margin) / 2 - 80,
  400 - (icon.size + icon.margin) / 2 + 60,
]
// Try changing these values to see how scrolling affects the scale and position of the icons
const scaleRange = [0, 1, 1, 0]
const xRange = createScreenRange()
const yRange = createScreenRange()
const mapScreenToXOffset = transform(xRange, [50, 0, 0, -50])
const mapScreenToYOffset = transform(yRange, [50, 0, 0, -50])
const mapScreenXToScale = transform(xRange, scaleRange)
const mapScreenYToScale = transform(yRange, scaleRange)

export function AppleWatchGrid() {
  const x = useMotionValue(-225)
  const y = useMotionValue(-225)

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        drag
        dragConstraints={{ left: -650, right: 50, top: -600, bottom: 50 }}
        style={{ x, y }}
      >
        {grid.map((rows: number[], rowIndex: number) =>
          rows.map((_: number, colIndex: number) => (
            <Item
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              planeX={x}
              planeY={y}
            />
          )),
        )}
      </motion.div>
    </div>
  )
}

interface ItemProps {
  row: number
  col: number
  planeX: MotionValue<number>
  planeY: MotionValue<number>
}

export function Item({ row, col, planeX, planeY }: ItemProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(1)

  // Calculate the origin x and y offsets of this icon based on
  // its column and row position
  const xOffset =
    col * (icon.size + icon.margin) +
    (row % 2) * ((icon.size + icon.margin) / 2)
  const yOffset = row * icon.size

  // Transform the icon's x, y and scale based on the position of the draggable plane
  useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset })

  return (
    <motion.div
      style={{
        position: "absolute",
        left: xOffset,
        top: yOffset,
        x,
        y,
        scale,
        width: icon.size,
        height: icon.size,
        borderRadius: "50%",
        // This will change the color of an icon every render. In production
        // you'd want to save this as a ref or similar. But here it makes a nice
        // visual indicator that we're doing all this without any re-renders :)
        background: `hsla(${Math.random() * 360}, 95%, 55%, 1)`,
      }}
    />
  )
}

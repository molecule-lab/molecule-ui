"use client";
import React from "react";
import { motion, type PanInfo } from "motion/react";
import { cn } from "@/lib/utils";

const DRAG_THRESHOLD = 100;
const ACTIONS_VIEW_THRESHOLD = 50;

export interface SwipeRowProps {
  rightActions?: React.ReactElement;
  leftActions?: React.ReactElement;
}

export function SwipeRow({
  className,
  children,
  rightActions,
  leftActions,
}: React.ComponentProps<"div"> & SwipeRowProps) {
  const [dragX, setDragX] = React.useState(0);

  const actionRefLeft = React.useRef<HTMLDivElement>(null);
  const actionRefRight = React.useRef<HTMLDivElement>(null);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const absoluteOffset = Math.abs(info.offset.x);

    if (
      actionRefLeft.current &&
      absoluteOffset > DRAG_THRESHOLD &&
      info.offset.x > 0
    ) {
      setDragX(actionRefLeft.current.offsetWidth);
    } else if (
      actionRefRight.current &&
      absoluteOffset > DRAG_THRESHOLD &&
      info.offset.x < 0
    ) {
      setDragX(-actionRefRight.current.offsetWidth);
    } else {
      setDragX(0);
    }
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setDragX(info.offset.x);
  };

  return (
    <div
      role='group'
      aria-roledescription='swipe-row-list-item'
      aria-label='swipe-row-item'
      className={cn("relative overflow-hidden w-full", className)}
    >
      {leftActions && (
        <motion.div
          role='region'
          aria-label='left-actions'
          ref={actionRefLeft}
          className={cn("absolute left-0 top-0 h-full flex items-center")}
          initial={{ opacity: 0 }}
          animate={{
            opacity: dragX > ACTIONS_VIEW_THRESHOLD && actionRefLeft ? 1 : 0,
            x:
              dragX > 0 && actionRefLeft
                ? 0
                : -(actionRefLeft.current?.offsetWidth || 0),
          }}
          transition={{ stiffness: 300 }}
        >
          {leftActions}
        </motion.div>
      )}
      {rightActions && (
        <motion.div
          role='region'
          aria-label='right-actions'
          ref={actionRefRight}
          className={cn("absolute right-0 top-0 h-full flex items-center")}
          initial={{ opacity: 0 }}
          animate={{
            opacity: dragX < -ACTIONS_VIEW_THRESHOLD && actionRefRight ? 1 : 0,
            x:
              dragX < 0 && actionRefRight
                ? 0
                : actionRefRight.current?.offsetWidth || 0,
          }}
          transition={{ stiffness: 300 }}
        >
          {rightActions}
        </motion.div>
      )}

      <motion.div
        aria-label='swipe-row-item-content'
        tabIndex={0}
        className={cn(
          "relative  p-4 cursor-grab active:cursor-grabbing select-none"
        )}
        drag='x'
        dragConstraints={{
          left: actionRefLeft.current
            ? -actionRefLeft.current?.offsetWidth || 0
            : 0,
          right: actionRefRight ? actionRefRight.current?.offsetWidth : 0,
        }}
        dragElastic={0.1}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={{ x: dragX }}
        transition={{ stiffness: 300 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

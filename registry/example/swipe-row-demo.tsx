import { Heart, Trash } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  SwipeLeftActions,
  SwipeRightActions,
  SwipeRow,
  SwipeRowContent,
} from "@/registry/molecule-ui/swipe-row"

export function SwipeRowDemo() {
  return (
    <div className="w-full md:w-2/3">
      <SwipeRow className="bg-muted rounded-md">
        <SwipeLeftActions>
          <LeftActions />
        </SwipeLeftActions>
        <SwipeRowContent>
          <div className="flex items-center gap-4">
            <div>
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  alt="MUI"
                />
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h3>Liam Patel</h3>
              <p className="text-muted-foreground text-sm">
                Swipe to see actions
              </p>
            </div>
          </div>
        </SwipeRowContent>
        <SwipeRightActions>
          <RightActions />
        </SwipeRightActions>
      </SwipeRow>
    </div>
  )
}

function LeftActions() {
  return (
    <>
      <button className="flex h-full items-center justify-center bg-blue-500 px-6 text-white transition-colors">
        <Heart size={20} />
      </button>{" "}
    </>
  )
}

function RightActions() {
  return (
    <>
      <button className="flex h-full items-center justify-center bg-red-500 px-6 text-white transition-colors">
        <Trash size={20} />
      </button>
    </>
  )
}

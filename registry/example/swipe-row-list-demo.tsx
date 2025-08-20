import { Heart, Trash } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  SwipeLeftActions,
  SwipeRightActions,
  SwipeRow,
  SwipeRowContent,
} from "@/registry/molecule-ui/swipe-row"

const dummyListData = [
  {
    id: 1,
    name: "Ava Mitchell",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fallback: "AM",
  },
  {
    id: 2,
    name: "Liam Patel",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    fallback: "LP",
  },
  {
    id: 3,
    name: "Sophia Nguyen",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    fallback: "SN",
  },
]

export function SwipeRowListDemo() {
  return (
    <div className="divide-input bg-muted w-full divide-y overflow-hidden rounded-md md:w-2/3">
      {dummyListData.map((item) => (
        <SwipeRow key={item.id}>
          <SwipeLeftActions>
            <LeftActions />
          </SwipeLeftActions>
          <SwipeRowContent>
            <div className="flex items-center gap-4">
              <div>
                <Avatar>
                  <AvatarImage src={item.avatar} alt={item.fallback} />
                  <AvatarFallback>{item.fallback}</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h3>{item.name}</h3>
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
      ))}
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

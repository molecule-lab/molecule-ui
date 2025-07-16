import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SwipeRow } from "@/registry/molecule-ui/swipe-row";
import { Archive, Heart, Trash } from "lucide-react";

export function SwipeRowDemo() {
  return (
    <div className="w-full md:w-2/3">
      <SwipeRow
        rightActions={<RightActions />}
        leftActions={<LeftActions />}
        className="rounded-md bg-muted"
      >
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
            <p className="text-sm text-muted-foreground">
              Swipe to see actions
            </p>
          </div>
        </div>
      </SwipeRow>
    </div>
  );
}

function LeftActions() {
  return (
    <>
      <button className="h-full px-6 bg-blue-500 text-white flex items-center justify-center transition-colors">
        <Heart size={20} />
      </button>{" "}
    </>
  );
}

function RightActions() {
  return (
    <>
      <button className="h-full px-6 bg-red-500 text-white flex items-center justify-center transition-colors">
        <Trash size={20} />
      </button>
    </>
  );
}

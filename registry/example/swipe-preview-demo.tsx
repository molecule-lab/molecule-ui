import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SwipeableItem } from "@/registry/molecule-ui/swipeable-item";
import { Archive, Heart, Trash } from "lucide-react";

export function SwipePreviewDemo() {
  return (
    <div className='w-2/3'>
      <SwipeableItem
        rightActions={<RightActions />}
        leftActions={<LeftActions />}
        className='rounded-md'
      >
        <div className='flex items-center gap-4'>
          <div>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h3>Molecule UI</h3>
            <p className='text-sm text-muted-foreground'>
              Swipe to see actions
            </p>
          </div>
        </div>
      </SwipeableItem>
    </div>
  );
}

function LeftActions() {
  return (
    <>
      <button className='h-full px-6 bg-blue-500 text-white flex items-center justify-center hover:bg-yellow-600 transition-colors'>
        <Heart size={20} />
      </button>{" "}
    </>
  );
}

function RightActions() {
  return (
    <>
      <button className='h-full px-6 bg-red-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors'>
        <Trash size={20} />
      </button>
    </>
  );
}

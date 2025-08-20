import { Button } from "@/components/ui/button"
import {
  WarpDialog,
  WarpDialogContent,
  WarpDialogTrigger,
} from "@/registry/molecule-ui/warp-dialog"

export function WarpOverlayDemo() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
      <WarpDialog>
        <WarpDialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </WarpDialogTrigger>
        <WarpDialogContent>
          <h2 className="mb-6 text-2xl font-bold">Welcome to Warp Dialog</h2>
          <div className="flex justify-center gap-4">
            <Button variant="default">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </WarpDialogContent>
      </WarpDialog>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import {
  WarpDialog,
  WarpDialogContent,
  WarpDialogTrigger,
} from "@/registry/molecule-ui/warp-dialog"

export function WarpOverlayDemo() {
  return (
    <div className="w-full h-full relative items-center justify-center flex rounded-2xl overflow-hidden">
      <WarpDialog>
        <WarpDialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </WarpDialogTrigger>
        <WarpDialogContent>
          <h2 className="text-2xl font-bold mb-6">Welcome to Warp Dialog</h2>
          <div className="flex gap-4 justify-center">
            <Button variant="default">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </WarpDialogContent>
      </WarpDialog>
    </div>
  )
}

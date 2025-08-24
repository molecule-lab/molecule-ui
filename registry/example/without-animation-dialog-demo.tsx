import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/molecule-ui/dialog"

export function DialogDemo() {
  return (
    <Dialog animated={false}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm</DialogTitle>
          <DialogDescription>
            Ready to take your app to a next level with Molecule UI?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit">Get Started</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

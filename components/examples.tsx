import { ComponentPreview } from "@/components/component-preview"

export function Examples() {
  return (
    <div className="flex w-full flex-col items-center px-4 pb-6 md:w-2/3 md:px-8 xl:w-1/2 xl:px-12">
      <h2 className="text-foreground/80 mb-4 max-w-2xl text-center text-2xl tracking-tight md:text-3xl">
        Examples
      </h2>
      <div className="flex flex-col gap-4">
        <ComponentPreview
          className="my-0"
          name="swipe-row-demo"
          hideCode={true}
        />
        <ComponentPreview
          className="my-0"
          name="discussion-demo"
          hideCode={true}
        />
        <ComponentPreview
          className="my-0"
          name="spinning-circle-with-message-demo"
          hideCode={true}
        />
      </div>
    </div>
  )
}

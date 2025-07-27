import { ComponentPreview } from "@/components/component-preview"

export function Examples() {
  return (
    <div className="flex flex-col  w-full px-4 md:px-8 xl:px-12 md:w-2/3 xl:w-1/2 pb-6 items-center">
      <h2 className="mb-4 text-foreground/80 text-center text-2xl md:text-3xl tracking-tight max-w-2xl">
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

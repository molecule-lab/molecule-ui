import Link from "next/link"
import { createGenerator } from "fumadocs-typescript"
import { AutoTypeTable } from "fumadocs-typescript/ui"
import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Callout } from "@/components/callout"
import { CodeBlockCommand } from "@/components/code-command-block"
import { ComponentPreview } from "@/components/component-preview"
import { ComponentSource } from "@/components/component-source"
import { CopyButton } from "@/components/copy-button"
import { Usage } from "@/components/usage"

const generator = createGenerator()

const CustomLink = (props: any) => {
  const href = props.href

  if (href.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    /* eslint-disable  jsx-a11y/anchor-has-content */
    return <a {...props} />
  }

  /* eslint-disable  jsx-a11y/anchor-has-content */
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Callout,
    ComponentPreview,
    ComponentSource,
    Usage,
    Tabs: ({ ...props }) => <Tabs className="mb-6" {...props} />,
    TabsList: ({ ...props }) => (
      <TabsList
        className="justify-start gap-4 rounded-none bg-transparent px-2 md:px-0"
        {...props}
      />
    ),
    TabsTrigger: ({ ...props }) => (
      <TabsTrigger
        {...props}
        className='data-[state=active]:after:bg-primary relative h-7 border border-transparent pt-0.5 data-[state=active]:border-none data-[state=active]:bg-transparent data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:content-[""] dark:data-[state=active]:bg-transparent'
      />
    ),
    TabsContent,
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
      <CustomLink
        className={cn("font-medium underline underline-offset-4", className)}
        {...props}
      />
    ),
    Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
      /* eslint-disable  jsx-a11y/heading-has-content */
      <h3
        className={cn(
          "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
          className,
        )}
        {...props}
      />
    ),
    Steps: ({ ...props }) => (
      <div
        className="[&>h3]:step steps before:via-muted-foreground/50 relative mb-12 ml-4 pl-8 [counter-reset:step] before:absolute before:top-0 before:left-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:to-transparent"
        {...props}
      />
    ),

    pre: ({ className, children, ...props }: React.ComponentProps<"pre">) => {
      return (
        <pre
          className={cn(
            "no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-[[data-highlighted-line]]:px-0 has-[[data-line-numbers]]:px-0 has-[[data-slot=tabs]]:p-0",
            className,
          )}
          {...props}
        >
          {children}
        </pre>
      )
    },
    figure: ({ className, ...props }: React.ComponentProps<"figure">) => {
      return (
        <figure
          className={cn("bg-zinc-50 dark:bg-zinc-900", className)}
          {...props}
        />
      )
    },
    figcaption: ({
      className,
      children,
      ...props
    }: React.ComponentProps<"figcaption">) => {
      // const iconExtension =
      //   "data-language" in props && typeof props["data-language"] === "string"
      //     ? getIconForLanguageExtension(props["data-language"])
      //     : null;

      return (
        <figcaption
          className={cn(
            "text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70",
            className,
          )}
          {...props}
        >
          {/* {iconExtension} */}
          {children}
        </figcaption>
      )
    },
    code: ({
      className,
      __raw__,
      __src__,
      __npm__,
      __yarn__,
      __pnpm__,
      __bun__,
      ...props
    }: React.ComponentProps<"code"> & {
      __raw__?: string
      __src__?: string
      __npm__?: string
      __yarn__?: string
      __pnpm__?: string
      __bun__?: string
    }) => {
      // Inline Code.
      if (typeof props.children === "string") {
        return (
          <code
            className={cn(
              "bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] outline-none",
              className,
            )}
            {...props}
          />
        )
      }

      // npm command.
      const isNpmCommand = __npm__ && __yarn__ && __pnpm__ && __bun__
      if (isNpmCommand) {
        return (
          <CodeBlockCommand
            __npm__={__npm__}
            __yarn__={__yarn__}
            __pnpm__={__pnpm__}
            __bun__={__bun__}
          />
        )
      }

      // Default codeblock.
      return (
        <>
          {__raw__ && <CopyButton value={__raw__} src={__src__} />}
          <code {...props} />
        </>
      )
    },
    AutoTypeTable: ({ heading, ...props }) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      /* eslint-disable  jsx-a11y/heading-has-content */
      <h2
        className={cn(
          "font-heading scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      /* eslint-disable  jsx-a11y/heading-has-content */
      <h3
        className={cn(
          "font-heading mt-4 scroll-m-20 text-xl font-semibold tracking-tight",
          className,
        )}
        {...props}
      />
    ),
  }
}

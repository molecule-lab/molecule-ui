import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Callout } from "./components/callout";
import Link from "next/link";
import { cn } from "./lib/utils";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { CodeBlockCommand } from "./components/code-command-block";
import { CopyButton } from "./components/copy-button";
// use this function to get MDX components, you will need it for rendering MDX

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Callout,
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
      <CustomLink
        className={cn("font-medium underline underline-offset-4", className)}
        {...props}
      />
    ),
    Steps: ({ ...props }) => (
      <div
        className='[&>h3]:step steps mb-12 ml-4 pl-8 [counter-reset:step] relative before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/50 before:to-transparent'
        {...props}
      />
    ),
    Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
      <div
        className={cn(
          "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
          className
        )}
        {...props}
      />
    ),

    pre: ({ className, children, ...props }: React.ComponentProps<"pre">) => {
      return (
        <pre
          className={cn(
            "no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-[[data-highlighted-line]]:px-0 has-[[data-line-numbers]]:px-0 has-[[data-slot=tabs]]:p-0",
            className
          )}
          {...props}
        >
          {children}
        </pre>
      );
    },
    figure: ({ className, ...props }: React.ComponentProps<"figure">) => {
      return (
        <figure
          className={cn(" bg-zinc-950 dark:bg-zinc-900", className)}
          {...props}
        />
      );
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
            className
          )}
          {...props}
        >
          {/* {iconExtension} */}
          {children}
        </figcaption>
      );
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
      __raw__?: string;
      __src__?: string;
      __npm__?: string;
      __yarn__?: string;
      __pnpm__?: string;
      __bun__?: string;
    }) => {
      // Inline Code.
      if (typeof props.children === "string") {
        return (
          <code
            className={cn(
              "bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] outline-none",
              className
            )}
            {...props}
          />
        );
      }

      // npm command.
      const isNpmCommand = __npm__ && __yarn__ && __pnpm__ && __bun__;
      if (isNpmCommand) {
        return (
          <CodeBlockCommand
            __npm__={__npm__}
            __yarn__={__yarn__}
            __pnpm__={__pnpm__}
            __bun__={__bun__}
          />
        );
      }

      // Default codeblock.
      return (
        <>
          {__raw__ && <CopyButton value={__raw__} src={__src__} />}
          <code {...props} />
        </>
      );
    },
  };
}

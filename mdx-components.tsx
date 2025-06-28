import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Callout } from "./components/callout";
import Link from "next/link";
import { cn } from "./lib/utils";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
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
    pre: ({ children }) => (
      <pre className='rounded-lg border  max-h-[650px] overflow-auto bg-zinc-950 py-4 dark:bg-zinc-900'>
        {children}
      </pre>
    ),
  };
}

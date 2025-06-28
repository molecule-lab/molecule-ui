import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { findNeighbour } from "fumadocs-core/server";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const neighbors = await findNeighbour(source.pageTree, page.url);

  return (
    <div className='flex flex-col gap-4 h-full pt-12'>
      <div className='flex flex-col gap-2'>
        <div className='scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl flex items-center justify-between'>
          <div>{page.data.title}</div>
          <div className='flex gap-1'>
            {neighbors.previous && (
              <Button variant='secondary' size='icon'>
                <ArrowLeft />
              </Button>
            )}
            {neighbors.next && (
              <Button variant='secondary' size='icon'>
                <ArrowRight />
              </Button>
            )}
          </div>
        </div>
        <div className='text-muted-foreground text-[1.05rem] text-balance sm:text-base'>
          {page.data.description}
        </div>
      </div>
      <MDXContent
        code={page.data.body}
        components={getMDXComponents({
          // this allows you to link to other pages with relative file paths
          a: createRelativeLink(source, page),
        })}
      />
      <div className='mt-auto flex flex-col pb-12'>
        <div
          className={` flex items-center ${
            neighbors.previous?.name && neighbors.next?.name
              ? "justify-between"
              : neighbors.previous?.name
                ? "justify-start"
                : "justify-end"
          }`}
        >
          {neighbors.previous?.name && (
            <Button variant='outline'>{neighbors.previous?.name}</Button>
          )}
          {neighbors.next?.name && (
            <Button variant='outline'>{neighbors.next?.name}</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: "article",
      // url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            page.data.title
          )}&description=${encodeURIComponent(page.data.description || "")}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            page.data.title
          )}&description=${encodeURIComponent(page.data.description!)}`,
        },
      ],
      creator: "@shadcn",
    },
  };
}

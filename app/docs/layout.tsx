import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsSidebar } from "@/components/docs-sidebar";
import { Navbar } from "@/components/nav-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>{" "}
      <footer className="relative border-t border-border py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Brought to you by{" "}
            <a
              title="Twitter"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              rushil
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}

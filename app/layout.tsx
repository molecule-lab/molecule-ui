import { Navbar } from "@/components/nav-bar";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="h-screen overflow-hidden flex flex-col">
        <RootProvider>
          <Navbar />
          <main className="flex-1 flex overflow-hidden container">
            {/* This is the scrolling area (child layout decides how to scroll) */}
            {children}
          </main>
        </RootProvider>
      </body>
    </html>
  );
}

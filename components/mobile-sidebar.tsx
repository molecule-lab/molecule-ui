"use client";
import { Menu } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { source } from "@/lib/source";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MobileSidebarGroupProps {
  onMobileLinkClick: (isOpen: boolean) => void;
  items: typeof source.pageTree.children;
}
export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex md:hidden'>
      <Popover open={isOpen}>
        <PopoverTrigger onClick={() => setIsOpen((isOpen) => !isOpen)}>
          <Menu />
        </PopoverTrigger>
        <PopoverContent
          className='bg-background/90 no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100'
          align='start'
          side='bottom'
          alignOffset={-16}
          sideOffset={14}
        >
          <div className='flex flex-col gap-8 overflow-auto px-6 py-6'>
            {/* <div className='flex flex-col gap-4'>
              <div className='text-muted-foreground text-sm font-medium'>
                Menu
              </div>
            </div> */}
            {source.pageTree.children.map((root) => {
              return (
                <div key={root.$id} className='flex flex-col gap-4'>
                  <div className='text-muted-foreground text-sm font-medium'>
                    {root.name === "Introduction"
                      ? "Getting Started"
                      : root.name}
                  </div>
                  <div className='flex flex-col gap-3'>
                    {root.type === "folder" && root.children && (
                      <MobileSidebarGroup
                        onMobileLinkClick={setIsOpen}
                        items={[
                          ...(root.index ? [root.index] : []),
                          ...root.children,
                        ]}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function MobileSidebarGroup({
  items,
  onMobileLinkClick,
}: MobileSidebarGroupProps) {
  return items.map((item) => {
    return (
      item.type === "page" && (
        <MobileLink
          key={item.$id}
          onOpenChange={onMobileLinkClick}
          href={item.url}
        >
          {item.name}
        </MobileLink>
      )
    );
  });
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-2xl font-medium", className)}
      {...props}
    >
      {children}
    </Link>
  );
}

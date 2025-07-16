"use client";
import { source } from "@/lib/source";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupItem,
  SidebarGroupLabel,
  SidebarGroupLink,
} from "@/components/sidebar";

interface SidebarProps {
  tree: typeof source.pageTree;
  asChild?: boolean;
}

interface SidebarItemsProps {
  items: typeof source.pageTree.children;
}

export function DocsSidebar({ tree }: SidebarProps) {
  return (
    <div className='h-full'>
      <Sidebar>
        <SidebarContent>
          <div className='h-4' />
          {tree.children.map((root) => (
            <SidebarGroup key={root.$id}>
              <SidebarGroupLabel>
                {root.name === "Introduction" ? "Getting Started" : root.name}
              </SidebarGroupLabel>

              <SidebarGroupContent>
                {root.type === "folder" && root.children && (
                  <SidebarItems
                    items={[
                      ...(root.index ? [root.index] : []),
                      ...root.children,
                    ]}
                  />
                )}
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
    </div>
  );
}

function SidebarItems({ items }: SidebarItemsProps) {
  const pathname = usePathname();
  return items.map((item) => {
    return (
      item.type === "page" && (
        <SidebarGroupItem key={item.$id}>
          <SidebarGroupLink
            key={item.url}
            href={item.url}
            isActive={pathname === item.url}
          >
            {item.name}
          </SidebarGroupLink>
        </SidebarGroupItem>
      )
    );
  });
}

"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import React from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
      title='Toggle theme'
    >
      <Sun className='size-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200' />
      <Moon className='hidden size-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200' />
    </Button>
  );
}

"use client";

import { useTheme } from "next-themes";
import { toast } from "sonner";
import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = resolvedTheme;

  return (
    <button
      onClick={() =>{
        setTheme(currentTheme === "dark" ? "light" : "dark")
        toast(`Switched to ${currentTheme === "dark" ? "light" : "dark"} mode!`)
      }
      }
      className="
        px-4 py-2
        rounded-lg
        border
        border-(--border)
        bg-(--surface)
        hover:opacity-80
        cursor-pointer
      "
    >
      {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
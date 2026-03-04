"use client";
import { Menu } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { toast } from "sonner";
export default function Header({
  setSidebarOpen,
}: {
  setSidebarOpen: (v: boolean) => void;
}) {
  return (
    <header className="flex items-center px-3 w-auto py-4 border-b border-(--border) bg-(--surface)">
      {}
      <div className="flex items-center gap-3 cursor-pointer flex-1 min-w-0">
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden shrink-0"
        >
          <Menu size={22} />
        </button>
        <h1 className="text-sm sm:text-base lg:text-lg font-semibold text-(--text-primary) truncate">
          Private Assets / New Scan
        </h1>
      </div>
      {}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <button
          onClick={() =>
            toast("New scan functionality coming soon!")
          }
          className="px-3 cursor-pointer sm:px-4 py-2 bg-(--primary) text-white rounded-lg text-xs sm:text-sm whitespace-nowrap hover:opacity-90 transition"
        >
          <span className="hidden xs:inline">New Scan</span>
          <span className="xs:hidden">New</span>
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}
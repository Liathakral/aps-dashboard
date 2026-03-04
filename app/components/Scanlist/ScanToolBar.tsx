"use client";
import { Search, SlidersHorizontal, Columns, Plus } from "lucide-react";
import { toast } from "sonner";
export default function ScanToolBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
      {}
      <div className="flex-1 relative">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-muted)"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search scans by name or type..."
          className="
            w-full
            pl-10 pr-4 py-3
            rounded-lg
            bg-(--surface)
            border border-(--border)
            text-sm
            text-(--text-primary)
            placeholder:text-(--text-muted)
            focus:outline-none
            focus:ring-2
            focus:ring-(--primary)/30
          "
        />
      </div>
      {}
      <div className="flex items-center gap-3">
        <ToolbarButton icon={<SlidersHorizontal size={16} />}>
          Filter
        </ToolbarButton>
        <ToolbarButton icon={<Columns size={16} />}>
          Column
        </ToolbarButton>
        <button
          onClick={() => toast("New scan functionality coming soon!")}
          className="
            flex items-center gap-2
            px-4 py-2.5
            rounded-lg
            text-sm font-medium
            bg-(--primary)
            text-white
            hover:opacity-90
            transition
          "
        >
          <Plus size={16} />
          New scan
        </button>
      </div>
    </div>
  );
}
function ToolbarButton({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      className="
        flex items-center gap-2
        px-4 py-2.5
        rounded-lg
        text-sm
        bg-(--surface)
        border border-(--border)
        text-(--text-secondary)
        hover:bg-(--surface)/70
        transition
      "
    >
      {icon}
      {children}
    </button>
  );
}
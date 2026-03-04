"use client";
import { RefreshCw } from "lucide-react";
export default function DashboardMetaBar() {
  return (
    <div
      className="
        w-full
        bg-(--surface)
        border border-(--border)
        rounded-xl
        px-6 py-4
      "
    >
      <div className="flex flex-wrap items-center gap-y-4 gap-x-8">
        <MetaItem label="Org" value="Project X" />
        <Divider />
        <MetaItem label="Owner" value="Nammagiri" />
        <Divider />
        <MetaItem label="Total Scans" value="100" />
        <Divider />
        <MetaItem label="Scheduled" value="1000" />
        <Divider />
        <MetaItem label="Rescans" value="100" />
        <Divider />
        <MetaItem label="Failed Scans" value="100" />
        {}
        <div className="ml-auto flex items-center gap-2 text-sm text-(--text-muted)]">
          <RefreshCw
            size={16}
            className="text-(--primary)"
          />
          <span>10 mins ago</span>
        </div>
      </div>
    </div>
  );
}
function MetaItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-(--text-muted) font-medium">
        {label}:
      </span>
      <span className="font-medium text-(--text-primary)">
        {value}
      </span>
    </div>
  );
}
function Divider() {
  return (
    <div className="h-4 w-px bg-(--border) hidden md:block" />
  );
}
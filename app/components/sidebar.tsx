"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import {
  LayoutDashboard,
  Folder,
  Shield,
  Calendar,
} from "lucide-react";
export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();
  return (
    <>
      {}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      {}
      <aside
        className={`
          fixed md:relative
          top-0 left-0
          h-screen
          w-full md:w-64
          bg-(--surface)
          border-r border-(--border)
          z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {}
        <div className="flex items-center cursor-pointer justify-between px-6 pt-6 md:hidden">
          <span className="text-xl font-semibold text-(--primary)">
            aps
          </span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>
        {}
        <div className="hidden md:block px-6 pt-6 pb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-(--primary) flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            <span className="text-xl font-semibold text-(--primary)">
              aps
            </span>
          </div>
        </div>
        {}
        <nav className="px-6 mt-8 space-y-2">
          <SidebarItem
            href="/dashboard"
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            active={pathname === "/dashboard"}
            close={() => setOpen(false)}
          />
          <SidebarItem
            href="/projects"
            icon={<Folder size={18} />}
            label="Projects"
            active={pathname === "/projects"}
            close={() => setOpen(false)}
          />
          <SidebarItem
            href="/activescan/1"
            icon={<Shield size={18} />}
            label="Scans"
            active={pathname === "/activescan/1"}
            close={() => setOpen(false)}
          />
          <SidebarItem
            href="/schedule"
            icon={<Calendar size={18} />}
            label="Schedule"
            active={pathname === "/schedule"}
            close={() => setOpen(false)}
          />
        </nav>
        {}
        <div className="absolute bottom-0 w-full border-t border-(--border) p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black">
              U
            </div>
            <div>
              <p className="text-xs text-(--text-muted)">
                admin@edu.com
              </p>
              <p className="text-sm font-medium text-(--text-primary)">
                Security Lead
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  close: () => void;
}

function SidebarItem({
  href,
  icon,
  label,
  active,
  close,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      onClick={close}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-3xl transition text-sm font-medium
        ${
          active
            ? "bg-(--primary)/20 text-(--primary)"
            : "text-(--text-secondary) hover:bg-(--background)"
        }
      `}
    >
      {icon}
      {label}
    </Link>
  );
}
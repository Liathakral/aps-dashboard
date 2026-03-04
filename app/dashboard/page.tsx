"use client";
import { useState, useMemo } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import DashboardCard from "../components/Scanlist/DashboardCard";
import ScanTable from "../components/Scanlist/ScanTable";
import ScanToolBar from "../components/Scanlist/ScanToolBar";
import DashboardMetaBar from "../components/Scanlist/DashboardMetabar";
import { scans } from "../data/scan";
export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const filteredScans = useMemo(() => {
    return scans.filter((scan) =>
      scan.name.toLowerCase().includes(search.toLowerCase()) ||
      scan.type.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  return (
    <div className="flex h-screen overflow-hidden bg-(--background)">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 min-w-0">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
          <DashboardMetaBar />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <DashboardCard title="Critical Severity" value={86} variant="critical" change={0.2} />
            <DashboardCard title="High Severity" value={16} variant="high" change={0.2}/>
            <DashboardCard title="Medium Severity" value={26} variant="medium" change={0.2}/>
            <DashboardCard title="Low Severity" value={16} variant="low" change={0.2}/>
          </div>
          {}
          <ScanToolBar search={search} setSearch={setSearch} />
          <ScanTable scans={filteredScans} />
        </main>
      </div>
    </div>
  );
}
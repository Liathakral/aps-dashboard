"use client";
import { useState } from 'react';
import ActiveScanLayout from '@/app/components/activescan/activescanlayout'
import Header from '@/app/components/header'
import Sidebar from '@/app/components/sidebar';

export default function ActiveScan() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
 <div className="flex h-screen overflow-hidden bg-(--background)">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 min-w-0">
        <Header setSidebarOpen={setSidebarOpen} />
 
        {/* Scrollable Content ONLY */}
      <main className="flex-1 overflow-y-auto px-4  sm:px-6 lg:px-8 py-6">
  <ActiveScanLayout />
</main>

      </div>
    </div>
  )
}


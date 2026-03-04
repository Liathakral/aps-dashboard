"use client";
import { useState } from "react";
export default  function LiveConsole() {
  const [tab, setTab] = useState("activity"); 
  return (
    <div className="flex flex-col ">
      {}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-(--border)">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-(--primary) rounded-full" />
          <span className="text-sm font-medium text-(--text-primary)">
            Live Scan Console
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
            Running...
          </span>
        </div>
        <div className="flex gap-4 text-(--text-muted)">
          <span>⌄</span>
          <span>✕</span>
        </div>
      </div>
      {}
      <div className={` flex  gap-10 px-6 ${tab === "activity" ? "border-b border-(--border) bg-(--surface)" : ""}`}>
        <button   onClick={() => setTab("activity")}
   className="relative py-4 cursor-pointer text-sm font-medium text-(--primary)">
          Activity Log
        {tab === "activity" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-(--primary)" />
          )}
        </button>
        <button   onClick={() => setTab("verification")}
   className="relative py-4 text-sm cursor-pointer font-medium text-(--primary)">
          Verification Loops
        {tab === "verification" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-(--primary)" />
          )}
        </button>
      </div>
      {}
     <div className="px-6 py-6  text-[13px] font-mono font-medium leading-6  h-130 overflow-y-auto">
  <p className=" ">
    <span className="text-gray-400">[09:00:00]</span>{" "}
    I&apos;ll begin a systematic penetration test on{" "}
    <span className="text-cyan-400">helpdesk.democorp.com</span>. Let me
    start with reconnaissance and enumeration.
  </p>
  <p className="mt-4">
    <span className="text-(--primary)">[09:01:00]</span>{" "}
    Good! target is online. Now let me perform port scanning to identify
    running services.
  </p>
  <p className="mt-4">
    <span className="text-gray-400">[09:02:00]</span>{" "}
    Excellent reconnaissance results:
  </p>
  <div className="ml-6 border-l-2 border-gray-700 pl-4 text-(--primary)">
    - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)
  </div>
  <p className="mt-2">
    Let me probe the web server on target first to understand its structure.
  </p>
  <p className="mt-4">
    <span className="text-cyan-400">[09:03:00]</span>{" "}
    Great! I found a login page for a Help Desk Platform. I can see a useful
    comment:{" "}
    <span className="text-cyan-400">
      &quot;TODO: Delete the testing account (test:test)&quot;
    </span>. Let me test this credential. The login redirects to{" "}
    <span className="bg-gray-800 text-white px-2 py-1 rounded-xl">
      /password/test
    </span>. Let me follow that path and explore it.
  </p>
  <p className="mt-4">
    <span className="text-gray-500">[09:04:00]</span>{" "}
    The POST method is not allowed on /password/test. Let me check what the
    JavaScript does – it posts to{" "}
    <span className="text-cyan-400">&quot;#&quot;</span> which means the current page.
    Let me try a different approach.
  </p>
  <p className="mt-4">
    <span className="text-gray-500">[09:05:00]</span>{" "}
    It redirects back to /password/test. Let me check if there&apos;s an /api
    endpoint or look for other paths. Let me also try exploring with the{" "}
    <span className="text-cyan-400">test:test</span> password directly on other
    endpoints.
  </p>
  <p className="mt-4">
    <span className="text-gray-500">[09:06:00]</span>{" "}
    Great! I can access the dashboard using the{" "}
    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
      X-UserId: 10032
    </span>{" "}
    header. The dashboard shows &quot;Welcome, John Doe&quot;. This suggests an{" "}
    <span className="text-red-400 font-semibold">
      **IDOR vulnerability**
    </span>{" "}
    – I can access any user&apos;s dashboard by just changing the X-UserId header.
    Let me explore more of the application...
  </p>
</div>
    </div>
  );
}
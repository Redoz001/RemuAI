"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare, LayoutDashboard, Zap, Database } from "lucide-react";

export default function ReuNexusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `flex items-center gap-3 px-3 py-2 rounded-xl transition text-sm ${
      pathname === path
        ? "bg-violet-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-white/5"
    }`;

  return (
    <div className="min-h-screen flex bg-[#050505] text-white">

      {/* SIDEBAR */}
      <aside className="w-72 border-r border-white/10 bg-[#0a0a0a] p-6 hidden md:flex flex-col">

        {/* BRAND */}
        <div className="pb-6 border-b border-white/10">
          <h1 className="text-2xl font-bold">
            Reu<span className="text-violet-500">Nexus</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Powered by RemuAI
          </p>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-2 mt-6">

          <Link href="/reunexus" className={linkClass("/reunexus")}>
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link href="/reunexus/chat" className={linkClass("/reunexus/chat")}>
            <MessageSquare size={18} />
            AI Chat
          </Link>

          <Link href="/reunexus/automation" className={linkClass("/reunexus/automation")}>
            <Zap size={18} />
            Automation
          </Link>

          <Link href="/reunexus/memory" className={linkClass("/reunexus/memory")}>
            <Database size={18} />
            Memory
          </Link>

        </nav>

        {/* NEW CHAT BUTTON (IMPORTANT FOR AI APPS) */}
        <button className="mt-6 w-full bg-violet-600 hover:bg-violet-500 transition py-2 rounded-xl text-sm font-medium">
          + New Chat
        </button>

        {/* STATS CARD */}
        <div className="mt-6 rounded-2xl bg-white/5 p-4 border border-white/10">
          <p className="text-xs text-gray-500">Monthly Usage</p>
          <p className="text-2xl font-bold mt-2">12,480</p>
          <p className="text-xs text-gray-500">requests</p>
        </div>

        {/* FOOTER */}
        <div className="mt-auto text-xs text-gray-600 pt-6">
          RemuAI Systems v1.0
        </div>

      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col relative">

        {/* TOP BAR */}
        <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 backdrop-blur-xl bg-black/40">

          <div className="text-sm text-gray-400">
            {pathname?.split("/").pop()?.toUpperCase() || "DASHBOARD"}
          </div>

          <div className="flex items-center gap-4">

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-400">System Online</span>
            </div>

            <div className="w-9 h-9 rounded-full bg-violet-600" />

          </div>

        </header>

        {/* CONTENT */}
        <div className="flex-1 p-6">
          {children}
        </div>

      </main>

    </div>
  );
}
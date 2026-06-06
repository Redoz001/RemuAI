import Link from "next/link";
import { MessageSquare, Zap, Database, ArrowRight } from "lucide-react";

export default function ReuNexusPage() {
  return (
    <div className="space-y-10">

      {/* HERO HEADER */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-violet-500">ReuNexus</span>
        </h1>

        <p className="text-gray-400 max-w-2xl">
          Your AI workspace for chat, automation, memory, and intelligent agents.
          Everything you build starts here.
        </p>
      </div>

      {/* QUICK ACTIONS */}
      <div className="flex gap-3 flex-wrap">

        <Link
          href="/reunexus/chat"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 transition"
        >
          <MessageSquare size={18} />
          Start Chat
        </Link>

        <Link
          href="/reunexus/automation"
          className="px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 transition"
        >
          Build Automation
        </Link>

      </div>

      {/* SYSTEM CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* CHAT */}
        <Link
          href="/reunexus/chat"
          className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          <div className="flex items-center justify-between mb-3">
            <MessageSquare className="text-gray-400 group-hover:text-white transition" />
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition" />
          </div>

          <h2 className="font-semibold text-lg">AI Chat</h2>
          <p className="text-sm text-gray-400 mt-1">
            Talk with your AI assistant in real time.
          </p>
        </Link>

        {/* AUTOMATION */}
        <Link
          href="/reunexus/automation"
          className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          <div className="flex items-center justify-between mb-3">
            <Zap className="text-gray-400 group-hover:text-white transition" />
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition" />
          </div>

          <h2 className="font-semibold text-lg">Automation</h2>
          <p className="text-sm text-gray-400 mt-1">
            Create intelligent workflows and agents.
          </p>
        </Link>

        {/* MEMORY */}
        <Link
          href="/reunexus/memory"
          className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
        >
          <div className="flex items-center justify-between mb-3">
            <Database className="text-gray-400 group-hover:text-white transition" />
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition" />
          </div>

          <h2 className="font-semibold text-lg">Memory System</h2>
          <p className="text-sm text-gray-400 mt-1">
            Store and retrieve context across conversations.
          </p>
        </Link>

      </div>

      {/* STATUS STRIP */}
      <div className="p-5 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-between">
        <p className="text-sm text-gray-400">
          System Status: <span className="text-green-400">Operational</span>
        </p>

        <p className="text-xs text-gray-500">
          ReuNexus Engine v1.0
        </p>
      </div>

    </div>
  );
}
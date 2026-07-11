import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070707] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-violet-300">
          404
        </p>

        <h1 className="mt-5 text-5xl font-black tracking-[-0.055em] sm:text-6xl">
          This page is not available.
        </h1>

        <p className="mt-6 text-lg leading-8 text-stone-400">
          The address may be incorrect, or the page may have moved.
          Return to the RemuAI homepage to continue.
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-black text-black transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
        >
          <ArrowLeft
            className="h-4 w-4"
            aria-hidden="true"
          />

          Return home
        </Link>
      </div>
    </main>
  );
}
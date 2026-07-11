import type { ReactNode } from "react";

import Link from "next/link";

import {
  ArrowLeft,
  Mail,
} from "lucide-react";

const COMPANY = {
  name: "RemuAI",
  email: "contact@remuai.space",
  tagline: "Technology, with judgment",
};

function BrandMark() {
  return (
    <span
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white text-black shadow-[0_18px_60px_rgba(255,255,255,0.08)]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        className="h-full w-full"
        fill="none"
      >
        <path
          d="M13 36V12h11.4c6.6 0 10.6 3.4 10.6 9 0 4.2-2.4 7.2-6.5 8.4L36 36h-7.4l-6.7-6.1H19V36h-6Zm6-11.3h5c3.3 0 5-1.2 5-3.6 0-2.5-1.7-3.7-5-3.7h-5v7.3Z"
          fill="currentColor"
        />

        <path
          d="M36.5 8.5 11.5 39.5"
          stroke="#7C3AED"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function PolicyLayout({
  eyebrow,
  title,
  summary,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#070707] text-stone-100 selection:bg-violet-300 selection:text-black">
      <header className="border-b border-white/[0.08] bg-[#070707]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            aria-label="RemuAI home"
          >
            <BrandMark />

            <span>
              <span className="block text-xl font-black tracking-[-0.045em]">
                Remu
                <span className="text-violet-300">
                  AI
                </span>
              </span>

              <span className="block text-[11px] font-medium text-stone-500">
                {COMPANY.tagline}
              </span>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            <ArrowLeft
              className="h-4 w-4"
              aria-hidden="true"
            />

            Back to RemuAI
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-violet-300">
          {eyebrow}
        </p>

        <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-400">
          {summary}
        </p>

        <p className="mt-5 text-sm text-stone-600">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-14 space-y-12 text-stone-300 [&_a]:font-semibold [&_a]:text-violet-300 [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-[-0.025em] [&_h2]:text-white [&_li]:leading-7 [&_p]:leading-8 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5">
          {children}
        </div>

        <div className="mt-16 rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7">
          <h2 className="text-xl font-black text-white">
            Questions about this page?
          </h2>

          <p className="mt-3 leading-7 text-stone-400">
            Contact RemuAI and include the
            name of this policy in your
            message.
          </p>

          <a
            href={`mailto:${COMPANY.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-black transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            <Mail
              className="h-4 w-4"
              aria-hidden="true"
            />

            {COMPANY.email}
          </a>
        </div>
      </article>

      <footer className="border-t border-white/[0.08] px-6 py-8 text-sm text-stone-600 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            {COMPANY.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy"
              className="transition hover:text-stone-300"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-stone-300"
            >
              Terms
            </Link>

            <Link
              href="/accessibility"
              className="transition hover:text-stone-300"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
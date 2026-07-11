import Link from "next/link";

import {
  ArrowUpRight,
} from "lucide-react";

import styles from "../page.module.css";

import {
  COMPANY,
  navLinks,
} from "../lib/site-content";

import BrandMark from "./BrandMark";
import MobileNavigation from "./MobileNavigation";

import {
  ProjectInquiryTrigger,
} from "./ProjectInquirySystem";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#070707]/84 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="#home"
          className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          aria-label="RemuAI home"
        >
          <BrandMark />

          <span>
            <span
              className={`${styles.wordmark} block text-xl font-black`}
            >
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

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md text-sm font-medium text-stone-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ProjectInquiryTrigger
            label="Discuss a Challenge"
            icon="message"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          />

          <a
            href={COMPANY.reunexusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-black text-black transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            Open ReuNexus

            <ArrowUpRight
              className="h-4 w-4"
              aria-hidden="true"
            />

            <span className="sr-only">
              {" "}
              (opens in a new tab)
            </span>
          </a>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
import Link from "next/link";

import {
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

import styles from "../page.module.css";

import {
  COMPANY,
  navLinks,
} from "../lib/site-content";

import BrandMark from "./BrandMark";

import {
  ProjectInquiryTrigger,
} from "./ProjectInquirySystem";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-black/[0.35] px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.7fr_0.9fr_1fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <BrandMark />

              <div>
                <h2
                  className={`${styles.wordmark} text-xl font-black`}
                >
                  Remu
                  <span className="text-violet-300">
                    AI
                  </span>
                </h2>

                <p className="text-xs text-stone-500">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-stone-400">
              {COMPANY.description}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-stone-400">
              <BriefcaseBusiness
                className="h-4 w-4 text-violet-300"
                aria-hidden="true"
              />

              Based in the UAE • Working worldwide
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">
              Navigate
            </h3>

            <div className="mt-5 space-y-3 text-sm text-stone-400">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">
              Capabilities
            </h3>

            <div className="mt-5 space-y-3 text-sm text-stone-400">
              <p>
                Product engineering
              </p>

              <p>
                Business systems
              </p>

              <p>
                Automation
              </p>

              <p>
                AI and knowledge systems
              </p>

              <p>
                Cloud and modernisation
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-stone-400">
              <a
                href={`mailto:${COMPANY.email}`}
                className="block break-all transition hover:text-white"
              >
                {COMPANY.email}
              </a>

              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="block transition hover:text-white"
              >
                {COMPANY.phone}
              </a>

              <a
                href={COMPANY.reunexusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-white transition hover:text-violet-300"
              >
                ReuNexus

                <ArrowUpRight
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />

                <span className="sr-only">
                  {" "}
                  (opens in a new tab)
                </span>
              </a>

              <ProjectInquiryTrigger
                label="Discuss a Challenge"
                icon="arrow"
                className="flex items-center gap-2 font-semibold text-white transition hover:text-violet-300"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.08] pt-7 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            {COMPANY.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
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

            <a
              href={`mailto:${COMPANY.email}`}
              className="transition hover:text-stone-300"
            >
              Contact
            </a>

            <Link
              href="#home"
              className="transition hover:text-stone-300"
            >
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";

import {
  ArrowRight,
  Check,
  Waypoints,
} from "lucide-react";

import {
  operatingPrinciples,
} from "../../lib/site-content";

import {
  ProjectInquiryTrigger,
} from "../ProjectInquirySystem";

import SystemMap from "../SystemMap";

import styles from "../../page.module.css";

export default function HeroSection() {
  return (
    <section
      id="home"
      className={`${styles.heroSurface} relative scroll-mt-24 px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44`}
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">

        {/* ================= LEFT ================= */}

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-stone-300">
            <Waypoints
              className="h-4 w-4 text-violet-300"
              aria-hidden="true"
            />

            Software • Systems • Automation • Practical AI
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.93] tracking-[-0.065em] text-white sm:text-7xl lg:text-[86px] xl:text-[104px]">
            Complex business.

            <span className="mt-2 block text-violet-300">
              Clear systems.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl md:leading-9">
            RemuAI designs software, automation, cloud platforms,
            and practical AI around how your organisation actually
            works—not around whatever technology is currently
            fashionable.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ProjectInquiryTrigger
              label="Bring Us the Pressure Point"
              icon="arrow"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-black text-black transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            />

            <Link
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-bold text-white transition hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
              See How We Work

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {operatingPrinciples.map((principle) => (
              <div
                key={principle}
                className="flex items-start gap-3 text-sm text-stone-400"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-400/10">
                  <Check
                    className="h-3 w-3 text-violet-300"
                    aria-hidden="true"
                  />
                </span>

                {principle}
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <SystemMap />

      </div>
    </section>
  );
}
import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  ProjectInquiryTrigger,
} from "../ProjectInquirySystem";

const points = [
  "Start with the business problem",
  "Receive a clear technical direction",
  "Build in practical stages",
];

export default function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-white/[0.04] to-transparent px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-300">
                Start a project
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                Ready to build your next digital system?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                Tell us what is slowing your organisation down. We will
                help turn that pressure point into a clear, reliable,
                and scalable solution.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 text-sm font-semibold text-stone-300"
                  >
                    <CheckCircle2
                      className="h-5 w-5 text-violet-300"
                      aria-hidden="true"
                    />

                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pb-2">
              <ProjectInquiryTrigger
                label="Start Your Project"
                icon="arrow"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-black text-black transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              />

              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-stone-500">
                Clear conversation
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Practical next steps
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import {
  Clock3,
  Layers3,
  Repeat2,
  TriangleAlert,
} from "lucide-react";

import {
  ProjectInquiryTrigger,
} from "../ProjectInquirySystem";

const pressurePoints = [
  {
    title: "Work is repeated manually",
    description:
      "Teams spend valuable time copying information, updating spreadsheets, and performing the same steps repeatedly.",
    icon: Repeat2,
  },
  {
    title: "Systems do not communicate",
    description:
      "Important information is divided between platforms, making operations slower and harder to manage.",
    icon: Layers3,
  },
  {
    title: "Processes depend on individuals",
    description:
      "Critical knowledge remains with specific employees instead of being built into clear and dependable systems.",
    icon: TriangleAlert,
  },
  {
    title: "Customers wait too long",
    description:
      "Slow internal processes create delayed responses, missed opportunities, and frustrating customer experiences.",
    icon: Clock3,
  },
];

export default function PressurePointsSection() {
  return (
    <section
      id="pressure-points"
      className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-300">
              Where transformation begins
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Bring us the pressure point.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-400">
              You do not need to arrive with a complete technical plan.
              Start with the problem slowing your organisation down.
              We will help turn it into a clear system.
            </p>

            <div className="mt-9">
              <ProjectInquiryTrigger
                label="Describe Your Challenge"
                icon="arrow"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-black text-black transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pressurePoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/20 p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                      <Icon
                        className="h-6 w-6 text-violet-300"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="text-xs font-black tracking-[0.18em] text-stone-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-stone-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
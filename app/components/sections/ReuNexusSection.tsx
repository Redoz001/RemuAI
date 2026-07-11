import {
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const features = [
  {
    title: "Connected workflows",
    description:
      "Bring important business processes, information, and actions into one structured environment.",
    icon: Workflow,
  },
  {
    title: "Intelligent assistance",
    description:
      "Use practical AI to support decisions, answer questions, and reduce repetitive operational work.",
    icon: BrainCircuit,
  },
  {
    title: "Modular architecture",
    description:
      "Add new capabilities as the organisation grows without rebuilding the entire platform.",
    icon: Layers3,
  },
  {
    title: "Security-focused design",
    description:
      "Protect access, business information, and platform operations through secure engineering practices.",
    icon: ShieldCheck,
  },
];

export default function ReuNexusSection() {
  return (
    <section
      id="reunexus"
      className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-transparent">
          <div className="grid gap-12 p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-14">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-300">
                RemuAI flagship platform
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                ReuNexus
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
                A connected digital platform designed to help
                organisations manage workflows, information,
                automation, and intelligent assistance from one
                evolving system.
              </p>

              <a
                href="https://reunexus.space"
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-black text-black transition hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                Explore ReuNexus

                <ArrowUpRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="rounded-3xl border border-white/10 bg-black/20 p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                      <Icon
                        className="h-5 w-5 text-violet-300"
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="mt-6 text-xl font-black text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-7 text-stone-400">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
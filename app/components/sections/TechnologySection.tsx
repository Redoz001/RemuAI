import {
  Bot,
  Cloud,
  Code2,
  Database,
  Network,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    title: "Modern applications",
    description:
      "Responsive websites, business applications, dashboards, and internal platforms built for real users.",
    icon: Code2,
  },
  {
    title: "Cloud infrastructure",
    description:
      "Scalable hosting, secure deployment, system monitoring, and reliable digital infrastructure.",
    icon: Cloud,
  },
  {
    title: "Data systems",
    description:
      "Structured databases, secure information management, reporting, and dependable data flows.",
    icon: Database,
  },
  {
    title: "System integrations",
    description:
      "APIs and connected services that allow platforms, teams, and business tools to work together.",
    icon: Network,
  },
  {
    title: "Artificial intelligence",
    description:
      "AI assistants, intelligent automation, and agent-based systems applied to practical business needs.",
    icon: Bot,
  },
  {
    title: "Security engineering",
    description:
      "Secure access, protected data, risk reduction, monitoring, and resilience built into the system.",
    icon: ShieldCheck,
  },
];

export default function TechnologySection() {
  return (
    <section
      id="technology"
      className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-300">
              Technology foundation
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              The right technology for the right problem.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-stone-400 lg:justify-self-end">
            We select tools based on security, reliability,
            maintainability, performance, and your organisation’s
            long-term needs.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article
                key={technology.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:border-violet-400/30 hover:bg-white/[0.055]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                  <Icon
                    className="h-6 w-6 text-violet-300"
                    aria-hidden="true"
                  />
                </span>

                <h3 className="mt-7 text-2xl font-black tracking-tight text-white">
                  {technology.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-400">
                  {technology.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.025] px-7 py-6">
          <p className="text-center text-sm font-semibold leading-7 text-stone-400">
            Our technology choices are guided by the business problem,
            not by trends or unnecessary complexity.
          </p>
        </div>
      </div>
    </section>
  );
}
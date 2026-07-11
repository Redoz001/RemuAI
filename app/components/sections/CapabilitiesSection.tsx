import {
  Bot,
  CloudCog,
  Code2,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    title: "Custom Software",
    description:
      "Purpose-built applications designed around your organisation’s real processes, teams, and customers.",
    icon: Code2,
  },
  {
    title: "Business Automation",
    description:
      "Automated workflows that reduce repetitive work, prevent mistakes, and keep operations moving.",
    icon: Workflow,
  },
  {
    title: "AI Systems",
    description:
      "Practical AI assistants, agents, and intelligent tools connected to clear business objectives.",
    icon: Bot,
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure, scalable infrastructure for applications, data, integrations, and growing digital services.",
    icon: CloudCog,
  },
  {
    title: "API Integrations",
    description:
      "Reliable connections between platforms, internal systems, payment services, and external tools.",
    icon: Network,
  },
  {
    title: "Cybersecurity",
    description:
      "Security-focused engineering that protects systems, access, data, and business continuity.",
    icon: ShieldCheck,
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-300">
              What we build
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Technology shaped around the business.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-stone-400 lg:justify-self-end">
            We combine software engineering, automation, cloud
            infrastructure, cybersecurity, and practical AI to solve
            operational problems—not to add unnecessary complexity.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-4">
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

                <h3 className="mt-8 text-2xl font-black tracking-tight text-white">
                  {capability.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-400">
                  {capability.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
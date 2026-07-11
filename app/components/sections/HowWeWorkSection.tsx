import {
  Code2,
  Rocket,
  Search,
  Waypoints,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We study the business problem, the people involved, the current workflow, and the result you need.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn the problem into a clear technical plan, user journey, system structure, and delivery roadmap.",
    icon: Waypoints,
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, connect, secure, and test the system in practical stages while keeping the objective clear.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch and improve",
    description:
      "We deploy the solution, monitor how it performs, support the users, and improve it as the business grows.",
    icon: Rocket,
  },
];

export default function HowWeWorkSection() {
  return (
    <section
      id="how-we-work"
      className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-300">
            How we work
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Clear thinking before complex technology.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-400">
            Every project begins with understanding the business
            challenge. Technology is selected only after the problem,
            users, and desired outcome are clear.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent lg:block"
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-7"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-[#0b0911]">
                    <Icon
                      className="h-6 w-6 text-violet-300"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-sm font-black tracking-[0.18em] text-violet-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-black tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-400">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
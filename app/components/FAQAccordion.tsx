const faqs = [
  {
    question:
      "What does RemuAI build?",

    answer:
      "RemuAI designs and engineers digital products, business systems, workflow automation, cloud platforms, and practical AI solutions. The exact shape depends on the operating problem, users, risk, and long-term ownership needs.",
  },
  {
    question:
      "Do we need a complete specification before contacting you?",

    answer:
      "No. A broken workflow, customer problem, product idea, difficult handoff, or system that no longer fits the business is enough to begin. The first stage is used to clarify the problem and define a sensible path.",
  },
  {
    question:
      "Does every RemuAI project use artificial intelligence?",

    answer:
      "No. AI is used only when it has a clear job, reliable information, appropriate boundaries, and measurable value. Many problems are better solved through clearer software, integrations, workflow design, or simpler operating rules.",
  },
  {
    question:
      "What is ReuNexus?",

    answer:
      "ReuNexus is the flagship product in the RemuAI ecosystem. It is an evolving workspace for assistants, productivity tools, and knowledge work, and it demonstrates how RemuAI approaches product design and practical AI internally.",
  },
  {
    question:
      "Can RemuAI improve an existing system instead of replacing it?",

    answer:
      "Yes. Modernisation can happen in controlled stages. RemuAI can assess the current system, preserve what still works, reduce risk, and introduce stronger architecture, integrations, interfaces, or operational controls over time.",
  },
  {
    question:
      "How does a project usually begin?",

    answer:
      "A first conversation focuses on the current pressure, users, constraints, dependencies, urgency, and intended outcome. From there, RemuAI can recommend clarification, product delivery, modernisation, or ongoing engineering support.",
  },
] as const;

export default function FAQAccordion() {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          className="group py-2"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl px-2 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 [&::-webkit-details-marker]:hidden">
            <span className="flex items-start gap-5">
              <span className="mt-1 text-xs font-black tracking-[0.18em] text-stone-600">
                0{index + 1}
              </span>

              <span className="text-lg font-black text-white sm:text-xl">
                {faq.question}
              </span>
            </span>

            <span
              className="relative h-5 w-5 shrink-0 text-violet-300"
              aria-hidden="true"
            >
              <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current" />

              <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 bg-current transition-transform group-open:rotate-90 group-open:opacity-0" />
            </span>
          </summary>

          <div className="pb-7 pl-11 pr-8 text-base leading-8 text-stone-400 sm:pl-14">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
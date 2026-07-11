const faqs = [
  {
    question: "What kind of businesses does RemuAI work with?",
    answer:
      "We work with organisations that need better software, clearer workflows, business automation, cloud systems, cybersecurity, or practical AI solutions.",
  },
  {
    question: "Do we need a complete technical plan before contacting you?",
    answer:
      "No. You can begin by explaining the business problem, the current process, and the result you want. We help define the technical solution.",
  },
  {
    question: "Does every RemuAI project use artificial intelligence?",
    answer:
      "No. AI is only used when it provides real value. Some projects need custom software, automation, integrations, cloud infrastructure, or stronger security instead.",
  },
  {
    question: "Can you improve an existing system?",
    answer:
      "Yes. We can review an existing website, application, workflow, or infrastructure and recommend practical improvements.",
  },
  {
    question: "Do you provide long-term support?",
    answer:
      "Yes. Support can include maintenance, updates, monitoring, security improvements, troubleshooting, and continued development.",
  },
  {
    question: "How does a project begin?",
    answer:
      "A project begins with a discovery conversation where we understand the problem, users, requirements, risks, and desired outcome.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-300">
            Frequently asked questions
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Questions? We’ve got answers.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-400">
            Clear information about how RemuAI approaches projects,
            technology, and long-term support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-black text-white">
                {faq.question}
              </summary>

              <p className="mt-4 max-w-3xl leading-7 text-stone-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
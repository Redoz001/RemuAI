const principles = [
  "Built around real workflows",
  "Clear before clever",
  "Automation with purpose",
  "Technology that supports people",
];

export default function BrandPrinciplesBand() {
  return (
    <section
      aria-label="RemuAI operating principles"
      className="border-y border-white/10 bg-white/[0.025] px-6 py-7 lg:px-10"
    >
      <div className="mx-auto grid max-w-[1440px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle, index) => (
          <div
            key={principle}
            className="flex items-center gap-3 text-sm font-semibold text-stone-300"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-400/10 text-xs font-black text-violet-300">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span>{principle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
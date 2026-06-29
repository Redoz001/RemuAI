import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-sm text-violet-400 tracking-widest uppercase">
          Flagship Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4">
          ReuNexus
        </h1>

        <p className="text-gray-400 mt-6 text-lg md:text-xl leading-relaxed">
          A unified AI workspace designed to build, manage, and deploy
          intelligent systems in one seamless environment.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <Link
            href="https://reunexus.space"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Launch ReuNexus
          </Link>

          <Link
            href="/technology"
            className="border border-white/20 px-6 py-3 rounded-xl hover:border-violet-500/50 hover:bg-violet-500/10 transition"
          >
            Explore Technology
          </Link>

        </div>
      </div>

      {/* FEATURE GRID */}
      <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-6">

        {[
          {
            title: "AI Workspace",
            desc: "A unified environment to design and manage intelligent workflows.",
          },
          {
            title: "Smart Automation",
            desc: "Build systems that think, respond, and execute tasks automatically.",
          },
          {
            title: "Scalable Architecture",
            desc: "Designed for performance, flexibility, and future expansion.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}

      </div>

      {/* BRAND STATEMENT */}
      <div className="max-w-4xl mx-auto mt-24 text-center">

        <h2 className="text-3xl font-bold">
          Built for the next generation of AI systems
        </h2>

        <p className="text-gray-400 mt-6 leading-relaxed">
          ReuNexus is engineered to simplify how intelligent systems are built and
          deployed. It brings everything into one place so creators can focus on
          building, not infrastructure.
        </p>

      </div>

      {/* FINAL CTA */}
      <div className="max-w-4xl mx-auto mt-24 text-center">

        <h3 className="text-2xl font-semibold">
          Start using ReuNexus today
        </h3>

        <p className="text-gray-400 mt-2">
          Experience the future of AI development.
        </p>

        <Link
          href="https://reunexus.space"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
        >
          Go to Platform
        </Link>

      </div>

    </div>
  );
}
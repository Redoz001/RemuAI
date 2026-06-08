import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-green-400 tracking-widest uppercase">
          Live Product
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4">
          ReuNexus
        </h1>

        <p className="text-gray-400 mt-6 text-lg md:text-xl leading-relaxed">
          A production-ready AI workspace already deployed with authentication,
          cloud infrastructure, and real-time AI capabilities.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          {/* MAIN APP ENTRY */}
          <Link
            href="/login"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Open ReuNexus
          </Link>

          <Link
            href="/technology"
            className="border border-white/20 px-6 py-3 rounded-xl hover:border-violet-500/50 hover:bg-violet-500/10 transition"
          >
            View Architecture
          </Link>

        </div>
      </div>

      {/* STATUS STRIP */}
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">

        <div className="p-4 border border-white/10 rounded-xl bg-white/5">
          <p className="text-green-400 font-semibold">LIVE</p>
          <p className="text-gray-400 text-sm mt-1">Production Deployment</p>
        </div>

        <div className="p-4 border border-white/10 rounded-xl bg-white/5">
          <p className="text-blue-400 font-semibold">SUPABASE</p>
          <p className="text-gray-400 text-sm mt-1">Auth + Database Layer</p>
        </div>

        <div className="p-4 border border-white/10 rounded-xl bg-white/5">
          <p className="text-purple-400 font-semibold">VERCEL</p>
          <p className="text-gray-400 text-sm mt-1">Cloud Deployment</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-6">

        {[
          {
            title: "Secure Authentication",
            desc: "Built with Supabase Auth for real user sessions and access control.",
          },
          {
            title: "AI Workspace Engine",
            desc: "Real-time AI interaction layer powering intelligent workflows.",
          },
          {
            title: "Scalable Cloud Deploy",
            desc: "Hosted on Vercel with optimized performance and edge delivery.",
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

      {/* TECH TRUST SECTION */}
      <div className="max-w-4xl mx-auto mt-24 text-center">

        <h2 className="text-3xl font-bold">
          Production-Grade AI Infrastructure
        </h2>

        <p className="text-gray-400 mt-6 leading-relaxed">
          ReuNexus is not a prototype. It is already deployed with real users,
          authentication flow, database integration, and scalable cloud hosting.
          Built as the foundation of RemuAI’s ecosystem.
        </p>

      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto mt-24 text-center">

        <h3 className="text-2xl font-semibold">
          Continue inside ReuNexus
        </h3>

        <p className="text-gray-400 mt-2">
          Access your AI workspace and start building.
        </p>

        <Link
          href="/login"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
        >
          Launch App
        </Link>

      </div>

    </div>
  );
}
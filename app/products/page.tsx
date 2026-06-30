import Link from "next/link";

const services = [
  {
    title: "AI Chatbots",
    desc: "Custom conversational AI assistants that improve customer support, engagement, and business productivity.",
    icon: "🤖",
  },
  {
    title: "Websites",
    desc: "Modern, responsive business websites designed for performance, branding, and growth.",
    icon: "🌐",
  },
  {
    title: "Web Applications",
    desc: "Custom dashboards, portals, SaaS platforms, and business applications built to scale.",
    icon: "💻",
  },
  {
    title: "Business Automation",
    desc: "Automate repetitive tasks and streamline workflows with intelligent software solutions.",
    icon: "⚙️",
  },
  {
    title: "AI Solutions",
    desc: "Tailored AI systems that integrate seamlessly into your business processes.",
    icon: "🧠",
  },
  {
    title: "Custom Software",
    desc: "Software engineered specifically around your organization's unique requirements.",
    icon: "🚀",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative px-6 py-28 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed25,transparent_65%)]" />

        <div className="relative max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-violet-400 font-semibold">
            Products & Services
          </p>

          <h1 className="text-6xl md:text-8xl font-bold mt-6">
            Technology Built
            <br />
            For Business Growth
          </h1>

          <p className="max-w-3xl mx-auto text-gray-400 text-xl leading-9 mt-8">
            RemuAI develops intelligent digital solutions that help businesses
            innovate, automate, and grow. From professional websites and web
            applications to AI chatbots and custom software, we build technology
            designed around your goals.
          </p>

        </div>

      </section>

      {/* SERVICES */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-5xl font-bold text-center mb-14">
          Our Solutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-violet-500/40 transition-all"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* REUNEXUS */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-900/20 to-black p-12">

          <p className="uppercase tracking-[0.3em] text-violet-400 font-semibold">
            Flagship Platform
          </p>

          <h2 className="text-5xl font-bold mt-4">
            ReuNexus
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-8 max-w-3xl">
            ReuNexus is RemuAI's flagship platform, created to simplify how
            people interact with artificial intelligence. Our long-term vision
            is to provide a unified environment where AI tools, intelligent
            assistants, automation, and future innovations come together in one
            seamless experience.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              href="https://reunexus.space"
              className="bg-violet-600 hover:bg-violet-500 transition px-8 py-4 rounded-xl font-semibold"
            >
              Visit ReuNexus
            </Link>

            <Link
              href="/technology"
              className="border border-white/20 px-8 py-4 rounded-xl hover:border-violet-500 transition"
            >
              Learn About Our Technology
            </Link>

          </div>

        </div>

      </section>

      {/* WHY REMUAI */}

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <h2 className="text-5xl font-bold mb-8">
          Why Choose RemuAI?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">

          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-xl font-semibold mb-4">
              Tailored Solutions
            </h3>

            <p className="text-gray-400">
              Every business is unique. We design solutions specifically around
              your objectives rather than relying on generic templates.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-xl font-semibold mb-4">
              Modern Technologies
            </h3>

            <p className="text-gray-400">
              We combine AI, modern web technologies, cloud infrastructure, and
              scalable architecture to build future-ready software.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-xl font-semibold mb-4">
              Business Focused
            </h3>

            <p className="text-gray-400">
              Technology should solve problems. Every solution we build is
              designed to deliver measurable value to your organization.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-xl font-semibold mb-4">
              Long-Term Partnership
            </h3>

            <p className="text-gray-400">
              We aim to build lasting relationships by supporting businesses as
              their technology needs continue to evolve.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="text-center px-6 pb-28">

        <h2 className="text-5xl font-bold">
          Let's Build Your Next Project
        </h2>

        <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">
          Whether you need a website, web application, AI chatbot, automation
          system, or custom software, RemuAI is ready to help turn your ideas
          into reality.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-10 bg-violet-600 hover:bg-violet-500 transition px-10 py-4 rounded-xl font-semibold text-lg"
        >
          Start a Project
        </Link>

      </section>

    </main>
  );
}
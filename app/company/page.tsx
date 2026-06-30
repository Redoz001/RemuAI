export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed30,transparent_65%)]" />

        <div className="relative max-w-6xl mx-auto text-center">

          <span className="text-violet-400 uppercase tracking-[0.35em] font-semibold">
            About RemuAI
          </span>

          <h1 className="text-6xl md:text-8xl font-bold mt-6 leading-tight">
            Building Intelligent
            <br />
            Digital Solutions
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-400 mt-8 leading-9">
            RemuAI is a technology company focused on helping businesses
            transform ideas into powerful digital solutions. We design and
            develop modern websites, web applications, AI chatbots, business
            automation systems, and custom software that solve real-world
            challenges while preparing organizations for the future of AI.
          </p>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 hover:border-violet-500/40 transition">

            <div className="text-5xl mb-6">🎯</div>

            <h2 className="text-3xl font-bold mb-5">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              To help businesses and organizations embrace technology through
              innovative websites, intelligent software, AI-powered solutions,
              and automation that improve productivity, efficiency, and growth.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 hover:border-violet-500/40 transition">

            <div className="text-5xl mb-6">🚀</div>

            <h2 className="text-3xl font-bold mb-5">
              Our Vision
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              To become a trusted technology partner for businesses worldwide,
              delivering intelligent software and AI solutions that make
              advanced technology accessible, practical, and valuable.
            </p>

          </div>

        </div>

      </section>

      {/* What We Do */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          What We Build
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
            <div className="text-5xl mb-5">🌐</div>

            <h3 className="text-2xl font-bold mb-4">
              Websites
            </h3>

            <p className="text-gray-400 leading-7">
              Professional, responsive websites designed to strengthen your
              online presence and represent your brand.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
            <div className="text-5xl mb-5">💻</div>

            <h3 className="text-2xl font-bold mb-4">
              Web Applications
            </h3>

            <p className="text-gray-400 leading-7">
              Custom web applications, dashboards, portals, and business
              platforms built for scalability and performance.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
            <div className="text-5xl mb-5">🤖</div>

            <h3 className="text-2xl font-bold mb-4">
              AI Chatbots
            </h3>

            <p className="text-gray-400 leading-7">
              Intelligent assistants that automate customer support, improve
              engagement, and streamline communication.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
            <div className="text-5xl mb-5">⚙️</div>

            <h3 className="text-2xl font-bold mb-4">
              Business Automation
            </h3>

            <p className="text-gray-400 leading-7">
              Smart automation that reduces repetitive work and improves
              operational efficiency.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
            <div className="text-5xl mb-5">🧠</div>

            <h3 className="text-2xl font-bold mb-4">
              AI Solutions
            </h3>

            <p className="text-gray-400 leading-7">
              AI-powered software tailored to business needs, combining
              intelligent workflows with modern technologies.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
            <div className="text-5xl mb-5">🚀</div>

            <h3 className="text-2xl font-bold mb-4">
              Future Platforms
            </h3>

            <p className="text-gray-400 leading-7">
              We're continuously researching and developing future products,
              including intelligent platforms like ReuNexus and other
              next-generation AI solutions.
            </p>
          </div>

        </div>

      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-400">
              Continuously exploring better ways to solve real-world problems.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-2xl font-bold mb-4">Quality</h3>
            <p className="text-gray-400">
              Every solution is built with attention to detail, performance, and reliability.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-2xl font-bold mb-4">Integrity</h3>
            <p className="text-gray-400">
              We value honesty, transparency, and long-term relationships with our clients.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 bg-white/5">
            <h3 className="text-2xl font-bold mb-4">Growth</h3>
            <p className="text-gray-400">
              Helping businesses grow while continuously improving our own technology.
            </p>
          </div>

        </div>

      </section>

      {/* Future */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <h2 className="text-5xl font-bold mb-8">
          Looking Ahead
        </h2>

        <p className="text-gray-400 text-xl leading-9 max-w-4xl mx-auto">
          At RemuAI, we believe technology should empower people—not complicate
          their work. As AI continues to evolve, we will continue building
          intelligent digital solutions that help businesses innovate, automate,
          and grow while expanding our own ecosystem of AI-powered products and
          platforms.
        </p>

      </section>

    </main>
  );
}
export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed30,transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto text-center">
          <span className="text-violet-400 uppercase tracking-[0.3em]">
            About RemuAI
          </span>

          <h1 className="text-6xl md:text-8xl font-bold mt-6">
            Building The Future
            <br />
            Of Intelligence
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-400 mt-8">
            RemuAI is creating the next generation of intelligent software,
            AI infrastructure, and autonomous systems designed to empower
            people, businesses, and developers worldwide.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-400 text-lg">
              To create technology that amplifies human capability
              through intelligence, automation, creativity,
              and innovation.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-3xl font-bold mb-6">
              Our Vision
            </h2>

            <p className="text-gray-400 text-lg">
              A future where intelligent systems help every person
              and organization unlock their full potential.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold mb-4">
              Innovation
            </h3>

            <p className="text-gray-400">
              Pushing boundaries and exploring new possibilities.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold mb-4">
              Responsibility
            </h3>

            <p className="text-gray-400">
              Building AI that is safe, trustworthy and beneficial.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold mb-4">
              Excellence
            </h3>

            <p className="text-gray-400">
              Delivering world-class products and experiences.
            </p>
          </div>

        </div>

      </section>

      {/* Future */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h2 className="text-5xl font-bold mb-8">
          The Road Ahead
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 text-xl">
          RemuAI is building a future where intelligence becomes
          accessible, scalable, and useful for everyone.
          Through ReuNexus and future products, we aim to
          redefine how humans interact with technology.
        </p>

      </section>
    </main>
  );
}
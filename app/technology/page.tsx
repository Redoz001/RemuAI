'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const technologies = [
  {
    title: "Artificial Intelligence",
    desc: "Custom AI chatbots, intelligent assistants, automation, and AI-powered business solutions tailored to your organization.",
  },
  {
    title: "Web Development",
    desc: "Modern websites, dashboards, portals, and responsive web applications built using scalable technologies.",
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Secure deployments, cloud hosting, authentication, APIs, databases, and scalable backend architecture.",
  },
  {
    title: "Business Automation",
    desc: "Automate repetitive workflows, integrate business systems, and improve operational efficiency using AI.",
  },
  {
    title: "Custom Software",
    desc: "Every solution is designed specifically around your business processes rather than using one-size-fits-all software.",
  },
  {
    title: "Research & Innovation",
    desc: "We continuously research emerging AI technologies including intelligent agents, memory systems, reasoning, and future platform capabilities.",
  },
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold">
          Technology & Innovation
        </h1>

        <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-4xl mx-auto leading-8">
          RemuAI is a technology company focused on building intelligent digital
          solutions for businesses. From modern websites and web applications to
          AI chatbots, automation systems, and custom software, we combine
          cutting-edge technologies with practical business solutions to help
          organizations grow.
        </p>
      </motion.section>

      {/* TECHNOLOGY GRID */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-violet-500/40 transition-all"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {tech.title}
            </h2>

            <p className="text-gray-400 leading-7">
              {tech.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* DEVELOPMENT PROCESS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-28 text-center"
      >
        <h2 className="text-4xl font-bold mb-12">
          How We Build
        </h2>

        <div className="grid md:grid-cols-5 gap-6 text-center">

          <div>
            <div className="text-5xl mb-3">💡</div>
            <h3 className="font-semibold">Discovery</h3>
            <p className="text-gray-400 text-sm mt-2">
              Understanding your goals and business needs.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-3">📐</div>
            <h3 className="font-semibold">Planning</h3>
            <p className="text-gray-400 text-sm mt-2">
              Designing the best technical solution.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-3">⚙️</div>
            <h3 className="font-semibold">Development</h3>
            <p className="text-gray-400 text-sm mt-2">
              Building secure, scalable software.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-3">🧪</div>
            <h3 className="font-semibold">Testing</h3>
            <p className="text-gray-400 text-sm mt-2">
              Ensuring quality, performance, and reliability.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-3">🚀</div>
            <h3 className="font-semibold">Launch</h3>
            <p className="text-gray-400 text-sm mt-2">
              Deployment with ongoing support and improvements.
            </p>
          </div>

        </div>
      </motion.section>

      {/* VISION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-32"
      >
        <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-900/20 to-black p-10">

          <h2 className="text-4xl font-bold mb-6 text-center">
            Our Vision
          </h2>

          <p className="text-gray-300 leading-8 text-center">
            We believe every business should have access to intelligent technology.
            Our mission is to help organizations adopt AI, modern software, and
            automation through reliable, scalable, and innovative digital
            solutions. As RemuAI evolves, we will continue expanding our platform
            with advanced AI capabilities, intelligent products, and next-generation
            business tools.
          </p>

        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-28"
      >
        <h2 className="text-5xl font-bold">
          Let's Build Something Extraordinary
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Whether you need a professional website, a custom web application,
          an AI chatbot, business automation, or an intelligent software
          solution, RemuAI is ready to help bring your vision to life.
        </p>

        <button className="mt-10 px-10 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 transition font-semibold text-lg">
          Start Your Project
        </button>
      </motion.section>

    </main>
  );
}
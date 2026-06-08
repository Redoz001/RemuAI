'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const systems = [
  {
    title: "Memory Engine",
    desc: "Stores user context, preferences, and long-term interactions to create personalized AI behavior.",
  },
  {
    title: "Agent Orchestrator",
    desc: "Breaks tasks into sub-agents that collaborate to produce higher-quality results.",
  },
  {
    title: "AI Router",
    desc: "Chooses the best model dynamically based on speed, cost, and reasoning needs.",
  },
  {
    title: "Knowledge Graph",
    desc: "Connects all data into structured relationships for deeper reasoning.",
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
          RemuAI Technology
        </h1>

        <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          A modular intelligence system built with memory, agents, routing, and structured reasoning.
        </p>
      </motion.section>

      {/* SYSTEMS */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-6">
        {systems.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-violet-500/40 transition"
          >
            <h2 className="text-2xl font-semibold mb-3">
              {s.title}
            </h2>
            <p className="text-gray-400">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ARCHITECTURE FLOW */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-28 text-center"
      >
        <h2 className="text-3xl font-bold mb-10">
          System Architecture
        </h2>

        <div className="space-y-3 text-lg text-gray-300">
          <p>User Input</p>
          <p>↓</p>
          <p className="text-violet-400">AI Router</p>
          <p>↓</p>
          <p className="text-violet-400">Agent Orchestrator</p>
          <p>↓</p>
          <p className="text-violet-400">Memory Engine</p>
          <p>↓</p>
          <p className="text-violet-400">Knowledge Graph</p>
          <p>↓</p>
          <p>Final Output</p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-32"
      >
        <h2 className="text-4xl font-bold">
          Build with RemuAI Infrastructure
        </h2>

        <p className="text-gray-400 mt-4">
          From chatbot → real AI system.
        </p>

        <button className="mt-8 px-8 py-4 bg-violet-600 hover:bg-violet-500 rounded-lg font-semibold transition">
          Get Started
        </button>
      </motion.section>

    </main>
  );
}
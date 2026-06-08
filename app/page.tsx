"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedCard } from "./components/AnimatedCard";
import { AnimatedButton } from "./components/AnimatedButton";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import SocialProof from "./components/SocialProof";
import FAQAccordion from "./components/FAQAccordion";
import { PricingToggle } from "./components/PricingToggle";
import { PricingCard } from "./components/PricingCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("dashboard");

  const LaunchReuNexus = () => {
    window.open("https://reunexus.space", "_blank");
  };

  const [isYearlyPricing, setIsYearlyPricing] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: "-100px" },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    viewport: { once: true },
  };

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#7c3aed33,transparent_50%)] pointer-events-none" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="text-3xl font-bold">
            Remu<span className="text-violet-500">AI</span>
          </div>
   
        <div className="p-10">
         <button
           onClick={LaunchReuNexus}
           className="px-6 py-3 bg-violet-600 rounded-xl"
     >
          Launch ReuNexus
         </button>
       </div>
        

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#features">Features</a>
            <a href="#models">Models</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="flex gap-3">
            <AnimatedButton text="Sign In" variant="outline" size="sm" />
            <AnimatedButton text="Get Started" variant="primary" size="sm" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <motion.div 
              className="inline-flex px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Introducing ReuNexus
            </motion.div>

            <motion.h1 
              className="text-7xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The AI Operating
              <br />
              System For
              <br />
              The Future
            </motion.h1>

            <motion.p 
              className="text-gray-400 text-xl mt-8 max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Build agents, deploy models, automate workflows,
              and scale intelligence through one unified platform.
            </motion.p>

            <motion.div 
              className="flex gap-4 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <AnimatedButton text="Start Building" variant="primary" size="lg" />
              <AnimatedButton text="Explore ReuNexus" variant="outline" size="lg" />
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-8 mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl font-bold">99.99%</h3>
                <p className="text-gray-400">Uptime</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-gray-400">Models</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">120+</h3>
                <p className="text-gray-400">Countries</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 blur-[100px] bg-violet-600 opacity-30" />

            <motion.div 
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              whileHover={{ borderColor: "rgba(139, 92, 246, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-black/40">
                  User: Build a billion-dollar AI startup.
                </div>

                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
                  ReuNexus: Creating strategy, roadmap,
                  architecture and growth plan...
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/40">
                    AI Chat
                  </div>

                  <div className="p-4 rounded-xl bg-black/40">
                    Agents
                  </div>

                  <div className="p-4 rounded-xl bg-black/40">
                    Models
                  </div>

                  <div className="p-4 rounded-xl bg-black/40">
                    Analytics
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>
      
            {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-8 py-32"
      >
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="text-violet-400 uppercase tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Features
          </motion.span>

          <motion.h2 
            className="text-6xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Everything You Need To Build With AI
          </motion.h2>

          <motion.p 
            className="text-gray-400 max-w-3xl mx-auto mt-6 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            RemuAI combines advanced AI models, agents,
            automation, analytics, and developer tools
            into one powerful ecosystem.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >

          <motion.div 
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-violet-500/50 transition-all relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-violet-500/0 opacity-0 group-hover:opacity-20 pointer-events-none rounded-3xl"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div 
              className="text-5xl mb-6 inline-block"
              whileHover={{ rotateX: 20, rotateY: 20 }}
              transition={{ duration: 0.4 }}
              style={{ perspective: "1000px" }}
            >
              🤖
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              AI Agents
            </motion.h3>

            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              Create autonomous agents capable of
              research, planning, execution,
              and collaboration.
            </motion.p>
          </motion.div>

          <motion.div 
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-violet-500/50 transition-all relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-violet-500/0 opacity-0 group-hover:opacity-20 pointer-events-none rounded-3xl"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div 
              className="text-5xl mb-6 inline-block"
              whileHover={{ rotateX: 20, rotateY: 20 }}
              transition={{ duration: 0.4 }}
              style={{ perspective: "1000px" }}
            >
              ⚡
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Automation
            </motion.h3>

            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              Connect workflows and automate repetitive
              tasks across your business.
            </motion.p>
          </motion.div>

          <motion.div 
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-violet-500/50 transition-all relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-violet-500/0 opacity-0 group-hover:opacity-20 pointer-events-none rounded-3xl"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div 
              className="text-5xl mb-6 inline-block"
              whileHover={{ rotateX: 20, rotateY: 20 }}
              transition={{ duration: 0.4 }}
              style={{ perspective: "1000px" }}
            >
              🧠
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Advanced Models
            </motion.h3>

            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              Access powerful language, vision,
              reasoning, and multimodal AI models.
            </motion.p>
          </motion.div>

          <motion.div 
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-violet-500/50 transition-all relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-violet-500/0 opacity-0 group-hover:opacity-20 pointer-events-none rounded-3xl"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div 
              className="text-5xl mb-6 inline-block"
              whileHover={{ rotateX: 20, rotateY: 20 }}
              transition={{ duration: 0.4 }}
              style={{ perspective: "1000px" }}
            >
              📊
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Analytics
            </motion.h3>

            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              Monitor performance, token usage,
              growth metrics, and AI effectiveness.
            </motion.p>
          </motion.div>

          <motion.div 
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-violet-500/50 transition-all relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-violet-500/0 opacity-0 group-hover:opacity-20 pointer-events-none rounded-3xl"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div 
              className="text-5xl mb-6 inline-block"
              whileHover={{ rotateX: 20, rotateY: 20 }}
              transition={{ duration: 0.4 }}
              style={{ perspective: "1000px" }}
            >
              🔐
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Enterprise Security
            </motion.h3>

            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              Built with privacy, compliance,
              and enterprise-grade protection.
            </motion.p>
          </motion.div>

          <motion.div 
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-violet-500/50 transition-all relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-violet-500/0 opacity-0 group-hover:opacity-20 pointer-events-none rounded-3xl"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div 
              className="text-5xl mb-6 inline-block"
              whileHover={{ rotateX: 20, rotateY: 20 }}
              transition={{ duration: 0.4 }}
              style={{ perspective: "1000px" }}
            >
              🌎
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Global Scale
            </motion.h3>

            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              Deliver AI experiences worldwide
              with low latency infrastructure.
            </motion.p>
          </motion.div>

        </motion.div>
      </section>

      {/* Why RemuAI */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="rounded-[40px] border border-violet-500/20 bg-linear-to-b from-violet-500/10 to-transparent p-12">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Why Choose RemuAI?
            </h2>

            <p className="text-gray-400 mt-6 text-xl">
              One platform. Unlimited possibilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            <div>
              <h3 className="text-3xl font-bold mb-4">
                Faster
              </h3>

              <p className="text-gray-400">
                Launch AI products in days instead
                of months using ready-to-deploy tools.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">
                Smarter
              </h3>

              <p className="text-gray-400">
                Advanced reasoning, multimodal
                understanding and intelligent agents.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">
                Unified
              </h3>

              <p className="text-gray-400">
                Replace multiple AI subscriptions
                with a single ecosystem.
              </p>
            </div>

          </div>

        </div>
      </section>

            {/* ReuNexus Showcase */}
      <section
        id="reunexus"
        className="max-w-7xl mx-auto px-8 py-32"
      >
        <div className="text-center mb-20">
          <span className="text-violet-400 uppercase tracking-widest">
            ReuNexus
          </span>

          <h2 className="text-6xl font-bold mt-4">
            Meet The Future Workspace
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
            ReuNexus is your AI command center.
            Chat with advanced models, create agents,
            automate workflows and manage your entire AI ecosystem.
          </p>
        </div>

        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <div className="grid lg:grid-cols-5 gap-8">

            {/* Sidebar */}
           <div className="lg:col-span-1">
  <div className="space-y-4">

    {[
      "dashboard",
      "chat",
      "agents",
      "workflows",
      "models",
      "analytics",
    ].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`w-full text-left p-4 rounded-xl transition ${
          activeTab === tab
            ? "bg-violet-600"
            : "bg-black/30 hover:bg-black/50"
        }`}
      >
        {tab === "dashboard" && "Dashboard"}
        {tab === "chat" && "AI Chat"}
        {tab === "agents" && "Agents"}
        {tab === "workflows" && "Workflows"}
        {tab === "models" && "Models"}
        {tab === "analytics" && "Analytics"}
      </button>
    ))}

  </div>
</div> 

            {/* Main Content */}
           <div className="lg:col-span-4">

  {activeTab === "dashboard" && (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-2xl bg-black/30 p-6">
        <div className="text-gray-400 text-sm">
          Total Requests
        </div>
        <div className="text-4xl font-bold mt-2">
          1.2M
        </div>
      </div>

      <div className="rounded-2xl bg-black/30 p-6">
        <div className="text-gray-400 text-sm">
          Active Agents
        </div>
        <div className="text-4xl font-bold mt-2">
          124
        </div>
      </div>

      <div className="rounded-2xl bg-black/30 p-6">
        <div className="text-gray-400 text-sm">
          Workflows
        </div>
        <div className="text-4xl font-bold mt-2">
          48
        </div>
      </div>

    </div>
  )}

  {activeTab === "chat" && (
    <div className="rounded-3xl bg-black/40 p-8">
      <div className="mb-6 text-violet-400">
        ReuNexus AI Assistant
      </div>

      <div className="space-y-4">

        <div className="ml-auto max-w-lg bg-violet-600 rounded-2xl p-4">
          Create a market analysis for an AI startup.
        </div>

        <div className="max-w-2xl bg-white/5 rounded-2xl p-4 border border-white/10">
          Market analysis generated.
          Industry trends, competitors,
          opportunities and strategic roadmap prepared.
        </div>

      </div>
    </div>
  )}

  {activeTab === "agents" && (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="rounded-2xl bg-black/30 p-6">
        <h3 className="text-xl font-bold mb-2">
          Research Agent
        </h3>

        <p className="text-gray-400">
          Performs deep market and competitor analysis.
        </p>
      </div>

      <div className="rounded-2xl bg-black/30 p-6">
        <h3 className="text-xl font-bold mb-2">
          Sales Agent
        </h3>

        <p className="text-gray-400">
          Automates outreach and lead qualification.
        </p>
      </div>

    </div>
  )}

  {activeTab === "workflows" && (
    <div className="grid md:grid-cols-4 gap-4">

      <div className="bg-black/30 p-6 rounded-2xl">
        Input
      </div>

      <div className="bg-black/30 p-6 rounded-2xl">
        AI Agent
      </div>

      <div className="bg-black/30 p-6 rounded-2xl">
        Automation
      </div>

      <div className="bg-black/30 p-6 rounded-2xl">
        Results
      </div>

    </div>
  )}

  {activeTab === "models" && (
      <div className="grid md:grid-cols-3 gap-6">

         <div className="rounded-2xl bg-black/30 p-6">
          GPT-5
        </div>

       <div className="rounded-2xl bg-black/30 p-6">
         Claude
        </div>

       <div className="rounded-2xl bg-black/30 p-6">
         Gemini
       </div>

     </div>
   )}

   {activeTab === "analytics" && (
   <div className="rounded-3xl bg-black/30 p-8">

       <h3 className="text-3xl font-bold mb-6">
         Usage Analytics
       </h3>

       <div className="h-64 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-600/20 to-blue-600/20 flex items-center justify-center">
         Analytics Preview
       </div>

     </div>
   )}

     <div className="mt-10 text-center">
    <a
      href="/auth"
      className="inline-flex px-8 py-4 bg-violet-600 rounded-2xl font-semibold hover:bg-violet-500 transition"
    >
      Launch ReuNexus
    </a>
  </div>

</div> {/* Main Content */}

</div> {/* Grid */}

</div> {/* Showcase Container */}

</section>

      {/* Workflow Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Build Powerful Workflows
          </h2>

          <p className="text-gray-400 text-xl mt-6">
            Connect models, agents and automation
            into one intelligent workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          <div className="rounded-3xl border border-white/10 p-8 text-center">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="font-bold text-xl">
              Input
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="font-bold text-xl">
              AI Agent
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="font-bold text-xl">
              Automation
            </h3>
          </div>

          <div className="rounded-3xl border border-white/10 p-8 text-center">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="font-bold text-xl">
              Results
            </h3>
          </div>

        </div>

      </section>

            {/* Models Section */}
      <section
        id="models"
        className="max-w-7xl mx-auto px-8 py-32"
      >
        <div className="text-center mb-20">
          <span className="text-violet-400 uppercase tracking-widest">
            AI Models
          </span>

          <h2 className="text-6xl font-bold mt-4">
            Access The World's Most
            Powerful Intelligence
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
            Switch between specialized models for reasoning,
            coding, vision, creativity, analysis and automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-5xl mb-6">🧠</div>

            <h3 className="text-3xl font-bold mb-4">
              Reasoning Models
            </h3>

            <p className="text-gray-400">
              Deep thinking and advanced problem-solving
              for research, strategy and planning.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-5xl mb-6">💻</div>

            <h3 className="text-3xl font-bold mb-4">
              Coding Models
            </h3>

            <p className="text-gray-400">
              Generate, review and optimize code
              across modern programming languages.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-5xl mb-6">👁️</div>

            <h3 className="text-3xl font-bold mb-4">
              Vision Models
            </h3>

            <p className="text-gray-400">
              Analyze images, documents and visual
              information with multimodal AI.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="rounded-[40px] border border-white/10 bg-linear-to-r from-violet-500/10 to-transparent p-12">

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <div className="text-6xl font-bold text-violet-400">
                50+
              </div>

              <p className="text-gray-400 mt-3">
                AI Models
              </p>
            </div>

            <div>
              <div className="text-6xl font-bold text-violet-400">
                99.99%
              </div>

              <p className="text-gray-400 mt-3">
                Uptime
              </p>
            </div>

            <div>
              <div className="text-6xl font-bold text-violet-400">
                120+
              </div>

              <p className="text-gray-400 mt-3">
                Countries
              </p>
            </div>

            <div>
              <div className="text-6xl font-bold text-violet-400">
                24/7
              </div>

              <p className="text-gray-400 mt-3">
                Availability
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Infrastructure */}
      <section className="max-w-7xl mx-auto px-8 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-violet-400 uppercase tracking-widest">
              Global Infrastructure
            </span>

            <h2 className="text-6xl font-bold mt-4">
              Built To Scale
            </h2>

            <p className="text-xl text-gray-400 mt-8">
              RemuAI is designed for developers,
              creators, startups and enterprises.
              Fast responses, reliable systems,
              and global accessibility.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <div className="text-green-400">✓</div>
                <div>Low latency worldwide</div>
              </div>

              <div className="flex gap-4">
                <div className="text-green-400">✓</div>
                <div>Enterprise-grade security</div>
              </div>

              <div className="flex gap-4">
                <div className="text-green-400">✓</div>
                <div>Massive scalability</div>
              </div>

              <div className="flex gap-4">
                <div className="text-green-400">✓</div>
                <div>Reliable AI infrastructure</div>
              </div>

            </div>

          </div>

          <div className="relative">

            <div className="absolute inset-0 blur-[120px] bg-violet-600 opacity-20" />

            <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-10">

              <div className="grid grid-cols-3 gap-6">

                <div className="rounded-2xl bg-black/30 p-6 text-center">
                  🇺🇸
                </div>

                <div className="rounded-2xl bg-black/30 p-6 text-center">
                  🇪🇺
                </div>

                <div className="rounded-2xl bg-black/30 p-6 text-center">
                  🇸🇬
                </div>

                <div className="rounded-2xl bg-black/30 p-6 text-center">
                  🇦🇪
                </div>

                <div className="rounded-2xl bg-black/30 p-6 text-center">
                  🇯🇵
                </div>

                <div className="rounded-2xl bg-black/30 p-6 text-center">
                  🌍
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

            {/* Pricing */}
      <section
        id="pricing"
        className="max-w-7xl mx-auto px-8 py-32"
      >
        <div className="text-center mb-20">
          <span className="text-violet-400 uppercase tracking-widest">
            Pricing
          </span>

          <h2 className="text-6xl font-bold mt-4">
            Simple Pricing.
            Unlimited Innovation.
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
            Start free and scale as your AI needs grow.
          </p>
        </div>

        <PricingToggle onToggle={setIsYearlyPricing} />

        <div className="grid lg:grid-cols-3 gap-8">
          <PricingCard
            tier="starter"
            name="Starter"
            description="Perfect for individuals exploring AI."
            isYearly={isYearlyPricing}
            monthlyPrice={0}
            monthlyPriceLabel=""
            yearlyPrice={0}
            yearlyPriceLabel=""
            buttonLabel="Get Started"
            features={[
              "✓ AI Chat",
              "✓ Basic Models",
              "✓ Limited Usage",
              "✓ Community Support",
            ]}
            delay={0}
          />

          <PricingCard
            tier="pro"
            name="Pro"
            description="For creators, developers and startups."
            isYearly={isYearlyPricing}
            monthlyPrice={20}
            monthlyPriceLabel="/month"
            yearlyPrice={200}
            yearlyPriceLabel="/year"
            buttonLabel="Upgrade Now"
            isPopular={true}
            features={[
              "✓ Everything in Starter",
              "✓ Premium Models",
              "✓ ReuNexus Agents",
              "✓ Workflow Automation",
              "✓ Priority Support",
            ]}
            delay={0.1}
          />

          <PricingCard
            tier="enterprise"
            name="Enterprise"
            description="Tailored solutions for organizations."
            isYearly={isYearlyPricing}
            buttonLabel="Contact Sales"
            features={[
              "✓ Unlimited Usage",
              "✓ Dedicated Infrastructure",
              "✓ Advanced Security",
              "✓ SSO Integration",
              "✓ Dedicated Support Team",
            ]}
            delay={0.2}
          />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="rounded-[40px] border border-white/10 overflow-hidden">

          <div className="grid grid-cols-4 bg-white/5">

            <div className="p-6 font-bold">
              Features
            </div>

            <div className="p-6 font-bold text-center">
              Free
            </div>

            <div className="p-6 font-bold text-center">
              Pro
            </div>

            <div className="p-6 font-bold text-center">
              Enterprise
            </div>

          </div>

          {[
            ["AI Chat", "✓", "✓", "✓"],
            ["AI Agents", "—", "✓", "✓"],
            ["Automation", "—", "✓", "✓"],
            ["Analytics", "✓", "✓", "✓"],
            ["Priority Support", "—", "✓", "✓"],
            ["SSO", "—", "—", "✓"],
            ["Custom Infrastructure", "—", "—", "✓"],
          ].map((row) => (
            <div
              key={row[0]}
              className="grid grid-cols-4 border-t border-white/10"
            >
              <div className="p-6">{row[0]}</div>
              <div className="p-6 text-center">{row[1]}</div>
              <div className="p-6 text-center">{row[2]}</div>
              <div className="p-6 text-center">{row[3]}</div>
            </div>
          ))}

        </div>

      </section>

            {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-8 py-32">

        <div className="text-center mb-20">
          <span className="text-violet-400 uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-6xl font-bold mt-4">
            Trusted By Builders
          </h2>

          <p className="text-xl text-gray-400 mt-6">
            Helping creators, developers and businesses
            unlock the power of AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="text-yellow-400 mb-4">
              ★★★★★
            </div>

            <p className="text-gray-300 text-lg">
              “RemuAI transformed how our team
              researches and executes projects.
              Everything feels faster.”
            </p>

            <div className="mt-6">
              <div className="font-bold">
                Sarah Johnson
              </div>

              <div className="text-gray-500">
                Startup Founder
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="text-yellow-400 mb-4">
              ★★★★★
            </div>

            <p className="text-gray-300 text-lg">
              “The ReuNexus workflow tools save
              us hours every week.”
            </p>

            <div className="mt-6">
              <div className="font-bold">
                Michael Chen
              </div>

              <div className="text-gray-500">
                Product Manager
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="text-yellow-400 mb-4">
              ★★★★★
            </div>

            <p className="text-gray-300 text-lg">
              “One of the most promising AI
              platforms we've seen.”
            </p>

            <div className="mt-6">
              <div className="font-bold">
                David Miller
              </div>

              <div className="text-gray-500">
                Developer
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="rounded-[40px] border border-white/10 bg-linear-to-r from-violet-500/10 to-transparent p-12">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Built For Reliability
            </h2>

            <p className="text-xl text-gray-400 mt-6">
              Enterprise-grade infrastructure,
              security and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-5xl mb-4">
                🔒
              </div>

              <h3 className="font-bold text-xl">
                Secure
              </h3>
            </div>

            <div>
              <div className="text-5xl mb-4">
                ⚡
              </div>

              <h3 className="font-bold text-xl">
                Fast
              </h3>
            </div>

            <div>
              <div className="text-5xl mb-4">
                🌍
              </div>

              <h3 className="font-bold text-xl">
                Global
              </h3>
            </div>

            <div>
              <div className="text-5xl mb-4">
                📈
              </div>

              <h3 className="font-bold text-xl">
                Scalable
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* Vision */}
      <section className="max-w-7xl mx-auto px-8 py-32">

        <div className="text-center">

          <span className="text-violet-400 uppercase tracking-widest">
            Our Vision
          </span>

          <h2 className="text-7xl font-bold mt-6 leading-tight">
            Building The Future Of
            <br />
            Human–AI Collaboration
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-gray-400 mt-10">
            At RemuAI, we believe artificial intelligence
            should amplify human creativity, productivity
            and innovation. Our mission is to make powerful
            AI accessible to every developer, business and
            creator on Earth.
          </p>

        </div>

      </section>

      {/* Call To Action */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="rounded-[48px] border border-violet-500/30 bg-linear-to-b from-violet-500/20 to-transparent p-16 text-center">

          <h2 className="text-6xl font-bold">
            Ready To Build The Future?
          </h2>

          <p className="text-xl text-gray-400 mt-8 max-w-2xl mx-auto">
            Join the next generation of innovators,
            creators and businesses using RemuAI.
          </p>

          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            <AnimatedButton text="Start Free" variant="primary" size="lg" />
            <AnimatedButton text="Explore ReuNexus" variant="outline" size="lg" />
          </div>

        </div>

      </section>

            {/* FAQ */}
      <section
        id="faq"
        className="max-w-7xl mx-auto px-8 py-32"
      >
        <div className="text-center mb-20">

          <span className="text-violet-400 uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="text-6xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-xl text-gray-400 mt-6">
            Everything you need to know about RemuAI.
          </p>

        </div>

        <div className="max-w-4xl mx-auto">
          <FAQAccordion />
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-20">

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Brand */}
            <div className="lg:col-span-2">

              <div className="text-4xl font-bold mb-6">
                Remu<span className="text-violet-500">AI</span>
              </div>

              <p className="text-gray-400 max-w-md">
                Building the future of artificial intelligence
                through powerful tools, intelligent agents
                and innovative experiences.
              </p>

            </div>

            {/* Product */}
            <div>

              <h4 className="font-bold text-lg mb-6">
                Product
              </h4>

              <div className="space-y-4 text-gray-400">

                <a href="#" className="block hover:text-white">
                  ReuNexus
                </a>

                <a href="#" className="block hover:text-white">
                  Models
                </a>

                <a href="#" className="block hover:text-white">
                  Agents
                </a>

                <a href="#" className="block hover:text-white">
                  Automation
                </a>

              </div>

            </div>

            {/* Resources */}
            <div>

              <h4 className="font-bold text-lg mb-6">
                Resources
              </h4>

              <div className="space-y-4 text-gray-400">

                <a href="#" className="block hover:text-white">
                  Documentation
                </a>

                <a href="#" className="block hover:text-white">
                  API
                </a>

                <a href="#" className="block hover:text-white">
                  Status
                </a>

                <a href="#" className="block hover:text-white">
                  Changelog
                </a>

              </div>

            </div>

            {/* Company */}
            <div>

              <h4 className="font-bold text-lg mb-6">
                Company
              </h4>

              <div className="space-y-4 text-gray-400">

                <a href="#" className="block hover:text-white">
                  About
                </a>

                <a href="#" className="block hover:text-white">
                  Careers
                </a>

                <a href="#" className="block hover:text-white">
                  Contact
                </a>

                <a href="#" className="block hover:text-white">
                  Partners
                </a>

              </div>

            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

            <div className="text-gray-500">
              © 2026 RemuAI. All rights reserved.
            </div>

            <div className="flex gap-8 mt-6 md:mt-0 text-gray-500">

              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
              <a href="#">Cookies</a>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}
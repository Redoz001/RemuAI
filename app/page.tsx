"use client";

import { motion } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  ArrowUp,
  Phone,
  Globe,
  Bot,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {AnimatedCard} from "./components/AnimatedCard";
import { AnimatedButton } from "./components/AnimatedButton";
import { PricingToggle } from "./components/PricingToggle";
import { PricingCard } from "./components/PricingCard";
import FAQAccordion from "./components/FAQAccordion";
import SocialProof from "./components/SocialProof";

export default function Home() {
  const router = useRouter();

  /* -----------------------------
     STATES
  ----------------------------- */

  const [activeTab, setActiveTab] = useState("dashboard");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isYearlyPricing, setIsYearlyPricing] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  const [scrollProgress, setScrollProgress] = useState(0);

  const [showBackToTop, setShowBackToTop] = useState(false);

  /* -----------------------------
     ACTIONS
  ----------------------------- */

  const LaunchReuNexus = () => {
    window.open("https://reunexus.space", "_blank");
  };

  const StartProject = () => {
    router.push("/contact");
  };

  const CallUs = () => {
    window.open("tel:+971564673090");
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* -----------------------------
     EFFECTS
  ----------------------------- */

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);

      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* -----------------------------
     ANIMATIONS
  ----------------------------- */

  const fadeIn = {
    initial: {
      opacity: 0,
      y: 30,
    },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: 0.7,
    },

    viewport: {
      once: true,
      margin: "-100px",
    },
  };

  const staggerContainer = {
    initial: {
      opacity: 0,
    },

    whileInView: {
      opacity: 1,
    },

    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },

    viewport: {
      once: true,
    },
  };

  return (
  <main
    className={`${
      darkMode ? "bg-black text-white" : "bg-white text-black"
    } overflow-x-hidden transition-colors duration-500`}
  >
    {/* Scroll Progress */}
    <div
      className="fixed top-0 left-0 h-1 bg-violet-500 z-[100]"
      style={{ width: `${scrollProgress}%` }}
    />

    {/* Background Glow */}
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-violet-600/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[160px]" />
    </div>

    {/* Navbar */}
    <nav className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="cursor-pointer">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Remu<span className="text-violet-500">AI</span>
          </h1>

          <p className="text-xs text-gray-400">
            Intelligent Software Solutions
          </p>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm">

          <a href="#services" className="hover:text-violet-400 transition">
            Services
          </a>

          <a href="#reunexus" className="hover:text-violet-400 transition">
            ReuNexus
          </a>

          <a href="#portfolio" className="hover:text-violet-400 transition">
            Portfolio
          </a>

          <a href="#pricing" className="hover:text-violet-400 transition">
            Pricing
          </a>

          <a href="#faq" className="hover:text-violet-400 transition">
            FAQ
          </a>

        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-11 h-11 rounded-xl border border-white/10 hover:border-violet-500 transition flex items-center justify-center"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={CallUs}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 hover:border-violet-500 transition"
          >
            <Phone size={17} />
            +971 56 467 3090
          </button>

          <AnimatedButton
            text="Start Project"
            variant="outline"
            size="sm"
          />

          <button
            onClick={LaunchReuNexus}
            className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition font-semibold"
          >
            Launch ReuNexus
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden"
        >
          {mobileMenuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (

        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">

          <div className="flex flex-col p-6 gap-5">

            <a href="#services">Services</a>

            <a href="#reunexus">ReuNexus</a>

            <a href="#portfolio">Portfolio</a>

            <a href="#pricing">Pricing</a>

            <a href="#faq">FAQ</a>

            <button
              onClick={CallUs}
              className="flex items-center gap-3 text-left"
            >
              <Phone size={18} />
              +971 56 467 3090
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3"
            >
              {darkMode ? (
                <>
                  <Sun size={18} />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon size={18} />
                  Dark Mode
                </>
              )}
            </button>

            <button
              onClick={LaunchReuNexus}
              className="w-full py-3 rounded-xl bg-violet-600"
            >
              Launch ReuNexus
            </button>

          </div>

        </div>

      )}

    </nav>

 {/* ================= HERO ================= */}

<section className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-28">

  <div className="grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT */}

    <motion.div {...fadeIn}>

      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-violet-300 mb-8">

        <Sparkles size={18} />

        Building Intelligent Digital Solutions

      </div>

      <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight">

        AI Solutions

        <span className="block text-violet-500">

          Built For

        </span>

        Modern Businesses

      </h1>

      <p className="mt-8 text-lg md:text-xl text-gray-400 leading-8 max-w-xl">

        RemuAI helps businesses and entrepreneurs build
        AI-powered software, websites, web applications,
        chatbots, automation systems and custom digital
        solutions that solve real problems.

      </p>

      {/* SERVICES */}

      <div className="grid grid-cols-2 gap-4 mt-10">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          🤖 AI Solutions
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          🌐 Websites
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          💻 Web Applications
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          ⚡ Automation
        </div>

      </div>

      {/* BUTTONS */}

      <div className="flex flex-wrap gap-4 mt-10">

        <button
          onClick={StartProject}
          className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition font-semibold"
        >
          Start Your Project
        </button>

        <button
          onClick={LaunchReuNexus}
          className="px-8 py-4 rounded-2xl border border-violet-500 hover:bg-violet-600/20 transition"
        >
          Explore ReuNexus
        </button>

      </div>

      {/* CONTACT */}

      <div className="flex flex-wrap gap-8 mt-10 text-gray-400">

        <div className="flex items-center gap-2">

          <Phone size={18} />

          +971 56 467 3090

        </div>

        <div className="flex items-center gap-2">

          <Globe size={18} />

          Worldwide Services

        </div>

      </div>

    </motion.div>

    {/* RIGHT */}

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >

      <div className="absolute inset-0 rounded-[40px] bg-violet-600/20 blur-[120px]" />

      <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

        {/* WINDOW BAR */}

        <div className="flex items-center gap-2 border-b border-white/10 p-5">

          <div className="w-3 h-3 rounded-full bg-red-500" />

          <div className="w-3 h-3 rounded-full bg-yellow-500" />

          <div className="w-3 h-3 rounded-full bg-green-500" />

          <span className="ml-4 text-gray-400">

            RemuAI Workspace

          </span>

        </div>

        <div className="p-8 space-y-6">

          <div className="rounded-2xl bg-black/40 p-5">

            👤 Client

            <div className="mt-2 text-gray-300">

              Build a modern website with an AI chatbot
              for my business.

            </div>

          </div>

          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-5">

            🤖 RemuAI

            <div className="mt-3 space-y-2 text-gray-300">

              ✓ Website Strategy

              <br />

              ✓ UI/UX Design

              <br />

              ✓ AI Chatbot

              <br />

              ✓ Development

              <br />

              ✓ Deployment

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-black/40 p-5">

              🌐 Websites

            </div>

            <div className="rounded-xl bg-black/40 p-5">

              🤖 AI Chatbots

            </div>

            <div className="rounded-xl bg-black/40 p-5">

              ⚡ Automation

            </div>

            <div className="rounded-xl bg-black/40 p-5">

              🚀 ReuNexus

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>

{/* ================= SERVICES ================= */}

<section
  id="services"
  className="max-w-7xl mx-auto px-6 lg:px-8 py-28"
>

  <motion.div
    {...fadeIn}
    className="text-center mb-20"
  >

    <span className="text-violet-400 uppercase tracking-[0.25em]">

      Our Services

    </span>

    <h2 className="text-4xl md:text-6xl font-black mt-5">

      What We Build

    </h2>

    <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-8">

      Whether you're launching a startup, growing your business,
      or bringing a new idea to life, RemuAI delivers intelligent,
      modern software tailored to your goals.

    </p>

  </motion.div>

  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true }}
    className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
  >

      {/* AI */}

      <motion.div
        variants={fadeIn}
        whileHover={{ y: -8 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8"
      >

        <div className="text-5xl mb-6">🤖</div>

        <h3 className="text-2xl font-bold mb-4">

          AI Solutions

        </h3>

        <p className="text-gray-400 leading-7">

          Intelligent assistants, AI integrations,
          automation systems, recommendation engines,
          and business intelligence powered by modern AI.

        </p>

      </motion.div>

      {/* Websites */}

      <motion.div
        variants={fadeIn}
        whileHover={{ y: -8 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8"
      >

        <div className="text-5xl mb-6">🌐</div>

        <h3 className="text-2xl font-bold mb-4">

          Professional Websites

        </h3>

        <p className="text-gray-400 leading-7">

          Fast, modern, responsive websites that
          represent your brand and convert visitors
          into customers.

        </p>

      </motion.div>

      {/* Web Apps */}

      <motion.div
        variants={fadeIn}
        whileHover={{ y: -8 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8"
      >

        <div className="text-5xl mb-6">💻</div>

        <h3 className="text-2xl font-bold mb-4">

          Web Applications

        </h3>

        <p className="text-gray-400 leading-7">

          Powerful cloud-based platforms,
          dashboards, portals and business
          management systems.

        </p>

      </motion.div>

      {/* Chatbots */}

      <motion.div
        variants={fadeIn}
        whileHover={{ y: -8 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8"
      >

        <div className="text-5xl mb-6">💬</div>

        <h3 className="text-2xl font-bold mb-4">

          AI Chatbots

        </h3>

        <p className="text-gray-400 leading-7">

          Smart conversational assistants
          for customer support, lead generation,
          sales and internal operations.

        </p>

      </motion.div>

      {/* Automation */}

      <motion.div
        variants={fadeIn}
        whileHover={{ y: -8 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8"
      >

        <div className="text-5xl mb-6">⚡</div>

        <h3 className="text-2xl font-bold mb-4">

          Business Automation

        </h3>

        <p className="text-gray-400 leading-7">

          Eliminate repetitive work by connecting
          your apps, workflows and AI into one
          automated ecosystem.

        </p>

      </motion.div>

      {/* Custom */}

      <motion.div
        variants={fadeIn}
        whileHover={{ y: -8 }}
        className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent p-8"
      >

        <div className="text-5xl mb-6">🚀</div>

        <h3 className="text-2xl font-bold mb-4">

          Custom Software

        </h3>

        <p className="text-gray-400 leading-7">

          Have a unique idea?
          We design and build custom software
          engineered specifically for your business.

        </p>

      </motion.div>

  </motion.div>

</section>

{/* ================= WHY REMUAI ================= */}

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">

  <motion.div
    {...fadeIn}
    className="text-center mb-20"
  >

    <span className="text-violet-400 uppercase tracking-[0.25em]">
      Why RemuAI
    </span>

    <h2 className="text-4xl md:text-6xl font-black mt-5">
      More Than Development.
      <br />
      A Technology Partner.
    </h2>

    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
      We don't just deliver software—we work with you to understand your
      goals, recommend the right technology, and build solutions that grow
      with your business.
    </p>

  </motion.div>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Left */}

    <div className="space-y-6">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="text-2xl font-bold mb-3">
          🚀 Built Around Your Business
        </h3>

        <p className="text-gray-400 leading-7">
          Every project is designed around your workflow,
          customers and long-term vision—not a generic template.
        </p>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="text-2xl font-bold mb-3">
          🤖 AI-First Approach
        </h3>

        <p className="text-gray-400 leading-7">
          We integrate modern AI where it creates real value,
          helping businesses automate work, improve efficiency
          and deliver better customer experiences.
        </p>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="text-2xl font-bold mb-3">
          📈 Built to Grow
        </h3>

        <p className="text-gray-400 leading-7">
          Whether you're a startup or an established business,
          we build solutions that can evolve as your needs change.
        </p>

      </div>

    </div>

    {/* Right */}

    <div className="rounded-[36px] border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-black/20 to-transparent p-10">

      <h3 className="text-3xl font-bold mb-8">

        What You Can Expect

      </h3>

      <div className="space-y-6">

        <div className="flex gap-4">
          <div className="text-green-400 text-xl">✓</div>
          <div>
            Clear communication from planning to deployment.
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-green-400 text-xl">✓</div>
          <div>
            Modern technologies chosen for long-term reliability.
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-green-400 text-xl">✓</div>
          <div>
            Clean, responsive and professional user experiences.
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-green-400 text-xl">✓</div>
          <div>
            Ongoing improvements and technical support after launch.
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-green-400 text-xl">✓</div>
          <div>
            Solutions built with performance, security and scalability in mind.
          </div>
        </div>

      </div>

      <div className="mt-10 p-6 rounded-2xl border border-violet-500/20 bg-violet-500/10">

        <div className="text-violet-300 font-semibold mb-2">
          Need a custom solution?
        </div>

        <p className="text-gray-300 leading-7">
          Whether it's an AI platform, website, chatbot,
          automation system or a completely unique project,
          we'll help bring your idea to life.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= REUNEXUS ================= */}

<section
  id="reunexus"
  className="max-w-7xl mx-auto px-6 lg:px-8 py-32"
>

  <motion.div
    {...fadeIn}
    className="text-center mb-20"
  >

    <span className="text-violet-400 uppercase tracking-[0.25em]">

      Flagship Product

    </span>

    <h2 className="text-4xl md:text-6xl font-black mt-5">

      Meet ReuNexus

    </h2>

    <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-8">

      ReuNexus is RemuAI's flagship AI workspace.
      Chat with advanced AI, organize projects,
      automate workflows and manage your digital
      work from one intelligent platform.

    </p>

  </motion.div>

  <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

    <div className="grid lg:grid-cols-5">

      {/* Sidebar */}

      <div className="lg:col-span-1 border-r border-white/10 p-6">

        <div className="space-y-3">

          {[
            "dashboard",
            "chat",
            "agents",
            "projects",
            "automation",
            "analytics",
          ].map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left rounded-xl px-5 py-4 transition font-medium ${
                activeTab === tab
                  ? "bg-violet-600"
                  : "hover:bg-white/5"
              }`}
            >

              {tab === "dashboard" && "Dashboard"}

              {tab === "chat" && "AI Assistant"}

              {tab === "agents" && "AI Agents"}

              {tab === "projects" && "Projects"}

              {tab === "automation" && "Automation"}

              {tab === "analytics" && "Analytics"}

            </button>

          ))}

        </div>

      </div>

      {/* Content */}

      <div className="lg:col-span-4 p-8">

        {activeTab === "dashboard" && (

          <div>

            <h3 className="text-3xl font-bold mb-8">

              Workspace Overview

            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="rounded-2xl bg-black/30 p-6">

                <div className="text-sm text-gray-400">

                  Active Projects

                </div>

                <div className="text-4xl font-bold mt-3">

                  8

                </div>

              </div>

              <div className="rounded-2xl bg-black/30 p-6">

                <div className="text-sm text-gray-400">

                  AI Conversations

                </div>

                <div className="text-4xl font-bold mt-3">

                  146

                </div>

              </div>

              <div className="rounded-2xl bg-black/30 p-6">

                <div className="text-sm text-gray-400">

                  Automations

                </div>

                <div className="text-4xl font-bold mt-3">

                  21

                </div>

              </div>

            </div>

          </div>

        )}

        {activeTab === "chat" && (

          <div className="space-y-5">

            <div className="rounded-2xl bg-violet-600 p-5 ml-auto max-w-lg">

              Create an AI-powered website for my company.

            </div>

            <div className="rounded-2xl bg-black/30 border border-white/10 p-5 max-w-2xl">

              Absolutely. I'll create a project plan,
              recommend the technology stack,
              generate the UI structure and prepare
              the development roadmap.

            </div>

          </div>

        )}

        {activeTab === "agents" && (

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl bg-black/30 p-6">

              <h4 className="font-bold text-xl mb-3">

                Research Agent

              </h4>

              <p className="text-gray-400">

                Collects information,
                compares competitors and
                summarizes findings.

              </p>

            </div>

            <div className="rounded-2xl bg-black/30 p-6">

              <h4 className="font-bold text-xl mb-3">

                Development Agent

              </h4>

              <p className="text-gray-400">

                Helps generate code,
                debug applications and
                organize development tasks.

              </p>

            </div>

          </div>

        )}

        {activeTab === "projects" && (

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl bg-black/30 p-6">

              🌐 Company Website

            </div>

            <div className="rounded-2xl bg-black/30 p-6">

              🤖 Customer Chatbot

            </div>

            <div className="rounded-2xl bg-black/30 p-6">

              📊 Sales Dashboard

            </div>

            <div className="rounded-2xl bg-black/30 p-6">

              ⚡ Business Automation

            </div>

          </div>

        )}

        {activeTab === "automation" && (

          <div className="grid md:grid-cols-4 gap-4">

            <div className="rounded-xl bg-black/30 p-5">

              Input

            </div>

            <div className="rounded-xl bg-black/30 p-5">

              AI

            </div>

            <div className="rounded-xl bg-black/30 p-5">

              Process

            </div>

            <div className="rounded-xl bg-black/30 p-5">

              Result

            </div>

          </div>

        )}

        {activeTab === "analytics" && (

          <div>

            <div className="h-72 rounded-3xl bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center">

              Analytics Dashboard Preview

            </div>

          </div>

        )}

        <div className="mt-10 flex flex-wrap gap-4">

          <button
            onClick={LaunchReuNexus}
            className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition font-semibold"
          >

            Launch ReuNexus

          </button>

          <button
            onClick={StartProject}
            className="px-8 py-4 rounded-2xl border border-white/10 hover:border-violet-500 transition"
          >

            Build Something Like This

          </button>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= HOW WE WORK ================= */}

<section
  id="process"
  className="max-w-7xl mx-auto px-6 lg:px-8 py-32"
>

  <motion.div
    {...fadeIn}
    className="text-center mb-20"
  >

    <span className="text-violet-400 uppercase tracking-[0.25em]">
      Our Process
    </span>

    <h2 className="text-4xl md:text-6xl font-black mt-5">
      From Idea To Launch
    </h2>

    <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
      Every successful project starts with understanding your
      vision. We work closely with you from planning to deployment,
      ensuring the final product meets your business goals.
    </p>

  </motion.div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-5xl mb-5">💡</div>
      <h3 className="text-2xl font-bold mb-4">
        Discovery
      </h3>
      <p className="text-gray-400 leading-7">
        We understand your business, goals,
        challenges and ideas before writing
        a single line of code.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-5xl mb-5">📐</div>
      <h3 className="text-2xl font-bold mb-4">
        Planning & Design
      </h3>
      <p className="text-gray-400 leading-7">
        We create user experiences,
        system architecture and project
        roadmaps tailored to your needs.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-5xl mb-5">⚙️</div>
      <h3 className="text-2xl font-bold mb-4">
        Development
      </h3>
      <p className="text-gray-400 leading-7">
        Our team builds fast,
        secure and scalable solutions
        using modern technologies.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-5xl mb-5">🧪</div>
      <h3 className="text-2xl font-bold mb-4">
        Testing
      </h3>
      <p className="text-gray-400 leading-7">
        Every feature is tested for
        performance, reliability,
        responsiveness and usability.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="text-5xl mb-5">🚀</div>
      <h3 className="text-2xl font-bold mb-4">
        Deployment
      </h3>
      <p className="text-gray-400 leading-7">
        We launch your project with
        confidence and ensure everything
        runs smoothly from day one.
      </p>
    </div>

    <div className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent p-8">
      <div className="text-5xl mb-5">🤝</div>
      <h3 className="text-2xl font-bold mb-4">
        Continuous Support
      </h3>
      <p className="text-gray-400 leading-7">
        Technology evolves.
        We continue improving,
        maintaining and expanding
        your solution as your business grows.
      </p>
    </div>

  </div>

</section>

{/* ================= TECHNOLOGY ================= */}

<section
  id="technology"
  className="max-w-7xl mx-auto px-6 lg:px-8 pb-32"
>

  <motion.div
    {...fadeIn}
    className="text-center mb-16"
  >

    <span className="text-violet-400 uppercase tracking-[0.25em]">
      Technologies
    </span>

    <h2 className="text-4xl md:text-6xl font-black mt-5">
      Built With Modern Technology
    </h2>

    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6">
      We use industry-standard technologies
      to build reliable, secure and scalable software.
    </p>

  </motion.div>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

    {[
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Docker",
      "OpenAI",
      "Tailwind CSS",
      "Firebase",
      "GitHub",
      "Vercel",
    ].map((tech) => (

      <div
        key={tech}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center font-semibold hover:border-violet-500 transition"
      >
        {tech}
      </div>

    ))}

  </div>

</section>

{/* ================= SERVICES ================= */}

<section
  id="services"
  className="max-w-7xl mx-auto px-6 lg:px-8 py-32"
>

  <motion.div
    {...fadeIn}
    className="text-center mb-20"
  >

    <span className="text-violet-400 uppercase tracking-[0.25em]">
      Our Services
    </span>

    <h2 className="text-4xl md:text-6xl font-black mt-5">
      Solutions Built Around Your Business
    </h2>

    <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
      Whether you're launching a startup,
      modernizing your business or automating
      operations, RemuAI delivers intelligent
      software designed for real-world results.
    </p>

  </motion.div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

    <AnimatedCard>

      <div className="text-5xl mb-5">🌐</div>

      <h3 className="text-2xl font-bold mb-4">
        Professional Websites
      </h3>

      <p className="text-gray-400 leading-7">
        Fast, responsive and modern business
        websites built to attract customers
        and strengthen your online presence.
      </p>

    </AnimatedCard>

    <AnimatedCard>

      <div className="text-5xl mb-5">💻</div>

      <h3 className="text-2xl font-bold mb-4">
        Web Applications
      </h3>

      <p className="text-gray-400 leading-7">
        Powerful custom web applications,
        dashboards and business systems
        built specifically for your workflow.
      </p>

    </AnimatedCard>

    <AnimatedCard>

      <div className="text-5xl mb-5">🤖</div>

      <h3 className="text-2xl font-bold mb-4">
        AI Chatbots
      </h3>

      <p className="text-gray-400 leading-7">
        Intelligent assistants that answer
        customer questions, automate support
        and improve engagement 24/7.
      </p>

    </AnimatedCard>

    <AnimatedCard>

      <div className="text-5xl mb-5">⚡</div>

      <h3 className="text-2xl font-bold mb-4">
        Business Automation
      </h3>

      <p className="text-gray-400 leading-7">
        Eliminate repetitive work by connecting
        AI with your existing tools and workflows.
      </p>

    </AnimatedCard>

    <AnimatedCard>

      <div className="text-5xl mb-5">📱</div>

      <h3 className="text-2xl font-bold mb-4">
        Mobile-Friendly Solutions
      </h3>

      <p className="text-gray-400 leading-7">
        Every website and application is
        optimized for phones, tablets
        and desktop devices.
      </p>

    </AnimatedCard>

    <AnimatedCard>

      <div className="text-5xl mb-5">🛠️</div>

      <h3 className="text-2xl font-bold mb-4">
        Custom AI Solutions
      </h3>

      <p className="text-gray-400 leading-7">
        Need something unique?
        We design AI systems tailored
        specifically to your business.
      </p>

    </AnimatedCard>

  </div>

</section>

{/* ================= WHY CLIENTS CHOOSE US ================= */}

<section
  className="max-w-7xl mx-auto px-6 lg:px-8 pb-32"
>

  <div className="rounded-[40px] border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent p-12">

    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-black">

        Why Businesses Choose RemuAI

      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      <div>

        <div className="text-5xl mb-4">
          🚀
        </div>

        <h3 className="font-bold text-xl mb-3">
          Fast Delivery
        </h3>

        <p className="text-gray-400">
          Efficient development without
          sacrificing quality.
        </p>

      </div>

      <div>

        <div className="text-5xl mb-4">
          🔒
        </div>

        <h3 className="font-bold text-xl mb-3">
          Secure
        </h3>

        <p className="text-gray-400">
          Built with modern security
          best practices.
        </p>

      </div>

      <div>

        <div className="text-5xl mb-4">
          📈
        </div>

        <h3 className="font-bold text-xl mb-3">
          Scalable
        </h3>

        <p className="text-gray-400">
          Solutions that grow
          alongside your business.
        </p>

      </div>

      <div>

        <div className="text-5xl mb-4">
          🤝
        </div>

        <h3 className="font-bold text-xl mb-3">
          Long-Term Support
        </h3>

        <p className="text-gray-400">
          We continue supporting
          your project after launch.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= PRICING ================= */}

<section
  id="pricing"
  className="max-w-7xl mx-auto px-6 lg:px-8 py-32"
>

  <motion.div
    {...fadeIn}
    className="text-center mb-20"
  >

    <span className="text-violet-400 uppercase tracking-[0.25em]">
      Pricing
    </span>

    <h2 className="text-4xl md:text-6xl font-black mt-5">
      Flexible Plans For Everyone
    </h2>

    <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
      Whether you're starting a personal project
      or building enterprise software,
      we have a plan that fits your needs.
    </p>

  </motion.div>

  <PricingToggle onToggle={setIsYearlyPricing} />

  <div className="grid lg:grid-cols-3 gap-8 mt-12">

    <PricingCard
      tier="starter"
      name="Starter"
      description="Perfect for learning and experimenting."
      isYearly={isYearlyPricing}
      monthlyPrice={0}
      yearlyPrice={0}
      buttonLabel="Start Free"
      features={[
        "AI Chat",
        "Basic Models",
        "Community Support",
        "Limited Usage"
      ]}
      delay={0}
    />

    <PricingCard
      tier="pro"
      name="Professional"
      description="Ideal for creators and businesses."
      isYearly={isYearlyPricing}
      monthlyPrice={20}
      yearlyPrice={200}
      buttonLabel="Upgrade"
      isPopular
      features={[
        "Everything in Starter",
        "Advanced AI",
        "ReuNexus",
        "Priority Support",
        "Automation"
      ]}
      delay={0.15}
    />

    <PricingCard
      tier="enterprise"
      name="Enterprise"
      description="Custom solutions for organizations."
      isYearly={isYearlyPricing}
      buttonLabel="Contact Us"
      features={[
        "Unlimited Usage",
        "Dedicated Support",
        "Custom Development",
        "Private Deployment",
        "Advanced Security"
      ]}
      delay={0.3}
    />

  </div>

</section>

{/* ================= CLIENT REVIEWS ================= */}

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-32">

    <motion.div
        {...fadeIn}
        className="text-center mb-20"
    >

        <span className="text-violet-400 uppercase tracking-[0.25em]">

            Client Experience

        </span>

        <h2 className="text-4xl md:text-6xl font-black mt-5">

            Built To Earn Trust

        </h2>

        <p className="mt-6 text-lg text-gray-400">

            Every successful partnership begins
            with understanding your business.

        </p>

    </motion.div>

    <TestimonialCarousel />

</section>

{/* ================= CONTACT ================= */}

<section
className="max-w-7xl mx-auto px-6 lg:px-8 py-32"
>

<div className="rounded-[40px] border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent p-14">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>

<span className="uppercase tracking-[0.25em] text-violet-400">

Let's Build Together

</span>

<h2 className="text-5xl font-black mt-5 leading-tight">

Need A Website,
Web App,
AI Chatbot
Or Custom Software?

</h2>

<p className="mt-8 text-gray-400 text-lg leading-8">

We help startups,
businesses and organizations
transform ideas into modern
digital products.

</p>

<div className="mt-10 space-y-4">

<div>

📞 +971 564673090

</div>

<div>

✉️ contact@remuai.com

</div>

<div>

🌍 reunexus.space

</div>

</div>

</div>

<div className="rounded-3xl bg-black/30 border border-white/10 p-10">

<h3 className="text-3xl font-bold">

Why Contact Us?

</h3>

<ul className="space-y-5 mt-8 text-gray-300">

<li>✔ Professional Websites</li>

<li>✔ AI Chatbots</li>

<li>✔ Business Automation</li>

<li>✔ Web Applications</li>

<li>✔ Custom AI Systems</li>

<li>✔ Ongoing Technical Support</li>

</ul>

<button
onClick={StartProject}
className="mt-10 w-full py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition font-semibold"
>

Start Your Project

</button>

</div>

</div>

</div>

</section>

{/* ================= FINAL CALL TO ACTION ================= */}

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-32">

  <div className="rounded-[48px] border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-violet-500/10 to-transparent p-16 text-center">

    <motion.h2
      {...fadeIn}
      className="text-4xl md:text-6xl font-black leading-tight"
    >
      Ready To Build Something Amazing?
    </motion.h2>

    <motion.p
      {...fadeIn}
      className="mt-8 max-w-3xl mx-auto text-xl text-gray-300 leading-8"
    >
      Whether you need a professional website,
      a custom web application, an AI chatbot,
      business automation or a complete AI solution,
      RemuAI is ready to help bring your vision to life.
    </motion.p>

    <div className="flex flex-wrap justify-center gap-5 mt-12">

      <button
        onClick={StartProject}
        className="px-10 py-5 rounded-2xl bg-violet-600 hover:bg-violet-500 transition font-semibold"
      >
        Start Your Project
      </button>

      <button
        onClick={LaunchReuNexus}
        className="px-10 py-5 rounded-2xl border border-white/10 hover:border-violet-500 transition"
      >
        Explore ReuNexus
      </button>

    </div>

  </div>

</section>

{/* ================= FAQ ================= */}

<section
  id="faq"
  className="max-w-5xl mx-auto px-6 lg:px-8 pb-32"
>

  <motion.div
    {...fadeIn}
    className="text-center mb-20"
  >

    <span className="uppercase tracking-[0.25em] text-violet-400">

      Frequently Asked Questions

    </span>

    <h2 className="text-4xl md:text-5xl font-black mt-5">

      Questions? We've Got Answers.

    </h2>

    <p className="mt-6 text-lg text-gray-400">

      Everything you need to know before
      working with RemuAI.

    </p>

  </motion.div>

  <FAQAccordion />

</section>

{/* ================= FOOTER ================= */}

<footer className="border-t border-white/10 bg-black">

  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

    <div className="grid lg:grid-cols-4 gap-12">

      {/* Brand */}

      <div>

        <h2 className="text-4xl font-black">

          Remu<span className="text-violet-500">AI</span>

        </h2>

        <p className="mt-6 text-gray-400 leading-8">

          Building intelligent software that helps
          businesses grow through AI, automation
          and modern web technologies.

        </p>

      </div>

      {/* Services */}

      <div>

        <h3 className="font-bold text-xl mb-6">

          Services

        </h3>

        <div className="space-y-3 text-gray-400">

          <p>Professional Websites</p>
          <p>Web Applications</p>
          <p>AI Chatbots</p>
          <p>Business Automation</p>
          <p>Custom AI Solutions</p>

        </div>

      </div>

      {/* Products */}

      <div>

        <h3 className="font-bold text-xl mb-6">

          Products

        </h3>

        <div className="space-y-3 text-gray-400">

          <button
            onClick={LaunchReuNexus}
            className="hover:text-white transition"
          >
            ReuNexus
          </button>

          <p>AI Workspace</p>
          <p>AI Agents</p>
          <p>Automation Platform</p>

        </div>

      </div>

      {/* Contact */}

      <div>

        <h3 className="font-bold text-xl mb-6">

          Contact

        </h3>

        <div className="space-y-4 text-gray-400">

          <p>📞 +971 564673090</p>

          <p>✉️ contact@remuai.com</p>

          <button
            onClick={LaunchReuNexus}
            className="hover:text-white transition"
          >
            🌐 reunexus.space
          </button>

          <p>
            Available Monday – Saturday
          </p>

        </div>

      </div>

    </div>

    <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

      <p className="text-gray-500 text-center">

        © {new Date().getFullYear()} RemuAI.
        All rights reserved.

      </p>

      <div className="flex gap-8 text-gray-400">

        <a href="#features" className="hover:text-white">
          Features
        </a>

        <a href="#services" className="hover:text-white">
          Services
        </a>

        <a href="#pricing" className="hover:text-white">
          Pricing
        </a>

        <a href="#faq" className="hover:text-white">
          FAQ
        </a>

      </div>

    </div>

  </div>

</footer>

</main>

);

}
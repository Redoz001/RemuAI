"use client";

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Globe,
  Layers3,
  Menu,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AnimatedButton from "./components/AnimatedButton";
import AnimatedCard from "./components/AnimatedCard";
import FAQAccordion from "./components/FAQAccordion";
import WhyChooseRemuAI from "./components/WhyChooseRemuAI";
import OurCommitment from "./components/OurCommitment";

const COMPANY = {
  name: "RemuAI",
  tagline: "AI • Software • Cloud • Automation",
  description:
    "RemuAI is an AI and technology company helping businesses build intelligent software, automation systems, cloud-ready platforms, and digital products designed for long-term growth.",
  phone: "+971 56 467 3090",
  email: "contact@remuai.com",
  reunexusUrl: "https://reunexus.space",
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "ReuNexus", href: "#reunexus" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Technology", href: "#technology" },
  { label: "FAQ", href: "#faq" },
];

const heroCapabilities = [
  {
    title: "AI Solutions",
    icon: BrainCircuit,
    status: "Available",
  },
  {
    title: "Software Engineering",
    icon: Code2,
    status: "Available",
  },
  {
    title: "Web Platforms",
    icon: Globe,
    status: "Available",
  },
  {
    title: "Automation",
    icon: Workflow,
    status: "Available",
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    status: "Available",
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    status: "Coming Soon",
  },
];

const trustSignals = [
  "AI-First Development",
  "Worldwide Remote Services",
  "Cloud-Ready Architecture",
  "Long-Term Technical Support",
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
  },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const StartProject = () => {
    window.location.href = `mailto:${COMPANY.email}?subject=Start a Project with RemuAI`;
  };

  const LaunchReuNexus = () => {
    window.open(COMPANY.reunexusUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >

        {/* ================= BACKGROUND SYSTEM ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      >
        {/* Background image */}
        <div
          className="
            absolute inset-0
            bg-[url('/remuai-hero-bg.jpg')]
            bg-cover
            bg-center
            opacity-35
          "
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Aurora glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[130px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_75%)]" />
      </div>

      {/* Noise overlay */}
      <div className="noise" />

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="#home" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10 shadow-lg shadow-violet-600/20">
              <Sparkles className="h-5 w-5 text-violet-300" />
            </div>

            <div>
              <div className="text-xl font-black tracking-tight">
                Remu<span className="text-violet-400">AI</span>
              </div>
              <div className="text-xs text-gray-500">
                {COMPANY.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={StartProject}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-violet-500/50 hover:bg-violet-500/10"
            >
              <Phone className="h-4 w-4" />
              Talk to Us
            </button>

            <button
              onClick={LaunchReuNexus}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Open ReuNexus
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="border-t border-white/10 bg-black/95 px-6 py-6 lg:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    StartProject();
                  }}
                  className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white"
                >
                  Talk to Us
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    LaunchReuNexus();
                  }}
                  className="rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white"
                >
                  Open ReuNexus
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    {/* ================= HERO ================= */}

<section
  id="home"
  className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-24 lg:px-8"
>
  <div className="grid items-center gap-20 lg:grid-cols-2">

    {/* ================= LEFT ================= */}

    <motion.div {...fadeIn}>

      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">

        <Sparkles className="h-4 w-4" />

        AI • Software • Cloud • Automation

      </div>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl xl:text-7xl">

        Building

        <span className="block text-white">

          Intelligent

        </span>

        <span className="block text-violet-400">

          Business Technology

        </span>

      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300 md:text-xl">

        RemuAI helps businesses transform ideas into intelligent
        software, AI-powered automation, cloud-ready platforms,
        and modern digital solutions designed to scale with
        confidence.

      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <AnimatedButton
          text="Build With RemuAI"
          size="lg"
          icon={<Rocket size={20} />}
          onClick={StartProject}
        />

        <AnimatedButton
          text="Open ReuNexus"
          size="lg"
          variant="outline"
          icon={<ArrowRight size={20} />}
          onClick={LaunchReuNexus}
        />

      </div>

      {/* Trust */}

      <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-gray-400">

        {trustSignals.map((item) => (

          <div
            key={item}
            className="flex items-center gap-2"
          >

            <CheckCircle2
              className="h-4 w-4 text-violet-400"
            />

            {item}

          </div>

        ))}

      </div>

    </motion.div>  

      {/* ================= RIGHT ================= */}

    <motion.div
      initial={{ opacity: 0, scale: 0.92, x: 40 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative hidden lg:block"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-[40px] bg-violet-600/20 blur-[120px]" />

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black/50 shadow-2xl shadow-violet-600/20 backdrop-blur-2xl">

        {/* Window Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Bot className="h-4 w-4 text-violet-300" />
            ReuNexus Workspace
          </div>
        </div>

        <div className="space-y-6 p-6">

          {/* Main AI Panel */}
          <div className="rounded-3xl border border-violet-500/30 bg-violet-500/10 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-violet-300">
                  AI Operating Layer
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Business Intelligence Active
                </h3>
              </div>

              <div className="rounded-2xl bg-violet-500/20 p-3 text-violet-200">
                <BrainCircuit className="h-7 w-7" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {["AI Agents", "Automation", "Analytics"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center text-sm text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-5 flex items-center justify-between">
              <h4 className="font-semibold">
                Live Project Workflow
              </h4>

              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Running
              </span>
            </div>

            <div className="space-y-4">
              {[
                "Client Request Received",
                "AI Analysis Completed",
                "Architecture Planned",
                "Automation Flow Generated",
                "Deployment Ready",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-xs text-violet-300">
                    {index + 1}
                  </div>

                  <div className="flex-1 rounded-xl bg-black/30 px-4 py-3 text-sm text-gray-300">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-2 gap-4">
            {heroCapabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/35 p-4"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-violet-300" />

                    <div>
                      <p className="text-sm font-semibold">
                        {item.title}
                      </p>

                      <p
                        className={`text-xs ${
                          item.status === "Coming Soon"
                            ? "text-cyan-300"
                            : "text-emerald-300"
                        }`}
                      >
                        {item.status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* ================= WHO IS REMUAI ================= */}

<section className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8">
  <div className="grid items-center gap-16 lg:grid-cols-2">
    
    {/* Left */}
    <motion.div {...fadeIn}>
      <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
        Who Is RemuAI?
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
        An AI and Technology Company Built for the Future
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        RemuAI helps businesses design, build, and deploy intelligent digital
        solutions that combine artificial intelligence, software engineering,
        automation, cloud technologies, and modern user experience.
      </p>

      <p className="mt-5 text-lg leading-8 text-gray-400">
        Our goal is not to simply build websites or apps. Our goal is to help
        companies use technology as a real advantage — improving operations,
        connecting systems, automating work, and creating better digital
        experiences for customers and teams.
      </p>
    </motion.div>

    {/* Right */}
    <div className="grid gap-6">
      {[
        {
          icon: <BrainCircuit className="h-7 w-7" />,
          title: "AI-First Vision",
          description:
            "We identify practical ways AI can improve customer experience, operations, productivity, and decision-making.",
        },
        {
          icon: <Code2 className="h-7 w-7" />,
          title: "Modern Engineering",
          description:
            "We build scalable websites, applications, dashboards, platforms, and internal systems using modern development practices.",
        },
        {
          icon: <Layers3 className="h-7 w-7" />,
          title: "Product Ecosystem",
          description:
            "RemuAI is building beyond services, with ReuNexus as our flagship AI platform and future products on the roadmap.",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-violet-500/40 hover:bg-white/[0.06]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <div className="relative flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300">
              {item.icon}
            </div>

            <div>
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* ================= REUNEXUS ================= */}

<section
  id="reunexus"
  className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8"
>
  <div className="overflow-hidden rounded-[42px] border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-white/[0.04] to-cyan-500/10 p-8 shadow-2xl shadow-violet-600/10 backdrop-blur-2xl md:p-12 lg:p-16">
    <div className="grid items-center gap-14 lg:grid-cols-2">

      {/* Left */}
      <motion.div {...fadeIn}>
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-300">
          <Rocket className="h-4 w-4" />
          Flagship Platform
        </span>

        <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
          Meet ReuNexus,
          <span className="block text-violet-300">
            the AI Workspace from RemuAI
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          ReuNexus is the flagship platform in the RemuAI ecosystem. It brings
          together AI tools, intelligent assistants, productivity features, and
          future automation capabilities into one unified workspace.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-400">
          While RemuAI helps businesses build custom technology, ReuNexus
          represents our product vision: a growing AI platform designed to help
          people work, create, automate, and manage knowledge more intelligently.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <AnimatedButton
            text="Open ReuNexus"
            size="lg"
            icon={<ArrowRight size={20} />}
            onClick={LaunchReuNexus}
          />

          <AnimatedButton
            text="Build With RemuAI"
            size="lg"
            variant="outline"
            icon={<Sparkles size={20} />}
            onClick={StartProject}
          />
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, x: 40 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-[34px] bg-cyan-500/10 blur-[100px]" />

        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-black/50 p-6 backdrop-blur-2xl">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-violet-300">
                ReuNexus
              </p>
              <h3 className="mt-1 text-2xl font-bold">
                Unified AI Workspace
              </h3>
            </div>

            <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
              Live
            </span>
          </div>

          <div className="grid gap-4">
            {[
              {
                label: "AI Assistants",
                value: "Available",
              },
              {
                label: "AI Productivity Tools",
                value: "Available",
              },
              {
                label: "Knowledge Workspace",
                value: "Available",
              },
              {
                label: "AI Agents",
                value: "Coming Soon",
              },
              {
                label: "Workflow Automation",
                value: "Coming Soon",
              },
              {
                label: "Developer API",
                value: "Coming Soon",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
              >
                <span className="font-medium text-gray-200">
                  {item.label}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.value === "Available"
                      ? "bg-emerald-500/10 text-emerald-300"
                      : "bg-cyan-500/10 text-cyan-300"
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

{/* ================= SOLUTIONS ================= */}

<section
  id="solutions"
  className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8"
>
  <motion.div
    {...fadeIn}
    className="mx-auto mb-20 max-w-4xl text-center"
  >
    <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
      Intelligent Technology Solutions
    </span>

    <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
      Technology That Solves
      <span className="block text-violet-400">
        Real Business Problems
      </span>
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
      Whether you're launching a startup, modernizing an enterprise,
      or accelerating digital transformation, RemuAI delivers
      intelligent technology designed for long-term business success.
    </p>
  </motion.div>

  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true }}
    className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
  >

    <ServiceCard
      icon={<BrainCircuit className="h-8 w-8" />}
      title="AI Solutions"
      description="Practical artificial intelligence that improves productivity, customer experience, and decision making."
      features={[
        "AI Chatbots",
        "AI Assistants",
        "AI Integrations",
        "Prompt Engineering",
        "Business Intelligence",
      ]}
      featured
    />

    <ServiceCard
      icon={<Code2 className="h-8 w-8" />}
      title="Software Engineering"
      description="Custom software designed specifically around your business processes."
      features={[
        "Business Systems",
        "Internal Dashboards",
        "CRM & ERP",
        "Custom Platforms",
        "Scalable Architecture",
      ]}
    />

    <ServiceCard
      icon={<Globe className="h-8 w-8" />}
      title="Web Platforms"
      description="Modern websites and web applications built for speed, usability, and growth."
      features={[
        "Business Websites",
        "Web Applications",
        "Customer Portals",
        "E-Commerce",
        "Responsive Design",
      ]}
    />

    <ServiceCard
      icon={<Workflow className="h-8 w-8" />}
      title="Business Automation"
      description="Reduce repetitive work by connecting systems and automating workflows."
      features={[
        "Workflow Automation",
        "Process Optimization",
        "Third-Party Integrations",
        "Notifications",
        "Reporting",
      ]}
    />

    <ServiceCard
      icon={<Cloud className="h-8 w-8" />}
      title="Cloud Solutions"
      description="Deploy secure, scalable applications with modern cloud infrastructure."
      features={[
        "Cloud Deployment",
        "Hosting",
        "Monitoring",
        "Backups",
        "Maintenance",
      ]}
    />

    <ServiceCard
      icon={<ShieldCheck className="h-8 w-8" />}
      title="Cybersecurity"
      description="Security services and enterprise protection currently under development."
      features={[
        "Security Assessments",
        "Infrastructure Protection",
        "Identity Management",
        "Compliance",
        "Threat Monitoring",
      ]}
      comingSoon
    />

  </motion.div>
</section>

{/* ================= REMUAI DIFFERENCE ================= */}

<section className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8">
  <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

    {/* Left */}
    <motion.div {...fadeIn}>
      <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
        The RemuAI Difference
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
        Built Like a Technology Partner,
        <span className="block text-violet-400">
          Not a One-Time Vendor
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        Many businesses struggle because their tools are disconnected, outdated,
        or built without a long-term technology strategy. RemuAI focuses on
        building connected, scalable, AI-ready systems that continue improving
        as your business grows.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <AnimatedButton
          text="Start a Conversation"
          icon={<Phone size={20} />}
          onClick={StartProject}
        />

        <AnimatedButton
          text="View Solutions"
          variant="outline"
          icon={<ArrowRight size={20} />}
          onClick={() => {
            document
              .getElementById("solutions")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </motion.div>

    {/* Right */}
    <div className="grid gap-6">
      {[
        {
          title: "AI Before Decoration",
          description:
            "We use AI where it creates operational value, not just as a marketing label.",
          icon: <BrainCircuit className="h-7 w-7" />,
        },
        {
          title: "Connected Systems",
          description:
            "We design technology that connects your website, data, workflows, tools, and customer experience.",
          icon: <Workflow className="h-7 w-7" />,
        },
        {
          title: "Scalable Architecture",
          description:
            "Every serious solution is planned with performance, maintainability, security, and future growth in mind.",
          icon: <Layers3 className="h-7 w-7" />,
        },
        {
          title: "Product Mindset",
          description:
            "Because RemuAI also builds ReuNexus, we approach client work with the discipline of a product company.",
          icon: <Rocket className="h-7 w-7" />,
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-violet-500/40 hover:bg-white/[0.06]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <div className="relative flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300">
              {item.icon}
            </div>

            <div>
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

{/* ================= INDUSTRIES ================= */}

<section
  id="industries"
  className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8"
>
  <motion.div
    {...fadeIn}
    className="mx-auto mb-20 max-w-4xl text-center"
  >
    <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
      Industries We Empower
    </span>

    <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
      Intelligent Solutions Across
      <span className="block text-violet-400">
        Modern Industries
      </span>
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
      RemuAI builds adaptable technology that can support different industries,
      workflows, and business models — from customer-facing platforms to
      internal automation systems.
    </p>
  </motion.div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {[
      {
        title: "Healthcare",
        description: "Patient portals, AI assistance, scheduling, and workflow systems.",
      },
      {
        title: "Education",
        description: "Learning platforms, student portals, AI tutors, and automation.",
      },
      {
        title: "Retail",
        description: "E-commerce, inventory systems, customer support, and analytics.",
      },
      {
        title: "Hospitality",
        description: "Booking systems, AI reception, guest support, and operations.",
      },
      {
        title: "Real Estate",
        description: "Property platforms, CRM systems, lead automation, and portals.",
      },
      {
        title: "Finance",
        description: "Dashboards, automation, customer tools, and secure workflows.",
      },
      {
        title: "Logistics",
        description: "Tracking systems, operations dashboards, routing, and reporting.",
      },
      {
        title: "Startups",
        description: "MVPs, SaaS platforms, AI products, and scalable digital systems.",
      },
    ].map((industry, index) => (
      <motion.article
        key={industry.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.55,
          delay: index * 0.06,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          y: -6,
          scale: 1.015,
        }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-violet-500/40 hover:bg-white/[0.06]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="relative">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-violet-500/10 text-violet-300">
            <Building2 className="h-6 w-6" />
          </div>

          <h3 className="text-xl font-bold">
            {industry.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            {industry.description}
          </p>
        </div>
      </motion.article>
    ))}
  </div>
</section>

{/* ================= TECHNOLOGY ================= */}

<section
  id="technology"
  className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8"
>
  <motion.div
    {...fadeIn}
    className="mx-auto mb-20 max-w-4xl text-center"
  >
    <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
      Technology Stack
    </span>

    <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
      Modern Technologies
      <span className="block text-violet-400">
        Built For Performance
      </span>
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
      Every technology we use is selected to build secure,
      scalable, maintainable software that supports long-term
      business growth.
    </p>
  </motion.div>

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        title: "Artificial Intelligence",
        icon: <BrainCircuit className="h-8 w-8" />,
        technologies: "OpenAI • LLMs • AI Agents",
        description:
          "Intelligent assistants, business automation, document processing, and AI-powered customer experiences.",
      },
      {
        title: "Frontend Engineering",
        icon: <Globe className="h-8 w-8" />,
        technologies: "React • Next.js • TypeScript",
        description:
          "Fast, responsive websites and web applications designed for modern businesses.",
      },
      {
        title: "Backend Development",
        icon: <Code2 className="h-8 w-8" />,
        technologies: "Node.js • APIs • Databases",
        description:
          "Reliable business logic, scalable APIs, integrations, and secure data management.",
      },
      {
        title: "Cloud Infrastructure",
        icon: <Cloud className="h-8 w-8" />,
        technologies: "Cloud Hosting • CDN • Deployment",
        description:
          "High availability, scalability, backups, monitoring, and secure deployment strategies.",
      },
      {
        title: "Automation",
        icon: <Workflow className="h-8 w-8" />,
        technologies: "Business Workflows • Integrations",
        description:
          "Automate repetitive tasks, synchronize systems, and improve operational efficiency.",
      },
      {
        title: "Security",
        icon: <ShieldCheck className="h-8 w-8" />,
        technologies: "Authentication • Encryption",
        description:
          "Security-first architecture designed to protect data, users, and business operations.",
      },
    ].map((tech, index) => (

      <motion.div
        key={tech.title}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        <AnimatedCard className="h-full p-8">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">

            {tech.icon}

          </div>

          <h3 className="mt-6 text-2xl font-bold">

            {tech.title}

          </h3>

          <p className="mt-3 text-sm font-medium text-violet-300">

            {tech.technologies}

          </p>

          <p className="mt-6 leading-7 text-gray-400">

            {tech.description}

          </p>

        </AnimatedCard>

      </motion.div>

    ))}

  </div>

</section>

{/* ================= REMUAI ECOSYSTEM ================= */}

<section className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
  <div className="overflow-hidden rounded-[42px] border border-white/10 bg-black/50 p-8 backdrop-blur-2xl md:p-12 lg:p-16">
    <motion.div
      {...fadeIn}
      className="mx-auto mb-16 max-w-4xl text-center"
    >
      <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
        The RemuAI Ecosystem
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
        One Company.
        <span className="block text-violet-400">
          Multiple Layers of Innovation.
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        RemuAI is being built as a technology ecosystem — combining services,
        products, platforms, and future AI infrastructure into one connected
        vision for business transformation.
      </p>
    </motion.div>

    <div className="grid gap-6 lg:grid-cols-4">
      {[
        {
          step: "01",
          title: "Services",
          description:
            "AI solutions, software engineering, automation, cloud deployment, and digital transformation for businesses.",
        },
        {
          step: "02",
          title: "Products",
          description:
            "ReuNexus leads the RemuAI product ecosystem as our flagship AI workspace.",
        },
        {
          step: "03",
          title: "Platforms",
          description:
            "Future tools for AI agents, automation, developer APIs, and enterprise workflows.",
        },
        {
          step: "04",
          title: "Infrastructure",
          description:
            "Long-term vision for AI infrastructure, business operating systems, and scalable enterprise technology.",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-violet-500/40 hover:bg-white/[0.06]"
        >
          <div className="mb-8 text-sm font-bold tracking-[0.3em] text-violet-400">
            {item.step}
          </div>

          <h3 className="text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* ================= ENGINEERING PROCESS ================= */}

<section
  id="process"
  className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8"
>
  <motion.div
    {...fadeIn}
    className="mx-auto mb-20 max-w-4xl text-center"
  >
    <span className="text-sm uppercase tracking-[0.3em] text-violet-400">
      Engineering Process
    </span>

    <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
      From Vision to
      <span className="block text-violet-400">
        Intelligent Technology
      </span>
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
      Our process is built to reduce uncertainty, improve execution, and turn
      business ideas into reliable technology products.
    </p>
  </motion.div>

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
    {[
      {
        step: "01",
        title: "Strategy",
        description:
          "We understand your business goals, challenges, users, workflows, and opportunities for AI or automation.",
      },
      {
        step: "02",
        title: "Architecture",
        description:
          "We plan the system structure, user experience, integrations, database, cloud deployment, and future scalability.",
      },
      {
        step: "03",
        title: "Design",
        description:
          "We design interfaces that are clean, modern, accessible, and aligned with your brand and business objectives.",
      },
      {
        step: "04",
        title: "Development",
        description:
          "We build the solution using modern engineering practices, reliable code, AI integrations, APIs, and automation.",
      },
      {
        step: "05",
        title: "Testing & Launch",
        description:
          "We test responsiveness, performance, usability, reliability, and core workflows before deployment.",
      },
      {
        step: "06",
        title: "Support & Growth",
        description:
          "After launch, we help maintain, improve, and expand your technology as your business grows.",
      },
    ].map((item, index) => (
      <motion.article
        key={item.step}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.55,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-violet-500/40 hover:bg-white/[0.06]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-violet-500/20"
        />

        <div className="relative">
          <div className="mb-8 text-sm font-bold tracking-[0.3em] text-violet-400">
            {item.step}
          </div>

          <h3 className="text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            {item.description}
          </p>
        </div>
      </motion.article>
    ))}
  </div>
</section>

{/* ================= WHY CHOOSE REMUAI ================= */}

<section className="relative z-10">
  <WhyChooseRemuAI />
</section>

{/* ================= OUR COMMITMENT ================= */}

<section className="relative z-10">
  <OurCommitment />
</section>

{/* ================= FAQ ================= */}

<section
  id="faq"
  className="relative z-10 mx-auto max-w-5xl px-6 py-32 lg:px-8"
>

  <motion.div
    {...fadeIn}
    className="mb-20 text-center"
  >

    <span className="text-sm uppercase tracking-[0.3em] text-violet-400">

      Frequently Asked Questions

    </span>

    <h2 className="mt-6 text-4xl font-black md:text-6xl">

      Questions Before
      <span className="block text-violet-400">

        Your Project Begins

      </span>

    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

      We've answered some of the most common questions about
      RemuAI, our services, ReuNexus, and how we work with
      businesses.

    </p>

  </motion.div>

  <FAQAccordion />

</section>

{/* ================= FOOTER ================= */}

<footer className="relative z-10 border-t border-white/10 bg-black/70 px-6 py-20 backdrop-blur-2xl lg:px-8">
  <div className="mx-auto max-w-7xl">

    {/* Footer Statement */}
    <div className="mb-16 max-w-4xl">
      <h2 className="text-4xl font-black leading-tight md:text-6xl">
        Building the Future of
        <span className="block text-violet-400">
          Business Technology.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        RemuAI combines artificial intelligence, software engineering,
        automation, cloud technologies, and product thinking to help businesses
        create technology that is useful today and scalable for tomorrow.
      </p>
    </div>

    {/* Footer Grid */}
    <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10">
            <Sparkles className="h-5 w-5 text-violet-300" />
          </div>

          <div>
            <h3 className="text-xl font-black">
              Remu<span className="text-violet-400">AI</span>
            </h3>

            <p className="text-xs text-gray-500">
              {COMPANY.tagline}
            </p>
          </div>
        </div>

        <p className="mt-6 leading-7 text-gray-400">
          An AI and technology company building intelligent software,
          automation systems, cloud-ready platforms, and digital products
          for modern businesses.
        </p>
      </div>

      {/* Company */}
      <div>
        <h4 className="mb-6 font-bold text-white">
          Company
        </h4>

        <div className="space-y-3 text-gray-400">
          <Link href="#home" className="block transition hover:text-white">
            Home
          </Link>

          <Link href="#solutions" className="block transition hover:text-white">
            Solutions
          </Link>

          <Link href="#industries" className="block transition hover:text-white">
            Industries
          </Link>

          <Link href="#technology" className="block transition hover:text-white">
            Technology
          </Link>

          <Link href="#faq" className="block transition hover:text-white">
            FAQ
          </Link>
        </div>
      </div>

      {/* Solutions */}
      <div>
        <h4 className="mb-6 font-bold text-white">
          Solutions
        </h4>

        <div className="space-y-3 text-gray-400">
          <p>AI Solutions</p>
          <p>Software Engineering</p>
          <p>Web Platforms</p>
          <p>Business Automation</p>
          <p>Cloud Solutions</p>
          <p>
            Cybersecurity
            <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-300">
              Soon
            </span>
          </p>
        </div>
      </div>

      {/* Product + Contact */}
      <div>
        <h4 className="mb-6 font-bold text-white">
          Product & Contact
        </h4>

        <div className="space-y-4 text-gray-400">
          <button
            onClick={LaunchReuNexus}
            className="block text-left transition hover:text-white"
          >
            ReuNexus Workspace
          </button>

          <a
            href={`mailto:${COMPANY.email}`}
            className="block transition hover:text-white"
          >
            {COMPANY.email}
          </a>

          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="block transition hover:text-white"
          >
            {COMPANY.phone}
          </a>

          <p>Worldwide Remote Services</p>
          <p>Based in the UAE</p>
        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} RemuAI. All rights reserved.
      </p>

      <div className="flex flex-wrap gap-6">
        <Link href="#home" className="transition hover:text-white">
          Back to Top
        </Link>

        <button
          onClick={StartProject}
          className="transition hover:text-white"
        >
          Start a Project
        </button>

        <button
          onClick={LaunchReuNexus}
          className="transition hover:text-white"
        >
          Open ReuNexus
        </button>
      </div>
    </div>

  </div>
</footer>

    </main>
  );
}
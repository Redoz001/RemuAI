"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Shield,
  Lock,
  Globe,
  Headphones,
  Code2,
  Database,
  GitBranch,
  MessageSquare,
  CreditCard,
  Cloud,
  Mail,
  Key,
  Zap,
  Settings,
} from "lucide-react";

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = end / 60;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-violet-400">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-gray-400 mt-3 text-lg">{label}</p>
    </motion.div>
  );
};

const TrustBadge: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-violet-500/50 transition-all relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-2xl text-violet-400">{icon}</div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const IntegrationLogo: React.FC<{
  name: string;
  icon: React.ReactNode;
  color: string;
}> = ({ name, icon, color }) => {
  return (
    <motion.a
      href={`#${name.toLowerCase()}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, rotateZ: 5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center gap-3 hover:border-violet-500/50 transition-all cursor-pointer"
    >
      <div className={`text-4xl ${color}`}>{icon}</div>
      <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.a>
  );
};

export default function SocialProof() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      {/* Section 1: Community Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="text-center mb-16">
          <span className="text-violet-400 uppercase tracking-widest text-sm">
            Community Stats
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Join the growing community of developers and enterprises building
            with RemuAI
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 md:p-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            <AnimatedCounter end={1000} label="Developers" suffix="+" />
            <AnimatedCounter end={50} label="Enterprise Clients" suffix="+" />
            <AnimatedCounter end={120} label="Countries" suffix="+" />
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-violet-400">
                  99.99%
                </div>
                <p className="text-gray-400 mt-3 text-lg">Uptime</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2: Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32"
      >
        <div className="text-center mb-16">
          <span className="text-violet-400 uppercase tracking-widest text-sm">
            Trust & Security
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Enterprise-Grade Trust Signals
          </h2>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Built with security, compliance, and reliability at the core
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <TrustBadge
            icon={<Shield className="w-6 h-6" />}
            title="SOC 2 Type II"
            description="Certified for security and availability"
          />
          <TrustBadge
            icon={<Lock className="w-6 h-6" />}
            title="GDPR Compliant"
            description="Full compliance with data protection"
          />
          <TrustBadge
            icon={<Globe className="w-6 h-6" />}
            title="Enterprise Security"
            description="Advanced encryption and protocols"
          />
          <TrustBadge
            icon={<Headphones className="w-6 h-6" />}
            title="24/7 Support"
            description="Always available for your needs"
          />
        </motion.div>
      </motion.div>

      {/* Section 3: Integration Logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <span className="text-violet-400 uppercase tracking-widest text-sm">
            Integrations
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Works With Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Seamlessly integrate with the platforms you already use
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          <IntegrationLogo
            name="GitHub"
            icon={<GitBranch />}
            color="text-gray-300"
          />
          <IntegrationLogo
            name="Slack"
            icon={<MessageSquare />}
            color="text-blue-400"
          />
          <IntegrationLogo
            name="Stripe"
            icon={<CreditCard />}
            color="text-purple-400"
          />
          <IntegrationLogo
            name="AWS"
            icon={<Cloud />}
            color="text-orange-400"
          />
          <IntegrationLogo
            name="Google"
            icon={<Mail />}
            color="text-red-400"
          />
          <IntegrationLogo
            name="Azure"
            icon={<Cloud />}
            color="text-blue-500"
          />
          <IntegrationLogo
            name="Notion"
            icon={<Database />}
            color="text-gray-300"
          />
          <IntegrationLogo
            name="Zapier"
            icon={<Zap />}
            color="text-orange-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

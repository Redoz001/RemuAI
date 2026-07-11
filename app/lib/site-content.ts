import type { LucideIcon } from "lucide-react";

import {
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Compass,
  FileCheck2,
  Gauge,
  Globe2,
  Handshake,
  Layers3,
  Route,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const COMPANY = {
  name: "RemuAI",
  tagline: "Technology, with judgment",

  description:
    "RemuAI designs and engineers software, automation, cloud platforms, and practical AI systems around how organisations actually work.",

  phone: "+971 56 467 3090",
  email: "contact@remuai.space",
  website: "https://remuai.space",
  reunexusUrl: "https://reunexus.space",
} as const;

export const navLinks = [
  {
    label: "Pressure points",
    href: "#pressure-points",
  },
  {
    label: "Capabilities",
    href: "#capabilities",
  },
  {
    label: "ReuNexus",
    href: "#reunexus",
  },
  {
    label: "How we work",
    href: "#how-we-work",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
] as const;

export const operatingPrinciples = [
  "Start with the operating reality",
  "Use the simplest complete solution",
  "Make decisions visible",
  "Design for life after launch",
] as const;

type IconContent = {
  icon: LucideIcon;
};

export const capabilities = [
  {
    number: "01",
    icon: Code2,

    title:
      "Products people can use without explanation",

    description:
      "Websites, applications, portals, dashboards, and internal systems designed around real journeys rather than feature lists.",

    services: [
      "Product strategy and architecture",
      "Web and application engineering",
      "Customer and staff portals",
      "Backend systems and APIs",
    ],
  },
  {
    number: "02",
    icon: Workflow,

    title:
      "Operations that move without constant chasing",

    description:
      "Connected workflows that reduce repeated entry, unclear handoffs, missed follow-ups, and fragmented reporting.",

    services: [
      "Workflow and process design",
      "Approvals, alerts, and reporting",
      "System integrations",
      "Operational dashboards",
    ],
  },
  {
    number: "03",
    icon: BrainCircuit,

    title:
      "AI with a defined job and clear boundaries",

    description:
      "Knowledge, support, research, and document systems where AI improves a specific task and remains reviewable by people.",

    services: [
      "AI and knowledge assistants",
      "Retrieval and document workflows",
      "Customer support assistance",
      "Human review and governance",
    ],
  },
  {
    number: "04",
    icon: Cloud,

    title:
      "Platforms prepared for change, not just launch",

    description:
      "Cloud architecture, modernisation, monitoring, and support that keep important systems reliable and easier to evolve.",

    services: [
      "Cloud deployment and migration",
      "Application modernisation",
      "Monitoring, backup, and recovery",
      "Performance and reliability",
    ],
  },
] satisfies ReadonlyArray<
  IconContent & {
    number: string;
    title: string;
    description: string;
    services: ReadonlyArray<string>;
  }
>;

export const engagements = [
  {
    icon: Compass,
    label: "Clarify",
    title: "Direction before delivery",

    text:
      "Define the problem, scope, risks, architecture, priorities, and release path before expensive work begins.",

    output:
      "Decision-ready roadmap",
  },
  {
    icon: Layers3,
    label: "Create",
    title: "End-to-end product delivery",

    text:
      "Design, engineer, validate, and launch a complete product or business system around one clear objective.",

    output:
      "Working release",
  },
  {
    icon: Route,
    label: "Improve",
    title: "Modernisation without chaos",

    text:
      "Move from fragile or disconnected technology to a stronger system through controlled, practical stages.",

    output:
      "Safer transition path",
  },
  {
    icon: Handshake,
    label: "Continue",
    title: "Engineering beyond launch",

    text:
      "Support, maintain, integrate, and improve the system as the organisation, users, and operating conditions change.",

    output:
      "Long-term continuity",
  },
] satisfies ReadonlyArray<
  IconContent & {
    label: string;
    title: string;
    text: string;
    output: string;
  }
>;

export const standards = [
  {
    icon: FileCheck2,
    title: "Visible decisions",

    text:
      "Scope, assumptions, risks, responsibilities, and important choices are documented clearly enough to revisit later.",
  },
  {
    icon: ShieldCheck,
    title: "Security in context",

    text:
      "Access, validation, data handling, dependencies, and deployment controls are considered according to the actual risk.",
  },
  {
    icon: Gauge,
    title: "Quality that survives launch",

    text:
      "Performance, accessibility, maintainability, testing, monitoring, and handover are treated as part of delivery.",
  },
  {
    icon: Handshake,
    title: "Shared ownership",

    text:
      "The work remains understandable to the people who operate, support, fund, and improve it after release.",
  },
] satisfies ReadonlyArray<
  IconContent & {
    title: string;
    text: string;
  }
>;

export const processSteps = [
  {
    step: "01",
    title: "See the system",

    description:
      "Understand the users, workflow, constraints, dependencies, current tools, and real operating pressure.",
  },
  {
    step: "02",
    title: "Choose the move",

    description:
      "Decide what to change now, what to leave alone, and what evidence will show the work is useful.",
  },
  {
    step: "03",
    title: "Shape the experience",

    description:
      "Design journeys, interfaces, data movement, responsibilities, and edge cases before implementation hardens them.",
  },
  {
    step: "04",
    title: "Build in complete slices",

    description:
      "Deliver working increments that can be reviewed, tested, understood, and improved without waiting for a distant final reveal.",
  },
  {
    step: "05",
    title: "Operate and learn",

    description:
      "Launch carefully, support adoption, watch the system in use, and improve it from real operational feedback.",
  },
] as const;

export const productCapabilities = [
  {
    label: "Assistant workspace",
    status: "Available",
  },
  {
    label: "Productivity tools",
    status: "Available",
  },
  {
    label: "Knowledge workspace",
    status: "Available",
  },
  {
    label: "Agents and workflow automation",
    status: "Roadmap",
  },
] as const;

export const brandPrinciples = [
  {
    label: "Our starting point",
    value: "The operating reality",
    text: "Not a technology shopping list.",
  },
  {
    label: "Our design rule",
    value: "Simple enough to run",
    text: "Complete enough to matter.",
  },
  {
    label: "Our AI position",
    value: "A tool with a job",
    text: "Never decoration or theatre.",
  },
] as const;

export const technologyGroups = [
  {
    icon: Globe2,
    label: "Experience",
    stack: "Next.js • React • TypeScript",
  },
  {
    icon: Braces,
    label: "Systems",
    stack: "Node.js • APIs • Databases",
  },
  {
    icon: BrainCircuit,
    label: "Intelligence",
    stack: "LLMs • Retrieval • Assistants",
  },
  {
    icon: Cloud,
    label: "Operations",
    stack: "Cloud • Monitoring • Automation",
  },
] satisfies ReadonlyArray<
  IconContent & {
    label: string;
    stack: string;
  }
>;

export const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${COMPANY.website}/#organization`,

      name: COMPANY.name,
      url: COMPANY.website,
      email: COMPANY.email,
      telephone: COMPANY.phone,
      slogan: COMPANY.tagline,
      description: COMPANY.description,

      areaServed: "Worldwide",

      address: {
        "@type": "PostalAddress",
        addressCountry: "AE",
      },

      contactPoint: {
        "@type": "ContactPoint",
        contactType: "project enquiries",
        email: COMPANY.email,
        telephone: COMPANY.phone,
        areaServed: "Worldwide",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${COMPANY.website}/#website`,

      url: COMPANY.website,
      name: COMPANY.name,
      description: COMPANY.description,

      publisher: {
        "@id": `${COMPANY.website}/#organization`,
      },

      inLanguage: "en",
    },
  ],
} as const;
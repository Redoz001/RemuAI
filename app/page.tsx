import BrandPrinciplesBand from "./components/sections/BrandPrinciplesBand";
import CapabilitiesSection from "./components/sections/CapabilitiesSection";
import FaqSection from "./components/sections/FaqSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import HeroSection from "./components/sections/HeroSection";
import HowWeWorkSection from "./components/sections/HowWeWorkSection";
import PressurePointsSection from "./components/sections/PressurePointsSection";
import ReuNexusSection from "./components/sections/ReuNexusSection";
import TechnologySection from "./components/sections/TechnologySection";

import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

import {
  ProjectInquiryProvider,
} from "./components/ProjectInquirySystem";

import { structuredData } from "./lib/site-content";

export default function Home() {
  return (
    <ProjectInquiryProvider>
      <main className="min-h-screen overflow-hidden bg-[#070707] text-stone-100 selection:bg-violet-300 selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-white px-4 py-2 font-semibold text-black transition focus:translate-y-0"
        >
          Skip to main content
        </a>

        <SiteHeader />

        <div id="main-content">
          <HeroSection />
          <BrandPrinciplesBand />
          <PressurePointsSection />
          <CapabilitiesSection />
          <ReuNexusSection />
          <HowWeWorkSection />
          <TechnologySection />
          <FaqSection />
          <FinalCtaSection />
        </div>

        <SiteFooter />
      </main>
    </ProjectInquiryProvider>
  );
}
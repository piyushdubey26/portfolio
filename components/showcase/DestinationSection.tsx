"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { ProjectsSection } from "./ProjectsSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ContactSection } from "./ContactSection";

interface DestinationSectionProps {
  onReturnToHero?: () => void;
}

export const DestinationSection: React.FC<DestinationSectionProps> = ({ onReturnToHero }) => {
  const handleReturn = () => {
    if (onReturnToHero) {
      onReturnToHero();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-30 w-full text-slate-200 px-6 pt-24 md:pt-32 pb-16 md:pb-24 max-w-6xl mx-auto flex flex-col justify-between">
      {/* Top Header Workspace Status */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-12">
        <div className="flex items-center gap-3">
          <button
            onClick={handleReturn}
            className="group flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.06] text-xs font-mono text-white/70 hover:text-white transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white/50"
            aria-label="Return to 3D Hero"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO TOP</span>
            <kbd className="hidden md:inline-block text-[9px] text-white/40 ml-1 px-1 border border-white/10 rounded">
              TOP
            </kbd>
          </button>
          <span className="text-white/20 text-xs font-mono">/</span>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/90 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>CORE_WORKSPACE // ACTIVE</span>
          </div>
        </div>

        <div className="text-[11px] font-mono text-white/40 tracking-widest uppercase">
          PIYUSH DUBEY // PORTFOLIO V2
        </div>
      </div>

      {/* Main Workspace Flow */}
      <div className="space-y-24">
        {/* 1. PROJECTS SECTION (#projects) */}
        <ProjectsSection />

        {/* 2. ABOUT SECTION (#about) */}
        <AboutSection />

        {/* 3. SKILLS SECTION (#skills) */}
        <SkillsSection />

        {/* 4. CONTACT SECTION (#contact) */}
        <ContactSection onReturnToHero={handleReturn} />
      </div>
    </div>
  );
};

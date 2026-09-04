"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Cpu, Database, Layers } from "lucide-react";
import { ProjectsSection } from "./ProjectsSection";
import { AboutSection } from "./AboutSection";

interface DestinationSectionProps {
  onReturnToHero?: () => void;
}

export const DestinationSection: React.FC<DestinationSectionProps> = ({ onReturnToHero }) => {
  const coreCompetencies = [
    {
      icon: Cpu,
      title: "AI & Intelligent Systems",
      desc: "Architecting modern AI-assisted pipelines, NLP algorithms, LLM interfaces, and predictive scoring systems with high throughput.",
      tech: ["Python", "FastAPI", "NLP", "Scikit-Learn", "Gemini AI"],
    },
    {
      icon: Layers,
      title: "Full Stack Architecture",
      desc: "Building production-grade web platforms with seamless end-to-end user experiences, centralized state, and type-safe APIs.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    {
      icon: Database,
      title: "Distributed Backend & DBs",
      desc: "Designing resilient relational and NoSQL database schemas, dual-mode fallback caching, indexing strategies, and microservices.",
      tech: ["MongoDB", "PostgreSQL", "Express", "Docker", "REST APIs"],
    },
  ];

  const handleReturn = () => {
    if (onReturnToHero) {
      onReturnToHero();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-30 w-full text-slate-200 px-6 py-16 md:py-24 max-w-6xl mx-auto flex flex-col justify-between">
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
        <section id="skills" className="space-y-6 scroll-mt-28 border-t border-white/[0.08] pt-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENGINEERING CAPABILITIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreCompetencies.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300 space-y-4"
              >
                <div className="w-9 h-9 rounded-md border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/80 group-hover:text-cyan-400 transition-colors">
                  <item.icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 4. CONTACT / FOOTER SECTION (#contact) */}
      <footer id="contact" className="border-t border-white/10 mt-24 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4 scroll-mt-28">
        <div>PIYUSH DUBEY © {new Date().getFullYear()} // ALL RIGHTS RESERVED</div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/piyushdubey26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/piyushdubey26"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <button
            onClick={handleReturn}
            className="hover:text-cyan-400 transition-colors"
          >
            [ BACK TO TOP ↑ ]
          </button>
        </div>
      </footer>
    </div>
  );
};

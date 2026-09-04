"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Cpu, Database, Layers, ExternalLink } from "lucide-react";

interface DestinationSectionProps {
  onReturnToHero: () => void;
}

export const DestinationSection: React.FC<DestinationSectionProps> = ({ onReturnToHero }) => {
  const coreCompetencies = [
    {
      icon: Cpu,
      title: "AI & Intelligent Systems",
      desc: "Architecting modern AI-assisted pipelines, LLM interfaces, and predictive data systems with high throughput.",
      tech: ["Python", "TensorFlow", "FastAPI", "OpenAI APIs"],
    },
    {
      icon: Layers,
      title: "Full Stack Architecture",
      desc: "Building production-grade web platforms with seamless end-to-end user experiences and type-safe systems.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    {
      icon: Database,
      title: "Distributed Backend & DBs",
      desc: "Designing resilient relational and NoSQL database schemas, indexing strategies, and microservices.",
      tech: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Express"],
    },
  ];

  const featuredProjects = [
    {
      title: "Enterprise IPL Analytics Platform",
      tag: "Data Engineering & Analytics",
      description:
        "High-performance sports analytics platform processing multi-season tournament telemetry, player KPIs, and predictive match metrics.",
      link: "https://github.com/piyushdubey26",
    },
    {
      title: "ShopSphere Ecommerce Engine",
      tag: "Full Stack MERN Platform",
      description:
        "End-to-end commerce system featuring real-time inventory management, secure payments, order lifecycles, and admin telemetry.",
      link: "https://github.com/piyushdubey26",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-30 min-h-screen w-full bg-[#040406]/95 backdrop-blur-xl text-slate-200 px-6 py-16 md:py-24 max-w-6xl mx-auto flex flex-col justify-between"
    >
      {/* Top Header Control */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onReturnToHero}
            className="group flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.06] text-xs font-mono text-white/70 hover:text-white transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white/50"
            aria-label="Return to 3D Orbit"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO ORBIT</span>
            <kbd className="hidden md:inline-block text-[9px] text-white/40 ml-1 px-1 border border-white/10 rounded">
              ESC
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

      {/* Main Workspace Body */}
      <div className="my-12 space-y-16">
        {/* Intro Manifesto / About */}
        <div id="about" className="space-y-4 max-w-3xl scroll-mt-24">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-400">
            SYSTEM MISSION & OVERVIEW
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Engineering robust software architectures, AI-integrated backends, and elegant digital products.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            B.Tech Computer Science engineer with a focus on full-stack systems, data engineering, and modern web platforms. Focused on precision, scalability, and clean code craftsmanship.
          </p>
        </div>

        {/* Pillars / Competencies / Skills */}
        <div id="skills" className="space-y-6 scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
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
        </div>

        {/* Featured Projects */}
        <div id="projects" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>FEATURED SYSTEMS</span>
            </div>
            <a
              href="https://github.com/piyushdubey26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-cyan-400/90 hover:text-cyan-300 flex items-center gap-1 transition-colors"
            >
              <span>VIEW ALL REPOSITORIES</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-lg border border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-wider text-cyan-400/80 uppercase">
                    {project.tag}
                  </span>
                  <h4 className="text-lg font-medium text-white group-hover:text-cyan-200 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/60" />
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-white/40 group-hover:text-white/70 pt-2 flex items-center gap-1 transition-colors">
                  <span>EXPLORE SOURCE CODE</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Telemetry / Contact */}
      <div id="contact" className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4 scroll-mt-10">
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
            onClick={onReturnToHero}
            className="hover:text-cyan-400 transition-colors"
          >
            [ RE-ENTER 3D HERO ]
          </button>
        </div>
      </div>
    </motion.div>
  );
};

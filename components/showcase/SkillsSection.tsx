"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Layers,
  Code2,
  Database,
  Wrench,
  Terminal,
  Sparkles,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { SKILL_CATEGORIES, SkillCategory } from "@/lib/skills";

// Helper icon getter
const getCategoryIcon = (id: string) => {
  switch (id) {
    case "languages":
      return Code2;
    case "ai-ml":
      return Cpu;
    case "full-stack":
      return Layers;
    case "data-database":
      return Database;
    case "tools-engineering":
      return Wrench;
    default:
      return Terminal;
  }
};

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const featuredCategories = SKILL_CATEGORIES.filter((cat) => cat.featured);
  const standardCategories = SKILL_CATEGORIES.filter((cat) => !cat.featured);

  return (
    <section id="skills" className="space-y-12 scroll-mt-32 border-t border-white/[0.08] pt-16">
      {/* ─────────────────────────────────────────────────────────────
          SECTION HEADER & TELEMETRY
          ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          {/* Small Cyan System Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <span>TECHNICAL STACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            SKILLS
          </h2>

          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Technologies and engineering tools I use to build intelligent, scalable, and production-ready systems.
          </p>
        </div>

        {/* Technical HUD Metadata Pills */}
        <div className="flex flex-wrap items-center gap-2.5 text-[10px] font-mono text-slate-400">
          <div className="px-2.5 py-1 rounded border border-cyan-500/25 bg-cyan-950/20 text-cyan-300 flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-cyan-400" />
            <span>STACK // 05 MODULES</span>
          </div>
          <div className="px-2.5 py-1 rounded border border-white/10 bg-white/[0.02] text-slate-300 hidden sm:flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
            <span>SYSTEMS_READY</span>
          </div>
          <div className="px-2.5 py-1 rounded border border-white/10 bg-white/[0.02] text-slate-300 hidden md:flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-white/40" />
            <span>ENGINEERING_MODE // ACTIVE</span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FEATURED PRIMARY MODULES (02 — AI/ML & 03 — FULL STACK)
          ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuredCategories.map((cat, idx) => {
          const Icon = getCategoryIcon(cat.id);
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-xl border border-white/15 bg-gradient-to-b from-[#090c14]/90 to-[#05060a]/90 backdrop-blur-md p-6 sm:p-8 space-y-6 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(56,189,248,0.1)]"
            >
              {/* Corner Sci-Fi Telemetry Accents */}
              <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 group-hover:border-cyan-400 transition-colors" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 group-hover:border-cyan-400 transition-colors" />

              {/* Module Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg border border-cyan-500/30 bg-cyan-950/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.15)] group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-white/40">{cat.number}</span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                        {cat.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 font-light pt-0.5">{cat.tagline}</p>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded text-[9px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 tracking-wider">
                  {cat.badge}
                </span>
              </div>

              {/* Skill Chips Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill;
                  return (
                    <span
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`group/chip relative px-3 py-1.5 rounded-md text-xs font-mono tracking-wide transition-all duration-200 flex items-center gap-2 cursor-default ${
                        isHovered
                          ? "bg-cyan-950/50 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(56,189,248,0.25)] -translate-y-0.5"
                          : "bg-white/[0.03] border-white/10 text-slate-200 hover:border-white/25"
                      } border`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full transition-colors ${
                          isHovered ? "bg-cyan-400 shadow-[0_0_6px_#38bdf8]" : "bg-white/30"
                        }`}
                      />
                      <span>{skill}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SUPPORTING MODULES (01 — LANGUAGES, 04 — DATA, 05 — TOOLS)
          ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {standardCategories.map((cat, idx) => {
          const Icon = getCategoryIcon(cat.id);
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-xl border border-white/10 bg-[#050609]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#07090f]/90 hover:shadow-[0_0_30px_rgba(56,189,248,0.06)]"
            >
              {/* Module Header */}
              <div className="flex items-start justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/70 group-hover:text-cyan-400 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-white/30">{cat.number}</span>
                    <h3 className="text-sm font-semibold text-white tracking-wide group-hover:text-cyan-100 transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase">
                  {cat.badge}
                </span>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-1.5 flex-1">
                {cat.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill;
                  return (
                    <span
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all duration-200 cursor-default flex items-center gap-1.5 ${
                        isHovered
                          ? "bg-cyan-950/40 border-cyan-400/80 text-cyan-200 shadow-[0_0_10px_rgba(56,189,248,0.2)] -translate-y-0.5"
                          : "bg-white/[0.025] border-white/[0.08] text-slate-300 hover:border-white/20"
                      } border`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${
                          isHovered ? "bg-cyan-400" : "bg-white/20"
                        }`}
                      />
                      <span>{skill}</span>
                    </span>
                  );
                })}
              </div>

              <div className="pt-2 text-[10px] font-mono text-white/20 group-hover:text-cyan-400/60 transition-colors">
                // MODULE_LOADED
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CENTRAL AMBIENT TELEMETRY BAR
          ───────────────────────────────────────────────────────────── */}
      <div className="rounded-lg border border-white/[0.06] bg-white/[0.01] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400/80" />
          <span className="text-slate-400">CORE STACK MATRIX:</span>
          <span className="text-slate-300">AI • FULL STACK • DATA • SYSTEMS</span>
        </div>
        <div className="text-[10px] text-white/30 tracking-widest uppercase">
          TELEMETRY // ZERO PROFICIENCY GUESSES • PURE CAPABILITY
        </div>
      </div>
    </section>
  );
};

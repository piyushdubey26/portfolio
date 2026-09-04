"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Cpu, Layers, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  const technicalFocus = [
    "Software Engineering",
    "AI Integration",
    "Full-Stack Development",
    "Backend Architecture",
    "System Design",
  ];

  const engineeringPrinciples = [
    { label: "PROBLEM_FIRST", desc: "Solving the right problem before writing code" },
    { label: "SCALE_BY_DESIGN", desc: "Architecting for resilience, concurrency & scale" },
    { label: "SYSTEM_SIMPLICITY", desc: "Intuitive interfaces over rock-solid backend logic" },
  ];

  return (
    <section id="about" className="space-y-10 scroll-mt-28 border-t border-white/[0.08] pt-16">
      {/* Section Header */}
      <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
        <User className="w-4 h-4" />
        <span>SYSTEM PROFILE & ENGINEERING MINDSET</span>
      </div>

      {/* Main 2-Column Responsive Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Heading & System Profile Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              ABOUT ME
            </h2>
            <p className="text-xs font-mono text-slate-400 tracking-wider uppercase">
              PIYUSH DUBEY // COMPUTER SCIENCE ENGINEER
            </p>
          </div>

          {/* Technical Focus Panel */}
          <div className="rounded-xl border border-white/10 bg-[#050609]/80 backdrop-blur-md p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                CORE FOCUS
              </span>
              <span className="text-[10px] font-mono text-white/40">SYS_SPEC</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {technicalFocus.map((focus, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-xs font-mono text-slate-200 bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {focus}
                </span>
              ))}
            </div>

            {/* Principles */}
            <div className="space-y-3 pt-2 border-t border-white/[0.06]">
              <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                ENGINEERING PHILOSOPHY
              </span>
              <div className="space-y-2">
                {engineeringPrinciples.map((item, idx) => (
                  <div key={idx} className="text-xs font-mono flex items-start gap-2">
                    <span className="text-cyan-400/80 pt-0.5">›</span>
                    <div>
                      <span className="text-slate-200 font-medium">{item.label}</span>
                      <span className="text-slate-500 ml-1.5 text-[11px] font-light">— {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative Biography & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-8"
        >
          {/* Paragraph 1 */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            I’m <span className="text-white font-medium">Piyush Dubey</span>, a Computer Science engineer focused on building <span className="text-cyan-300 font-medium">intelligent, scalable, and production-ready software systems</span>.
          </p>

          {/* Paragraph 2 */}
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            I enjoy working across the <span className="text-slate-200 font-medium">full stack</span> — from designing responsive interfaces and robust <span className="text-slate-200 font-medium">backend architectures</span> to integrating <span className="text-cyan-300 font-medium">AI</span> into real-world applications. My work spans <span className="text-slate-200 font-medium">AI-powered platforms</span>, full-stack web applications, data-driven systems, and modern developer tools.
          </p>

          {/* Paragraph 3 */}
          <div className="p-4 sm:p-5 rounded-lg border border-cyan-500/20 bg-cyan-950/10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE PRINCIPLE</span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 italic font-light leading-relaxed">
              “I believe good engineering is not just about writing code; it’s about solving the right problem, designing for scale, and building experiences that are simple to use and reliable under the hood.”
            </p>
          </div>

          {/* Paragraph 4 */}
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Currently, I’m focused on strengthening my expertise in <span className="text-slate-200 font-medium">software engineering</span>, <span className="text-slate-200 font-medium">system design</span>, <span className="text-cyan-300 font-medium">AI integration</span>, <span className="text-slate-200 font-medium">backend development</span>, and <span className="text-cyan-300 font-medium">scalable web architecture</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

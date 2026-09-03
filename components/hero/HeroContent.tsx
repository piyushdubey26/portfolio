"use client";

import React from "react";
import { motion } from "framer-motion";
import { EnterButton } from "./EnterButton";
import { fadeIn, ctaVariant } from "@/lib/animations";

interface HeroContentProps {
  onEnter: () => void;
  isTransitioning: boolean;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onEnter, isTransitioning }) => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-between min-h-screen w-full px-6 py-12 md:py-16 max-w-7xl mx-auto pointer-events-none select-none">
      {/* Top Spacer to accommodate Navigation */}
      <div className="w-full h-16 md:h-20" />

      {/* Center 3D Object Anchor Area */}
      <div className="w-full flex-1 flex items-center justify-center min-h-[220px] sm:min-h-[280px] md:min-h-[340px]" />

      {/* Main Identity & Typography Block */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={isTransitioning ? "exit" : "visible"}
        custom={1}
        className="w-full flex flex-col items-center text-center space-y-4 md:space-y-5 my-4"
      >
        {/* Name: Large, High-Contrast, Geometric */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/70 drop-shadow-[0_2px_15px_rgba(255,255,255,0.08)]">
          PIYUSH DUBEY
        </h1>

        {/* Primary Title: Clean & Professional */}
        <h2 className="text-xs sm:text-sm md:text-base font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase text-slate-300/80 font-medium">
          SOFTWARE ENGINEER
        </h2>

        {/* Specialization Line: AI • FULL STACK • SYSTEMS */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] text-slate-400/90 uppercase pt-1">
          <span>AI</span>
          <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
          <span>FULL STACK</span>
          <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
          <span>SYSTEMS</span>
        </div>
      </motion.div>

      {/* Bottom CTA Area */}
      <motion.div
        variants={ctaVariant}
        initial="hidden"
        animate={isTransitioning ? "exit" : "visible"}
        className="w-full flex flex-col items-center pt-2 pointer-events-auto"
      >
        <EnterButton onClick={onEnter} isTransitioning={isTransitioning} />
      </motion.div>
    </div>
  );
};

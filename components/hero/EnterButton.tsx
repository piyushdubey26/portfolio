"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface EnterButtonProps {
  onClick: () => void;
  isTransitioning: boolean;
}

export const EnterButton: React.FC<EnterButtonProps> = ({ onClick, isTransitioning }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 select-none">
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={isTransitioning}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex items-center justify-center px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/60 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040406]"
        aria-label="Enter digital workspace"
      >
        {/* Subtle internal animated light streak on hover */}
        <div
          className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700 ease-out ${
            isHovered ? "translate-x-full" : ""
          }`}
        />

        {/* Outer subtle glow rim */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] pointer-events-none" />

        {/* Button Content */}
        <div className="flex items-center gap-3 z-10">
          {/* Micro Corner Brackets / Terminal Accent */}
          <span className="text-[10px] font-mono text-white/30 group-hover:text-white/70 transition-colors">
            [
          </span>

          <span className="font-mono text-xs font-semibold tracking-[0.3em] uppercase text-white/90 group-hover:text-white transition-colors">
            {isTransitioning ? "ACCESSING..." : "ENTER"}
          </span>

          <span className="text-[10px] font-mono text-white/30 group-hover:text-white/70 transition-colors">
            ]
          </span>
        </div>

        {/* Minimal indicator dot */}
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/40 group-hover:bg-cyan-400 group-hover:shadow-[0_0_6px_#38bdf8] transition-all" />
      </motion.button>

      {/* Keyboard Shortcut Hint / Subtle Scroll Indicator */}
      <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 tracking-widest uppercase">
        <span className="hidden sm:inline">PRESS</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.02] text-[9px] text-white/50">
          ENTER
        </kbd>
        <span className="hidden sm:inline">OR</span>
        <span>SCROLL TO EXPLORE</span>
        <motion.span
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/50"
        >
          ↓
        </motion.span>
      </div>
    </div>
  );
};

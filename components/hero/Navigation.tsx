"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { navigationVariant } from "@/lib/animations";

interface NavigationProps {
  onEnterClick?: () => void;
  onNavigate?: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onEnterClick, onNavigate }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const navItems = [
    { id: "projects", label: "PROJECTS" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleNavClick = (id: string) => {
    setActiveItem(id);
    if (onNavigate) {
      onNavigate(id);
    } else if (onEnterClick) {
      onEnterClick();
    }
  };

  return (
    <motion.header
      variants={navigationVariant}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-6 w-full max-w-7xl mx-auto pointer-events-none"
    >
      {/* Brand Identity / Left Monogram */}
      <div className="flex items-center gap-4 pointer-events-auto">
        <a
          href="#"
          className="group relative flex items-center gap-2.5 px-3 py-1.5 rounded-md border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/25 transition-all duration-300"
          aria-label="Piyush Dubey Home"
        >
          <span className="font-mono text-xs font-semibold tracking-widest text-white/90 group-hover:text-white transition-colors">
            PD
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        </a>

        {/* Minimal status indicator */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-white/40 tracking-wider">
          <span className="text-white/20">/</span>
          <span>SYS_2.6 // AVAILABLE FOR ROLES</span>
        </div>
      </div>

      {/* Center/Right Minimal Nav Menu */}
      <nav className="flex items-center gap-6 sm:gap-8 pointer-events-auto" aria-label="Main Navigation">
        <ul className="flex items-center gap-6 sm:gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
                className="group relative py-1 text-[11px] font-mono tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
              >
                <span>{item.label}</span>
                {/* Subtle underline hover indicator */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* GitHub / Connect Quick Link */}
        <a
          href="https://github.com/piyushdubey26"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-wider text-white/50 border border-white/10 rounded hover:text-white hover:border-white/30 hover:bg-white/[0.03] transition-all duration-200"
        >
          <span>GH</span>
          <span className="text-[8px] text-white/40">↗</span>
        </a>
      </nav>
    </motion.header>
  );
};

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { ProfileAvatar } from "./ProfileAvatar";

interface NavigationProps {
  activeSection?: string | null;
  isScrolled?: boolean;
  onEnterClick?: () => void;
  onNavigate?: (section: string) => void;
  onSectionChange?: (section: string | null) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection: propActiveSection,
  isScrolled: propIsScrolled,
  onEnterClick,
  onNavigate,
  onSectionChange,
}) => {
  const [internalScrolled, setInternalScrolled] = useState(false);
  const [internalActiveSection, setInternalActiveSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeSection = propActiveSection !== undefined ? propActiveSection : internalActiveSection;
  const isScrolled = propIsScrolled !== undefined ? propIsScrolled : internalScrolled;

  const navItems = [
    { id: "projects", label: "PROJECTS" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];

  const updateSectionState = useCallback(
    (section: string | null) => {
      setInternalActiveSection(section);
      if (onSectionChange) {
        onSectionChange(section);
      }
    },
    [onSectionChange]
  );

  // ─────────────────────────────────────────────────────────────────
  // AUTOMATIC SECTION SCROLL DETECTION ENGINE
  // ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    let ticking = false;
    const sectionIds = ["projects", "about", "skills", "contact"];

    const calculateActiveSection = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setInternalScrolled(scrollY > 15);

      // 1. Top of page / Hero area
      // If Hero is still occupying the upper viewport, we are strictly on Home (Hero)
      const triggerY = windowHeight * 0.4;
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const heroRect = heroEl.getBoundingClientRect();
        if (heroRect.bottom > triggerY || scrollY < 200) {
          updateSectionState(null);
          return;
        }
      } else if (scrollY < 200) {
        updateSectionState(null);
        return;
      }

      // 2. Reached bottom of document -> activate contact
      if (windowHeight + scrollY >= docHeight - 60) {
        updateSectionState("contact");
        return;
      }

      // 3. Dominant viewport section calculation
      let currentSection: string | null = null;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section top has reached trigger line and bottom is still visible
          if (rect.top <= triggerY && rect.bottom > 80) {
            currentSection = id;
            break;
          }
        }
      }

      updateSectionState(currentSection);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial check on mount/load
    calculateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateSectionState]);

  // Smooth scroll to section handler
  const handleNavClick = useCallback(
    (id: string) => {
      updateSectionState(id);
      setIsMobileMenuOpen(false);

      const targetEl = document.getElementById(id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }

      if (onNavigate) {
        onNavigate(id);
      } else if (onEnterClick) {
        onEnterClick();
      }
    },
    [onNavigate, onEnterClick, updateSectionState]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 pointer-events-auto bg-[#05080c]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8),0_1px_0_rgba(56,189,248,0.06)] ${
        isScrolled ? "py-3 md:py-3.5" : "py-4 md:py-5"
      }`}
    >
      {/* ─────────────────────────────────────────────────────────────
          TOP CONTINUOUS SCANNING LIGHT EFFECT (LEFT → RIGHT)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute top-0 left-0 w-full h-[1.5px] overflow-hidden pointer-events-none transition-opacity duration-500 ${
          isScrolled ? "opacity-95" : "opacity-60"
        }`}
        aria-hidden="true"
      >
        {/* Subtle static hairline */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

        {/* Dynamic moving beam */}
        <div className="animate-scan-light absolute top-0 left-0 w-1/3 h-full">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent blur-[1px]" />
        </div>
      </div>

      {/* Main Navbar Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Interactive Profile Avatar Component */}
        <div className="flex items-center gap-4">
          <ProfileAvatar />

          {/* Minimal status indicator on desktop */}
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-white/40 tracking-wider">
            <span className="text-white/20">/</span>
            <span>SYS_2.6 // AVAILABLE FOR ROLES</span>
          </div>
        </div>

        {/* Right: Desktop Navigation Menu */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Main Navigation"
        >
          <ul className="flex items-center gap-6 lg:gap-8 list-none">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`group relative py-1 text-[11px] font-mono tracking-[0.2em] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                      isActive
                        ? "text-cyan-300 font-semibold"
                        : "text-white/60 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>

                    {/* Smooth sliding active cyan indicator */}
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      />
                    ) : (
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white/40 transition-all duration-300 group-hover:w-full" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* GitHub Quick Link */}
          <a
            href="https://github.com/piyushdubey26"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-wider text-white/50 border border-white/10 rounded hover:text-white hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <span>GH</span>
            <span className="text-[8px] text-white/40">↗</span>
          </a>
        </nav>

        {/* Mobile: Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md border border-white/10 bg-white/[0.02] text-white/70 hover:text-white hover:border-cyan-500/40 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-cyan-400" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Dark Glass Aesthetic */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden px-6 pt-3 pb-6 border-b border-white/10 bg-[#05080c]/95 backdrop-blur-2xl shadow-2xl"
          >
            <ul className="flex flex-col gap-4 list-none pt-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between py-2 text-xs font-mono tracking-[0.25em] transition-colors ${
                        isActive
                          ? "text-cyan-400 font-semibold"
                          : "text-white/70 hover:text-white"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
                      )}
                    </button>
                  </li>
                );
              })}

              <li className="pt-2 border-t border-white/10">
                <a
                  href="https://github.com/piyushdubey26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 text-xs font-mono tracking-wider text-white/50 hover:text-white"
                >
                  <span>GITHUB REPOSITORY</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

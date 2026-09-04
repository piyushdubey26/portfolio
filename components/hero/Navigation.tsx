"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onEnterClick?: () => void;
  onNavigate?: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onEnterClick, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("projects");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "projects", label: "PROJECTS" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];

  // High-performance throttled scroll listener using requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          setIsScrolled(scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting when sections are on page
  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.1 }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (id: string) => {
      setActiveItem(id);
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
    [onNavigate, onEnterClick]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#040406]/80 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3.5"
          : "bg-transparent border-b border-transparent py-5 md:py-6"
      }`}
    >
      {/* ─────────────────────────────────────────────────────────────
          TOP SCANNING LIGHT EFFECT (Elegant Cyan Beam LEFT → RIGHT)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute top-0 left-0 w-full h-[1.5px] overflow-hidden pointer-events-none transition-opacity duration-500 ${
          isScrolled ? "opacity-95" : "opacity-35"
        }`}
        aria-hidden="true"
      >
        {/* Subtle static ambient line */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

        {/* Continuous moving cyan light beam */}
        <div className="animate-scan-light absolute top-0 left-0 w-1/3 h-full">
          {/* Intense core beam */}
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          {/* Soft volumetric glow halo */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent blur-[1px]" />
        </div>
      </div>

      {/* Main Navbar Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Identity / PD Monogram */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group relative flex items-center gap-2.5 px-3 py-1.5 rounded-md border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
            aria-label="Piyush Dubey Home"
          >
            <span className="font-mono text-xs font-semibold tracking-widest text-white/90 group-hover:text-white transition-colors">
              PD
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </a>

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
              const isActive = activeItem === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`group relative py-1 text-[11px] font-mono tracking-[0.2em] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                      isActive
                        ? "text-white font-medium"
                        : "text-white/60 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>

                    {/* Active & Hover indicator line */}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ${
                        isActive
                          ? "w-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                          : "w-0 bg-white/70 group-hover:w-full"
                      }`}
                    />
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
            className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-wider text-white/50 border border-white/10 rounded hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
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
            className="p-2 rounded-md border border-white/10 bg-white/[0.02] text-white/70 hover:text-white hover:border-white/30 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
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
            className="md:hidden px-6 pt-3 pb-6 border-b border-white/10 bg-[#040406]/95 backdrop-blur-2xl shadow-2xl"
          >
            <ul className="flex flex-col gap-4 list-none pt-2">
              {navItems.map((item) => {
                const isActive = activeItem === item.id;
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

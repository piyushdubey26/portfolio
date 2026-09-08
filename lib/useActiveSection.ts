"use client";

import { useState, useEffect, useCallback } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const calculateActiveSection = useCallback(() => {
    if (typeof window === "undefined") return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Update navbar glass scrolled state
    setIsScrolled(scrollY > 15);

    // 1. Check Hero / Top boundary
    if (scrollY < 120) {
      setActiveSection(null);
      return;
    }

    const heroEl = document.getElementById("hero");
    if (heroEl) {
      const heroRect = heroEl.getBoundingClientRect();
      // If Hero bottom is still occupying more than 45% of the viewport, stay in Hero
      if (heroRect.bottom > windowHeight * 0.45) {
        setActiveSection(null);
        return;
      }
    }

    // 2. Reached bottom of document -> activate Contact
    if (windowHeight + scrollY >= docHeight - 80) {
      setActiveSection("contact");
      return;
    }

    // 3. Dominant Section calculation (from bottom-most to top-most)
    const scanLine = windowHeight * 0.38; // Scan line sits below fixed navbar (~38% viewport height)
    const sectionIds = ["contact", "skills", "about", "projects"];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Section is active if its top has reached the scan line and bottom is still visible
        if (rect.top <= scanLine && rect.bottom > 80) {
          setActiveSection(id);
          return;
        }
      }
    }

    // 4. Smooth entry fallback into first section (projects)
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      const rect = projectsEl.getBoundingClientRect();
      if (rect.top < windowHeight * 0.65 && rect.bottom > 80) {
        setActiveSection("projects");
        return;
      }
    }

    // Fallback if between hero and projects
    setActiveSection(null);
  }, []);

  useEffect(() => {
    let ticking = false;

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

    // Re-check after dynamic 3D scene finishes initial rendering
    const timer = setTimeout(calculateActiveSection, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, [calculateActiveSection]);

  const setManualSection = useCallback((section: string | null) => {
    setActiveSection(section);
  }, []);

  return { activeSection, isScrolled, setManualSection, calculateActiveSection };
}

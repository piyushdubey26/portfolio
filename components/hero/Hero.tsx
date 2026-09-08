"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { useMousePosition } from "@/lib/useMousePosition";
import { HeroContent } from "./HeroContent";
import { Navigation } from "./Navigation";
import { LoadingScreen } from "./LoadingScreen";
import { BackgroundCanvas } from "@/components/ui/BackgroundCanvas";
import { BackgroundLayer } from "@/components/ui/BackgroundLayer";
import { DestinationSection } from "@/components/showcase/DestinationSection";

// Dynamically import Three.js Scene with SSR disabled for optimal WebGL performance
const HeroScene = dynamic(
  () => import("./HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export const Hero: React.FC = () => {
  const { mouse, prefersReducedMotion } = useMousePosition();
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Manage loading screen smoothly
  const handleSceneReady = useCallback(() => {
    setSceneReady(true);
  }, []);

  useEffect(() => {
    // Ensure loader displays elegantly for atmospheric immersion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [sceneReady]);

  // Smooth ENTER transition handler: triggers camera dolly & scrolls to #projects
  const handleEnter = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const targetEl = document.getElementById("projects");
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [isTransitioning]);

  // Navigate directly to any section
  const handleNavigate = useCallback((sectionId: string) => {
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Keyboard shortcut (Enter key from hero scrolls to projects)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (e.key === "Enter" && scrollY < 200 && !isTransitioning) {
        handleEnter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTransitioning, handleEnter]);

  return (
    <div className="relative min-h-screen w-full bg-[#040406] text-white overflow-x-hidden">
      {/* 1. Permanent Fixed System Navigation Bar (Always Visible) */}
      <Navigation
        onEnterClick={handleEnter}
        onNavigate={handleNavigate}
        onSectionChange={setActiveSection}
      />

      {/* 2. Loading Experience */}
      <LoadingScreen isLoading={isLoading} />

      {/* 3. Deep Atmospheric Void Background */}
      <BackgroundCanvas />

      {/* 4. Cinematic Multi-Section Background Layer (Smooth Crossfade) */}
      <BackgroundLayer activeSection={activeSection} />

      {/* 5. Full-Screen 3D Hero Section */}
      <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between">
        {/* Central 3D Identity Object Viewport */}
        <HeroScene
          mouse={mouse}
          isTransitioning={isTransitioning}
          prefersReducedMotion={prefersReducedMotion}
          onSceneReady={handleSceneReady}
        />

        {/* Hero Typography & CTA */}
        <HeroContent
          onEnter={handleEnter}
          isTransitioning={isTransitioning}
        />
      </section>

      {/* 6. Complete Workspace & Engineering Showcase */}
      <main className="relative z-20 w-full">
        <DestinationSection />
      </main>
    </div>
  );
};

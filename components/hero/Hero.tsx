"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { useMousePosition } from "@/lib/useMousePosition";
import { HeroContent } from "./HeroContent";
import { Navigation } from "./Navigation";
import { LoadingScreen } from "./LoadingScreen";
import { BackgroundCanvas } from "@/components/ui/BackgroundCanvas";
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
  const [isEntered, setIsEntered] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  // Manage loading screen smoothly
  const handleSceneReady = useCallback(() => {
    setSceneReady(true);
  }, []);

  useEffect(() => {
    // Ensure loader displays elegantly for at least 900ms for atmospheric immersion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, [sceneReady]);

  // ENTER transition handler
  const handleEnter = useCallback(() => {
    if (isTransitioning || isEntered) return;
    setIsTransitioning(true);

    // After 900ms cinematic dolly-in, transition into the destination workspace
    setTimeout(() => {
      setIsEntered(true);
      setIsTransitioning(false);
    }, 950);
  }, [isTransitioning, isEntered]);

  // Return to Hero handler
  const handleReturnToHero = useCallback(() => {
    setIsEntered(false);
    setIsTransitioning(false);
  }, []);

  // Global keyboard shortcuts (Enter to enter, Escape to return)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !isEntered && !isTransitioning) {
        handleEnter();
      } else if (e.key === "Escape" && isEntered) {
        handleReturnToHero();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isEntered, isTransitioning, handleEnter, handleReturnToHero]);

  // Scroll to enter interaction (subtle trackpad/wheel trigger)
  useEffect(() => {
    let wheelDelta = 0;
    const handleWheel = (e: WheelEvent) => {
      if (isEntered || isTransitioning || isLoading) return;
      wheelDelta += e.deltaY;
      if (wheelDelta > 160) {
        handleEnter();
        wheelDelta = 0;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isEntered, isTransitioning, isLoading, handleEnter]);

  return (
    <main
      className={`relative min-h-screen w-full bg-[#040406] text-white ${
        isEntered ? "overflow-y-auto overflow-x-hidden" : "overflow-hidden select-none"
      }`}
    >
      {/* 1. Loading Experience */}
      <LoadingScreen isLoading={isLoading} />

      {/* 2. Deep Atmospheric Void Background */}
      <BackgroundCanvas />

      {/* 3. Central 3D Identity Object Viewport */}
      <HeroScene
        mouse={mouse}
        isTransitioning={isTransitioning}
        prefersReducedMotion={prefersReducedMotion}
        onSceneReady={handleSceneReady}
      />

      {/* 4. Top Minimal Navigation */}
      <Navigation
        onEnterClick={handleEnter}
        onNavigate={() => handleEnter()}
      />

      {/* 5. Viewport Content Orchestration */}
      <AnimatePresence mode="wait">
        {!isEntered ? (
          <HeroContent
            key="hero-content"
            onEnter={handleEnter}
            isTransitioning={isTransitioning}
          />
        ) : (
          <DestinationSection
            key="destination-section"
            onReturnToHero={handleReturnToHero}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

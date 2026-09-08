"use client";

import React from "react";

interface BackgroundLayerProps {
  activeSection: string | null;
}

export const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ activeSection }) => {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. PROJECTS SECTION BACKGROUND (Genesis Reimagined)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          activeSection === "projects" ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: "url('/backgrounds/projects-bg.png')",
          }}
        />

        {/* Cinematic Translucent Dark Wash for Maximum UI Readability */}
        <div className="absolute inset-0 bg-[#040406]/75 backdrop-brightness-[0.85]" />

        {/* Seamless Vertical Gradient Feathering (Top Navbar & Bottom Section Blend) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406] via-transparent to-[#040406]" />

        {/* Subtle Radial Glow & Vignette */}
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. ABOUT SECTION BACKGROUND
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          activeSection === "about" ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Ambient atmospheric fallback glow for About section */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060a12] via-[#040406] to-[#05080e]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-950/15 blur-[120px]" />

        {/* Background Image Layer (Ready for user image 2) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/backgrounds/about-bg.png')",
          }}
        />

        {/* Cinematic Readability Overlays */}
        <div className="absolute inset-0 bg-[#040406]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406] via-transparent to-[#040406]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. SKILLS SECTION BACKGROUND
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          activeSection === "skills" ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Ambient atmospheric fallback glow for Skills section */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#05080f] via-[#040406] to-[#070b14]" />
        <div className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full bg-teal-950/15 blur-[120px]" />

        {/* Background Image Layer (Ready for user image 3) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/backgrounds/skills-bg.png')",
          }}
        />

        {/* Cinematic Readability Overlays */}
        <div className="absolute inset-0 bg-[#040406]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406] via-transparent to-[#040406]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. CONTACT SECTION BACKGROUND
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          activeSection === "contact" ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Ambient atmospheric fallback glow for Contact section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406] via-[#05070c] to-[#030406]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-sky-950/15 blur-[140px]" />

        {/* Background Image Layer (Ready for user image 4) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/backgrounds/contact-bg.png')",
          }}
        />

        {/* Cinematic Readability Overlays */}
        <div className="absolute inset-0 bg-[#040406]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406] via-transparent to-[#040406]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. GLOBAL ATMOSPHERIC HUD MESH (Vignette & Noise)
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
    </div>
  );
};

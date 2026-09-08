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
          STRICTLY visible ONLY when user is actively viewing #projects.
          Completely hidden on Home/Hero, About, Skills, and Contact.
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          activeSection === "projects" ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-700 ease-out"
          style={{
            backgroundImage: "url('/backgrounds/projects-bg.png')",
          }}
        />

        {/* Cinematic Translucent Dark Wash for High UI Readability */}
        <div className="absolute inset-0 bg-[#040406]/75 backdrop-brightness-[0.85]" />

        {/* Seamless Vertical Gradient Feathering */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406] via-transparent to-[#040406]" />

        {/* Subtle Radial Glow & Vignette */}
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. ABOUT SECTION BACKGROUND (Ready for Image 2)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          activeSection === "about" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/backgrounds/about-bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#040406]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406] via-transparent to-[#040406]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. SKILLS SECTION BACKGROUND (Ready for Image 3)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          activeSection === "skills" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/backgrounds/skills-bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#040406]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406] via-transparent to-[#040406]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. CONTACT SECTION BACKGROUND (Ready for Image 4)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          activeSection === "contact" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/backgrounds/contact-bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#040406]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406] via-transparent to-[#040406]" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. GLOBAL ATMOSPHERIC HUD MESH (Vignette & Noise)
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
    </div>
  );
};

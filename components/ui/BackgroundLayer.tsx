"use client";

import React, { useRef, useEffect } from "react";

interface BackgroundLayerProps {
  activeSection: string | null;
}

export const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ activeSection }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video loop when in Projects, pause when away
  useEffect(() => {
    if (videoRef.current) {
      if (activeSection === "projects") {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [activeSection]);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none bg-[#040406]"
      aria-hidden="true"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. PROJECTS SECTION BACKGROUND (3D Interactive Video Loop)
          STRICTLY the video ONLY — no static image poster or fallback image.
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          activeSection === "projects" ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Pure 3D Video Loop */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        >
          <source src="/backgrounds/projects-bg.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Translucent Dark Wash for High UI Readability */}
        <div className="absolute inset-0 bg-[#040406]/75 backdrop-brightness-[0.85]" />

        {/* Seamless Vertical Gradient Feathering (Navbar & Section Blend) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406] via-transparent to-[#040406]" />

        {/* Subtle Radial Vignette */}
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. ABOUT SECTION BACKGROUND (Ready for Image 2)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
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
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
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
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
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

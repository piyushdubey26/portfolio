"use client";

import React, { useRef, useEffect } from "react";

interface BackgroundLayerProps {
  activeSection: string | null;
}

export const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ activeSection }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Active when on any showcase section (projects, about, skills, contact)
  const isShowcaseActive = Boolean(activeSection);

  // Auto-play video loop when in showcase sections, pause when at Hero
  useEffect(() => {
    if (videoRef.current) {
      if (isShowcaseActive) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isShowcaseActive]);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none bg-[#040406]"
      aria-hidden="true"
    >
      {/* ─────────────────────────────────────────────────────────────
          3D INTERACTIVE VIDEO BACKGROUND (United Carriers)
          Active and clearly visible across PROJECTS, ABOUT, SKILLS, and CONTACT.
          Fades out to 0 opacity at Hero (top of page).
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          isShowcaseActive ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Pure 3D Loop Video with High Clarity & Coverage */}
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

        {/* Balanced Translucent Dark Wash for High Visibility & Readability */}
        <div className="absolute inset-0 bg-[#040406]/50 backdrop-brightness-[0.95]" />

        {/* Seamless Vertical Gradient Feathering (Navbar & Section Blend) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040406]/80 via-transparent to-[#040406]/80" />

        {/* Subtle Radial Vignette */}
        <div className="absolute inset-0 bg-radial-vignette opacity-40" />
      </div>

      {/* Global subtle atmospheric HUD mesh */}
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
    </div>
  );
};

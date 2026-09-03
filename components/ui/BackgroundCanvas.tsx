"use client";

import React from "react";

export const BackgroundCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#040406]" />

      {/* Subtle radial ambient light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-to-b from-slate-800/10 via-slate-900/5 to-transparent blur-3xl" />

      {/* Very faint secondary accent glow */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-950/10 blur-[100px]" />

      {/* Faint micro dot grid pattern */}
      <div className="absolute inset-0 bg-noise opacity-40" />

      {/* Vignette border */}
      <div className="absolute inset-0 bg-vignette opacity-80" />

      {/* Subtle sci-fi interface corner telemetry marks */}
      <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/10 hidden sm:block" />
      <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/10 hidden sm:block" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/10 hidden sm:block" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/10 hidden sm:block" />

      {/* Ambient coordinates readout - ultra faint */}
      <div className="absolute bottom-6 left-12 text-[9px] font-mono tracking-widest text-white/20 uppercase hidden md:block">
        POS: 28.6139° N, 77.2090° E // MATRIX_ID: PD-2026
      </div>

      <div className="absolute bottom-6 right-12 text-[9px] font-mono tracking-widest text-white/20 uppercase hidden md:block">
        RENDER: R3F_GL // SHADER: METALLIC_PHYSICAL
      </div>
    </div>
  );
};

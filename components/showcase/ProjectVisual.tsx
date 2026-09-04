"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Cpu, Scan, CheckCircle2, TrendingUp, Sparkles, GitBranch, GitCommit, ShoppingBag, ShieldCheck, Database } from "lucide-react";

interface ProjectVisualProps {
  type: "ai-screening" | "financial-system" | "developer-telemetry" | "ecommerce-matrix";
  isHovered: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type, isHovered }) => {
  return (
    <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] rounded-lg bg-[#07080c]/90 border border-white/[0.08] overflow-hidden p-5 flex flex-col justify-between transition-colors duration-300 group-hover:border-cyan-500/30">
      {/* Background grid texture */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Subtle ambient corner light */}
      <div
        className={`absolute -top-12 -right-12 w-44 h-44 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-40"
        }`}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. AI RESUME SCREENING VISUAL
          ───────────────────────────────────────────────────────────── */}
      {type === "ai-screening" && (
        <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
          {/* Header readout */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Scan className="w-3.5 h-3.5 animate-pulse" />
              <span>NLP_PARSER_ACTIVE</span>
            </div>
            <span className="text-white/40">ENGINE: V2.4</span>
          </div>

          {/* Document Scan Simulation */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between p-2.5 rounded border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-300" />
                <span className="text-xs font-mono text-slate-200">Candidate_Resume.pdf</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> PARSED
              </span>
            </div>

            {/* Extracted Skills Matrix */}
            <div className="flex flex-wrap gap-1.5">
              {["Python", "FastAPI", "NLP", "PyTorch", "System_Design"].map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Semantic Score Meter */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-400">SEMANTIC_MATCH_INDEX</span>
            <span className="text-cyan-400 font-bold text-sm tracking-wider">96.4%</span>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          2. BUDGETWISE AI VISUAL
          ───────────────────────────────────────────────────────────── */}
      {type === "financial-system" && (
        <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
          {/* Header readout */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Sparkles className="w-3.5 h-3.5 animate-spin text-cyan-400" />
              <span>GEMINI_ADVISOR // ONLINE</span>
            </div>
            <span className="text-white/40">OCR: TESSERACT_V5</span>
          </div>

          {/* Telemetry Stream */}
          <div className="space-y-2">
            <div className="p-2.5 rounded border border-white/10 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-slate-200">Monthly Expense Telemetry</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-semibold">+18.2% SAVINGS</span>
            </div>

            {/* Simulated OCR Scanner Ray */}
            <div className="p-2 rounded border border-cyan-500/20 bg-cyan-950/20 text-[10px] font-mono text-slate-300 flex items-center justify-between">
              <span>SCANNER: RECEIPT_OCR_AUTO</span>
              <span className="text-cyan-300">GST_PARSED: OK</span>
            </div>
          </div>

          {/* Dual DB Architecture Indicator */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Database className="w-3 h-3 text-cyan-400" />
              DUAL_MODE_DATABASE
            </span>
            <span className="text-cyan-400 font-medium">MONGODB_SYNC</span>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. DEVELOPER PROFILE / TELEMETRY VISUAL
          ───────────────────────────────────────────────────────────── */}
      {type === "developer-telemetry" && (
        <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <GitBranch className="w-3.5 h-3.5" />
              <span>CI_CD_PIPELINE // ACTIVE</span>
            </div>
            <span className="text-white/40">ACTIONS_V4</span>
          </div>

          {/* Commit Matrix Representation */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className={`h-4 flex-1 rounded-[2px] transition-colors ${
                    i % 3 === 0
                      ? "bg-cyan-400/90 shadow-[0_0_6px_rgba(56,189,248,0.6)]"
                      : i % 2 === 0
                      ? "bg-cyan-700/60"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>

            <div className="p-2 rounded border border-white/10 bg-white/[0.02] text-[10px] font-mono text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-3 h-3 text-cyan-400" />
                AUTOMATED_DAILY_FEED
              </span>
              <span className="text-emerald-400">STATUS: PASS</span>
            </div>
          </div>

          {/* Readout */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-400">DYNAMIC_SVG_SYNC</span>
            <span className="text-cyan-400">AUTOMATED</span>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. SHOPSPHERE E-COMMERCE VISUAL
          ───────────────────────────────────────────────────────────── */}
      {type === "ecommerce-matrix" && (
        <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>MERN_COMMERCE_STACK</span>
            </div>
            <span className="text-white/40">STATE: REDUX</span>
          </div>

          {/* Order Lifecycle Matrix */}
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
              <div className="p-2 rounded border border-white/10 bg-white/[0.02]">
                <div className="text-white/40">CATALOG</div>
                <div className="text-cyan-300 font-semibold pt-0.5">REAL_TIME</div>
              </div>
              <div className="p-2 rounded border border-white/10 bg-white/[0.02]">
                <div className="text-white/40">AUTH</div>
                <div className="text-emerald-400 font-semibold pt-0.5">JWT_VALID</div>
              </div>
              <div className="p-2 rounded border border-white/10 bg-white/[0.02]">
                <div className="text-white/40">CHECKOUT</div>
                <div className="text-cyan-300 font-semibold pt-0.5">VERIFIED</div>
              </div>
            </div>
          </div>

          {/* Footer Security */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ADMIN_TELEMETRY
            </span>
            <span className="text-cyan-400">READY</span>
          </div>
        </div>
      )}
    </div>
  );
};

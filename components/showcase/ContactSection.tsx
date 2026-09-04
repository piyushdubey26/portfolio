"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  Copy,
  Check,
  Lock,
  Unlock,
  ShieldCheck,
  X,
  Send,
} from "lucide-react";
import { contactInfo } from "@/lib/contact";

interface ContactSectionProps {
  onReturnToHero?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onReturnToHero }) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [phoneApproved, setPhoneApproved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestStatus, setRequestStatus] = useState<"idle" | "sent">("idle");

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Copy Email to clipboard
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(contactInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2200);
  };

  // Copy Phone to clipboard (after approval)
  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!phoneApproved) return;
    navigator.clipboard.writeText(contactInfo.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2200);
  };

  // Handle Request Access
  const handleRequestAccess = () => {
    setRequestStatus("sent");
  };

  // Simulate approval (for demonstration / reviewer testing)
  const handleSimulateApproval = () => {
    setPhoneApproved(true);
    setIsModalOpen(false);
  };

  const handleReturn = () => {
    if (onReturnToHero) {
      onReturnToHero();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="space-y-12 scroll-mt-32 border-t border-white/[0.08] pt-16">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
          <MessageSquare className="w-4 h-4" />
          <span>LET&apos;S CONNECT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          CONTACT ME
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-light leading-relaxed">
          Have a project, opportunity, or idea in mind? Let&apos;s connect and build something meaningful.
        </p>
      </div>

      {/* 2×2 Contact Options Grid on Desktop / Single Column on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ─────────────────────────────────────────────────────────────
            01 — GITHUB
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-xl border border-white/10 bg-[#050609]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#07090f]/90 hover:shadow-[0_0_30px_rgba(56,189,248,0.06)]"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xl font-bold text-white/30 group-hover:text-cyan-400/80 transition-colors">
                01
              </span>
              <Github className="w-4 h-4 text-white/50 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div>
              <div className="text-xs font-mono tracking-widest uppercase text-slate-400">
                GITHUB
              </div>
              <div className="text-base sm:text-lg font-medium text-white group-hover:text-cyan-200 transition-colors pt-1">
                {contactInfo.githubHandle}
              </div>
            </div>
          </div>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
          >
            <span>VISIT GITHUB</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            02 — LINKEDIN
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-xl border border-white/10 bg-[#050609]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#07090f]/90 hover:shadow-[0_0_30px_rgba(56,189,248,0.06)]"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xl font-bold text-white/30 group-hover:text-cyan-400/80 transition-colors">
                02
              </span>
              <Linkedin className="w-4 h-4 text-white/50 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div>
              <div className="text-xs font-mono tracking-widest uppercase text-slate-400">
                LINKEDIN
              </div>
              <div className="text-base sm:text-lg font-medium text-white group-hover:text-cyan-200 transition-colors pt-1">
                {contactInfo.linkedinName}
              </div>
            </div>
          </div>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
          >
            <span>CONNECT ON LINKEDIN</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            03 — EMAIL
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-xl border border-white/10 bg-[#050609]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#07090f]/90 hover:shadow-[0_0_30px_rgba(56,189,248,0.06)]"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xl font-bold text-white/30 group-hover:text-cyan-400/80 transition-colors">
                03
              </span>
              <Mail className="w-4 h-4 text-white/50 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div>
              <div className="text-xs font-mono tracking-widest uppercase text-slate-400">
                EMAIL
              </div>
              <div className="text-base sm:text-lg font-medium text-white group-hover:text-cyan-200 transition-colors pt-1 break-all">
                {contactInfo.email}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded border border-cyan-500/40 bg-cyan-950/30 text-xs font-mono text-cyan-300 hover:bg-cyan-500/20 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400"
            >
              <span>SEND EMAIL</span>
              <span>→</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/10 bg-white/[0.03] hover:border-white/30 text-xs font-mono text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-1 focus:ring-white/50"
              aria-label="Copy email address"
            >
              {emailCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* ─────────────────────────────────────────────────────────────
            04 — PHONE (PRIVATE / REQUEST ACCESS)
            ───────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-xl border border-white/10 bg-[#050609]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#07090f]/90 hover:shadow-[0_0_30px_rgba(56,189,248,0.06)]"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xl font-bold text-white/30 group-hover:text-cyan-400/80 transition-colors">
                04
              </span>
              {phoneApproved ? (
                <Unlock className="w-4 h-4 text-emerald-400" />
              ) : (
                <Lock className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400">
                <span>PHONE</span>
                {!phoneApproved && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] text-amber-400 bg-amber-950/40 border border-amber-500/30">
                    PRIVATE
                  </span>
                )}
              </div>

              <div className="text-base sm:text-lg font-medium text-white group-hover:text-cyan-200 transition-colors pt-1">
                {phoneApproved ? contactInfo.displayPhone : "Private contact (Available on request)"}
              </div>
            </div>
          </div>

          {!phoneApproved ? (
            <div className="pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded border border-white/20 bg-white/[0.04] hover:border-cyan-500/50 hover:bg-cyan-950/30 text-xs font-mono text-slate-200 hover:text-cyan-300 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <span>REQUEST PHONE NUMBER</span>
                <span className="text-cyan-400">→</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded border border-emerald-500/40 bg-emerald-950/30 text-xs font-mono text-emerald-300 hover:bg-emerald-500/20 transition-all focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL</span>
                <span>→</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/10 bg-white/[0.03] hover:border-white/30 text-xs font-mono text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-1 focus:ring-white/50"
                aria-label="Copy phone number"
              >
                {phoneCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">COPIED ✓</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM CONTACT CTA
          ───────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="space-y-1.5">
          <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
            COMMUNICATION TERMINAL
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            OPEN TO BUILDING SOMETHING GREAT.
          </h3>
        </div>

        <a
          href={`mailto:${contactInfo.email}`}
          className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/60 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono text-cyan-200 tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <span>GET IN TOUCH</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────
          PHONE NUMBER REQUEST MODAL
          ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md rounded-xl border border-white/15 bg-[#07090f] p-6 sm:p-8 shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {requestStatus === "idle" ? (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      <Lock className="w-3.5 h-3.5" />
                      <span>PRIVACY PROTOCOL</span>
                    </div>
                    <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-white">
                      PHONE NUMBER REQUEST
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                      Phone contact is available on request to prevent automated scraping.
                    </p>
                  </div>

                  <div className="p-3 rounded border border-white/10 bg-white/[0.02] text-[11px] font-mono text-slate-400 space-y-1">
                    <div>TARGET: +91 ••••• •••••</div>
                    <div>SECURITY: APPROVAL_GATED</div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded border border-white/10 text-xs font-mono text-slate-400 hover:text-white transition-colors focus:outline-none"
                    >
                      CANCEL
                    </button>
                    <button
                      onClick={handleRequestAccess}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono text-cyan-200 tracking-wider transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>REQUEST ACCESS</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-3 text-center py-2">
                    <div className="w-12 h-12 rounded-full border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 id="modal-title" className="text-lg font-bold text-white">
                      REQUEST SENT
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                      Phone contact requires approval before the number can be revealed.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/30 text-xs font-mono text-amber-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>PENDING APPROVAL</span>
                    </div>
                  </div>

                  {/* Dev / Reviewer Approval Simulation Trigger */}
                  <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-[11px] font-mono text-slate-500 hover:text-white transition-colors"
                    >
                      CLOSE
                    </button>

                    <button
                      onClick={handleSimulateApproval}
                      className="text-[10px] font-mono text-cyan-400/80 hover:text-cyan-300 underline underline-offset-4 transition-colors"
                      title="Simulate approval state for testing"
                    >
                      [ APPROVE ACCESS (DEV) ]
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER TELEMETRY
          ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
        <div>PIYUSH DUBEY © {new Date().getFullYear()} // ALL RIGHTS RESERVED</div>
        <div className="flex items-center gap-6">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <button
            onClick={handleReturn}
            className="hover:text-cyan-400 transition-colors"
          >
            [ BACK TO TOP ↑ ]
          </button>
        </div>
      </footer>
    </section>
  );
};

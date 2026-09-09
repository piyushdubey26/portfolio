"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Upload, RotateCcw, User, CheckCircle2 } from "lucide-react";
import {
  DEFAULT_PROFILE_IMAGE,
  PROFILE_INFO,
  getStoredProfilePhoto,
  setStoredProfilePhoto,
  removeStoredProfilePhoto,
  processImageFile,
} from "@/lib/profile";

export const ProfileAvatar: React.FC = () => {
  const [profilePhoto, setProfilePhoto] = useState<string>(DEFAULT_PROFILE_IMAGE);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomPhoto, setIsCustomPhoto] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load stored profile photo from localStorage on client mount
  useEffect(() => {
    const stored = getStoredProfilePhoto();
    if (stored && stored !== DEFAULT_PROFILE_IMAGE) {
      setProfilePhoto(stored);
      setIsCustomPhoto(true);
    }
  }, []);

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

  // Handle file input trigger
  const handleTriggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file upload and persistent storage
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const processedDataUrl = await processImageFile(file);
      setProfilePhoto(processedDataUrl);
      setIsCustomPhoto(true);
      setImageError(false);
      setStoredProfilePhoto(processedDataUrl);

      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 2000);
    } catch (err) {
      console.error("Error processing profile photo:", err);
    } finally {
      setIsUploading(false);
      // Reset input value so same file can be re-selected if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  // Reset to default photo
  const handleResetToDefault = () => {
    removeStoredProfilePhoto();
    setProfilePhoto(DEFAULT_PROFILE_IMAGE);
    setIsCustomPhoto(false);
    setImageError(false);
  };

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          NAVBAR AVATAR BUTTON
          Exact same dimensions & position as previous PD logo.
          ───────────────────────────────────────────────────────────── */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="group relative flex items-center gap-2 p-1 rounded-md border border-white/10 bg-black/40 backdrop-blur-md hover:border-cyan-500/40 hover:bg-cyan-950/20 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
        aria-label="View and manage profile photo of Piyush Dubey"
        title="Piyush Dubey — View profile photo"
      >
        {/* Rounded Avatar Frame */}
        <div className="relative w-7 h-7 sm:w-7 sm:h-7 rounded overflow-hidden border border-white/20 group-hover:border-cyan-400/60 transition-colors bg-slate-900 shrink-0">
          {!imageError ? (
            <img
              src={profilePhoto}
              alt={PROFILE_INFO.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono text-[10px] font-bold text-cyan-300 bg-cyan-950/60">
              PD
            </div>
          )}
        </div>

        {/* Status indicator dot */}
        <span
          className="w-1.5 h-1.5 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0 mr-1"
          aria-hidden="true"
        />
      </button>

      {/* ─────────────────────────────────────────────────────────────
          LIGHTBOX / PROFILE MODAL
          ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl pointer-events-auto"
            onClick={() => setIsModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm sm:max-w-md rounded-2xl border border-white/15 bg-[#06080e]/95 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_20px_rgba(56,189,248,0.1)] space-y-5 text-slate-200 overflow-hidden"
            >
              {/* Top ambient hairline beam */}
              <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <User className="w-3.5 h-3.5" />
                  <span>PROFILE // SYS_IDENT</span>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-md border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  aria-label="Close profile modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Large Profile Image Frame */}
              <div className="relative w-full aspect-[3/4] max-h-[48vh] rounded-xl overflow-hidden border border-white/15 bg-black/80 shadow-2xl flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={profilePhoto}
                    alt={PROFILE_INFO.name}
                    className="w-full h-full object-cover object-center select-none"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-slate-400">
                    <User className="w-12 h-12 text-cyan-400" />
                    <span className="text-xs font-mono">PD // IDENT_IMAGE</span>
                  </div>
                )}

                {/* Tech corner accents */}
                <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-cyan-400/60 pointer-events-none" />
                <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-cyan-400/60 pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-cyan-400/60 pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-cyan-400/60 pointer-events-none" />

                {/* Status Badge */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md border border-white/20 bg-black/70 backdrop-blur-md flex items-center gap-1.5 text-[10px] font-mono text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                  <span>{PROFILE_INFO.status}</span>
                </div>
              </div>

              {/* Identity Details */}
              <div className="space-y-1">
                <h3
                  id="profile-modal-title"
                  className="text-lg sm:text-xl font-bold tracking-tight text-white"
                >
                  {PROFILE_INFO.name}
                </h3>
                <p className="text-xs font-mono text-cyan-300 tracking-wider">
                  {PROFILE_INFO.title} // {PROFILE_INFO.subtitle}
                </p>
              </div>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Modal Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleTriggerFileInput}
                    disabled={isUploading}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono text-cyan-200 hover:text-cyan-100 tracking-wider transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 disabled:opacity-50"
                  >
                    {uploadSuccess ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">UPDATED ✓</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{isUploading ? "SAVING..." : "CHANGE PHOTO"}</span>
                      </>
                    )}
                  </button>

                  {isCustomPhoto && (
                    <button
                      onClick={handleResetToDefault}
                      className="p-2 rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all"
                      title="Reset to default photo"
                      aria-label="Reset to default photo"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-white/10 text-xs font-mono text-slate-400 hover:text-white hover:border-white/20 transition-colors focus:outline-none"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

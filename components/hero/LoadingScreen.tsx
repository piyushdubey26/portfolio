"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
  onLoaded?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const step = Math.max(3, Math.floor((100 - prev) * 0.25));
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040406] text-white select-none pointer-events-auto"
        >
          {/* Subtle central glow */}
          <div className="absolute w-72 h-72 rounded-full bg-white/[0.02] blur-2xl" />

          <div className="relative flex flex-col items-center gap-6 z-10">
            {/* Monogram Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex items-center justify-center w-14 h-14 rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-2xl"
            >
              <span className="font-mono text-sm font-bold tracking-widest text-white/90">
                PD
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400/80 animate-ping" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
            </motion.div>

            {/* Status & Label */}
            <div className="text-center space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-[11px] font-mono tracking-[0.3em] uppercase text-white/40"
              >
                Initializing
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xs font-mono font-medium tracking-[0.25em] text-white/80 uppercase"
              >
                Digital Space
              </motion.h2>
            </div>

            {/* High-tech minimal progress bar */}
            <div className="w-44 flex flex-col items-center gap-2 mt-2">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-white/40 via-white/80 to-white"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between w-full text-[9px] font-mono text-white/30 tracking-widest">
                <span>SYSTEM_BOOT</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

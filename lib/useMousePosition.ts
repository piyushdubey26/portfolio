"use client";

import { useEffect, useState, useRef } from "react";

export interface MousePosition {
  x: number; // Normalized -1 to 1
  y: number; // Normalized -1 to 1
  rawX: number;
  rawY: number;
}

export function useMousePosition() {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0, rawX: 0, rawY: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check reduced motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    const handleMouseMove = (event: MouseEvent) => {
      if (prefersReducedMotion) return;
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth) * 2 - 1;
      const y = -(event.clientY / innerHeight) * 2 + 1;
      setMouse({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
        rawX: event.clientX,
        rawY: event.clientY,
      });
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (prefersReducedMotion || !event.touches[0]) return;
      const touch = event.touches[0];
      const { innerWidth, innerHeight } = window;
      const x = (touch.clientX / innerWidth) * 2 - 1;
      const y = -(touch.clientY / innerHeight) * 2 + 1;
      setMouse({
        x: Math.max(-1, Math.min(1, x * 0.6)),
        y: Math.max(-1, Math.min(1, y * 0.6)),
        rawX: touch.clientX,
        rawY: touch.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [prefersReducedMotion]);

  return { mouse, prefersReducedMotion };
}

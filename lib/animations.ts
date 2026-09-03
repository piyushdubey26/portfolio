export const TRANSITION_CONFIG = {
  duration: 0.9, // 900ms cinematic transition
  ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for snappy, cinematic deceleration
};

export const fadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(6px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const heroLogoVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export const navigationVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const ctaVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

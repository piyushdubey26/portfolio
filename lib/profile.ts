"use client";

export const DEFAULT_PROFILE_IMAGE = "/profile/default-profile.jpg";
export const PROFILE_STORAGE_KEY = "pd_portfolio_profile_photo";

export const PROFILE_INFO = {
  name: "PIYUSH DUBEY",
  title: "SOFTWARE ENGINEER",
  subtitle: "AI • FULL STACK • SYSTEMS",
  status: "SYS_2.6 // AVAILABLE FOR ROLES",
};

/**
 * Retrieve the saved profile photo from localStorage or fallback to default
 */
export function getStoredProfilePhoto(): string {
  if (typeof window === "undefined") {
    return DEFAULT_PROFILE_IMAGE;
  }
  try {
    const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
    return saved && saved.trim().length > 0 ? saved : DEFAULT_PROFILE_IMAGE;
  } catch (err) {
    console.warn("Failed to read profile photo from storage:", err);
    return DEFAULT_PROFILE_IMAGE;
  }
}

/**
 * Save profile photo data URL to localStorage
 */
export function setStoredProfilePhoto(dataUrl: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, dataUrl);
    return true;
  } catch (err) {
    console.warn("Failed to persist profile photo:", err);
    return false;
  }
}

/**
 * Reset profile photo to default
 */
export function removeStoredProfilePhoto(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
  } catch (err) {
    console.warn("Failed to reset profile photo:", err);
  }
}

/**
 * Resize and compress an image file to a lightweight data URL for localStorage
 */
export function processImageFile(file: File, maxWidth = 1000, maxHeight = 1000, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error("Failed to load image for processing"));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error("Failed to read image file"));
    reader.readAsDataURL(file);
  });
}

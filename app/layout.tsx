import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush Dubey — Software Engineer",
  description: "AI • Full Stack • Systems Engineer",
  authors: [{ name: "Piyush Dubey" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#040406",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#040406]">
      <body className="bg-[#040406] text-slate-100 antialiased min-h-screen selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}

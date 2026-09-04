"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { ProjectVisual } from "./ProjectVisual";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-xl border border-white/10 bg-[#050609]/80 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#07090f]/90 hover:shadow-[0_0_35px_rgba(56,189,248,0.08)] ${
        project.featured ? "col-span-1 lg:col-span-2" : "col-span-1"
      }`}
    >
      {/* Subtle corner tech accent */}
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 group-hover:border-cyan-400 transition-colors" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 group-hover:border-cyan-400 transition-colors" />

      <div
        className={`flex flex-col ${
          project.featured ? "lg:flex-row lg:items-center lg:gap-10" : "gap-6"
        } justify-between`}
      >
        {/* Left Column: System Details */}
        <div className={`space-y-5 flex-1 ${project.featured ? "max-w-xl" : ""}`}>
          {/* Header Row: Number & Category */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-white/30 group-hover:text-cyan-400/80 transition-colors">
              {project.number}
            </span>
            <span className="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase text-cyan-400/90 bg-cyan-950/40 border border-cyan-500/25">
              {project.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-100 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 tracking-wide">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300/90 font-light leading-relaxed">
            {project.description}
          </p>

          {/* Telemetry Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-4 py-1 text-[11px] font-mono border-y border-white/[0.06]">
              {project.metrics.map((m, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="text-white/40">{m.label}:</span>
                  <span className="text-cyan-300 font-medium">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded text-[11px] font-mono text-slate-300 bg-white/[0.03] border border-white/[0.08] group-hover:border-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-3">
            {/* Live Demo Button - Only shown if verified liveUrl exists */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono text-cyan-200 tracking-wider transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {/* GitHub Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded border border-white/15 bg-white/[0.03] hover:border-white/40 hover:bg-white/[0.08] text-xs font-mono text-white/80 hover:text-white tracking-wider transition-all focus:outline-none focus:ring-1 focus:ring-white/50"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
              <span className="text-white/40 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Project-Specific Futuristic Visual */}
        <div
          className={`w-full ${
            project.featured ? "lg:w-[420px] lg:shrink-0" : "w-full"
          } mt-4 lg:mt-0`}
        >
          <ProjectVisual type={project.visualType} isHovered={isHovered} />
        </div>
      </div>
    </motion.article>
  );
};

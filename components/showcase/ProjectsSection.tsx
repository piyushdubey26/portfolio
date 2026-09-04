"use client";

import React from "react";
import { Layers, ExternalLink } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="space-y-8 scroll-mt-32 pt-2">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>FEATURED ENGINEERING SYSTEMS</span>
        </div>
        <a
          href="https://github.com/piyushdubey26?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-cyan-400/90 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group"
        >
          <span>VIEW ALL GITHUB REPOSITORIES</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Projects Grid / Systems Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

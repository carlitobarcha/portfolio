"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects, projectFilterOptions, ProjectCategory, ProjectItem } from "@/data/projects";
import ProjectDetailModal from "./ProjectDetailModal";
import { ExternalLink, ArrowUpRight, BookOpen, Layers, Download } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (project.category === activeFilter) return true;
    if (project.additionalCategories?.includes(activeFilter)) return true;
    return false;
  });

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-[#181819] border-t border-[#252528] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A86A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
                Portfolio
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEDEE] tracking-tight mb-3">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-[#D2D2D4] font-light">
              Selected software engineering, AI-driven applications, client work, and music technology experiments.
            </p>
          </div>

          <span className="text-xs font-mono text-[#8E8E93] self-start md:self-end">
            SHOWING {filteredProjects.length} OF {projects.length} PROJECTS
          </span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-14 scrollbar-none border-b border-[#252528]">
          {projectFilterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-[#C9A86A] text-[#181819] font-semibold shadow-[0_0_12px_rgba(201,168,106,0.3)]"
                  : "text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-[#202024]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-sm bg-[#1D1D20] border border-[#252528] hover:border-[#C9A86A]/45 transition-all duration-300 shadow-sm hover:shadow-[0_12px_36px_rgba(201,168,106,0.12)] overflow-hidden"
            >
              <div
                className="relative aspect-[16/10] w-full bg-[#141416] border-b border-[#252528] overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} live landing preview`}
                  fill
                  unoptimized
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-sm bg-[#181819]/90 backdrop-blur-md border border-[#252528] text-[#C9A86A] font-semibold">
                    {project.number}
                  </span>

                  <span
                    className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium backdrop-blur-md ${
                      project.status === "In Development"
                        ? "bg-[#C9A86A]/20 text-[#DFBA73] border border-[#C9A86A]/40"
                        : "bg-[#1E1E22]/90 text-[#4ADE80] border border-[#27C93F]/40"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="absolute inset-0 bg-[#121213]/75 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith("#") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#C9A86A] hover:bg-[#DFBA73] text-[#121213] text-xs font-bold uppercase tracking-wider rounded-sm shadow-xl transition-transform hover:scale-105"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      <span>Visit Website</span>
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-[#202024]/90 hover:bg-[#28282D] text-[#EDEDEE] hover:text-[#DFBA73] border border-[#333338] text-xs font-medium uppercase tracking-wider rounded-sm transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-[#8E8E93] uppercase tracking-wider mb-2 font-mono">
                    <span>{project.category}</span>
                    {project.additionalCategories?.map((cat) => (
                      <span key={cat}>• {cat}</span>
                    ))}
                  </div>

                  <h3
                    className="font-serif text-2xl font-bold text-[#EDEDEE] group-hover:text-[#DFBA73] transition-colors mb-2 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D2D2D4] leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono bg-[#161619] text-[#C9A86A] border border-[#252528] rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-[#8E8E93]">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#252528] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-[#DFBA73] hover:text-[#EDEDEE] transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Case Study &amp; Spec</span>
                    </button>

                    <div className="flex items-center space-x-2">
                      {project.apkUrl && (
                        <a
                          href={project.apkUrl}
                          download
                          aria-label={`Download ${project.title} Android APK`}
                          title={`Download Android APK (${project.apkVersion || "v1.0"})`}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#22C55E]/15 hover:bg-[#22C55E]/25 text-[#4ADE80] border border-[#22C55E]/30 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>APK</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="p-2 text-[#8E8E93] hover:text-[#DFBA73] hover:bg-[#252528] rounded-sm transition-colors border border-[#252528]"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target={project.liveUrl.startsWith("#") ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Live Website`}
                          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#C9A86A] hover:bg-[#DFBA73] text-[#121213] rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#C9A86A]/10"
                        >
                          <span>Visit Website</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

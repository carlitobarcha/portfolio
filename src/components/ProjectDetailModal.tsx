"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle, Layers, Wrench, Lightbulb, AlertTriangle, ArrowRight, Download, Smartphone } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { ProjectItem } from "@/data/projects";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#121213]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#1C1C1F] border border-[#C9A86A]/40 rounded-sm shadow-2xl p-6 sm:p-10 text-left transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-[#252528] pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="font-mono text-xs text-[#C9A86A] bg-[#222226] px-2.5 py-0.5 rounded-sm border border-[#252528]">
                PROJECT {project.number}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#8E8E93]">
                {project.category}
              </span>
              <span
                className={`text-[11px] px-2.5 py-0.5 rounded-full border ${
                  project.status === "In Development"
                    ? "bg-[#C9A86A]/10 text-[#DFBA73] border-[#C9A86A]/30"
                    : "bg-[#27C93F]/10 text-[#4ADE80] border-[#27C93F]/30"
                }`}
              >
                {project.status}
              </span>
            </div>
            <h2
              id="project-modal-title"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#EDEDEE]"
            >
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#DFBA73] mt-1.5 font-light">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-[#252528] rounded-sm transition-colors border border-[#252528] flex-shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative w-full aspect-[16/9] bg-[#141416] border border-[#252528] rounded-sm overflow-hidden mb-10 shadow-inner">
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            className="object-contain p-2"
            priority
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-10 pb-6 border-b border-[#252528]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#222226] text-[#EDEDEE] hover:text-[#DFBA73] hover:border-[#C9A86A]/50 border border-[#252528] rounded-sm text-xs uppercase tracking-wider font-medium transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8E8E93]" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target={project.liveUrl.startsWith("#") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              onClick={() => {
                if (project.liveUrl?.startsWith("#")) onClose();
              }}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#C9A86A] text-[#181819] hover:bg-[#DFBA73] rounded-sm text-xs uppercase tracking-wider font-bold transition-all shadow-[0_2px_15px_rgba(201,168,106,0.25)]"
            >
              <span>{project.liveUrl.startsWith("#") ? "Open Interactive Tuner" : "Launch Live Demo"}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.apkUrl && (
            <a
              href={project.apkUrl}
              download
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#22C55E]/15 hover:bg-[#22C55E]/25 text-[#4ADE80] border border-[#22C55E]/40 rounded-sm text-xs uppercase tracking-wider font-bold transition-all shadow-[0_2px_15px_rgba(34,197,94,0.15)] group"
            >
              <Smartphone className="w-4 h-4 text-[#4ADE80] group-hover:scale-110 transition-transform" />
              <span>Download Android APK {project.apkSize ? `(${project.apkSize})` : ""}</span>
              <Download className="w-3.5 h-3.5 text-[#4ADE80]" />
            </a>
          )}
        </div>

        {project.apkUrl && (
          <div className="mb-10 p-3.5 rounded-sm bg-[#1A1A1E] border border-[#22C55E]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2.5 text-[#EDEDEE]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="font-mono text-[#4ADE80] font-semibold">{project.apkVersion || "Android Release"}:</span>
              <span className="text-[#D2D2D4]">Direct standalone APK installation for Android devices. Offline DSP tuner included.</span>
            </div>
            <span className="text-[11px] font-mono text-[#8E8E93] bg-[#141416] px-2.5 py-1 rounded border border-[#252528] self-start sm:self-auto">
              Tap &quot;Install anyway&quot; if prompted
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-sm bg-[#18181B] border border-[#252528]">
            <div className="flex items-center space-x-2 text-[#DFBA73] mb-3">
              <AlertTriangle className="w-4 h-4" />
              <h3 className="font-serif text-lg font-semibold tracking-wide">
                The Problem
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#D2D2D4] leading-relaxed font-light">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#18181B] border border-[#252528]">
            <div className="flex items-center space-x-2 text-[#DFBA73] mb-3">
              <Lightbulb className="w-4 h-4" />
              <h3 className="font-serif text-lg font-semibold tracking-wide">
                The Solution
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#D2D2D4] leading-relaxed font-light">
              {project.solution}
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#18181B] border border-[#252528]">
            <div className="flex items-center space-x-2 text-[#DFBA73] mb-3">
              <Wrench className="w-4 h-4" />
              <h3 className="font-serif text-lg font-semibold tracking-wide">
                My Role
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#D2D2D4] leading-relaxed font-light">
              {project.role}
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl font-semibold text-[#EDEDEE] mb-4 flex items-center space-x-2">
            <span className="w-4 h-[1px] bg-[#C9A86A]" />
            <span>Key Engineering Features</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 p-3.5 rounded-sm bg-[#1E1E22] border border-[#252528]"
              >
                <CheckCircle className="w-4 h-4 text-[#C9A86A] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#D2D2D4] leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl font-semibold text-[#EDEDEE] mb-3 flex items-center space-x-2">
            <span className="w-4 h-[1px] bg-[#C9A86A]" />
            <span>Technology Stack</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-mono bg-[#161619] text-[#DFBA73] border border-[#252528] rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.screenshots.length > 1 && (
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#EDEDEE] mb-4 flex items-center space-x-2">
              <span className="w-4 h-[1px] bg-[#C9A86A]" />
              <span>System Visuals &amp; Architecture</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.screenshots.map((shot, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[16/10] bg-[#141416] border border-[#252528] rounded-sm overflow-hidden"
                >
                  <Image
                    src={shot}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

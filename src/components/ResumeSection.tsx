"use client";

import React from "react";
import { FileText, Download, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";

export const RESUME_PATH = "/resume/Khalid-Abbas-Resume.pdf";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative py-20 bg-[#181819] border-t border-[#252528] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-sm bg-[#1A1A1D] border border-[#252528] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C9A86A]/5 blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEDEE] tracking-tight">
                Want the complete story?
              </h2>

              <p className="text-sm sm:text-base text-[#D2D2D4] leading-relaxed max-w-2xl font-light">
                Download my comprehensive curriculum vitae covering academic coursework in Computer Science, full-stack engineering internships at Systems Limited &amp; Webloop, verified credentials, and software projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#8E8E93]">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#DFBA73]" />
                  <span>CS Academic Coursework</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#DFBA73]" />
                  <span>Enterprise &amp; Cloud CADM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#DFBA73]" />
                  <span>Music Tech &amp; Projects</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3">
              <a
                href={RESUME_PATH}
                download="Khalid-Abbas-Resume.pdf"
                className="group inline-flex items-center justify-center space-x-2.5 px-6 py-4 bg-[#C9A86A] text-[#181819] font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-[#DFBA73] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,106,0.25)] hover:shadow-[0_4px_30px_rgba(201,168,106,0.4)]"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#1F1F24] text-[#EDEDEE] hover:text-[#DFBA73] border border-[#252528] hover:border-[#C9A86A]/40 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View In New Tab</span>
              </a>

              <span className="text-[11px] font-mono text-[#8E8E93] text-center mt-1">
                PATH: {RESUME_PATH}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

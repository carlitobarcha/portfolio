"use client";

import React from "react";
import Image from "next/image";
import { Terminal, Music, Cpu, Sparkles, BookOpen, Layers } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#181819] border-t border-[#252528] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-2xl mb-16">
          <div className="flex items-center space-x-2.5 mb-3">
            <span className="w-6 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
              Profile
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEDEE] tracking-tight">
            A little about me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-[#D2D2D4] text-base sm:text-lg leading-relaxed font-light">
            <p className="font-serif text-xl sm:text-2xl text-[#DFBA73] italic font-normal leading-normal">
              &ldquo;Software architecture, acoustic instruments, and high-altitude mountain trails share the same fundamental truth:
              endurance, deliberate structure, and relentless attention to detail.&rdquo;
            </p>

            <p>
              I am <strong className="text-[#EDEDEE] font-medium">Khalid Abbas Barcha</strong>, a Computer Science student at <strong className="text-[#EDEDEE] font-medium">Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST)</strong> and software engineer working between <span className="text-[#DFBA73] font-medium">Islamabad and Gilgit</span>. My philosophy is simple and uncompromising: <strong className="text-[#DFBA73] font-serif italic text-lg">“Work, No Word.”</strong> I let the code, the deployed systems, and the sound of my strings speak for themselves.
            </p>

            <p>
              My development journey spans enterprise <span className="text-[#EDEDEE] font-medium">.NET Core</span> and the modular{" "}
              <span className="text-[#EDEDEE] font-medium">ABP.io</span> framework at Systems Limited, full-stack MERN engineering at Webloop, and architecting multi-module AI platforms like my 12-subsystem 3D construction topography and utilities engine.
            </p>

            <p>
              Beyond the terminal, I live at the intersection of engineering discipline and acoustic artistry. For a decade, I have studied acoustic traditions across 6+ instruments, dedicating my deepest focus to the <span className="text-[#DFBA73] font-medium font-serif italic text-xl">Rubab</span> — the lion of instruments. This led me into computational audio DSP, developing the Web Audio Rubab Tuner.
            </p>

            <p className="text-sm text-[#8E8E93] pt-2">
              When I step away from code and music, I trek the 4,000+ meter passes of the Karakoram. The mountain demands preparation, zero noise, and steady pace — exactly how I engineer resilient systems.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-sm bg-[#1D1D20] border border-[#252528] hover:border-[#C9A86A]/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-sm bg-[#242429] border border-[#252528] flex items-center justify-center text-[#DFBA73]">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#EDEDEE]">
                    Software Engineering
                  </h3>
                  <span className="text-[11px] text-[#8E8E93] uppercase tracking-wider">
                    Full-Stack &amp; Enterprise Systems
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#D2D2D4] leading-relaxed">
                Experience bridging modern frontend ecosystems (React, Next.js, Tailwind) with enterprise backend solutions (.NET, C#, ABP.io, Node.js, SQL Server, and MongoDB).
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#1D1D20] border border-[#252528] hover:border-[#C9A86A]/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-sm bg-[#242429] border border-[#252528] flex items-center justify-center text-[#C9A86A]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#EDEDEE]">
                    AI &amp; Smart Automation
                  </h3>
                  <span className="text-[11px] text-[#8E8E93] uppercase tracking-wider">
                    DeepSeek, OpenAI, Gemini &amp; RAG
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#D2D2D4] leading-relaxed">
                Integrating large language models, structured JSON outputs, and contextual retrieval pipelines to automate industry reporting and risk prediction.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#1D1D20] border border-[#252528] hover:border-[#C9A86A]/40 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-sm bg-[#242429] border border-[#252528] flex items-center justify-center text-[#DFBA73]">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#EDEDEE]">
                    Music &amp; Acoustic DSP
                  </h3>
                  <span className="text-[11px] text-[#8E8E93] uppercase tracking-wider">
                    ~10 Years Experience · Rubabist
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#D2D2D4] leading-relaxed">
                Exploring modal traditions across 6+ instruments, culminating in the Rubab and the creation of web-based real-time frequency and pitch detection engines.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 text-center rounded-sm bg-[#19191C] border border-[#252528]">
                <span className="block font-serif text-xl font-bold text-[#DFBA73]">4+</span>
                <span className="text-[10px] text-[#8E8E93] uppercase tracking-wider">Frameworks</span>
              </div>
              <div className="p-3 text-center rounded-sm bg-[#19191C] border border-[#252528]">
                <span className="block font-serif text-xl font-bold text-[#C9A86A]">10</span>
                <span className="text-[10px] text-[#8E8E93] uppercase tracking-wider">Yrs Music</span>
              </div>
              <div className="p-3 text-center rounded-sm bg-[#19191C] border border-[#252528]">
                <span className="block font-serif text-xl font-bold text-[#DFBA73]">7+</span>
                <span className="text-[10px] text-[#8E8E93] uppercase tracking-wider">Key Projects</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

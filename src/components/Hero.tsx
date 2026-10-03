"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles, Music2, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon, YoutubeIcon } from "./SocialIcons";
import { socials } from "@/data/socials";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-24 overflow-hidden bg-[#181819] bg-subtle-noise"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C9A86A]/5 blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-[#DFBA73]/4 blur-[100px]" />
        <div className="absolute inset-0 bg-editorial-grid opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#202024] border border-[#2B2B30] w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A86A] font-mono font-medium">
                BS Computer Science · SZABIST | Islamabad &amp; Gilgit
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-semibold tracking-tight text-[#EDEDEE] leading-[1.05] mb-4">
              Khalid Abbas <span className="text-gold-gradient font-normal italic">Barcha</span>
            </h1>

            <div className="flex items-center space-x-3 mb-6">
              <span className="h-[1px] w-8 bg-[#C9A86A]/60" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-[#DFBA73]">
                Full-Stack Developer · AI Systems · Rubabist
              </h2>
            </div>

            <div className="mb-6 p-4 rounded-xl bg-[#1C1C1E] border border-[#252528] max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C9A86A] block mb-1">
                Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST)
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-[#EDEDEE] italic font-semibold leading-snug">
                “Work, No Word.”
              </p>
              <p className="text-xs text-[#8E8E93] mt-2 font-mono">
                Delivering resilient cloud systems, mastering acoustic traditions, and scaling Karakoram ridges.
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#D2D2D4] leading-relaxed max-w-xl font-normal mb-8">
              Architecting full-stack cloud ecosystems (.NET Core, ABP.io, MERN), procedural AI construction engines,
              and real-time Web Audio tools, rooted in the discipline of the northern mountains.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="group relative inline-flex items-center space-x-2.5 px-6 py-3.5 bg-[#C9A86A] text-[#181819] font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-[#DFBA73] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,106,0.2)] hover:shadow-[0_4px_30px_rgba(201,168,106,0.35)] hover:-translate-y-0.5"
              >
                <span>View Live Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#adventure"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1E1E22] text-[#EDEDEE] hover:text-[#DFBA73] border border-[#252528] hover:border-[#C9A86A]/50 font-medium text-xs tracking-wider uppercase rounded-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Mountain Expeditions</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-transparent text-[#8E8E93] hover:text-[#DFBA73] border border-transparent hover:border-[#252528] font-medium text-xs tracking-wider uppercase rounded-sm transition-all"
              >
                <span>Contact</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#252528] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-6 text-xs text-[#8E8E93]">
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded bg-[#202024] text-[#DFBA73]">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Full-Stack &amp; AI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded bg-[#202024] text-[#C9A86A]">
                    <Music2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Acoustic Rubab</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-sm border border-[#252528] bg-[#1E1E22] text-[#D2D2D4] hover:text-[#DFBA73] hover:border-[#C9A86A]/40 flex items-center justify-center transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-sm border border-[#252528] bg-[#1E1E22] text-[#D2D2D4] hover:text-[#DFBA73] hover:border-[#C9A86A]/40 flex items-center justify-center transition-all duration-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  className="w-9 h-9 rounded-sm border border-[#252528] bg-[#1E1E22] text-[#D2D2D4] hover:text-[#DFBA73] hover:border-[#C9A86A]/40 flex items-center justify-center transition-all duration-200"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-9 h-9 rounded-sm border border-[#252528] bg-[#1E1E22] text-[#D2D2D4] hover:text-[#DFBA73] hover:border-[#C9A86A]/40 flex items-center justify-center transition-all duration-200"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${socials.email}`}
                  aria-label="Send Email"
                  className="w-9 h-9 rounded-sm border border-[#252528] bg-[#1E1E22] text-[#D2D2D4] hover:text-[#DFBA73] hover:border-[#C9A86A]/40 flex items-center justify-center transition-all duration-200"
                >
                  <MailIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#C9A86A]/25 rounded-sm pointer-events-none transition-all duration-500 group-hover:-top-4 group-hover:-right-4" />
              <div className="absolute -bottom-3 -left-3 w-full h-full border border-[#252528] rounded-sm pointer-events-none" />

              <div className="absolute -top-6 -left-6 text-[#C9A86A]/40 text-xs font-mono select-none">+</div>
              <div className="absolute -top-6 -right-6 text-[#C9A86A]/40 text-xs font-mono select-none">+</div>
              <div className="absolute -bottom-6 -left-6 text-[#C9A86A]/40 text-xs font-mono select-none">+</div>
              <div className="absolute -bottom-6 -right-6 text-[#C9A86A]/40 text-xs font-mono select-none">+</div>

              <div className="relative overflow-hidden rounded-sm bg-[#1E1E22] border border-[#252528] shadow-2xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/profile.png"
                    alt="Khalid Abbas Barcha — Official Portrait"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                    className="object-cover object-center filter contrast-[1.06] brightness-95 transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181819] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#181819]/90 backdrop-blur-md border border-[#252528] rounded-sm flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A86A] font-semibold">
                      KHALID ABBAS BARCHA
                    </span>
                    <span className="block text-xs text-[#EDEDEE] font-medium font-mono">
                      Islamabad · Gilgit, PK
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase tracking-wider text-[#8E8E93]">
                      ETHOS
                    </span>
                    <span className="block text-xs font-serif italic text-[#DFBA73] font-semibold">
                      Work, No Word
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#8E8E93]">
                <span>LAT 33.6844° N</span>
                <span className="text-[#C9A86A]">SYS_OK</span>
                <span>LON 73.0479° E</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-1 text-[#8E8E93] hover:text-[#DFBA73] transition-colors group"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1 text-[#C9A86A]" />
      </a>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { musicData, MusicTimelineStage } from "@/data/music";
import { Music, Disc3, Sparkles, Radio, Compass, ArrowRight } from "lucide-react";

export default function MusicJourney() {
  const [activeStage, setActiveStage] = useState<number>(2);

  return (
    <section
      id="music"
      className="relative py-24 sm:py-32 bg-[#161618] border-t border-[#252528] overflow-hidden bg-subtle-noise"
    >
      <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#C9A86A]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-[#DFBA73]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2.5 mb-3">
            <span className="w-6 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
              Artistic Identity
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#EDEDEE] tracking-tight mb-4">
            {musicData.headline}
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-[#DFBA73] italic font-normal mb-6">
            &ldquo;{musicData.subheading}&rdquo;
          </p>
          <p className="text-sm sm:text-base text-[#D2D2D4] leading-relaxed font-light">
            {musicData.introduction}
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-[#252528] pb-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#DFBA73] block mb-1">
                A Decade of Practice
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#EDEDEE]">
                Instruments Explored
              </h3>
            </div>
            <span className="text-xs text-[#8E8E93] hidden sm:block">
              Strings · Winds · Percussion
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicData.instrumentsExplored.map((inst) => {
              const isRubab = inst.name === "Rubab";
              return (
                <div
                  key={inst.name}
                  className={`p-6 rounded-sm border transition-all duration-300 ${
                    isRubab
                      ? "bg-[#1E1C18] border-[#C9A86A] shadow-[0_4px_30px_rgba(201,168,106,0.18)]"
                      : "bg-[#1C1C1F] border-[#252528] hover:border-[#C9A86A]/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider ${
                        isRubab ? "text-[#DFBA73] font-bold" : "text-[#8E8E93]"
                      }`}
                    >
                      {inst.category}
                    </span>
                    {isRubab && (
                      <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-sm bg-[#C9A86A] text-[#181819]">
                        Primary Focus
                      </span>
                    )}
                  </div>
                  <h4
                    className={`font-serif text-2xl font-bold mb-2 ${
                      isRubab ? "text-[#DFBA73]" : "text-[#EDEDEE]"
                    }`}
                  >
                    {inst.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D2D2D4] leading-relaxed font-light">
                    {inst.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-sm bg-[#1A1A1D] border border-[#252528] p-8 sm:p-12 mb-20 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-[#252528] pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-semibold block mb-2">
                Chronological Evolution
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#EDEDEE]">
                My Rubab Journey
              </h3>
            </div>
            <p className="text-xs text-[#8E8E93] max-w-md">
              From early musical discoveries and traditional folk recitals to luthiery, student mentorship, and computational music algorithms.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 mb-10">
            {musicData.timeline.map((stage, idx) => (
              <button
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={`p-3 rounded-sm text-left transition-all duration-200 border flex flex-col justify-between ${
                  activeStage === idx
                    ? "bg-[#C9A86A]/20 border-[#C9A86A] text-[#DFBA73] shadow-[0_0_15px_rgba(201,168,106,0.25)]"
                    : "bg-[#181819] border-[#252528] text-[#8E8E93] hover:text-[#EDEDEE] hover:border-[#38383D]"
                }`}
              >
                <span className="font-mono text-xs font-semibold block mb-1">
                  {stage.step}
                </span>
                <span className="text-[11px] font-medium leading-tight line-clamp-2">
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          {(() => {
            const current = musicData.timeline[activeStage];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#151517] border border-[#252528] p-6 sm:p-8 rounded-sm">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-[#DFBA73] bg-[#222226] px-3 py-1 rounded-sm border border-[#252528]">
                      STAGE {current.step} OF 09
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#C9A86A] font-semibold">
                      {current.tag}
                    </span>
                    <span className="text-xs text-[#8E8E93] font-mono">
                      • {current.period}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#EDEDEE]">
                    {current.title}
                  </h4>

                  <p className="text-sm sm:text-base text-[#D2D2D4] leading-relaxed font-light">
                    {current.description}
                  </p>

                  <div className="pt-2 flex items-center space-x-4 text-xs text-[#8E8E93]">
                    <button
                      disabled={activeStage === 0}
                      onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                      className="text-[#DFBA73] disabled:text-[#45454B] hover:underline"
                    >
                      ← Previous Stage
                    </button>
                    <span>|</span>
                    <button
                      disabled={activeStage === musicData.timeline.length - 1}
                      onClick={() =>
                        setActiveStage(
                          Math.min(musicData.timeline.length - 1, activeStage + 1)
                        )
                      }
                      className="text-[#DFBA73] disabled:text-[#45454B] hover:underline flex items-center space-x-1"
                    >
                      <span>Next Stage</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative aspect-square w-full max-w-[260px] rounded-sm bg-[#1A1A1E] border border-[#C9A86A]/30 overflow-hidden flex items-center justify-center p-4">
                    <Image
                      src="/images/rubab/rubab-hero.svg"
                      alt="Rubab acoustic craft"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
}

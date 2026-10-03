"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  adventurePhotos,
  adventureMilestones,
  adventureEthos,
  AdventurePhoto,
} from "@/data/adventure";
import { Compass, Mountain, MapPin, X, ZoomIn, ArrowRight } from "lucide-react";

export default function Adventure() {
  const [activePhoto, setActivePhoto] = useState<AdventurePhoto | null>(null);

  return (
    <section
      id="adventure"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#252528]"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#C9A86A]/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F22] border border-[#2B2B2F] mb-4">
          <Compass className="w-3.5 h-3.5 text-[#C9A86A]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
            Expeditions &amp; High Altitude
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F4F4F5] tracking-tight">
          Where Mountains Test the Spirit
        </h2>
        <p className="text-sm sm:text-base text-[#8E8E93] mt-4 leading-relaxed font-light">
          Rooted in the towering valleys of <span className="text-[#DFBA73] font-medium">Gilgit-Baltistan</span>.
          Trekking the Karakoram is not an escape from engineering — it is where focus, physical grit, and the principle of{" "}
          <strong className="text-[#F4F4F5] font-serif italic">“Work, No Word”</strong> are forged.
        </p>
      </div>

      {/* Milestone Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 relative z-10">
        {adventureMilestones.map((m, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#1C1C1E] border border-[#252528] hover:border-[#C9A86A]/40 transition-colors group"
          >
            <span className="text-[11px] uppercase tracking-wider text-[#8E8E93] font-mono block mb-1">
              {m.title}
            </span>
            <p className="text-xl sm:text-2xl font-serif font-bold text-[#F4F4F5] group-hover:text-[#DFBA73] transition-colors">
              {m.value}
            </p>
            <p className="text-xs text-[#6E6E73] mt-1 leading-snug">{m.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Photography Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
        {adventurePhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setActivePhoto(photo)}
            className="group relative rounded-xl overflow-hidden bg-[#161618] border border-[#252528] hover:border-[#C9A86A]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-[#C9A86A]/5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                className="object-cover object-center filter contrast-[1.04] brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121213] via-[#121213]/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Top altitude badge */}
              {photo.altitude && (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#121213]/85 backdrop-blur-md border border-[#252528] text-[11px] font-mono text-[#DFBA73] flex items-center gap-1.5">
                  <Mountain className="w-3 h-3 text-[#C9A86A]" />
                  <span>{photo.altitude}</span>
                </div>
              )}

              {/* Bottom details */}
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-[#C9A86A] font-mono">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{photo.location}</span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#F4F4F5] group-hover:text-[#DFBA73] transition-colors leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#8E8E93] line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-[#C9A86A] opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  <span>View Full Photo</span>
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ethos & Philosophy Editorial Quote */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[#1A1A1D] via-[#18181A] to-[#151516] border border-[#2B2B30] p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded bg-[#C9A86A]/15 border border-[#C9A86A]/30 text-xs font-mono font-bold tracking-widest text-[#DFBA73] uppercase">
              {adventureEthos.motto}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#8E8E93] font-mono">
              The Alpine Rule
            </span>
          </div>

          <blockquote className="font-serif text-2xl sm:text-3xl text-[#EDEDEE] leading-snug italic font-medium">
            “{adventureEthos.quote}”
          </blockquote>

          <p className="text-sm sm:text-base text-[#8E8E93] mt-5 leading-relaxed font-light">
            {adventureEthos.reflection}
          </p>

          <div className="mt-8 pt-6 border-t border-[#252528] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6E6E73]">
            <span>EXPLORATIONS: PASSU · HUNZA · GILGIT · KARAKORAM</span>
            <span className="text-[#C9A86A]">DISCIPLINE · ENDURANCE · ELEVATION</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#121213]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#18181A] border border-[#2B2B30] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#121213]/80 border border-[#333336] flex items-center justify-center text-[#D2D2D4] hover:text-[#C9A86A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[4/5] md:aspect-auto md:w-3/5 min-h-[380px] bg-[#121213]">
              <Image
                src={activePhoto.image}
                alt={activePhoto.title}
                fill
                priority
                className="object-contain p-2"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#252528] space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#222225] border border-[#2B2B30] text-xs font-mono text-[#DFBA73]">
                  <Mountain className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>Altitude: {activePhoto.altitude || "High Alpine"}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F4F4F5] font-semibold">
                  {activePhoto.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-[#C9A86A] font-mono">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{activePhoto.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed pt-2">
                  {activePhoto.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#252528] text-xs text-[#6E6E73] font-mono">
                <p>Khalid Abbas Barcha Expeditions</p>
                <p className="text-[#C9A86A] mt-0.5">Work, No Word</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

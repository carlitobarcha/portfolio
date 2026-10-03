"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryItems, galleryCategories, GalleryItem } from "@/data/gallery";
import { X, ExternalLink, Maximize2, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 bg-[#181819] border-t border-[#252528] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A86A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
                Visual Archives
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEDEE] tracking-tight mb-3">
              Editorial Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#D2D2D4] font-light">
              Moments across engineering architecture, instrument luthiery, rubab acoustics, and project milestones.
            </p>
          </div>

          <span className="text-xs font-mono text-[#8E8E93]">
            {filteredItems.length} CURATED ARTIFACTS
          </span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#252528]">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                activeCategory === category
                  ? "bg-[#C9A86A] text-[#181819] font-semibold shadow-[0_0_12px_rgba(201,168,106,0.3)]"
                  : "text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-[#202024]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-sm bg-[#1D1D20] border border-[#252528] hover:border-[#C9A86A]/50 transition-all duration-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_8px_30px_rgba(201,168,106,0.12)] flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full bg-[#141416] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-sm bg-[#181819]/80 backdrop-blur-md text-[#DFBA73] border border-[#252528]">
                    {item.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-[#181819]/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-[#C9A86A] text-[#181819] shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-4 border-t border-[#252528]">
                <h4 className="font-serif text-lg font-bold text-[#EDEDEE] group-hover:text-[#DFBA73] transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#8E8E93] leading-relaxed line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#121213]/92 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#1C1C1F] border border-[#C9A86A]/40 rounded-sm p-6 sm:p-8 text-left shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#252528] mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C9A86A] font-semibold block">
                  {lightboxItem.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#EDEDEE]">
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="p-2 text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-[#252528] rounded-sm transition-colors border border-[#252528]"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-[16/10] bg-[#141416] border border-[#252528] rounded-sm overflow-hidden mb-4">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            <p className="text-xs sm:text-sm text-[#D2D2D4] font-light">
              {lightboxItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

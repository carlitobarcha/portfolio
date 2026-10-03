"use client";

import React, { useState } from "react";
import { skillCategories, SkillCategory } from "@/data/skills";
import { Info, Sparkles, Sliders } from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#181819] border-t border-[#252528] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A86A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
                Capabilities
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEDEE] tracking-tight mb-3">
              Technical Stack &amp; Skills
            </h2>
            <p className="text-sm sm:text-base text-[#D2D2D4] font-light">
              Technologies, frameworks, and programming paradigms I work with across web, cloud, and intelligent systems.
            </p>
          </div>

          <div className="inline-flex items-start space-x-2.5 px-4 py-3 rounded-sm bg-[#1E1E22] border border-[#252528] max-w-sm">
            <Info className="w-4 h-4 text-[#C9A86A] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#8E8E93] leading-relaxed">
              <strong className="text-[#EDEDEE] font-medium">Self-Assessed Familiarity:</strong> Percentages reflect current working comfort and practical project application, not arbitrary certifications.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#252528]">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-[#C9A86A] text-[#181819] font-semibold shadow-[0_0_12px_rgba(201,168,106,0.3)]"
                : "text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-[#202024]"
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-[#C9A86A] text-[#181819] font-semibold shadow-[0_0_12px_rgba(201,168,106,0.3)]"
                : "text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-[#202024]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#252528]/80 pb-3 gap-2">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[#DFBA73]" />
                  <h3 className="font-serif text-2xl font-semibold text-[#DFBA73]">
                    {category.category}
                  </h3>
                </div>
                <span className="text-xs text-[#8E8E93] font-light">
                  {category.subtitle}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {category.skills.map((skill) => {
                  const radius = 26;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset =
                    circumference - (skill.level / 100) * circumference;

                  return (
                    <div
                      key={skill.name}
                      className="group relative p-5 rounded-sm bg-[#1D1D20] border border-[#252528] hover:border-[#C9A86A]/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_8px_24px_rgba(201,168,106,0.12)] flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="text-sm sm:text-base font-medium text-[#EDEDEE] group-hover:text-[#DFBA73] transition-colors leading-tight">
                          {skill.name}
                        </span>

                        <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
                          <svg className="w-14 h-14 -rotate-90 transform" viewBox="0 0 64 64">
                            <circle
                              cx="32"
                              cy="32"
                              r={radius}
                              stroke="#252528"
                              strokeWidth="4"
                              fill="none"
                            />
                            <circle
                              cx="32"
                              cy="32"
                              r={radius}
                              stroke="url(#goldGradient)"
                              strokeWidth="4"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                              fill="none"
                              className="transition-all duration-1000 ease-out"
                            />
                            <defs>
                              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#DFBA73" />
                                <stop offset="100%" stopColor="#C9A86A" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="absolute text-[11px] font-mono font-semibold text-[#DFBA73]">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      <div className="w-full bg-[#181819] h-1 rounded-full overflow-hidden border border-[#252528]">
                        <div
                          className="h-full bg-gradient-to-r from-[#C9A86A] to-[#DFBA73] transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

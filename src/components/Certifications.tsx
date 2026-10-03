"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certifications, CertificationItem } from "@/data/certifications";
import CertificateModal from "./CertificateModal";
import { Award, Calendar, CheckCircle2, Eye, ShieldCheck } from "lucide-react";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 bg-[#181819] border-t border-[#252528] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A86A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
                Verified Credentials
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEDEE] tracking-tight mb-3">
              Certifications &amp; Diplomas
            </h2>
            <p className="text-sm sm:text-base text-[#D2D2D4] font-light">
              Formal training completions, enterprise development programs, and verified full-stack credentials.
            </p>
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-sm bg-[#1E1E22] border border-[#252528] text-xs text-[#8E8E93]">
            <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
            <span>3 Verified Institutional Credentials</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-sm bg-[#1D1D20] border border-[#252528] hover:border-[#C9A86A]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_12px_30px_rgba(201,168,106,0.14)]"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="relative w-28 h-12 rounded-sm bg-[#161619] border border-[#252528] p-1.5 flex items-center justify-center">
                    <Image
                      src={cert.logo}
                      alt={`${cert.organization} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <span className="inline-flex items-center space-x-1 font-mono text-xs text-[#C9A86A] bg-[#222226] px-2.5 py-1 rounded-sm border border-[#252528]">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#DFBA73] block mb-1.5">
                  {cert.organization}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#EDEDEE] mb-3 leading-snug group-hover:text-[#DFBA73] transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#D2D2D4] leading-relaxed mb-6 font-light">
                  {cert.description}
                </p>

                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8E93] block mb-2 font-medium">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] font-mono bg-[#161619] text-[#DFBA73] border border-[#252528] rounded-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#252528]">
                <button
                  type="button"
                  onClick={() => setActiveCert(cert)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#222226] group-hover:bg-[#C9A86A] text-[#DFBA73] group-hover:text-[#181819] font-medium text-xs tracking-wider uppercase rounded-sm border border-[#C9A86A]/30 group-hover:border-[#C9A86A] transition-all duration-300"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      <CertificateModal
        certification={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}

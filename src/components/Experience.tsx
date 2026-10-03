"use client";

import React, { useState } from "react";
import Image from "next/image";
import { experiences, ExperienceItem } from "@/data/experience";
import { certifications } from "@/data/certifications";
import CertificateModal from "./CertificateModal";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const handleOpenCertificate = (exp: ExperienceItem) => {
    const match = certifications.find(
      (c) =>
        c.organization.toLowerCase().includes(exp.organization.toLowerCase()) ||
        exp.organization.toLowerCase().includes(c.organization.toLowerCase())
    );

    if (match) {
      setSelectedCert(match);
    } else if (exp.certificateImage) {
      setSelectedCert({
        id: exp.id,
        organization: exp.organization,
        title: exp.certificateTitle || exp.role,
        logo: exp.logo,
        certificate: exp.certificateImage,
        date: exp.period,
        issueDate: exp.period,
        skills: exp.technologies,
        description: exp.shortDescription,
      });
    }
  };

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#181819] border-t border-[#252528] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-2xl mb-16">
          <div className="flex items-center space-x-2.5 mb-3">
            <span className="w-6 h-[1px] bg-[#C9A86A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
              Career History
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEDEE] tracking-tight mb-3">
            Experience &amp; Internships
          </h2>
          <p className="text-sm sm:text-base text-[#D2D2D4] font-light">
            Hands-on software engineering, cloud application development, and full-stack enterprise training.
          </p>
        </div>

        <div className="relative border-l border-[#252528] ml-4 md:ml-32 pl-8 md:pl-12 space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#181819] border-2 border-[#C9A86A] flex items-center justify-center group-hover:border-[#DFBA73] group-hover:scale-110 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-[#DFBA73]" />
              </div>

              <div className="hidden md:block absolute -left-48 top-1 w-32 text-right">
                <span className="font-mono text-xs text-[#C9A86A] font-medium tracking-tight block">
                  {exp.period}
                </span>
                <span className="text-[11px] text-[#8E8E93] block truncate">
                  {exp.location.split(",")[0]}
                </span>
              </div>

              <div className="p-6 sm:p-8 rounded-sm bg-[#1D1D20] border border-[#252528] hover:border-[#C9A86A]/40 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(201,168,106,0.12)]">
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-16 h-12 sm:w-20 sm:h-14 rounded-sm bg-[#181819] border border-[#252528] p-1 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.organization} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#DFBA73] block mb-1">
                        {exp.organization}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#EDEDEE]">
                        {exp.role}
                      </h3>
                      <div className="md:hidden flex items-center space-x-3 text-xs text-[#8E8E93] mt-1">
                        <span className="inline-flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-[#C9A86A]" />
                          <span>{exp.period}</span>
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-[#8E8E93]" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {exp.certificateImage && (
                    <button
                      onClick={() => handleOpenCertificate(exp)}
                      className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#222226] hover:bg-[#2A2A30] text-[#DFBA73] hover:text-[#EDEDEE] border border-[#C9A86A]/30 hover:border-[#C9A86A] text-xs font-medium rounded-sm transition-all duration-200 self-start sm:self-auto flex-shrink-0"
                    >
                      <Award className="w-3.5 h-3.5 text-[#C9A86A]" />
                      <span>View Credential</span>
                    </button>
                  )}
                </div>

                <p className="text-sm text-[#D2D2D4] leading-relaxed mb-6 font-light">
                  {exp.shortDescription}
                </p>

                <div className="space-y-2.5 mb-6 border-t border-[#252528] pt-5">
                  <span className="text-[11px] uppercase tracking-wider text-[#8E8E93] font-medium block mb-2">
                    Key Responsibilities &amp; Outcomes:
                  </span>
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#D2D2D4]">
                      <span className="text-[#C9A86A] text-base leading-none select-none">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 items-center pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-sm bg-[#161619] text-[#C9A86A] border border-[#252528] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}

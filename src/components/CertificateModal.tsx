"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Download, Award, CheckCircle } from "lucide-react";
import { CertificationItem } from "@/data/certifications";

interface CertificateModalProps {
  certification: CertificationItem | null;
  onClose: () => void;
}

export default function CertificateModal({
  certification,
  onClose,
}: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (certification) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certification, onClose]);

  if (!certification) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#121213]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#1C1C1F] border border-[#C9A86A]/40 rounded-sm shadow-2xl p-6 sm:p-8 text-left transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-[#252528] pb-5 mb-6 gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-sm bg-[#222226] border border-[#252528] flex items-center justify-center text-[#DFBA73] flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C9A86A] block">
                {certification.organization}
              </span>
              <h3
                id="cert-title"
                className="font-serif text-xl sm:text-2xl font-bold text-[#EDEDEE]"
              >
                {certification.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={certification.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8E8E93] hover:text-[#DFBA73] hover:bg-[#252528] rounded-sm transition-colors border border-[#252528]"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={certification.certificate}
              download
              className="p-2 text-[#8E8E93] hover:text-[#DFBA73] hover:bg-[#252528] rounded-sm transition-colors border border-[#252528]"
              title="Download certificate"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-[#252528] rounded-sm transition-colors border border-[#252528]"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#141416] border border-[#252528] rounded-sm overflow-hidden mb-6 flex items-center justify-center p-2">
          <Image
            src={certification.certificate}
            alt={`${certification.title} Certificate — ${certification.organization}`}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#252528] text-xs">
          <div>
            <span className="text-[#8E8E93] block uppercase tracking-wider text-[10px] mb-1">
              Issued Date
            </span>
            <span className="text-[#EDEDEE] font-medium font-mono">
              {certification.issueDate}
            </span>
          </div>

          {certification.credentialId && (
            <div>
              <span className="text-[#8E8E93] block uppercase tracking-wider text-[10px] mb-1">
                Credential Identifier
              </span>
              <span className="text-[#DFBA73] font-mono font-medium">
                {certification.credentialId}
              </span>
            </div>
          )}

          <div>
            <span className="text-[#8E8E93] block uppercase tracking-wider text-[10px] mb-1">
              Verification Status
            </span>
            <span className="inline-flex items-center space-x-1.5 text-[#4ADE80] font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Authentic Verified Record</span>
            </span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 items-center">
          <span className="text-[11px] text-[#8E8E93] uppercase tracking-wider mr-2">
            Associated Competencies:
          </span>
          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 text-[11px] bg-[#222226] text-[#DFBA73] border border-[#252528] rounded-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

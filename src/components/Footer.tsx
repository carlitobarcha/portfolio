"use client";

import React from "react";
import Link from "next/link";
import { socials } from "@/data/socials";
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon, YoutubeIcon } from "./SocialIcons";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Adventure", href: "#adventure" },
    { label: "Music & Rubab", href: "#music" },
    { label: "Rubab Tuner", href: "#rubab" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-[#252528] bg-[#141415] text-[#8E8E93] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F4F4F5]">
                Khalid Abbas Barcha
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A86A] font-mono">
              Software Engineering · Music &amp; Acoustics · Islamabad &amp; Gilgit
            </p>
            <p className="text-sm text-[#8E8E93] max-w-sm leading-relaxed">
              Bridging enterprise systems engineering (.NET, ABP.io, MERN) and AI modeling
              with high-altitude Karakoram discipline and acoustic Rubab heritage.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-[#1C1C1E] border border-[#252528] hover:border-[#C9A86A]/40 flex items-center justify-center text-[#D2D2D4] hover:text-[#C9A86A] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#1C1C1E] border border-[#252528] hover:border-[#C9A86A]/40 flex items-center justify-center text-[#D2D2D4] hover:text-[#C9A86A] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube @khalid.barcha"
                className="w-9 h-9 rounded-lg bg-[#1C1C1E] border border-[#252528] hover:border-[#C9A86A]/40 flex items-center justify-center text-[#D2D2D4] hover:text-[#C9A86A] transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @khalid.barcha"
                className="w-9 h-9 rounded-lg bg-[#1C1C1E] border border-[#252528] hover:border-[#C9A86A]/40 flex items-center justify-center text-[#D2D2D4] hover:text-[#C9A86A] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socials.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-[#1C1C1E] border border-[#252528] hover:border-[#C9A86A]/40 flex items-center justify-center text-[#D2D2D4] hover:text-[#C9A86A] transition-colors"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5">
            <h4 className="text-xs uppercase tracking-wider text-[#D2D2D4] font-medium mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#C9A86A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex flex-col md:items-end justify-between self-stretch">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1C1C1E] border border-[#252528] hover:border-[#C9A86A]/40 text-xs text-[#D2D2D4] hover:text-[#C9A86A] transition-all cursor-pointer group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <div className="text-right text-[11px] font-mono text-[#5C5C60] mt-6 md:mt-0">
              <p>PKT / UTC+5</p>
              <p>Designed with restraint</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#222225] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#6E6E73]">
            © {new Date().getFullYear()} Khalid Abbas. All rights reserved.
          </p>
          <p className="text-[#6E6E73] font-mono text-[11px]">
            Obsidian & Champagne Gold Edition · Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

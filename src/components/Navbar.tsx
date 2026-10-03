"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { socials } from "@/data/socials";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Adventure", href: "#adventure" },
  { name: "Music", href: "#music" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#181819]/90 backdrop-blur-md border-b border-[#252528] py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Link
          href="#hero"
          className="group flex items-center space-x-3 text-left focus:outline-none focus:ring-1 focus:ring-[#C9A86A] shrink-0"
        >
          <div className="w-9 h-9 rounded-sm border border-[#C9A86A]/40 bg-[#1F1F23] flex items-center justify-center transition-all duration-300 group-hover:border-[#DFBA73] group-hover:shadow-[0_0_12px_rgba(201,168,106,0.3)] shrink-0">
            <span className="font-serif text-[#DFBA73] font-bold text-base tracking-wider">
              KB
            </span>
          </div>
          <div className="shrink-0">
            <span className="block font-serif text-lg font-medium tracking-wide text-[#EDEDEE] group-hover:text-[#DFBA73] transition-colors whitespace-nowrap">
              Khalid Abbas Barcha
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A86A] font-mono -mt-0.5 whitespace-nowrap">
              Software Engineer · Musician
            </span>
          </div>
        </Link>

        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#1E1E21]/60 px-4 py-1.5 rounded-full border border-[#252528]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-[#DFBA73] bg-[#252529]"
                    : "text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-[#252528]/40"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-[#C9A86A] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <a
            href="#contact"
            className="group inline-flex items-center space-x-1.5 text-xs font-medium tracking-wider uppercase px-4 py-2 bg-[#C9A86A] text-[#181819] hover:bg-[#DFBA73] rounded-sm transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(201,168,106,0.25)]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#D2D2D4] hover:text-[#DFBA73] hover:bg-[#252528] rounded-sm transition-colors border border-[#252528]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-[#181819]/95 backdrop-blur-xl border-b border-[#252528] p-6 shadow-2xl transition-all duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-sm text-sm tracking-wider uppercase font-medium transition-all ${
                    isActive
                      ? "text-[#DFBA73] bg-[#222226] border-l-2 border-[#C9A86A]"
                      : "text-[#D2D2D4] hover:bg-[#202024] hover:text-[#DFBA73]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="text-xs text-[#C9A86A]">●</span>}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-[#252528] flex flex-col space-y-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-2.5 bg-[#C9A86A] text-[#181819] font-semibold rounded-sm text-xs uppercase tracking-wider hover:bg-[#DFBA73] transition-colors"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

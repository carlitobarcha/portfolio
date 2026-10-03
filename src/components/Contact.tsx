"use client";

import React, { useState } from "react";
import { socials } from "@/data/socials";
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon, YoutubeIcon } from "./SocialIcons";
import { Send, Check, Copy, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Software Development",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${socials.email}?subject=${encodeURIComponent(
      `[${formData.subject}] Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#252528]">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
          Dialogue & Collaborations
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F4F4F5] mt-3 mb-4">
          Let’s Build Something Meaningful
        </h2>
        <p className="text-sm sm:text-base text-[#8E8E93] leading-relaxed">
          Open to innovative software engineering challenges, full-stack architectures,
          AI systems research, and acoustic music projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct channels & Presence */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Card */}
          <div className="bg-[#1C1C1E] border border-[#252528] rounded-xl p-6 relative overflow-hidden group hover:border-[#C9A86A]/40 transition-colors">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-[#252528] border border-[#333336] flex items-center justify-center text-[#C9A86A]">
                <MailIcon className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#252528] hover:bg-[#333336] text-[#D2D2D4] hover:text-[#C9A86A] transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#C9A86A]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <h3 className="text-base font-serif text-[#F4F4F5] mt-4 mb-1">Direct Email</h3>
            <a
              href={`mailto:${socials.email}`}
              className="text-sm text-[#C9A86A] hover:underline break-all font-mono"
            >
              {socials.email}
            </a>
            <p className="text-xs text-[#8E8E93] mt-2">
              Best channel for formal project proposals, opportunities, and architecture inquiries.
            </p>
          </div>

          {/* Social Channels */}
          <div className="bg-[#1C1C1E] border border-[#252528] rounded-xl p-6 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#8E8E93] font-medium mb-3">
              Networks & Digital Footprint
            </h4>

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-[#222225] hover:bg-[#28282C] border border-transparent hover:border-[#C9A86A]/30 transition-all text-sm group"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-4 h-4 text-[#8E8E93] group-hover:text-[#C9A86A] transition-colors" />
                <span className="text-[#D2D2D4] group-hover:text-[#F4F4F5]">GitHub</span>
              </div>
              <span className="text-xs text-[#8E8E93] flex items-center gap-1 font-mono">
                carlitobarcha <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </span>
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-[#222225] hover:bg-[#28282C] border border-transparent hover:border-[#C9A86A]/30 transition-all text-sm group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-4 h-4 text-[#8E8E93] group-hover:text-[#C9A86A] transition-colors" />
                <span className="text-[#D2D2D4] group-hover:text-[#F4F4F5]">LinkedIn</span>
              </div>
              <span className="text-xs text-[#8E8E93] flex items-center gap-1 font-mono">
                khalid-abbas <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </span>
            </a>

            <a
              href={socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-[#222225] hover:bg-[#28282C] border border-transparent hover:border-[#C9A86A]/30 transition-all text-sm group"
            >
              <div className="flex items-center gap-3">
                <YoutubeIcon className="w-4 h-4 text-[#8E8E93] group-hover:text-[#C9A86A] transition-colors" />
                <span className="text-[#D2D2D4] group-hover:text-[#F4F4F5]">YouTube</span>
              </div>
              <span className="text-xs text-[#DFBA73] flex items-center gap-1 font-mono">
                @khalid.barcha <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </span>
            </a>

            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-[#222225] hover:bg-[#28282C] border border-transparent hover:border-[#C9A86A]/30 transition-all text-sm group"
            >
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-4 h-4 text-[#8E8E93] group-hover:text-[#C9A86A] transition-colors" />
                <span className="text-[#D2D2D4] group-hover:text-[#F4F4F5]">Instagram</span>
              </div>
              <span className="text-xs text-[#C9A86A] flex items-center gap-1 font-mono">
                @khalid.barcha <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </span>
            </a>
          </div>

          {/* Location & Timezone */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-[#1C1C1E] border border-[#252528] flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#8E8E93]">Location</p>
                <p className="text-[#F4F4F5] font-medium mt-0.5">Pakistan</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#1C1C1E] border border-[#252528] flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#8E8E93]">Timezone</p>
                <p className="text-[#F4F4F5] font-medium mt-0.5">PKT (UTC +5)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-[#1C1C1E] border border-[#252528] rounded-xl p-6 sm:p-8 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8E8E93] font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#141415] border border-[#2B2B2F] rounded-lg px-4 py-3 text-sm text-[#F4F4F5] placeholder-[#5C5C60] focus:outline-none focus:border-[#C9A86A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8E8E93] font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141415] border border-[#2B2B2F] rounded-lg px-4 py-3 text-sm text-[#F4F4F5] placeholder-[#5C5C60] focus:outline-none focus:border-[#C9A86A] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#8E8E93] font-medium mb-2">
                Inquiry Topic
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#141415] border border-[#2B2B2F] rounded-lg px-4 py-3 text-sm text-[#F4F4F5] focus:outline-none focus:border-[#C9A86A] transition-colors"
              >
                <option value="Software Development">Full-Stack / Software Engineering</option>
                <option value="AI Integration">AI / LLM Integration & Automation</option>
                <option value="Architecture Consultation">System Architecture & Backend (.NET/MERN)</option>
                <option value="Music & Rubab Performance">Rubab Performance / Acoustic Collab</option>
                <option value="Other Inquiries">General Discussion / Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#8E8E93] font-medium mb-2">
                Your Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Share your goals, requirements, timeline, or thoughts..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#141415] border border-[#2B2B2F] rounded-lg p-4 text-sm text-[#F4F4F5] placeholder-[#5C5C60] focus:outline-none focus:border-[#C9A86A] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#C9A86A] hover:bg-[#DFBA73] text-[#121213] font-medium text-sm py-3.5 px-6 rounded-lg transition-all shadow-lg shadow-[#C9A86A]/10 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>

            {submitted && (
              <p className="text-xs text-center text-[#C9A86A] font-mono mt-2 animate-fade-in">
                ✓ Thank you! Your email client has been prepared with your message.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

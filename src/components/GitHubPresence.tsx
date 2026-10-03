"use client";

import React from "react";
import { githubData } from "@/data/github";
import { Star, GitFork, ExternalLink, GitCommit, GitPullRequest, Code } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function GitHubPresence() {
  const weeks = 40;
  const days = 7;

  return (
    <section
      id="github"
      className="relative py-24 sm:py-32 bg-[#161618] border-t border-[#252528] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A86A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-medium">
                Open Source &amp; Code
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#EDEDEE] tracking-tight mb-3">
              Developer Presence
            </h2>
            <p className="text-sm sm:text-base text-[#D2D2D4] font-light">
              Public repositories, open-source commits, and active development on GitHub.
            </p>
          </div>

          <a
            href={githubData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-[#202024] hover:bg-[#282830] text-[#EDEDEE] hover:text-[#DFBA73] border border-[#252528] hover:border-[#C9A86A]/40 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all self-start md:self-auto"
          >
            <GithubIcon className="w-4 h-4 text-[#C9A86A]" />
            <span>github.com/{githubData.username}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-sm bg-[#1A1A1D] border border-[#252528]">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#8E8E93] block mb-1">
              Public Repositories
            </span>
            <span className="font-serif text-2xl font-bold text-[#DFBA73]">
              {githubData.publicRepos}+
            </span>
          </div>
          <div className="p-4 rounded-sm bg-[#1A1A1D] border border-[#252528]">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#8E8E93] block mb-1">
              Annual Contributions
            </span>
            <span className="font-serif text-2xl font-bold text-[#EDEDEE]">
              {githubData.totalContributions}+
            </span>
          </div>
          <div className="p-4 rounded-sm bg-[#1A1A1D] border border-[#252528]">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#8E8E93] block mb-1">
              Primary Language
            </span>
            <span className="font-serif text-2xl font-bold text-[#C9A86A]">
              TypeScript / C#
            </span>
          </div>
          <div className="p-4 rounded-sm bg-[#1A1A1D] border border-[#252528]">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#8E8E93] block mb-1">
              Developer Profile
            </span>
            <span className="font-serif text-2xl font-bold text-[#EDEDEE]">
              Active
            </span>
          </div>
        </div>

        <div className="p-6 rounded-sm bg-[#1A1A1D] border border-[#252528] mb-12 overflow-x-auto shadow-inner">
          <div className="flex items-center justify-between mb-4 min-w-[700px]">
            <div className="flex items-center space-x-2 text-xs text-[#8E8E93] font-mono">
              <GitCommit className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>COMMITMENT ACTIVITY TIMELINE</span>
            </div>
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#8E8E93]">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[1px] bg-[#222226]" />
              <span className="w-2.5 h-2.5 rounded-[1px] bg-[#C9A86A]/25" />
              <span className="w-2.5 h-2.5 rounded-[1px] bg-[#C9A86A]/50" />
              <span className="w-2.5 h-2.5 rounded-[1px] bg-[#DFBA73]/80" />
              <span className="w-2.5 h-2.5 rounded-[1px] bg-[#DFBA73]" />
              <span>More</span>
            </div>
          </div>

          <div className="grid grid-flow-col gap-1 min-w-[700px] w-full" style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}>
            {Array.from({ length: weeks * days }).map((_, i) => {
              const seed = (i * 37) % 100;
              let bg = "bg-[#222226]";
              if (seed > 85) bg = "bg-[#DFBA73]";
              else if (seed > 65) bg = "bg-[#DFBA73]/80";
              else if (seed > 45) bg = "bg-[#C9A86A]/50";
              else if (seed > 25) bg = "bg-[#C9A86A]/25";

              return (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-[1px] ${bg} hover:border hover:border-[#DFBA73] transition-colors`}
                  title={`Day ${i + 1}`}
                />
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubData.highlightedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-sm bg-[#1D1D20] border border-[#252528] hover:border-[#C9A86A]/45 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(201,168,106,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center space-x-2">
                    <GithubIcon className="w-4 h-4 text-[#DFBA73]" />
                    <h3 className="font-mono text-sm font-semibold text-[#EDEDEE] group-hover:text-[#DFBA73] transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8E8E93] group-hover:text-[#EDEDEE] transition-colors" />
                </div>

                <p className="text-xs text-[#D2D2D4] leading-relaxed font-light mb-4">
                  {repo.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono text-[#8E8E93] bg-[#161619] rounded-sm border border-[#252528]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-xs font-mono text-[#8E8E93] border-t border-[#252528] pt-3">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C9A86A]" />
                    <span>{repo.language}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-[#DFBA73]" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <GitFork className="w-3 h-3" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

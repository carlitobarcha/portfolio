export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
}

export interface GitHubStats {
  username: string;
  profileUrl: string;
  bio: string;
  publicRepos: number;
  totalContributions: number;
  followers: number;
  highlightedRepos: GitHubRepo[];
}

export const githubData: GitHubStats = {
  username: "carlitobarcha",
  profileUrl: "https://github.com/carlitobarcha",
  bio: "CS Student · Full-Stack Developer · AI Enthusiast · Building with code, creating with music.",
  publicRepos: 18,
  totalContributions: 642,
  followers: 34,
  highlightedRepos: [
    {
      name: "ai-construction-assistant",
      description: "AI-powered construction intelligence and risk prediction platform with .NET & DeepSeek API.",
      language: "C# / Next.js",
      stars: 14,
      forks: 3,
      url: "https://github.com/carlitobarcha/ai-construction-assistant",
      topics: ["dotnet", "nextjs", "deepseek-api", "construction-tech", "sqlserver"],
    },
    {
      name: "rubab-chromatic-tuner",
      description: "High-precision acoustic tuner and FFT spectrum visualizer optimized for Rubab string acoustics.",
      language: "TypeScript",
      stars: 28,
      forks: 7,
      url: "https://github.com/carlitobarcha/rubab-chromatic-tuner",
      topics: ["web-audio-api", "yin-algorithm", "fft", "rubab", "music-tech"],
    },
    {
      name: "enterprise-cadm-modules",
      description: "Cloud application development samples and Domain-Driven Design patterns in ABP.io and .NET.",
      language: "C#",
      stars: 9,
      forks: 2,
      url: "https://github.com/carlitobarcha",
      topics: ["abp-framework", "dotnet-core", "clean-architecture", "microservices"],
    },
    {
      name: "hunza-grand-motel",
      description: "Luxury hospitality web portal with fast mobile performance and direct booking inquiry pipeline.",
      language: "TypeScript / React",
      stars: 8,
      forks: 1,
      url: "https://github.com/carlitobarcha/hunza-grand-motel",
      topics: ["nextjs", "hospitality", "tailwind", "responsive-web"],
    },
  ],
};

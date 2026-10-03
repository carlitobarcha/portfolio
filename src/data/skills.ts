export interface SkillItem {
  name: string;
  level: number;
  description?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  subtitle: string;
  skills: SkillItem[];
}

/**
 * EDITABLE SKILL PERCENTAGES
 * Note: These percentages represent current self-assessed familiarity,
 * not official proficiency measurements. They can be updated anytime.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    subtitle: "Modern responsive web applications, component architecture, and design systems",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 88 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "React.js", level: 75 },
      { name: "Next.js", level: 65 },
      { name: "TypeScript", level: 55 },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    subtitle: "Enterprise .NET services, RESTful APIs, and Node.js microservices",
    skills: [
      { name: "C#", level: 70 },
      { name: "REST APIs", level: 70 },
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 65 },
      { name: ".NET", level: 65 },
      { name: "ABP.io", level: 60 },
    ],
  },
  {
    id: "databases",
    category: "Databases",
    subtitle: "Relational schema engineering and document database storage",
    skills: [
      { name: "SQL Server", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    id: "programming",
    category: "Programming",
    subtitle: "Core algorithmic foundations and systems programming languages",
    skills: [
      { name: "C++", level: 70 },
      { name: "C", level: 60 },
      { name: "Python", level: 55 },
    ],
  },
  {
    id: "ai",
    category: "AI / Intelligent Systems",
    subtitle: "LLM integration, Retrieval-Augmented Generation, and intelligent automation",
    skills: [
      { name: "AI API Integration", level: 65 },
      { name: "OpenAI APIs", level: 60 },
      { name: "Gemini APIs", level: 60 },
      { name: "AI Automation", level: 55 },
      { name: "RAG", level: 45 },
      { name: "LangChain", level: 40 },
      { name: "Vector Databases", level: 40 },
    ],
  },
  {
    id: "tools",
    category: "Cloud / Tools",
    subtitle: "Developer workflow, version control, and engineering environments",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "Git / GitHub", level: 80 },
      { name: "WordPress", level: 75 },
      { name: "Figma", level: 70 },
      { name: "AWS", level: 40 },
    ],
  },
];

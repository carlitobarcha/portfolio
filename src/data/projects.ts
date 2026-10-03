export type ProjectCategory =
  | "All"
  | "Web"
  | "Full Stack"
  | "AI"
  | "Music Technology"
  | "Client Work";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  additionalCategories?: ProjectCategory[];
  status: "In Development" | "Completed" | "Live";
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  features: string[];
  image: string;
  screenshots: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: string;
  apkUrl?: string;
  apkVersion?: string;
  apkSize?: string;
}

export const projectFilterOptions: ProjectCategory[] = [
  "All",
  "Web",
  "Full Stack",
  "AI",
  "Music Technology",
  "Client Work",
];

export const projects: ProjectItem[] = [
  {
    id: "hunza-grand-motel",
    number: "01",
    title: "Hunza Grand Motel",
    category: "Web",
    additionalCategories: ["Client Work", "Full Stack"],
    status: "Live",
    subtitle:
      "Luxury hospitality booking platform and multi-room management engine set against the Passu Cones in Northern Pakistan.",
    description:
      "A fast, modern web application designed for a premier luxury hotel in Hunza Valley. Features real-time room availability inquiries, dynamic gallery showcase, amenity highlights, and streamlined reservation workflows.",
    problem:
      "Independent mountain resorts frequently lose guest bookings due to outdated static pages, lack of mobile responsiveness, and high third-party commission fees on aggregator platforms.",
    solution:
      "Built a bespoke direct-booking web application deployed on Vercel with lightning-fast edge rendering, showcasing high-resolution Karakoram vistas and friction-free inquiry conversion.",
    role: "Sole Full-Stack Developer & Designer — built the entire frontend, responsive layouts, booking integration, and deployed production infrastructure on Vercel.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vercel Edge",
      "Lucide Icons",
    ],
    features: [
      "Instant room and suite availability preview",
      "High-performance responsive image optimization for mountain photography",
      "Direct WhatsApp and email reservation conversion channels",
      "Interactive location guide highlighting Hunza & Passu attractions",
      "Edge-rendered zero-latency performance across mobile devices",
    ],
    image: "/images/projects/hunza-grand-motel.jpg",
    screenshots: ["/images/projects/hunza-grand-motel.jpg"],
    githubUrl: "https://github.com/carlitobarcha",
    liveUrl: "https://hunza-grand-motel.vercel.app/",
  },
  {
    id: "rubab-tuner",
    number: "02",
    title: "Rubab Tuner — Acoustic Spectrum Analyzer",
    category: "Music Technology",
    additionalCategories: ["Web", "Full Stack"],
    status: "Live",
    subtitle:
      "Precision pitch detection and modal frequency analyzer engineered specifically for the 21 strings of the Afghan Rubab.",
    description:
      "A specialized acoustic tool designed to solve the centuries-old tuning challenges of the Afghan Rubab. Available both as a browser-based web engine and as an installable native Android APK. Employs the Web Audio API, YIN autocorrelation pitch detection, and a 2048-bin FFT spectrum visualizer.",
    problem:
      "Standard guitar tuner apps are unable to handle the complex overtone spectra, skin-head soundboard resonance, and 15 sympathetic tarab strings characteristic of traditional Rubabs.",
    solution:
      "Implemented a customized audio processing pipeline tuned to modal Rubab scales (C3, F3, C4, G4) with low-noise mic input filtering, visual cent deviation indicators, real-time canvas rendering, and direct Android APK build.",
    role: "Sole Creator & Audio Systems Engineer — combined 10 years of personal Rubab performance practice with digital signal processing (DSP) in JavaScript and mobile packaging.",
    technologies: [
      "Android APK",
      "Web Audio API",
      "Next.js",
      "React",
      "Canvas 2D",
      "YIN Algorithm",
      "Tailwind CSS",
    ],
    features: [
      "Installable Android APK release (v1.0) ready for offline tuning on mobile",
      "Microphone input stream analysis via Web Audio AudioContext",
      "Real-time 2048-bin Fast Fourier Transform (FFT) harmonic visualizer",
      "Pitch tracking with sub-cent accuracy across drone and melodic strings",
      "Preset modal tunings (Bhairavi, Bilawal, Kafi, Khamaj)",
      "Zero-latency lightweight client-side execution with no external backend requirement",
    ],
    image: "/images/projects/rubab-tuner.jpg",
    screenshots: ["/images/projects/rubab-tuner.jpg"],
    githubUrl: "https://github.com/carlitobarcha",
    liveUrl: "https://barcha-rubab-tuner.vercel.app/",
    apkUrl: "/downloads/rubab-tuner-v1.0.apk",
    apkVersion: "v1.0 Release",
    apkSize: "3.7 MB",
  },
  {
    id: "johnsons-junk-removal",
    number: "03",
    title: "Johnson's Junk Removal",
    category: "Client Work",
    additionalCategories: ["Web", "Full Stack"],
    status: "Live",
    subtitle:
      "Commercial and residential property hauling platform featuring instant tier-based job estimations and direct dispatch.",
    description:
      "A high-converting client website for a professional hauling and junk disposal service. Features interactive truckload calculators, curbside item scheduling, and localized SEO landing pages.",
    problem:
      "Service businesses struggle with customer bounce rates when pricing is opaque and booking requires phone calls during off-hours.",
    solution:
      "Designed a clean, transparent digital portal allowing clients to self-estimate truck volume, select date slots, and submit job details in under 60 seconds.",
    role: "Full-Stack Web Developer — architected responsive components, estimation logic, and form dispatch pipelines deployed on Vercel.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
      "Modern Web Standards",
    ],
    features: [
      "Tiered truckload pricing visualizer (Single Item, 1/2 Load, Full Load)",
      "Residential cleanout and commercial estate clearance breakdown",
      "Automated lead capture form with instant email alerts to operations",
      "Fast Core Web Vitals score exceeding 95 on mobile",
      "Accessible dark/light contrast compliant UI",
    ],
    image: "/images/projects/johnsons-junk-removal.jpg",
    screenshots: ["/images/projects/johnsons-junk-removal.jpg"],
    githubUrl: "https://github.com/carlitobarcha",
    liveUrl: "https://johnsons-junk-removal-w3dc.vercel.app/",
  },
  {
    id: "rinse-shine-crew",
    number: "04",
    title: "Rinse & Shine Crew",
    category: "Client Work",
    additionalCategories: ["Web", "Full Stack"],
    status: "Live",
    subtitle:
      "Luxury automotive detailing showcase and dynamic service package booking portal.",
    description:
      "A sleek, automotive brand platform engineered for a mobile detailing and paint correction service. Features service tier comparisons, ceramic coating explanations, and streamlined reservation inquiry forms.",
    problem:
      "Automotive detailing customers need clear visual proof of workmanship and distinct package definitions before committing to high-ticket ceramic coatings.",
    solution:
      "Crafted an editorial dark-aesthetic portfolio website showcasing high-resolution before-and-after detailing stages with smooth interactive transitions.",
    role: "Lead Frontend Engineer — built interactive service cards, dynamic pricing tier selectors, and mobile-first responsive architecture.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
      "Framer Motion",
    ],
    features: [
      "Multi-tier package selector (Interior Decon, Full Detail, Ceramic Shield)",
      "Dynamic cost calculation based on vehicle class (Sedan, SUV, Heavy Truck)",
      "High-impact visual gallery with smooth lightbox viewing",
      "Mobile-optimized click-to-book and WhatsApp reservation channel",
      "Ultra-low latency Vercel Edge deployment",
    ],
    image: "/images/projects/rinse-shine-crew.jpg",
    screenshots: ["/images/projects/rinse-shine-crew.jpg"],
    githubUrl: "https://github.com/carlitobarcha",
    liveUrl: "https://rinseshinecrew.vercel.app/",
  },
  {
    id: "ai-construction-platform",
    number: "05",
    title: "AI-Powered Construction Platform",
    category: "AI",
    additionalCategories: ["Full Stack", "Web"],
    status: "In Development",
    subtitle:
      "Flagship Final Year Project (FYP) consisting of 12 modular subsystems. Ingests customer land area to generate complete 3D topological site models, electrical line routing, and sewage/sanitary infrastructure maps.",
    description:
      "A comprehensive, ongoing enterprise civil engineering and architectural planning platform. When a customer inputs their parcel dimensions and total area, the system procedurally generates a 3D elevation map of the land, computes optimal 3D electrical grid distribution, and calculates gravity-assisted sewage & sanitary drainage networks across 12 coordinated software modules.",
    problem:
      "Traditional land development and utility blueprinting requires weeks of manual CAD drafter coordination, leading to frequent utility line collision errors, miscalculated sewage drainage gradients, and prohibitive pre-construction consultation expenses.",
    solution:
      "Engineered an automated 12-module intelligence pipeline combining .NET core services, DeepSeek AI reasoning, and WebGL 3D rendering. The platform synthesizes topography inputs, runs constraint satisfaction algorithms for electrical conduits, and optimizes sewage runoff lines with complete spatial visualization.",
    role: "Lead Systems Architect & Full-Stack Engineer — engineered the 12-module orchestration backend in .NET and C#, configured MSSQL spatial tables, implemented AI inference pipelines, and developed the interactive 3D land visualization canvas.",
    technologies: [
      ".NET Core",
      "C#",
      "ABP.io",
      "MSSQL Server",
      "Next.js",
      "React",
      "WebGL / Three.js",
      "DeepSeek AI API",
      "Tailwind CSS",
    ],
    features: [
      "Dynamic customer land area input (Sq. Ft / Marla / Kanal)",
      "Automated procedural 3D land terrain and foundation elevation modeling",
      "3D electrical supply routing engine with circuit load safety verification",
      "3D gravity-assisted sewage and wastewater plumbing network generation",
      "12 coordinated micro-modules handling risk, estimation, compliance, and drafting",
      "DeepSeek AI powered architectural compliance and municipal regulation auditing",
    ],
    image: "/images/projects/ai-construction-3d.svg",
    screenshots: [
      "/images/projects/ai-construction-3d.svg",
      "/images/projects/construction-assistant.svg",
    ],
    githubUrl: "https://github.com/carlitobarcha",
  },
];

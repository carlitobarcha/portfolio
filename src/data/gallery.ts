export interface GalleryItem {
  id: string;
  title: string;
  category: "Development" | "Music" | "Adventure" | "Projects";
  image: string;
  description: string;
  aspect?: "landscape" | "portrait" | "square";
}

export const galleryCategories = [
  "All",
  "Development",
  "Music",
  "Adventure",
  "Projects",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-portrait",
    title: "Khalid Abbas Barcha — Official Portrait",
    category: "Development",
    image: "/images/profile.png",
    description: "Official portrait — Software Engineer, AI Enthusiast, and Musician.",
    aspect: "portrait",
  },
  {
    id: "gal-mountain-passu",
    title: "High Ridge Over Passu Cones",
    category: "Adventure",
    image: "/images/adventure/adventure-5.jpg",
    description: "Expedition pack ascent overlooking the rugged granite needles of the Passu Cones.",
    aspect: "portrait",
  },
  {
    id: "gal-stage-solo",
    title: "Live Stage Performance",
    category: "Music",
    image: "/images/music/rubab-stage-solo.jpg",
    description: "Khalid performing live on the handcrafted Afghan Rubab under stage lighting.",
    aspect: "portrait",
  },
  {
    id: "gal-tuner-fft",
    title: "Real-Time Spectrum Visualizer",
    category: "Projects",
    image: "/images/projects/rubab-tuner.svg",
    description: "Live Web Audio API FFT spectrum and YIN algorithm pitch tracking canvas.",
    aspect: "landscape",
  },
  {
    id: "gal-mountain-jam",
    title: "Glacial Valley Acoustic Session",
    category: "Adventure",
    image: "/images/music/rubab-mountain-jam.jpg",
    description: "Acoustic Rubab and guitar duet amidst glacial valleys and snowcapped Karakoram walls.",
    aspect: "landscape",
  },
  {
    id: "gal-studio-sanctuary",
    title: "Instruments & Studio Sanctuary",
    category: "Music",
    image: "/images/music/rubab-studio-sanctuary.jpg",
    description: "A decade of multi-instrumental craft: 3 Rubabs, acoustic guitar, violin, and workstation.",
    aspect: "landscape",
  },
  {
    id: "gal-live-band",
    title: "Ensemble Concert Jam",
    category: "Music",
    image: "/images/music/rubab-live-band.jpg",
    description: "Center stage on Rubab with live band — vocalists, acoustic guitar, and drums.",
    aspect: "square",
  },
  {
    id: "gal-adventure-peak",
    title: "High Alpine Wilderness",
    category: "Adventure",
    image: "/images/adventure/adventure-1.jpg",
    description: "Gazing into the sheer north faces of the Karakoram. Solitude and boundless altitude.",
    aspect: "portrait",
  },
  {
    id: "gal-systems-cert",
    title: "Systems Limited CADM Certification",
    category: "Development",
    image: "/images/certificates/systems-limited.png",
    description: "PK Cloud App Dev & Maintenance internship credential from Systems Limited.",
    aspect: "portrait",
  },
  {
    id: "gal-webloop-cert",
    title: "Web Loop MERN Stack Certification",
    category: "Development",
    image: "/images/certificates/webloop.png",
    description: "Full-stack MERN engineering & internship completion from Webloop Pvt. Ltd.",
    aspect: "portrait",
  },
  {
    id: "gal-uconnect-cert",
    title: "uConnect Frontend Certification",
    category: "Development",
    image: "/images/certificates/uconnect.jpg",
    description: "Frontend web development course completion under uConnect Skill Development.",
    aspect: "landscape",
  },
  {
    id: "gal-ai-construction",
    title: "AI 3D Construction & Infrastructure",
    category: "Projects",
    image: "/images/projects/ai-construction-3d.svg",
    description: "12-module FYP: Procedural 3D land topology, electrical routing, and sewage piping.",
    aspect: "landscape",
  },
];

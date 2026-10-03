export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  shortDescription: string;
  highlights: string[];
  technologies: string[];
  logo: string;
  certificateImage?: string;
  certificateTitle?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "systems-limited",
    organization: "Systems Limited",
    role: "Cloud Application Development & Maintenance (CADM) Intern",
    period: "July 2026 – August 2026",
    location: "Lahore, Pakistan (Enterprise HQ)",
    shortDescription:
      "Engineered enterprise cloud application modules using modern .NET and ABP.io, learning high-scale software methodologies and cloud maintenance practices within Pakistan's premier global IT enterprise.",
    highlights: [
      "Worked with the ABP.io framework on enterprise-grade .NET architectures and modular service design.",
      "Implemented robust C# backend services following clean architecture and Domain-Driven Design (DDD) principles.",
      "Gained firsthand experience with enterprise software lifecycle methodologies, QA review cycles, and cloud deployment procedures.",
      "Participated in PK Cloud App Dev & Maintenance team workflows, integrating secure database access and cloud APIs.",
    ],
    technologies: [
      "ABP.io",
      ".NET",
      "C#",
      "Cloud Architecture",
      "Enterprise Concepts",
      "REST APIs",
      "SQL Server",
    ],
    logo: "/images/companies/systems-limited.png",
    certificateImage: "/images/certificates/systems-limited.png",
    certificateTitle: "PK Cloud App Dev & Maintenance Internship",
  },
  {
    id: "webloop",
    organization: "Webloop Pvt. Ltd.",
    role: "MERN Stack Development Training & Internship",
    period: "February 2025 – August 2025",
    location: "Rawalpindi, Pakistan",
    shortDescription:
      "Demonstrated end-to-end full-stack development proficiency across MongoDB, Express.js, React.js, and Node.js, delivering complete web applications with secure authentication and RESTful architectures.",
    highlights: [
      "Engineered responsive single-page web applications with React.js and modern state management.",
      "Constructed modular RESTful APIs and middleware using Node.js and Express.js.",
      "Designed and modeled MongoDB schemas with Mongoose, ensuring data integrity and query optimization.",
      "Implemented secure user authentication flows, input validation, and rigorous debugging workflows.",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "RESTful APIs",
      "JWT Auth",
      "Full-Stack Dev",
    ],
    logo: "/images/companies/webloop.png",
    certificateImage: "/images/certificates/webloop.png",
    certificateTitle: "MERN Stack Development Program",
  },
  {
    id: "uconnect",
    organization: "uConnect Technologies",
    role: "Front-End Development — Skill Development Program",
    period: "August 2024 – November 2024",
    location: "Pakistan",
    shortDescription:
      "Intensive 3-month front-end development program focusing on modern semantic HTML5, advanced CSS3 styling systems, and dynamic JavaScript user interface implementations.",
    highlights: [
      "Mastered responsive web fundamentals, CSS Flexbox, Grid, and mobile-first layout patterns.",
      "Developed interactive UI elements, DOM manipulation scripts, and asynchronous event logic in JavaScript.",
      "Built cross-browser compatible client layouts following clean code and accessibility principles.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web",
      "UI/UX Best Practices",
      "Git",
    ],
    logo: "/images/companies/uconnect.png",
    certificateImage: "/images/certificates/uconnect.jpg",
    certificateTitle: "Web Development Course Completion",
  },
];

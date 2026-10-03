export interface CertificationItem {
  id: string;
  organization: string;
  title: string;
  logo: string;
  certificate: string;
  date: string;
  issueDate: string;
  skills: string[];
  credentialId?: string;
  description: string;
}

export const certifications: CertificationItem[] = [
  {
    id: "systems-limited-cadm",
    organization: "Systems Limited",
    title: "Cloud Application Development & Maintenance (CADM)",
    logo: "/images/companies/systems-limited.png",
    certificate: "/images/certificates/systems-limited.png",
    date: "2026",
    issueDate: "September 7, 2026",
    credentialId: "No.SL/PERS/Intern/36558",
    skills: [
      "ABP.io",
      ".NET",
      "C#",
      "Cloud Architecture",
      "Enterprise Methodologies",
      "Software QA",
    ],
    description:
      "Awarded by Systems Limited for successfully completing the PK Cloud App Dev & Maintenance internship program, demonstrating expertise in enterprise cloud engineering, modern C#, and ABP.io architecture.",
  },
  {
    id: "webloop-mern",
    organization: "Web Loop",
    title: "MERN Stack Development",
    logo: "/images/companies/webloop.png",
    certificate: "/images/certificates/webloop.png",
    date: "2026",
    issueDate: "January 7, 2026",
    credentialId: "71501-0397823-7",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "RESTful APIs",
      "Database Design",
      "Authentication",
    ],
    description:
      "Certification of completion for the rigorous MERN Stack Development training and internship program at Webloop Pvt. Ltd., demonstrating end-to-end full-stack web engineering, API design, and authentication.",
  },
  {
    id: "uconnect-frontend",
    organization: "UConnect Technologies",
    title: "Front-End Development",
    logo: "/images/companies/uconnect.png",
    certificate: "/images/certificates/uconnect.jpg",
    date: "2024",
    issueDate: "December 16, 2024",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Layouts",
      "DOM Manipulation",
      "UI Engineering",
    ],
    description:
      "Successfully completed the 3-month comprehensive Web Development course under the uConnect Skill Development Program, establishing foundational excellence in semantic markup, modern CSS, and responsive interfaces.",
  },
];

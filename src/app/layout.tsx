import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khalidabbas.dev"),
  title: "Khalid Abbas Barcha — Codes & Chords | Work, No Word",
  description:
    "Portfolio of Khalid Abbas Barcha — Full-stack developer (.NET, ABP.io, MERN), AI systems architect, Rubabist, and mountaineer from Islamabad & Gilgit, Pakistan. Work, No Word.",
  keywords: [
    "Khalid Abbas Barcha",
    "Barcha",
    "Full-Stack Developer",
    "Codes and Chords",
    "Work No Word",
    "Gilgit Baltistan",
    "Rubabist",
    "Rubab Tuner",
    "Next.js",
    ".NET",
    "ABP.io",
    "MERN Stack",
    "High Altitude Mountaineering",
  ],
  authors: [{ name: "Khalid Abbas Barcha", url: "https://github.com/carlitobarcha" }],
  creator: "Khalid Abbas Barcha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khalidabbas.dev",
    siteName: "Khalid Abbas Barcha Portfolio",
    title: "Khalid Abbas Barcha — Codes & Chords | Work, No Word",
    description:
      "Work, No Word. Full-stack cloud systems, AI construction 3D modeling, high-altitude expeditions, and acoustic Rubab craft.",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 1500,
        alt: "Khalid Abbas Barcha — Official Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Abbas Barcha — Codes & Chords | Work, No Word",
    description:
      "Work, No Word. Full-stack cloud systems, AI construction 3D modeling, high-altitude expeditions, and acoustic Rubab craft.",
    images: ["/images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#181819] text-[#D2D2D4] selection:bg-[#C9A86A]/20 selection:text-[#DFBA73] antialiased">
        {children}
      </body>
    </html>
  );
}

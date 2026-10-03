import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Adventure from "@/components/Adventure";
import MusicJourney from "@/components/MusicJourney";
import RubabSection from "@/components/RubabSection";
import Gallery from "@/components/Gallery";
import GitHubPresence from "@/components/GitHubPresence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#181819] text-[#D2D2D4] selection:bg-[#C9A86A]/25 selection:text-[#DFBA73]">
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Adventure />
        <MusicJourney />
        <RubabSection />
        <Gallery />
        <GitHubPresence />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

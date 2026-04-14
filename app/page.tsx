import { personalInfo } from "@/lib/data";

// Background components
import AnimatedMesh from "@/components/background/AnimatedMesh";
import MouseGradient from "@/components/background/MouseGradient";
import ParticleSystem from "@/components/background/ParticleSystem";
import GrainOverlay from "@/components/background/GrainOverlay";

// UI components
import CustomCursor from "@/components/CustomCursor";

// Section components
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ProjectCarousel from "@/components/sections/ProjectCarousel";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Profile from "@/components/sections/Profile";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: "https://aashsinghjat.vercel.app",
    sameAs: [personalInfo.linkedin, personalInfo.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Background layers */}
      <AnimatedMesh />
      <MouseGradient />
      <ParticleSystem />
      <GrainOverlay />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <ProjectCarousel />
        <Experience />
        <Testimonials />
        <Profile />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

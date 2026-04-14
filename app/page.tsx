import { personalInfo } from "@/lib/data";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WorkExperience from "@/components/sections/WorkExperience";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: "https://portfolio-aashsinghjat.vercel.app",
    sameAs: [personalInfo.linkedin, personalInfo.github],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <FeaturedProjects />
        <WorkExperience />
        <Testimonials />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

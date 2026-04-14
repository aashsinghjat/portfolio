import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WorkExperience from "@/components/sections/WorkExperience";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <WorkExperience />
      <Testimonials />
      <About />
      <Skills />
    </main>
  );
}

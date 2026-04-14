import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WorkExperience from "@/components/sections/WorkExperience";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <WorkExperience />
      <Testimonials />
    </main>
  );
}

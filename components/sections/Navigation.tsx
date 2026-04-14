'use client';

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border-primary bg-background/80 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Left: Name */}
        <div className="text-lg font-bold tracking-wide text-foreground">
          AASH SINGH JAT
        </div>

        {/* Right: Nav links - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-foreground-tertiary uppercase tracking-wide">
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('profile')}
            className="hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile: Show simplified version */}
        <div className="md:hidden text-sm font-semibold text-foreground-tertiary uppercase tracking-wide">
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-foreground transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

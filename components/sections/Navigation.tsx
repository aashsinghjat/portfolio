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
        <div className="text-lg font-bold tracking-wide text-accent-cyan">
          AASH SINGH JAT
        </div>

        {/* Right: Nav links - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-foreground-tertiary uppercase tracking-wide">
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="hover:text-accent-cyan transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('experience')}
            className="hover:text-accent-cyan transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
          >
            Experience
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('profile')}
            className="hover:text-accent-cyan transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('skills')}
            className="hover:text-accent-cyan transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="hover:text-accent-cyan transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
          >
            Contact
          </button>
        </div>

        {/* Mobile: Show simplified version */}
        <div className="md:hidden text-sm font-semibold text-foreground-tertiary uppercase tracking-wide">
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="hover:text-accent-cyan transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

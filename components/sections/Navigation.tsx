'use client';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border-primary bg-background/80 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Left: Name */}
        <div className="text-lg font-semibold text-foreground">
          aash singh jat
        </div>

        {/* Right: Nav links - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex gap-8 text-sm text-foreground-tertiary">
          <a
            href="#projects"
            className="hover:text-foreground transition-colors duration-200"
          >
            projects
          </a>
          <a
            href="#experience"
            className="hover:text-foreground transition-colors duration-200"
          >
            experience
          </a>
          <a
            href="#skills"
            className="hover:text-foreground transition-colors duration-200"
          >
            skills
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors duration-200"
          >
            contact
          </a>
        </div>

        {/* Mobile: Show simplified version */}
        <div className="md:hidden text-sm text-foreground-tertiary">
          <a href="#contact" className="hover:text-foreground transition-colors">
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiGooglechrome,
  SiStorybook,
  SiLighthouse,
  SiWebpack,
  SiRedux,
  SiVuedotjs,
  SiAngular,
  SiOpenai,
  SiGithubcopilot,
  SiVisualstudiocode,
  SiMicrosoftazure,
  SiNodedotjs,
  SiSwagger,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiJest,
  SiTestinglibrary,
  SiVitest,
  SiEslint,
  SiGooglecloud,
  SiFirebase,
  SiGithubactions,
  SiPwa,
  SiDocker,
  SiGit,
  SiJira,
} from 'react-icons/si';

// Skill icon mapping - using react-icons
const skillIcons: Record<string, IconType> = {
  // Primary Frontend
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'JavaScript (ES6+)': SiJavascript,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,

  // Styling & Design
  'SCSS': SiSass,
  'Tailwind CSS': SiTailwindcss,
  'Responsive Design': SiGooglechrome,
  'Design Systems': SiStorybook,
  'Accessibility (WCAG)': SiStorybook,

  // Performance
  'Performance Optimization': SiLighthouse,
  'Core Web Vitals': SiGooglechrome,
  'SSR/SSG': SiNextdotjs,
  'Code Splitting': SiWebpack,
  'Lazy Loading': SiWebpack,
  'Bundle Optimization': SiWebpack,

  // State Management
  'Redux': SiRedux,
  'Context API': SiReact,
  'Vuex': SiVuedotjs,
  'Vue.js': SiVuedotjs,
  'Angular': SiAngular,

  // AI & Modern Dev
  'AI-assisted Development': SiOpenai,
  'Cursor': SiVisualstudiocode,
  'GitHub Copilot': SiGithubcopilot,
  'Azure AI SDK': SiMicrosoftazure,
  'Prompt Engineering': SiOpenai,

  // Backend
  'Node.js': SiNodedotjs,
  'REST APIs': SiSwagger,
  'PostgreSQL': SiPostgresql,
  'Prisma ORM': SiPrisma,
  'API Integration': SiPostman,

  // Testing
  'Jest': SiJest,
  'React Testing Library': SiTestinglibrary,
  'Unit Testing': SiVitest,
  'TDD': SiTestinglibrary,
  'Clean Code Practices': SiEslint,

  // Cloud & DevOps
  'Azure': SiMicrosoftazure,
  'GCP': SiGooglecloud,
  'Firebase': SiFirebase,
  'CI/CD Pipelines': SiGithubactions,
  'Service Workers': SiPwa,
  'Docker': SiDocker,

  // Tools
  'Git': SiGit,
  'Jira': SiJira,
  'Postman': SiPostman,
  'VS Code': SiVisualstudiocode,
  'Agile/Scrum': SiJira,

  // Fallback
  'Default': SiReact
};

const getSkillIcon = (skillName: string) => {
  return skillIcons[skillName] || skillIcons['Default'];
};

export default function SolarSystem() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (e.clientX - centerX) / 50;
      const offsetY = (e.clientY - centerY) / 50;
      setMousePosition({ x: offsetX, y: offsetY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Select skills for display
  const primarySkills = skills.filter(s => s.category === 'primary');

  // Expanded secondary skills
  const importantSecondarySkills = [
    'Node.js',
    'PostgreSQL',
    'Redux',
    'Jest',
    'Azure',
    'Git',
    'Performance Optimization',
    'AI-assisted Development',
    'SCSS',
    'Vue.js',
    'Prisma ORM',
    'Firebase',
    'Docker',
    'GitHub Copilot',
    'CI/CD Pipelines'
  ];

  const secondarySkills = skills.filter(s =>
    s.category === 'secondary' && importantSecondarySkills.includes(s.name)
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="relative w-full max-w-[1400px] h-[800px]">
        {/* Center - Main greeting */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`
          }}
        >
          <motion.div
            animate={{
              scale: isHovering ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-accent-cyan/20 blur-3xl rounded-full" />

            <div className="relative bg-[#0a0a0a] border-2 border-accent-cyan/30 rounded-full p-12 md:p-16 backdrop-blur-sm">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-5xl font-light text-foreground mb-2"
              >
                Hello, I&apos;m{' '}
                <span className="font-bold text-accent-cyan">Aash</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-foreground-tertiary"
              >
                Senior Frontend Developer
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Inner orbit - Primary skills */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {primarySkills.map((skill, index) => {
            const angle = (index / primarySkills.length) * Math.PI * 2;
            const radius = 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const delay = index * 0.1;

            return (
              <motion.div
                key={skill.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.8 + delay,
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
              >
                <motion.div
                  animate={{
                    x: x + mousePosition.x * 2,
                    y: y + mousePosition.y * 2,
                    rotate: 360
                  }}
                  transition={{
                    x: { duration: 0.3 },
                    y: { duration: 0.3 },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className="group relative -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative bg-[#0a0a0a]/60 border border-white/20 rounded-full p-3.5 hover:border-white/50 hover:bg-[#0a0a0a]/80 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                    <div className="w-10 h-10 flex items-center justify-center">
                      {(() => {
                        const Icon = getSkillIcon(skill.name);
                        return <Icon className="w-6 h-6 text-white/70" />;
                      })()}
                    </div>

                    {/* Skill label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-foreground-secondary bg-[#0a0a0a] px-2 py-1 rounded border border-border-accent">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Outer orbit - Secondary skills */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {secondarySkills.map((skill, index) => {
            const angle = (index / secondarySkills.length) * Math.PI * 2;
            const radius = 320;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const delay = index * 0.08;

            return (
              <motion.div
                key={skill.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 1.2 + delay,
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
              >
                <motion.div
                  animate={{
                    x: x + mousePosition.x * 3,
                    y: y + mousePosition.y * 3,
                    rotate: -360
                  }}
                  transition={{
                    x: { duration: 0.3 },
                    y: { duration: 0.3 },
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                  }}
                  className="group relative -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative bg-[#0a0a0a]/60 border border-white/20 rounded-full p-3 hover:border-white/50 hover:bg-[#0a0a0a]/80 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                    <div className="w-8 h-8 flex items-center justify-center">
                      {(() => {
                        const Icon = getSkillIcon(skill.name);
                        return <Icon className="w-5 h-5 text-white/60" />;
                      })()}
                    </div>

                    {/* Skill label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-foreground-tertiary bg-[#0a0a0a] px-2 py-1 rounded border border-border-accent">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Orbit rings - multiple decorative circles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] border border-white/8 rounded-full pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.7 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/6 rounded-full pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ delay: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[960px] h-[960px] border border-white/5 rounded-full pointer-events-none"
        />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-foreground-tertiary uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-accent-cyan/30 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-accent-cyan rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

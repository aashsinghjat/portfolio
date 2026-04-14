'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

// Skill icon mapping - using SimpleIcons CDN
const skillIcons: Record<string, string> = {
  // Primary Frontend
  'React.js': 'https://cdn.simpleicons.org/react/00D9FF',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/00D9FF',
  'TypeScript': 'https://cdn.simpleicons.org/typescript/00D9FF',
  'JavaScript (ES6+)': 'https://cdn.simpleicons.org/javascript/00D9FF',
  'HTML5': 'https://cdn.simpleicons.org/html5/00D9FF',
  'CSS3': 'https://cdn.simpleicons.org/css3/00D9FF',

  // Styling & Design
  'SCSS': 'https://cdn.simpleicons.org/sass/00D9FF',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/00D9FF',
  'Responsive Design': 'https://cdn.simpleicons.org/responsive/00D9FF',
  'Design Systems': 'https://cdn.simpleicons.org/figma/00D9FF',
  'Accessibility (WCAG)': 'https://cdn.simpleicons.org/accessibility/00D9FF',

  // Performance
  'Performance Optimization': 'https://cdn.simpleicons.org/lighthouse/00D9FF',
  'Core Web Vitals': 'https://cdn.simpleicons.org/googlechrome/00D9FF',
  'SSR/SSG': 'https://cdn.simpleicons.org/nextdotjs/00D9FF',
  'Code Splitting': 'https://cdn.simpleicons.org/webpack/00D9FF',
  'Lazy Loading': 'https://cdn.simpleicons.org/webpack/00D9FF',
  'Bundle Optimization': 'https://cdn.simpleicons.org/webpack/00D9FF',

  // State Management
  'Redux': 'https://cdn.simpleicons.org/redux/00D9FF',
  'Context API': 'https://cdn.simpleicons.org/react/00D9FF',
  'Vuex': 'https://cdn.simpleicons.org/vuedotjs/00D9FF',
  'Vue.js': 'https://cdn.simpleicons.org/vuedotjs/00D9FF',
  'Angular': 'https://cdn.simpleicons.org/angular/00D9FF',

  // AI & Modern Dev
  'AI-assisted Development': 'https://cdn.simpleicons.org/openai/00D9FF',
  'Cursor': 'https://cdn.simpleicons.org/cursor/00D9FF',
  'GitHub Copilot': 'https://cdn.simpleicons.org/githubcopilot/00D9FF',
  'Azure AI SDK': 'https://cdn.simpleicons.org/microsoftazure/00D9FF',
  'Prompt Engineering': 'https://cdn.simpleicons.org/chatbot/00D9FF',

  // Backend
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/00D9FF',
  'REST APIs': 'https://cdn.simpleicons.org/fastapi/00D9FF',
  'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/00D9FF',
  'Prisma ORM': 'https://cdn.simpleicons.org/prisma/00D9FF',
  'API Integration': 'https://cdn.simpleicons.org/postman/00D9FF',

  // Testing
  'Jest': 'https://cdn.simpleicons.org/jest/00D9FF',
  'React Testing Library': 'https://cdn.simpleicons.org/testinglibrary/00D9FF',
  'Unit Testing': 'https://cdn.simpleicons.org/jest/00D9FF',
  'TDD': 'https://cdn.simpleicons.org/testinglibrary/00D9FF',
  'Clean Code Practices': 'https://cdn.simpleicons.org/eslint/00D9FF',

  // Cloud & DevOps
  'Azure': 'https://cdn.simpleicons.org/microsoftazure/00D9FF',
  'GCP': 'https://cdn.simpleicons.org/googlecloud/00D9FF',
  'Firebase': 'https://cdn.simpleicons.org/firebase/00D9FF',
  'CI/CD Pipelines': 'https://cdn.simpleicons.org/githubactions/00D9FF',
  'Service Workers': 'https://cdn.simpleicons.org/pwa/00D9FF',
  'Docker': 'https://cdn.simpleicons.org/docker/00D9FF',

  // Tools
  'Git': 'https://cdn.simpleicons.org/git/00D9FF',
  'Jira': 'https://cdn.simpleicons.org/jira/00D9FF',
  'Postman': 'https://cdn.simpleicons.org/postman/00D9FF',
  'VS Code': 'https://cdn.simpleicons.org/visualstudiocode/00D9FF',
  'Agile/Scrum': 'https://cdn.simpleicons.org/scrumalliance/00D9FF',

  // Fallback
  'Default': 'https://cdn.simpleicons.org/sparkles/00D9FF'
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

  const primarySkills = skills.filter(s => s.category === 'primary');
  const secondarySkills = skills.filter(s => s.category === 'secondary').slice(0, 12);

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
            const radius = 220;
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
                  <div className="relative bg-[#111111] border border-accent-cyan/40 rounded-full p-4 hover:border-accent-cyan hover:scale-110 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={getSkillIcon(skill.name)}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>

                    {/* Skill label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-foreground-secondary bg-[#0a0a0a] px-2 py-1 rounded border border-border-accent">
                        {skill.name}
                      </span>
                    </div>

                    {/* Glow on hover */}
                    <div className="absolute inset-0 bg-accent-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
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
            const radius = 380;
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
                  <div className="relative bg-[#111111] border border-border-accent rounded-full p-3 hover:border-accent-cyan/60 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img
                        src={getSkillIcon(skill.name)}
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    {/* Skill label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-foreground-tertiary bg-[#0a0a0a] px-2 py-1 rounded border border-border-accent">
                        {skill.name}
                      </span>
                    </div>

                    {/* Subtle glow */}
                    <div className="absolute inset-0 bg-accent-cyan/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Orbit rings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] border border-accent-cyan/10 rounded-full pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.7 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] border border-accent-cyan/10 rounded-full pointer-events-none"
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

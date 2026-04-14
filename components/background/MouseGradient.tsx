'use client';

import { useEffect, useRef } from 'react';

export default function MouseGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth lag effect
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      if (gradientRef.current) {
        gradientRef.current.style.background =
          `radial-gradient(600px circle at ${currentX}px ${currentY}px, rgba(255, 255, 255, 0.04), transparent 40%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={gradientRef}
      className="mouse-gradient pointer-events-none fixed inset-0 z-10"
      style={{ mixBlendMode: 'soft-light' }}
    />
  );
}

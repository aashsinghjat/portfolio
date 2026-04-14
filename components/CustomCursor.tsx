'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number>();
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      // Calculate velocity for spring effect
      setVelocity({
        x: newX - lastPos.current.x,
        y: newY - lastPos.current.y,
      });

      lastPos.current = { x: newX, y: newY };
      setPosition({ x: newX, y: newY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Smooth spring-like follow animation for the ring
  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let currentVelocity = { x: 0, y: 0 };

    const animateRing = () => {
      setRingPosition(prev => {
        // Spring physics
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;

        // Add spring force
        currentVelocity.x += dx * 0.08;
        currentVelocity.y += dy * 0.08;

        // Add damping
        currentVelocity.x *= 0.85;
        currentVelocity.y *= 0.85;

        return {
          x: prev.x + currentVelocity.x,
          y: prev.y + currentVelocity.y,
        };
      });
      rafRef.current = requestAnimationFrame(animateRing);
    };

    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [position]);

  // Calculate stretch effect based on velocity
  const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
  const stretch = Math.min(speed / 50, 0.5);

  return (
    <>
      {/* Cursor glow/ring - follows with spring physics */}
      <div
        className="custom-cursor-ring"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: isHovering
            ? 'translate(-50%, -50%) scale(1.8)'
            : `translate(-50%, -50%) scale(${1 + stretch * 0.3})`,
          transition: isHovering ? 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
        }}
      />
      {/* Main cursor dot - instant response with slight stretch */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${1 + stretch * 0.2})`,
        }}
      />
    </>
  );
}

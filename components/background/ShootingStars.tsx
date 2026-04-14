'use client';

import { useEffect, useRef } from 'react';

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
  active: boolean;
}

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const stars: ShootingStar[] = [];
    const maxStars = 3;

    // Create shooting star
    const createStar = (): ShootingStar => {
      const canvasWidth = canvas?.width || window.innerWidth;
      const canvasHeight = canvas?.height || window.innerHeight;

      return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight * 0.5, // Start from upper half
        length: Math.random() * 80 + 60, // 60-140px trail
        speed: Math.random() * 3 + 4, // 4-7 speed
        opacity: Math.random() * 0.5 + 0.5,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5, // Around 45 degrees
        active: true
      };
    };

    let animationFrameId: number;
    let lastStarTime = 0;

    function animate(currentTime: number) {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new stars randomly
      if (currentTime - lastStarTime > 3000 && stars.length < maxStars) {
        if (Math.random() < 0.3) {
          stars.push(createStar());
          lastStarTime = currentTime;
        }
      }

      // Update and draw stars
      stars.forEach((star, index) => {
        if (!star.active) return;

        // Move star
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        // Fade out
        star.opacity -= 0.008;

        // Remove if off screen or faded
        if (
          star.opacity <= 0 ||
          star.x > canvas.width + 100 ||
          star.y > canvas.height + 100
        ) {
          stars.splice(index, 1);
          return;
        }

        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );

        gradient.addColorStop(0, `rgba(0, 217, 255, ${star.opacity})`);
        gradient.addColorStop(0.1, `rgba(0, 217, 255, ${star.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(0, 217, 255, ${star.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );
        ctx.stroke();

        // Draw star head glow
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, 8
        );
        glowGradient.addColorStop(0, `rgba(0, 217, 255, ${star.opacity})`);
        glowGradient.addColorStop(0.3, `rgba(0, 217, 255, ${star.opacity * 0.5})`);
        glowGradient.addColorStop(1, 'rgba(0, 217, 255, 0)');

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright core
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="shooting-stars pointer-events-none fixed inset-0 z-5"
    />
  );
}

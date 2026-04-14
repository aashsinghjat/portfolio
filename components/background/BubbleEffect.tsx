'use client';

import { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export default function BubbleEffect() {
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

    const bubbles: Bubble[] = [];
    const bubbleCount = 15;

    // Initialize bubbles
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 30, // 30-90px bubbles
        speedY: -(Math.random() * 0.5 + 0.3), // Float upward
        speedX: (Math.random() - 0.5) * 0.3, // Gentle drift
        opacity: Math.random() * 0.15 + 0.05,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    let animationFrameId: number;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach(bubble => {
        // Update position
        bubble.y += bubble.speedY;
        bubble.x += bubble.speedX;

        // Update pulse
        bubble.pulsePhase += bubble.pulseSpeed;
        const pulse = Math.sin(bubble.pulsePhase) * 0.1 + 1; // 0.9 to 1.1

        // Respawn at bottom when floats off top
        if (bubble.y + bubble.size < 0) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }
        if (bubble.x < -bubble.size || bubble.x > canvas.width + bubble.size) {
          bubble.x = Math.random() * canvas.width;
        }

        const currentSize = bubble.size * pulse;

        // Draw bubble with gradient
        const gradient = ctx.createRadialGradient(
          bubble.x, bubble.y, 0,
          bubble.x, bubble.y, currentSize
        );

        gradient.addColorStop(0, `rgba(0, 217, 255, ${bubble.opacity * 0.3})`);
        gradient.addColorStop(0.4, `rgba(0, 217, 255, ${bubble.opacity * 0.15})`);
        gradient.addColorStop(0.7, `rgba(0, 217, 255, ${bubble.opacity * 0.05})`);
        gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, currentSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw bubble rim
        ctx.strokeStyle = `rgba(0, 217, 255, ${bubble.opacity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, currentSize * 0.85, 0, Math.PI * 2);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

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
      className="bubble-effect pointer-events-none fixed inset-0 z-15"
      style={{ opacity: 0.6 }}
    />
  );
}

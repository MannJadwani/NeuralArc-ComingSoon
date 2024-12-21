'use client';

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // AI-themed symbols
    const symbols = [
      'λ', '∑', '∆', '⌘', '⚡', '◉', '◈', '⬡', '⬢', '⌬',
      '01', '10', 'AI', '∞', '⚛', '⟁', '⟐', '⟡', '⟢', '⟣'
    ];

    // Particle system
    const particles: Particle[] = [];
    const particleCount = 40;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      symbol: string;
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 14 + 8,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `rgba(147, 51, 234, ${Math.random() * 0.5 + 0.2})`, // Purple
        symbol: symbols[Math.floor(Math.random() * symbols.length)]
      });
    }

    // Animation
    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'; // Dark blue background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw AI symbols
        ctx.font = `${particle.size}px monospace`;
        ctx.fillStyle = particle.color;
        ctx.fillText(particle.symbol, particle.x, particle.y);
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, 'rgba(147, 51, 234, 0.1)'); // Purple
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)'); // Blue
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default AnimatedBackground; 
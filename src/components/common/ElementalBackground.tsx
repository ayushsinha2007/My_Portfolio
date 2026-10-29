import React, { useEffect, useRef } from 'react';

export const ElementalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle particles: blue water droplets and restrained orange embers
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeRate: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth < 768 ? 24 : 45, 50);

    const colors = [
      'rgba(0, 240, 255, ',   // Electric cyan
      'rgba(56, 189, 248, ',  // Water blue
      'rgba(249, 115, 22, ',  // Restrained ember
      'rgba(99, 102, 241, '   // Indigo
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.6 - 0.2, // Drift upward like gentle embers/water motes
        opacity: Math.random() * 0.6 + 0.2,
        fadeRate: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ambient glow orbs
      const cyanGradient = ctx.createRadialGradient(width * 0.8, height * 0.2, 10, width * 0.8, height * 0.2, 450);
      cyanGradient.addColorStop(0, 'rgba(0, 240, 255, 0.04)');
      cyanGradient.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = cyanGradient;
      ctx.fillRect(0, 0, width, height);

      const emberGradient = ctx.createRadialGradient(width * 0.2, height * 0.7, 10, width * 0.2, height * 0.7, 400);
      emberGradient.addColorStop(0, 'rgba(249, 115, 22, 0.025)');
      emberGradient.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = emberGradient;
      ctx.fillRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        // Draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.speedX;
          p.y += p.speedY;
          p.opacity += p.fadeRate;

          if (p.opacity > 0.85 || p.opacity < 0.15) {
            p.fadeRate = -p.fadeRate;
          }

          if (p.y < 0) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity.toFixed(2)})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color === colors[2] ? 'rgba(249, 115, 22, 0.5)' : 'rgba(0, 240, 255, 0.5)';
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:48px_48px] opacity-25" />
      
      {/* Atmospheric radial gradient */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />

      {/* Decorative Water Breathing Wave SVG Ribbon */}
      <svg
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] text-cyan-500/10 animate-water-flow pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M 50,200 Q 120,80 200,200 T 350,200"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          fill="none"
        />
        <path
          d="M 30,220 Q 130,120 220,220 T 370,220"
          stroke="rgba(56, 189, 248, 0.12)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <svg
        className="absolute top-2/3 -left-40 w-[500px] h-[500px] text-arc-ember/5 animate-ember-float pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      {/* Canvas for dynamic particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

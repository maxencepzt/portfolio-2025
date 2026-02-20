import { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

interface ParticleCanvasProps {
  gravityMode: boolean;
}

const ParticleCanvas = ({ gravityMode }: ParticleCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isPressed: false });
  const animationRef = useRef<number>(0);

  const createParticle = useCallback((x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 0.4 + 0.1;
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.3 + 0.08,
    };
  }, []);

  const initParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 18000);

      for (let i = 0; i < particleCount; i++) {
        particles.push(
          createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }

      particlesRef.current = particles;
    },
    [createParticle]
  );

  const updateParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      const { width, height } = canvas;
      const mouse = mouseRef.current;
      const gravity = gravityMode ? -0.02 : 0.008;

      particlesRef.current.forEach((particle) => {
        particle.vy += gravity;

        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const force = (120 - distance) / 120;
          const angle = Math.atan2(dy, dx);

          if (mouse.isPressed) {
            particle.vx += Math.cos(angle) * force * 0.3;
            particle.vy += Math.sin(angle) * force * 0.3;
          } else {
            particle.vx -= Math.cos(angle) * force * 0.15;
            particle.vy -= Math.sin(angle) * force * 0.15;
          }
        }

        // Friction
        particle.vx *= 0.995;
        particle.vy *= 0.995;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
      });
    },
    [gravityMode]
  );

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    // Draw particles as subtle gray dots
    particlesRef.current.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(148, 163, 184, ${particle.alpha})`;
      ctx.fill();
    });

    // Draw connections between nearby particles
    const particles = particlesRef.current;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(148, 163, 184, ${0.08 * (1 - distance / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas completely (transparent)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateParticles(canvas);
    drawParticles(ctx);

    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseDown = () => {
      mouseRef.current.isPressed = true;
    };

    const handleMouseUp = () => {
      mouseRef.current.isPressed = false;
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [animate, initParticles]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-auto" />
  );
};

export default ParticleCanvas;

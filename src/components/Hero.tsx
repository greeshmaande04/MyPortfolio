import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Mail, Phone, Linkedin } from 'lucide-react';

const roles = [
  'Frontend Developer',
  'ECE Graduate',
  'Web Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 181, 246, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(30, 77, 140, ${0.3 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-[#1e4d8c]/20 rotate-slow" />
      <div className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full border border-[#64b5f6]/10 rotate-slow" style={{ animationDirection: 'reverse' }} />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-[#64b5f6]/30 float-anim" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-[#1e4d8c]/50 float-anim" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e4d8c]/40 bg-[#1e4d8c]/10 text-[#64b5f6] text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#64b5f6] animate-pulse" />
          Available for Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight section-title">
          Greeshma{' '}
          <span className="gradient-text">Ande</span>
        </h1>

        {/* Typewriter */}
        <div className="text-xl md:text-2xl text-[#8892b0] mb-8 h-8 font-light">
          <span className="text-[#64b5f6] font-medium typewriter-cursor">{displayed}</span>
        </div>

        {/* Short bio */}
        <p className="text-[#8892b0] text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Electronics & Communication Engineering graduate passionate about building
          responsive, elegant web experiences with clean code and thoughtful design.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-[#1e4d8c] hover:bg-[#2563b0] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1e4d8c]/40 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-[#1e4d8c]/60 hover:border-[#64b5f6] text-[#64b5f6] font-medium rounded-lg transition-all duration-300 hover:bg-[#1e4d8c]/10 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        {/* Contact chips */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#8892b0]">
          <a href="tel:+919391368605" className="flex items-center gap-2 hover:text-[#64b5f6] transition-colors">
            <Phone size={14} /> +91 9391368605
          </a>
          <span className="w-1 h-1 rounded-full bg-[#1e4d8c]" />
          <a href="mailto:greeshmaande04@gmail.com" className="flex items-center gap-2 hover:text-[#64b5f6] transition-colors">
            <Mail size={14} /> greeshmaande04@gmail.com
          </a>
          <span className="w-1 h-1 rounded-full bg-[#1e4d8c]" />
          <a href="https://linkedin.com/in/greeshma-ande" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#64b5f6] transition-colors">
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#8892b0] hover:text-[#64b5f6] transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}

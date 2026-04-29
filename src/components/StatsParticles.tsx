import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import gsap from 'gsap';

const stats = [
  { value: 20, label: "Projects", suffix: "+" },
  { value: 98, label: "Satisfaction", suffix: "%" },
  { value: 3, label: "Experience", suffix: "+ Years" },
  { value: 2026, label: "Future Ready", suffix: "" }
];

function StatItem(props: { stat: typeof stats[0], key?: React.Key }) {
  const { stat } = props;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView && countRef.current) {
      gsap.fromTo(countRef.current, 
        { innerText: 0 },
        { 
          innerText: stat.value, 
          duration: 2, 
          ease: 'power2.out',
          snap: { innerText: 1 },
          onUpdate: function() {
            if (countRef.current) {
              countRef.current.innerText = Math.floor(Number(this.targets()[0].innerText)).toString();
            }
          }
        }
      );
    }
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="text-center space-y-2">
      <div className="text-4xl md:text-6xl font-heading italic text-white">
        <span ref={countRef}>0</span>
        {stat.suffix}
      </div>
      <div className="text-white/40 font-body text-xs uppercase tracking-widest">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    const particleCount = 100;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        ctx!.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section className="relative py-32 px-8 lg:px-32 bg-black overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="liquid-glass rounded-[2rem] p-12 md:p-24 border border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

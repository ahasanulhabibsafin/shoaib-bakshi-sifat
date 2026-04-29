import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useMouseParallax(intensity: number = 20) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * intensity;
      const y = (clientY / innerHeight - 0.5) * intensity;
      
      gsap.to(containerRef.current, {
        x: x,
        y: y,
        duration: 1,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return containerRef;
}

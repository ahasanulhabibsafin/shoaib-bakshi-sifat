import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '@google/model-viewer';
import { ArrowUpRight } from 'lucide-react';
import { getRandomVideo } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [bgVideo, setBgVideo] = useState("");

  useEffect(() => {
    setBgVideo(getRandomVideo());
  }, []);

  useGSAP(() => {
    if (!h1Ref.current) return;

    gsap.to(h1Ref.current, {
      opacity: 0.5,
      y: -20,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Subtle shimmer effect
    gsap.to(h1Ref.current, {
      filter: 'brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.2))',
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  return (
    <section id="hero" ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
      <div className="h-full w-full flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          {bgVideo && (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              key={bgVideo}
              className="w-full h-full object-cover opacity-50"
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 text-center px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="inline-block mb-12"
          >
            <span className="text-[10px] md:text-[11px] uppercase font-body font-semibold text-white/50 border-b border-white/20 pb-2">
              SHOAIB BAKSHI SIFAT — EST. 2025
            </span>
          </motion.div>

          <motion.h1
            ref={h1Ref}
            initial={{ opacity: 0, y: 30, filter: 'blur(20px)' }}
            animate={{ 
              opacity: [0, 1],
              y: 0, 
              filter: ['blur(20px)', 'blur(0px)'],
            }}
            transition={{ 
              duration: 2, 
              delay: 0.4, 
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-white mb-16"
            style={{ 
              fontFamily: '"Instrument Serif", serif', 
              fontSize: 'clamp(3.5rem, 18vw, 12rem)', 
              lineHeight: '0.85',
              letterSpacing: '-0.05em',
              fontWeight: '400',
              fontStyle: 'italic'
            }}
          >
            IT'S ME <br /> SHOAIB
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-left hidden md:block"
            >
              <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-4">Core Philosophy</span>
              <p className="text-white/60 font-body font-light text-xs leading-relaxed italic">
                "Simple is not minimal. Simple is the removal of the redundant."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col items-center gap-8"
            >
              <button className="liquid-glass-strong group relative flex items-center justify-center overflow-hidden rounded-full px-12 py-6 transition-all hover:scale-105 active:scale-95 bg-white text-black font-semibold">
                <span className="relative z-10 text-xs tracking-widest uppercase">Explore Portfolio</span>
              </button>
              
              <div className="flex items-center gap-3 text-white/30 text-[9px] tracking-[0.3em] font-medium uppercase">
                 <div className="w-1 h-1 rounded-full bg-green-400" />
                 DHAKA, BANGLADESH
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-right hidden md:block"
            >
              <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-4">Availability</span>
              <p className="text-white/60 font-body font-light text-xs leading-relaxed">
                Currently open to freelance <br /> opportunities and collaborations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

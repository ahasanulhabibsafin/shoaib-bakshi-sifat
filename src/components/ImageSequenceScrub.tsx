import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { getRandomVideo } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

export default function ImageSequenceScrub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [bgVideo, setBgVideo] = useState("");

  useEffect(() => {
    setBgVideo(getRandomVideo());
  }, []);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=400%',
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });
  }, []);

  const getOverlayContent = () => {
    if (progress < 0.33) {
      return {
        badge: "💡 Inspiration",
        title: "Dream Big",
        subtitle: "The only way to do great work is to love what you do. Your passion is the fuel for your journey.",
      };
    } else if (progress < 0.66) {
      return {
        badge: "🚀 Action",
        title: "Stay Focused",
        subtitle: "Believe you can and you're halfway there. Every step forward, no matter how small, is progress.",
      };
    } else {
      return {
        badge: "🏆 Resilience",
        title: "Never Quit",
        subtitle: "Success is not final, failure is not fatal: it is the courage to continue that counts. Keep pushing.",
      };
    }
  };

  const content = getOverlayContent();

  return (
    <section 
      id="sequence-scrub" 
      ref={containerRef} 
      className="relative h-[400vh] w-full bg-black"
    >
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        {bgVideo && (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            key={bgVideo}
            className="w-full h-full object-cover opacity-60"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </div>

      {/* Overlay Content */}
      <div className="fixed inset-0 z-10 pointer-events-none flex items-center px-8 lg:px-32">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={content.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-auto"
            >
              <div className="liquid-glass rounded-full px-4 py-1 mb-6 w-fit">
                <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-white/80">
                  {content.badge}
                </span>
              </div>
              <h3 className="text-5xl md:text-7xl font-heading italic text-white mb-6 leading-tight">
                {content.title}
              </h3>
              <p className="text-white/60 font-body font-light text-lg mb-8 max-w-md">
                {content.subtitle}
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 text-white flex items-center gap-2 group">
                View Project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Gradient Fades */}
      <div className="fixed inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      <div className="fixed inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
}

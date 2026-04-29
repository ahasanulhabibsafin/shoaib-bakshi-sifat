import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { getRandomVideo } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

export default function AboutScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [bgVideo, setBgVideo] = useState("");

  useEffect(() => {
    setBgVideo(getRandomVideo());
  }, []);

  useGSAP(() => {
    const chars = textRef.current?.querySelectorAll('.reveal-text');
    if (!chars) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: true,
        pin: true,
      }
    });

    // Parallax effect for the video
    if (videoRef.current) {
      tl.to(videoRef.current, {
        yPercent: 15,
        scale: 1.1,
        ease: 'none'
      }, 0);
    }

    // Parallax effect for the heading (moves slower/different rate than video)
    if (headingRef.current) {
      tl.to(headingRef.current, {
        y: -40,
        ease: 'none'
      }, 0);
    }

    tl.from(chars, {
      opacity: 0.1,
      y: 20,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out'
    }, 0);
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {bgVideo && (
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            key={bgVideo}
            className="w-full h-full object-cover opacity-20 grayscale scale-110"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 lg:px-32 overflow-x-auto max-w-full">
        <div className="max-w-5xl">
          <div className="liquid-glass rounded-full px-4 py-1 mb-8 w-fit">
            <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-white/80">
              Who I Am
            </span>
          </div>

          <h2 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-12">
            Creativity meets functionality.
          </h2>

          <div ref={textRef} className="space-y-8 text-lg md:text-xl font-body text-white/80 max-w-2xl">
            <p className="reveal-text font-light leading-relaxed">
              I'm Shoaib Bakshi Sifat, a passionate creator from Bangladesh. 
              Specializing in building modern web applications and impactful graphic designs.
            </p>
            <p className="reveal-text font-light leading-relaxed">
              With a focus on performance and aesthetics, I bridge the gap between 
              complex code and intuitive user experiences.
            </p>
            <p className="reveal-text font-light leading-relaxed">
              Currently a student (SSC 2025), I'm constantly pushing boundaries 
              and exploring the latest in digital craftsmanship.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 liquid-glass p-8 rounded-2xl max-w-md"
          >
            <p className="text-white/80 font-heading italic text-2xl mb-4">
              "Continuous learning. Impactful solutions. No compromises."
            </p>
            <div className="h-px w-12 bg-white/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

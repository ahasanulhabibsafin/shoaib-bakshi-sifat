import { useRef } from 'react';

export default function BottomVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="https://res.cloudinary.com/dpu456bh7/video/upload/v1776193720/nlyto99nwgwboy7dh8vw.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-4xl md:text-6xl font-heading italic text-white tracking-tighter mb-4">
            The Journey Continues.
          </h2>
          <p className="text-white/60 font-body font-light tracking-widest uppercase text-xs">
            © 2025 SIFAT · CREATED WITH PASSION
          </p>
        </div>
      </div>
    </section>
  );
}

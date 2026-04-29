import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Plant AI Platform",
    desc: "An intelligent ecosystem for plant enthusiasts, featuring real-time health monitoring and AI-driven care recommendations.",
    image: "https://picsum.photos/seed/plantai/800/600",
    tags: ["React", "TensorFlow", "IoT"]
  },
  {
    title: "E-commerce Experience",
    desc: "A high-end retail platform designed for luxury brands, focusing on immersive visual storytelling and seamless checkout flows.",
    image: "https://picsum.photos/seed/shop/800/600",
    tags: ["Next.js", "Stripe", "Framer Motion"]
  },
  {
    title: "Branding Identity",
    desc: "Comprehensive visual identity for a tech startup, including logo design, typography systems, and digital brand guidelines.",
    image: "https://picsum.photos/seed/brand/800/600",
    tags: ["Graphic Design", "Brand Strategy"]
  }
];

function ProjectRow(props: { project: typeof projects[0], index: number, key?: React.Key }) {
  const { project, index } = props;
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 py-24 border-b border-white/5 last:border-0`}>
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 space-y-8"
      >
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-body font-medium text-white/40">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-4xl md:text-6xl font-heading italic text-white tracking-tight">
          {project.title}
        </h3>
        <p className="text-white/60 font-body font-light text-lg leading-relaxed max-w-lg">
          {project.desc}
        </p>
        <button className="liquid-glass-strong rounded-full px-8 py-4 text-white flex items-center gap-2 group">
          Explore Case Study
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full aspect-[4/3] rounded-3xl overflow-hidden liquid-glass group relative"
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
          <button className="liquid-glass-strong rounded-full px-8 py-4 text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Project
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectRows() {
  return (
    <section id="work" className="relative py-32 px-8 lg:px-32 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="liquid-glass rounded-full px-4 py-1 mb-6 w-fit">
            <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-white/80">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Crafting digital excellence.
          </h2>
        </div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

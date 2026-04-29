import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Shoaib was a game-changer for our brand. His ability to blend technical expertise with a keen eye for design produced a portfolio that truly stands out.",
    author: "Alex Rivera",
    role: "CEO at TechFlow"
  },
  {
    quote: "The interactive components he built for our platform are not just visually stunning but also incredibly performant. A rare talent in the modern web space.",
    author: "Sarah Chen",
    role: "Product Lead at Nexus Digital"
  },
  {
    quote: "Shoaib's attention to detail and creative problem-solving made the entire development process smooth and exciting. Highly recommended for premium projects.",
    author: "Marcus Thorne",
    role: "Art Director at Studio V"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-32 px-8 lg:px-32 bg-black overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-full px-4 py-1 mb-6 w-fit"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-white/80">
              Kind Words
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass p-8 md:p-12 rounded-[2rem] flex flex-col justify-between group hover:bg-white/5 transition-colors duration-500"
            >
              <div className="mb-8">
                <Quote className="w-8 h-8 text-white/20 mb-6 group-hover:text-white/40 transition-colors" />
                <p className="text-xl md:text-2xl font-body font-light text-white/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div>
                <div className="h-px w-12 bg-white/20 mb-6" />
                <h4 className="text-lg font-heading text-white tracking-wide">
                  {testimonial.author}
                </h4>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

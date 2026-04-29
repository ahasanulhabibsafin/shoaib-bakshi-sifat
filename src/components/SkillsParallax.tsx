import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Code, PenTool, Wrench, Layout, Palette, Zap, BarChart3, Shield } from 'lucide-react';

const skills = [
  {
    title: "Web Development",
    desc: "Building high-performance, scalable web applications with React, Next.js, and modern tech stacks.",
    icon: Code,
    tags: ["React", "TypeScript", "Tailwind", "Node.js"]
  },
  {
    title: "Graphic Design",
    desc: "Creating visually stunning brand identities, social media assets, and marketing materials.",
    icon: PenTool,
    tags: ["Photoshop", "Illustrator", "Figma", "Branding"]
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive user interfaces and seamless experiences with a focus on usability.",
    icon: Layout,
    tags: ["User Flow", "Prototyping", "Wireframing", "Design Systems"]
  },
  {
    title: "Digital Strategy",
    desc: "Helping brands grow their digital presence through data-driven design and development.",
    icon: BarChart3,
    tags: ["SEO", "Performance", "Analytics", "Growth"]
  }
];

function SkillCard(props: { skill: typeof skills[0], index: number, key?: React.Key }) {
  const { skill, index } = props;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="liquid-glass rounded-3xl p-8 group cursor-default"
    >
      <div style={{ transform: "translateZ(50px)" }} className="space-y-6">
        <div className="liquid-glass-strong w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
          <skill.icon className="w-7 h-7" />
        </div>
        
        <h3 className="text-2xl font-heading italic text-white">{skill.title}</h3>
        <p className="text-white/50 font-body font-light text-sm leading-relaxed">
          {skill.desc}
        </p>

        <div className="flex flex-wrap gap-2 pt-4">
          {skill.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-body font-medium text-white/30 border border-white/10 rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsParallax() {
  return (
    <section id="skills" className="relative py-32 px-8 lg:px-32 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="liquid-glass rounded-full px-4 py-1 mb-6 w-fit">
              <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-white/80">
                Skills & Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
              Tools of the trade.
            </h2>
          </div>
          <p className="text-white/40 font-body font-light max-w-xs text-sm">
            Combining technical proficiency with creative vision to deliver exceptional digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

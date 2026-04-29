import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Zap, Cpu } from 'lucide-react';

const tools = [
  {
    name: "SilverBullet",
    description: "Advanced automation and web testing suite for complex workflows.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-silver-400 to-slate-600"
  },
  {
    name: "OpenBullet",
    description: "Versatile suite for web scraping, data parsing, and automated testing.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-blue-400 to-indigo-600"
  },
  {
    name: "Custom Modules",
    description: "Devising unique configurations and specialized scripts for optimized performance.",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-emerald-400 to-teal-600"
  },
  {
    name: "Proxy Mgmt",
    description: "Sophisticated handling of network layers and request distribution.",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-purple-400 to-pink-600"
  }
];

export default function FavoriteTools() {
  return (
    <section id="tools" className="relative py-32 px-8 lg:px-32 bg-black overflow-hidden">
      {/* Abstract background grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="liquid-glass rounded-full px-4 py-1 mb-6 w-fit"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-white/80">
                The Workbench
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading text-white tracking-tight leading-[0.9]"
            >
              Favorite <span className="italic font-light opacity-50">Toys.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-md text-white/50 font-body text-lg leading-relaxed"
          >
            A curated selection of powerful automation suites and testing frameworks I utilize to push boundaries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{ y: -10 }}
              className="liquid-glass p-8 rounded-3xl border border-white/5 group relative"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tool.color} p-3 mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}>
                <div className="text-white">
                  {tool.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-heading text-white mb-3 tracking-wide">
                {tool.name}
              </h3>
              <p className="text-sm font-body text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                {tool.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/10 group-hover:bg-white/40 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

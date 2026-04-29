import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between pointer-events-none"
    >
      <motion.div 
        animate={{ 
          opacity: hidden ? 0 : 1,
          x: hidden ? -20 : 0,
          scale: hidden ? 0.95 : 1
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 pointer-events-auto"
      >
        <Logo className="text-white" />
      </motion.div>

      <motion.div 
        animate={{ 
          opacity: hidden ? 0 : 1,
          y: hidden ? -20 : 0,
          scale: hidden ? 0.95 : 1
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex items-center gap-1.5 liquid-glass rounded-full px-1.5 py-1 pointer-events-auto"
      >
        {['About', 'Work', 'Lab 3D', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="px-4 py-1.5 text-xs font-body font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
          >
            {item}
          </a>
        ))}
      </motion.div>

      <motion.div
        animate={{ 
          opacity: hidden ? 0 : 1,
          x: hidden ? 20 : 0,
          scale: hidden ? 0.95 : 1
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto"
      >
        <Button className="bg-white text-black hover:bg-white/90 rounded-full px-4 py-1.5 text-xs h-auto flex items-center gap-1 group">
          Let's Talk
          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </motion.div>
    </motion.nav>
  );
}

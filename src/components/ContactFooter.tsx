import { motion } from 'motion/react';
import { Mail, Github, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-black pt-32 pb-12 px-8 lg:px-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-20 grayscale"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-lines-of-light-in-dark-background-31847-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-full px-4 py-1 mb-8 mx-auto w-fit"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-body font-medium text-white/80">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-9xl font-heading italic text-white leading-[0.9] tracking-tighter mb-16"
          >
            Let's build something powerful.
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:safinbakshi013@gmail.com"
              className="liquid-glass-strong rounded-full px-10 py-5 text-white flex items-center gap-3 group transition-transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg font-body font-medium">Email Me</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-full px-10 py-5 flex items-center gap-3 group transition-transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span className="text-lg font-body font-medium">GitHub</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <Logo className="text-white scale-75 origin-left" />
            <span className="text-white/20 text-xs font-body">© {currentYear} Shoaib Bakshi Sifat. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-8">
            {[
              { name: 'Facebook', url: 'https://web.facebook.com/YourSensiBro' },
              { name: 'Instagram', url: 'https://www.instagram.com/shoaib_sifat/' },
              { name: 'Twitter', url: 'https://x.com/shoaib_sifat' },
              { name: 'Dribbble', url: 'https://dribbble.com/shoaib-sifat' }
            ].map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-body font-medium text-white/40 hover:text-white transition-colors uppercase tracking-widest"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import coverImage from '../assets/images/cover.png';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-stone-900 text-stone-50 overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/40 via-stone-900 to-stone-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-stone-800/30 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-900/40 border border-amber-700/50 text-amber-300 text-sm md:text-base font-bold tracking-wide mb-8 uppercase"
          >
            <Sparkles className="w-5 h-5" />
            <span>Comprendre sa peau avant de multiplier les produits.</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl xl:text-7xl font-serif leading-[1.1] font-bold tracking-tight mb-6"
          >
            PEAU NOIRE <br className="hidden lg:block" />
            <span className="text-amber-400">ÉCLAT™</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-stone-300 max-w-2xl leading-relaxed mb-10"
          >
            Le guide pratique pour comprendre, entretenir et révéler naturellement l'éclat de votre peau noire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start"
          >
            <motion.a 
              href="https://peau-noire-eclat.mymaketou.shop/products/peau-noire-eclat/checkout"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-amber-900/50"
            >
              <div className="absolute inset-0 rounded-lg border-2 border-amber-400 opacity-30 animate-ping"></div>
              <span className="relative z-10">Découvrir le programme complet</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-full"
        >
          {/* Subtle glow behind the image */}
          <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full transform scale-90"></div>
          
          <img 
            src={coverImage} 
            alt="Coffret Peau Noire Éclat" 
            className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform scale-110 origin-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Prevent infinite loop
              target.src = 'https://images.unsplash.com/photo-1531123897727-8f129e1bfd8c?auto=format&fit=crop&q=80&w=800';
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

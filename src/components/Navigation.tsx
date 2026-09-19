import { motion, useScroll, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Le Problème', href: '#story' },
    { name: 'Le Programme', href: '#modules' },
    { name: 'Bonus', href: '#bonuses' },
  ];

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-900/95 backdrop-blur-md border-b border-stone-800 py-3 shadow-lg shadow-stone-900/20' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <a href="#hero" className="font-serif font-bold text-lg tracking-wide text-amber-400">
          PEAU NOIRE ÉCLAT™
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-amber-400 transition-colors ${
                isScrolled ? 'text-stone-300' : 'text-stone-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://peau-noire-eclat.mymaketou.shop/products/peau-noire-eclat/checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold transition-all shadow-lg shadow-amber-900/20"
          >
            Commander
          </a>
        </nav>
        
        {/* Mobile CTA */}
        <div className="md:hidden">
          <a
            href="https://peau-noire-eclat.mymaketou.shop/products/peau-noire-eclat/checkout"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-amber-600 text-white text-xs font-bold shadow-lg"
          >
            Commander
          </a>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-500 origin-left"
        style={{ scaleX }}
      />
    </motion.header>
  );
}

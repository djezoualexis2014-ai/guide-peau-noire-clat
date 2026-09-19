import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, ShoppingCart, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CTA() {
  const [timeLeft, setTimeLeft] = useState(() => 23 * 3600 + 45 * 60 + 12); // Start at 23h 45m 12s for effect

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="pricing" className="py-24 bg-amber-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl shadow-amber-900/5 border border-amber-100"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-amber-400 text-sm font-bold tracking-widest uppercase mb-8">
            L'Offre Complète
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 font-medium mb-4">
            PEAU NOIRE ÉCLAT™
          </h2>
          
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">
            Le système simple pour comprendre ta peau noire, choisir les soins adaptés et construire une routine quotidienne qui préserve son hydratation, son éclat et son uniformité en seulement 10 minutes par jour.
          </p>

          <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 mb-8 text-left space-y-4 border border-stone-100">
            <h4 className="font-bold text-stone-900 mb-4 text-center">Ce que vous recevez immédiatement :</h4>
            <div className="flex justify-between items-center border-b border-stone-200 pb-4">
              <span className="font-medium text-stone-700">Le Guide Complet Peau Noire Éclat™</span>
              <span className="text-stone-400 line-through">15 000 FCFA</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-200 pb-4">
              <span className="text-stone-600">Bonus 1 : Le Plan de Routine™</span>
              <span className="text-stone-400 line-through">5 000 FCFA</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-200 pb-4">
              <span className="text-stone-600">Bonus 2 : Le Décodeur des Produits™</span>
              <span className="text-stone-400 line-through">7 000 FCFA</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-stone-600">Bonus 3 : La Check-list Anti-Erreurs™</span>
              <span className="text-stone-400 line-through">4 000 FCFA</span>
            </div>
            
            <div className="pt-4 mt-4 border-t border-stone-200 flex justify-between items-end">
              <span className="font-bold text-stone-900">Valeur Totale</span>
              <span className="text-xl font-bold text-stone-400 line-through">31 000 FCFA</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-col items-center justify-center gap-3 mb-6">
              <p className="text-sm font-bold text-red-600 uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-5 h-5" />
                L'offre expire dans :
              </p>
              <div className="flex gap-4 text-center">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-stone-900 font-mono bg-stone-100 px-4 py-2 rounded-lg border border-stone-200">{formatTime(hours)}</span>
                  <span className="text-[10px] uppercase font-bold text-stone-500 mt-1">Heures</span>
                </div>
                <span className="text-3xl font-black text-stone-300 mt-2">:</span>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-stone-900 font-mono bg-stone-100 px-4 py-2 rounded-lg border border-stone-200">{formatTime(minutes)}</span>
                  <span className="text-[10px] uppercase font-bold text-stone-500 mt-1">Minutes</span>
                </div>
                <span className="text-3xl font-black text-stone-300 mt-2">:</span>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-red-600 font-mono bg-red-50 px-4 py-2 rounded-lg border border-red-200">{formatTime(seconds)}</span>
                  <span className="text-[10px] uppercase font-bold text-stone-500 mt-1">Secondes</span>
                </div>
              </div>
            </div>

            <div className="text-5xl font-bold text-stone-900 flex items-center justify-center gap-2">
              2 500 <span className="text-xl text-stone-500 font-normal">FCFA</span>
            </div>
          </div>

          <motion.a 
            href="https://peau-noire-eclat.mymaketou.shop/products/peau-noire-eclat/checkout"
            target="_blank"
            rel="noopener noreferrer"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full flex items-center justify-center gap-3 px-8 py-5 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold text-lg sm:text-xl rounded-xl transition-colors shadow-xl shadow-stone-900/20 group"
          >
            <div className="absolute inset-0 rounded-xl border-2 border-stone-900 opacity-20 animate-ping"></div>
            <ShoppingCart className="w-6 h-6 transition-transform group-hover:-rotate-12 z-10" />
            <span className="z-10">Je commande mon guide</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1 z-10" />
          </motion.a>
          
          <div className="mt-8 flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-base bg-emerald-50 px-6 py-3 rounded-full border border-emerald-200 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
              <span>Paiement 100% Sécurisé</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Visa & Mastercard */}
              <div className="flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-xl border border-stone-200 shadow-sm">
                <span className="text-sm font-extrabold text-blue-900 italic tracking-wider">VISA</span>
                <div className="flex items-center ml-1">
                  <div className="w-4 h-4 rounded-full bg-red-500 opacity-90"></div>
                  <div className="w-4 h-4 rounded-full bg-amber-500 opacity-90 -ml-2 mix-blend-multiply"></div>
                </div>
              </div>

              {/* Orange Money */}
              <div className="flex items-center gap-1 px-4 py-2 bg-[#FF7900] rounded-xl shadow-sm border border-[#E66D00]">
                <span className="text-sm font-bold text-white tracking-wide">Orange</span>
                <span className="text-sm font-medium text-white">Money</span>
              </div>

              {/* Wave */}
              <div className="flex items-center gap-1 px-4 py-2 bg-[#1CCDFF] rounded-xl shadow-sm border border-[#1AB8E6]">
                <span className="text-sm font-bold text-white tracking-wide">Wave</span>
              </div>

              {/* Moov Money */}
              <div className="flex items-center gap-1 px-4 py-2 bg-[#005C9A] rounded-xl shadow-sm border border-[#004A7C]">
                <span className="text-sm font-bold text-[#F5A623] tracking-wide">Moov</span>
                <span className="text-sm font-medium text-white">Money</span>
              </div>

              {/* Mobile Money (MTN/Generic) */}
              <div className="flex items-center gap-1 px-4 py-2 bg-[#FFCC00] rounded-xl shadow-sm border border-[#E6B800]">
                <span className="text-sm font-bold text-stone-900 tracking-wide">Mobile</span>
                <span className="text-sm font-medium text-stone-900">Money</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, ChevronsLeftRight } from 'lucide-react';
import beforeImage from '../assets/images/before_skincare_1789447896683.jpg';
import afterImage from '../assets/images/after_skincare_1789447914929.jpg';

const testimonials = [
  {
    name: "Aminata D.",
    badge: "Achat vérifié",
    content: "J'avais tout essayé pour mes taches pigmentaires, des crèmes hors de prix aux astuces douteuses d'internet. Ce guide m'a enfin permis de comprendre l'erreur que je faisais. En 6 semaines avec la routine indiquée, mon teint s'est incroyablement unifié. Merci !",
    rating: 5
  },
  {
    name: "Sarah M.",
    badge: "Achat vérifié",
    content: "Enfin un programme qui parle spécifiquement des peaux noires et métissées ! Le 'Décodeur des produits' est une vraie pépite. J'ai arrêté de gaspiller mon argent dans des soins inadaptés et ma peau n'a jamais été aussi lumineuse et hydratée.",
    rating: 5
  },
  {
    name: "Fatou K.",
    badge: "Achat vérifié",
    content: "Le plan d'action de 10 minutes est parfait pour moi qui cours partout le matin. C'est simple, c'est clair, et surtout ça marche. Mes problèmes de brillance et de tiraillements ont disparu en quelques jours.",
    rating: 5
  }
];

function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl mt-24 aspect-square md:aspect-[16/9] bg-stone-200 border-4 border-white">
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="Peau après la routine"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Peau avant la routine"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none">
          <ChevronsLeftRight className="w-6 h-6 text-amber-700" />
        </div>
      </div>

      {/* Invisible Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md pointer-events-none shadow-lg border border-white/20">
        Avant
      </div>
      <div className="absolute top-4 right-4 bg-amber-600/90 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md pointer-events-none shadow-lg border border-amber-400/50">
        Après
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold tracking-wide mb-6">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Témoignages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 mb-6">
            Elles ont transformé leur peau
          </h2>
          <p className="text-stone-600 text-lg">
            Découvrez les retours des femmes qui ont déjà adopté la méthode PEAU NOIRE ÉCLAT™ pour simplifier leur routine et sublimer leur teint.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-stone-600 mb-8 italic relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between border-t border-stone-100 pt-6 mt-auto">
                <div>
                  <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md mt-1 inline-block">
                    {testimonial.badge}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold font-serif">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mt-24 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 mb-4">
              Des résultats visibles, sans filtres
            </h3>
            <p className="text-stone-600">
              Faites glisser le curseur pour voir la différence de texture et d'éclat après seulement 6 semaines d'application de la méthode PEAU NOIRE ÉCLAT™.
            </p>
          </div>
          <BeforeAfterSlider />
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "Est-ce que ce guide est adapté si j'ai la peau grasse ou acnéique ?",
    answer: "Absolument. Le module 2 vous apprend à identifier avec certitude votre type de peau. Le reste du programme vous montre comment adapter les textures et les actifs (comme l'acide salicylique) spécifiquement pour réguler le sébum et traiter les taches post-acné sans assécher ni irriter votre peau."
  },
  {
    question: "Dois-je acheter des produits coûteux pour suivre la routine ?",
    answer: "Pas du tout ! L'objectif de PEAU NOIRE ÉCLAT™ est de vous faire économiser de l'argent en arrêtant d'acheter des produits inutiles. Je vous apprends à lire les étiquettes pour trouver les bons actifs, que le produit coûte 10€ en grande surface ou plus cher en parapharmacie. C'est la formulation qui compte, pas le prix ou la marque."
  },
  {
    question: "Sous quel format vais-je recevoir le programme ?",
    answer: "Il s'agit d'un produit 100% digital. Dès la validation de votre paiement sécurisé, vous recevrez un email instantané avec vos accès pour télécharger le guide complet ainsi que tous vos bonus au format PDF. Vous pourrez les lire immédiatement sur votre téléphone, tablette ou ordinateur."
  },
  {
    question: "En combien de temps puis-je espérer voir des résultats sur mes taches ?",
    answer: "Le cycle naturel de renouvellement cellulaire prend en moyenne 28 jours. En appliquant la bonne routine (nettoyage doux, hydratation et protection solaire indispensable), vous verrez une peau plus lumineuse et souple dès les 2 premières semaines. L'atténuation des taches pigmentaires s'observe généralement de façon visible entre 4 et 8 semaines de constance."
  },
  {
    question: "Je n'ai jamais eu de routine de soins, est-ce trop technique pour moi ?",
    answer: "Rassurez-vous, ce guide a été écrit spécifiquement pour être simple, clair et accessible, sans jargon scientifique incompréhensible. Le Bonus 1 (Le Plan de Routine) vous prend par la main et vous dit exactement quoi faire le matin et le soir, étape par étape, en moins de 10 minutes par jour."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-stone-900 group-hover:text-amber-700 transition-colors pr-8">
          {question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 group-hover:bg-amber-100 transition-colors">
          {isOpen ? (
            <Minus className="w-5 h-5 text-amber-700" />
          ) : (
            <Plus className="w-5 h-5 text-amber-700" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-stone-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-800 text-sm font-semibold tracking-wide mb-6">
            <MessageCircleQuestion className="w-4 h-4" />
            <span>Des doutes ?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-stone-600 text-lg">
            Voici les réponses aux questions que l'on me pose le plus souvent sur le programme PEAU NOIRE ÉCLAT™.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-stone-200"
        >
          {faqs.map((faq, index) => (
            <div key={index}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

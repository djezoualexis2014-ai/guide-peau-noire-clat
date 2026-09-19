import { motion } from 'motion/react';
import { Gift, CheckCircle } from 'lucide-react';
import type { BonusType } from '../types';

const bonuses: BonusType[] = [
  {
    title: "LE PLAN DE ROUTINE PEAU NOIRE™",
    value: "5 000",
    description: "Le guide donne beaucoup d'informations. Ce bonus transforme la connaissance en un plan d'action immédiat. Un PDF ultra-pratique avec cases à cocher pour savoir exactement quoi faire demain matin.",
    benefits: [
      "Check-list détaillée pour le Matin (Nettoyage, Sérum, Hydratation, SPF).",
      "Check-list ciblée pour le Soir (Démaquillage, Soin ciblé...).",
      "Suivi hebdomadaire (Exfoliation, masque, ajustements)."
    ]
  },
  {
    title: "LE DÉCODEUR DES PRODUITS COSMÉTIQUES™",
    value: "7 000",
    description: "Arrêtez d'acheter un produit simplement parce que son packaging est joli. Apprenez à comprendre ce que vous mettez réellement sur votre peau avec cette fiche pratique visuelle.",
    benefits: [
      "Sérum : soin ciblé et concentré.",
      "Crème & Lotion : comprendre l'hydratation et les textures.",
      "Huile & Beurre : nutrition et protection décodées."
    ]
  },
  {
    title: "LA CHECK-LIST ANTI-ERREURS™",
    value: "4 000",
    description: "Une liste vitale de 30 erreurs à bannir absolument pour maintenir une barrière cutanée saine sur le long terme et prévenir les marques pigmentaires.",
    benefits: [
      "Les dangers de la sur-exfoliation et de la friction agressive.",
      "Pourquoi multiplier trop rapidement les actifs détruit votre peau.",
      "La vérité sur la manipulation des imperfections et le choix des SPF."
    ]
  }
];

export default function Bonuses() {
  return (
    <section id="bonuses" className="py-24 bg-stone-100 text-stone-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold tracking-wide mb-6">
            <Gift className="w-4 h-4" />
            <span>Bonus Exclusifs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900">
            Pour rendre votre expérience plus facile et plus rapide
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-stone-900 text-amber-400 px-4 py-1 rounded-bl-lg font-bold text-sm">
                Valeur: {bonus.value} FCFA
              </div>
              
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Gift className="w-7 h-7 text-amber-600" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 pr-12 leading-tight">
                BONUS #{index + 1} <br/>
                <span className="text-amber-700">{bonus.title}</span>
              </h3>
              
              <p className="text-stone-600 text-sm mb-6 pb-6 border-b border-stone-100">
                {bonus.description}
              </p>
              
              <ul className="space-y-3">
                {bonus.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

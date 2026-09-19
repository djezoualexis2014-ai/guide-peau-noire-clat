import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const promises = [
  "Comment construire une routine adaptée à ta peau noire sans acheter 10 produits différents.",
  "Le test de quelques minutes pour identifier ton type de peau et arrêter de choisir tes produits au hasard.",
  "Pourquoi certaines peaux noires marquent davantage après un bouton — et surtout comment limiter les erreurs qui entretiennent les marques.",
  "Les 4 étapes essentielles d'une routine simple pour nettoyer, hydrater, protéger et préserver l'éclat de ta peau.",
  "Ce qu'il ne faut JAMAIS faire lorsque tu as des taches ou des imperfections si tu veux éviter d'irriter davantage ta peau.",
  "Crème, sérum, huile, beurre, lotion… Le guide simple pour enfin savoir quel produit utiliser et quand.",
  "7 erreurs de routine qui peuvent transformer une bonne intention en peau irritée.",
  "Le système simple pour comprendre les actifs cosmétiques sans avoir besoin d'être chimiste.",
  "Vitamine C, niacinamide, acide salicylique, acide azélaïque… lesquels correspondent réellement à tes besoins ?",
  "Comment exfolier ta peau sans tomber dans le piège du “plus je gomme, mieux c'est”.",
  "La vérité sur la protection solaire des peaux noires : pourquoi la mélanine ne signifie pas que tu peux ignorer le SPF.",
  "Le plan de routine à recopier pour savoir exactement quoi faire le matin et le soir.",
  "Pourquoi changer constamment de produits peut t'empêcher de comprendre ce qui convient réellement à ta peau.",
  "Le Décodeur des Produits : apprends à comprendre une crème, un sérum ou une huile avant de sortir ta carte bancaire.",
  "Le système PEAU NOIRE ÉCLAT™ : comprendre → choisir → appliquer → maintenir."
];

export default function Promises() {
  return (
    <section className="py-24 bg-stone-900 text-stone-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-amber-400 mb-6">
            Ce que vous allez découvrir à l'intérieur
          </h2>
          <p className="text-stone-300 text-lg">
            Tout ce qu'il vous faut pour reprendre le contrôle de l'éclat de votre peau, condensé dans un guide accessible.
          </p>
        </div>

        <div className="bg-stone-800/50 rounded-3xl p-8 sm:p-12 border border-stone-700">
          <ul className="space-y-6">
            {promises.map((promise, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-amber-900/50 flex items-center justify-center">
                  <Star className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <span className="text-stone-300 leading-relaxed text-lg">
                  {promise}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

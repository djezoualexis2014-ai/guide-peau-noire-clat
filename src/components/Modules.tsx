import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import type { ModuleType } from '../types';

const modules: ModuleType[] = [
  {
    title: "COMPRENDRE SA PEAU NOIRE",
    description: "Les fondations absolues pour arrêter de lutter contre sa peau et commencer à travailler avec elle.",
    points: [
      "Pourquoi la mélanine change la façon dont les taches et les marques apparaissent.",
      "Les particularités uniques : hydratation, pigmentation, et sensibilité.",
      "Les erreurs communes qui fragilisent inutilement votre barrière cutanée."
    ]
  },
  {
    title: "IDENTIFIER SON TYPE DE PEAU",
    description: "Finis les achats au hasard. Découvrez exactement de quoi votre peau a besoin.",
    points: [
      "Peau sèche, grasse, mixte ou normale : les vrais critères.",
      "Le test du mouchoir (pas-à-pas) pour obtenir un diagnostic clair à la maison.",
      "Comment adapter les textures (gel, crème, beurre) à votre résultat."
    ]
  },
  {
    title: "LA ROUTINE DE NETTOYAGE",
    description: "L'étape la plus mal comprise qui cause souvent le plus de dégâts.",
    points: [
      "Comment nettoyer efficacement sans jamais décaper la peau.",
      "Eau micellaire, lait, gel, savon surgras : comprendre les vraies différences.",
      "Construire son protocole de nettoyage doux pour le matin et le soir."
    ]
  },
  {
    title: "HYDRATATION & BARRIÈRE CUTANÉE",
    description: "Le secret d'une peau qui ne tiraille plus et retrouve son éclat naturel (glow).",
    points: [
      "La règle d'or : Humectants, émollients et agents occlusifs expliqués simplement.",
      "Sérum, crème, huile ou beurre : quoi appliquer et dans quel ordre.",
      "Le bouclier anti-déshydratation adapté à votre type de peau."
    ]
  },
  {
    title: "EXFOLIATION & ÉCLAT",
    description: "Comment renouveler sa peau sans l'irriter ni provoquer de nouvelles taches.",
    points: [
      "Exfoliation physique vs chimique : le grand match.",
      "AHA, BHA et enzymes : comprendre leur rôle pour illuminer le teint.",
      "Le calendrier exact pour éviter la sur-exfoliation destructrice."
    ]
  },
  {
    title: "TACHES & HYPERPIGMENTATION",
    description: "La stratégie complète pour unifier le teint et prévenir l'apparition de nouvelles marques.",
    points: [
      "Le mécanisme complet : pourquoi un simple bouton laisse une trace noire.",
      "L'étape non-négociable : la protection solaire pour peaux noires (SPF 30 minimum, sans effet gris).",
      "Les actifs de référence pour cibler l'apparence des taches et retrouver un teint uniforme."
    ]
  },
  {
    title: "LE GUIDE DES ACTIFS",
    description: "Votre dictionnaire personnel pour décrypter n'importe quelle étiquette cosmétique.",
    points: [
      "Les antioxydants stars : Vitamine C et Niacinamide.",
      "Les acides clarifiants : Glycolique, Lactique, Salicylique.",
      "Les cibles anti-taches : Acide Kojique, Alpha-arbutine, Acide Tranexamique, Acide Azélaïque.",
      "L'anti-âge et renouvellement : Rétinaldéhyde et Bakuchiol."
    ]
  }
];

export default function Modules() {
  return (
    <section id="modules" className="py-24 bg-[#2C1810] text-stone-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-amber-400 mb-6">
            Le Programme Complet : PEAU NOIRE ÉCLAT™
          </h2>
          <p className="text-stone-300 text-lg">
            Un guide PDF méthodique qui vous prend par la main, depuis la compréhension de votre biologie jusqu'à l'application de votre crème le soir.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-stone-900/50 border border-stone-700/50 rounded-2xl p-8 hover:border-amber-700/50 transition-colors ${index === 6 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-900/40 text-amber-400 font-serif text-xl border border-amber-800">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold tracking-wide">{module.title}</h3>
              </div>
              <p className="text-stone-400 italic mb-6 border-l-2 border-amber-700 pl-4">
                {module.description}
              </p>
              <ul className="space-y-3">
                {module.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-300 leading-relaxed text-sm sm:text-base">{point}</span>
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

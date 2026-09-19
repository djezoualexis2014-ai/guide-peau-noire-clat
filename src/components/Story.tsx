import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import storyImage from '../assets/images/skincare_story_woman_1787385824297.jpg';

export default function Story() {
  return (
    <section id="story" className="py-24 bg-stone-50 text-stone-800">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-medium leading-tight text-stone-900">
            Vous avez sûrement déjà ressenti cette frustration...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-stone-600">
              <p>
                Un petit bouton apparaît. Vous ne le touchez même pas, et pourtant... il laisse <strong className="text-stone-900">une tache sombre qui mettra des mois à disparaître.</strong>
              </p>
              <p>
                Vous achetez la dernière crème à la mode vue sur les réseaux sociaux. Vous l'appliquez consciencieusement. Mais quelques heures plus tard, votre peau tiraille à nouveau, semble terne, ou au contraire, brille excessivement.
              </p>
              <p>
                Le résultat ? Vous finissez par accumuler des dizaines de produits dans votre salle de bain, sans jamais vraiment comprendre ce qui fonctionne réellement pour <strong className="text-stone-900">votre</strong> peau.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-stone-200 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src={storyImage} 
                alt="Femme noire appliquant une crème" 
                className="relative z-10 rounded-2xl object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>

          <div className="bg-stone-200/50 rounded-2xl p-8 my-12 border border-stone-200">
            <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-3">
              <AlertCircle className="text-amber-600 w-6 h-6" />
              Ce n'est pas de votre faute.
            </h3>
            <p className="text-stone-700 leading-relaxed">
              L'industrie cosmétique globale propose souvent des solutions "universelles". Mais la peau noire a des particularités structurelles et biologiques bien réelles :
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Une tendance plus forte à la perte en eau (déshydratation).",
                "Une mélanine ultra-réactive qui transforme la moindre inflammation en hyperpigmentation (taches).",
                "Une barrière cutanée souvent fragilisée par des produits inadaptés ou trop agressifs."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                  <span className="text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900 mb-6">
              Il est temps d'arrêter de deviner.
            </h2>
            <p className="text-lg text-stone-600">
              C'est exactement pour cela que j'ai créé <strong>PEAU NOIRE ÉCLAT™</strong>.<br />
              Le système simple pour <span className="italic text-amber-700">comprendre</span>, <span className="italic text-amber-700">choisir</span>, <span className="italic text-amber-700">appliquer</span> et <span className="italic text-amber-700">maintenir</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

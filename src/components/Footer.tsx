export default function Footer() {
  return (
    <footer className="bg-[#1C0F0A] py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center text-stone-500 text-sm">
        <p className="mb-4">© {new Date().getFullYear()} PEAU NOIRE ÉCLAT™. Tous droits réservés.</p>
        <p className="max-w-2xl mx-auto text-xs leading-relaxed opacity-60">
          Ce site ne fait pas partie du site Facebook ou de Facebook Inc. En outre, ce site n'est PAS approuvé par Facebook en aucune façon. FACEBOOK est une marque déposée de FACEBOOK, Inc.
          Les résultats peuvent varier d'une personne à l'autre en fonction du type de peau et du respect de la routine.
        </p>
      </div>
    </footer>
  );
}

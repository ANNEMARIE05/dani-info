import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const diapositives = [
  {
    id: 1,
    titre: "Identités visuelles sur mesure",
    texte: "Logo, charte graphique et univers visuel pensés pour votre marque.",
    image:
      "https://images.pexels.com/photos/185801/pexels-photo-185801.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    titre: "Affiches & campagnes impactantes",
    texte: "Des visuels forts pour vos évènements, lancements de produits et festivals.",
    image:
      "https://images.pexels.com/photos/2741956/pexels-photo-2741956.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    titre: "Visuels digitaux & réseaux sociaux",
    texte: "Templates professionnels pour rester cohérent sur tous vos canaux.",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const BanniereCarrousel = () => {
  const [indexActif, setIndexActif] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexActif((courant) => (courant + 1) % diapositives.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const diapo = diapositives[indexActif];

  const allerSuivant = () => {
    setIndexActif((courant) => (courant + 1) % diapositives.length);
  };

  const allerPrecedent = () => {
    setIndexActif((courant) =>
      courant === 0 ? diapositives.length - 1 : courant - 1
    );
  };

  return (
    <section
      className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/80"
      data-aos="fade-up"
    >
      <div className="grid md:grid-cols-[1.1fr,0.9fr]">
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-4">
          <p className="font-titre text-xs uppercase tracking-[0.35em] text-danie-teal">
            Portfolio Danie Info
          </p>
          <h2 className="font-titre text-2xl sm:text-3xl lg:text-4xl font-semibold">
            {diapo.titre}
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-xl">
            {diapo.texte}
          </p>
          <div className="flex items-center gap-3 mt-2">
            {diapositives.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setIndexActif(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === indexActif
                    ? "w-8 bg-danie-teal"
                    : "w-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Aller à la diapositive ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="relative h-56 sm:h-64 md:h-full">
          <img
            src={diapo.image}
            alt={diapo.titre}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 pointer-events-none">
        <button
          onClick={allerPrecedent}
          className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-black/70 text-white w-9 h-9 hover:bg-black/90 border border-white/10"
          aria-label="Slide précédent"
        >
          <FaArrowLeft className="text-xs" />
        </button>
        <button
          onClick={allerSuivant}
          className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-black/70 text-white w-9 h-9 hover:bg-black/90 border border-white/10"
          aria-label="Slide suivant"
        >
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    </section>
  );
};

export default BanniereCarrousel;



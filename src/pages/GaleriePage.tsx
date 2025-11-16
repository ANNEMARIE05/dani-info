import { Link } from "react-router-dom";
import { projetsDanie } from "../donnéesProjets";
import { useLangue } from "../contexteLangue";

const GaleriePage = () => {
  const { langue } = useLangue();
  return (
    <div className="space-y-10">
      <section className="space-y-4" data-aos="fade-up">
        <p className="font-titre text-sm uppercase tracking-[0.35em] text-danie-teal">
          {langue === "fr" ? "Galerie" : "Gallery"}
        </p>
        <h1 className="font-titre text-4xl sm:text-5xl font-semibold">
          {langue === "fr"
            ? "Les créations de Danie Info"
            : "Danie Info's projects"}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl">
          {langue === "fr"
            ? "Une sélection de projets réalisés pour différents secteurs : restauration, événementiel, tech, mode, services, etc. Chaque visuel est pensé pour respecter l'ADN de la marque tout en restant impactant."
            : "A selection of projects delivered for various sectors: food, events, tech, fashion, services and more. Each visual respects the brand's DNA while remaining impactful."}
        </p>
      </section>

      <section
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {projetsDanie.map((projet) => (
          <Link
            key={projet.id}
            to={`/projets/${projet.id}`}
            className="group rounded-3xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-sm hover:border-danie-teal/70 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={projet.image}
                alt={projet.titre}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[11px] uppercase tracking-wide text-gray-100">
                {projet.categorie}
              </span>
              <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-[11px] uppercase tracking-wide text-gray-100">
                {projet.statut === "réalisé"
                  ? langue === "fr"
                    ? "Réalisé"
                    : "Completed"
                  : langue === "fr"
                  ? "En cours"
                  : "In progress"}
              </span>
            </div>
            <div className="p-5 space-y-2">
              <h2 className="font-titre text-lg font-semibold">
                {projet.titre}
              </h2>
              <p className="text-sm text-gray-300">{projet.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default GaleriePage;



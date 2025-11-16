import { projetsDanie } from "../donnéesProjets";

const ProjetsPage = () => {
  const projetsRealises = projetsDanie.filter(
    (projet) => projet.statut === "réalisé"
  );
  const projetsEnCours = projetsDanie.filter(
    (projet) => projet.statut === "en_cours"
  );

  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="space-y-4" data-aos="fade-up">
        <p className="font-titre text-[11px] sm:text-xs uppercase tracking-[0.35em] text-danie-teal">
          Projets & collaborations
        </p>
        <h1 className="font-titre text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Une vision claire sur les projets réalisés et en cours
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-3xl">
          Cette section regroupe les projets finalisés et ceux actuellement en
          cours de conception. Elle permet de suivre l&apos;activité de Danie
          Info et la diversité des missions confiées.
        </p>
      </section>

      <section className="space-y-6 sm:space-y-8" data-aos="fade-up" data-aos-delay="100">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-titre text-2xl font-semibold">
              Projets en cours
            </h2>
            <p className="text-sm text-gray-300">
              Mandats en conception ou en phase de finalisation.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {projetsEnCours.map((projet) => (
            <article
              key={projet.id}
              className="rounded-3xl border border-danie-teal/40 bg-black/60 p-4 sm:p-5 flex gap-3 sm:gap-4"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-danie-teal">
                  {projet.categorie}
                </p>
                <h3 className="font-titre text-sm sm:text-base font-semibold">
                  {projet.titre}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  {projet.description}
                </p>
                <p className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-amber-300 mt-1">
                  <span className="fa-solid fa-circle-notch fa-spin" />
                  En production
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 sm:space-y-8" data-aos="fade-up" data-aos-delay="150">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-titre text-2xl font-semibold">
              Projets réalisés
            </h2>
            <p className="text-sm text-gray-300">
              Une partie des missions livrées ces dernières années.
            </p>
          </div>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projetsRealises.map((projet) => (
            <article
              key={projet.id}
              className="group rounded-3xl overflow-hidden border border-white/5 bg-black/50 hover:border-danie-teal/70 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 space-y-1.5">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-danie-teal">
                  {projet.categorie}
                </p>
                <h3 className="font-titre text-sm sm:text-base font-semibold">
                  {projet.titre}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  {projet.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjetsPage;



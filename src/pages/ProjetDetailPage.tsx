import { useParams, Link } from "react-router-dom";
import { projetsDanie } from "../donnéesProjets";
import { useLangue } from "../contexteLangue";

const ProjetDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { langue } = useLangue();
  const projet = projetsDanie.find((p) => p.id === Number(id));

  if (!projet) {
    return (
      <div className="space-y-6">
        <p className="text-sm text-gray-300">
          {langue === "fr"
            ? "Projet introuvable."
            : "Project not found."}
        </p>
        <Link
          to="/galerie"
          className="inline-flex items-center gap-2 rounded-full bg-danie-teal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-danie-teal-fonce transition-colors"
        >
          <span className="fa-solid fa-arrow-left text-xs" />
          {langue === "fr" ? "Retour à la galerie" : "Back to gallery"}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="space-y-4" data-aos="fade-up">
        <p className="font-titre text-xs uppercase tracking-[0.35em] text-danie-teal">
          {langue === "fr" ? "Détail du projet" : "Project detail"}
        </p>
        <h1 className="font-titre text-3xl sm:text-4xl font-semibold">
          {projet.titre}
        </h1>
        <p className="text-sm text-gray-300 uppercase tracking-[0.2em]">
          {projet.categorie}
          {" · "}
          {projet.statut === "réalisé"
            ? langue === "fr"
              ? "Réalisé"
              : "Completed"
            : langue === "fr"
            ? "En cours"
            : "In progress"}
        </p>
      </section>

      <section
        className="grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-start"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/60">
          <img
            src={projet.image}
            alt={projet.titre}
            className="w-full h-80 md:h-[420px] object-cover"
          />
        </div>
        <div className="space-y-4 text-sm sm:text-base text-gray-300">
          <p>{projet.description}</p>
          <p className="text-xs uppercase tracking-[0.25em] text-danie-teal">
            {langue === "fr"
              ? "Objectifs & contexte"
              : "Objectives & context"}
          </p>
          <p>
            {langue === "fr"
              ? "Ce projet illustre le souci du détail de Danie Info et sa capacité à adapter l’univers graphique à la cible et au canal de diffusion."
              : "This project illustrates Danie Info's attention to detail and his ability to adapt the visual universe to the target audience and communication channel."}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 rounded-full bg-danie-teal px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white hover:bg-danie-teal-fonce transition-colors"
            >
              <span className="fa-solid fa-images text-xs" />
              {langue === "fr" ? "Retour à la galerie" : "Back to gallery"}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-danie-teal/60 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-danie-teal hover:bg-danie-teal/10 transition-colors"
            >
              <span className="fa-solid fa-message text-xs" />
              {langue === "fr"
                ? "Parler d'un projet similaire"
                : "Discuss a similar project"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjetDetailPage;



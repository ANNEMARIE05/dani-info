import { Link } from "react-router-dom";
import { projetsDanie } from "../donnéesProjets";
import { useLangue } from "../contexteLangue";

const AccueilPage = () => {
  const { langue } = useLangue();
  const projetsMisesEnAvant = projetsDanie.slice(0, 4);

  return (
    <div className="space-y-24">
      <section
        className="grid md:grid-cols-[1.25fr,1fr] gap-10 items-center"
        id="haut-de-page"
      >
        <div data-aos="fade-right">
          <p className="font-titre text-sm uppercase tracking-[0.35em] text-danie-teal mb-4">
            {langue === "fr" ? "Portfolio d'infographie" : "Graphic design portfolio"}
          </p>
          <h1 className="font-titre text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Danie Info,
            <span className="block text-danie-teal">
              {langue === "fr"
                ? "5+ ans d'expérience en design visuel"
                : "5+ years of experience in visual design"}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8">
            {langue === "fr"
              ? "Je conçois des identités visuelles, affiches, visuels digitaux et interfaces modernes pour donner du poids à votre communication. Chaque projet est pensé pour être clair, élégant et mémorable."
              : "I design visual identities, posters, digital visuals and modern interfaces to make your communication stronger. Each project is crafted to be clear, elegant and memorable."}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 rounded-full bg-danie-teal px-7 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wide text-white shadow-carte-danie hover:bg-danie-teal-fonce transition-colors"
            >
              <span className="fa-solid fa-images text-xs" />
              {langue === "fr" ? "Voir la galerie complète" : "View full gallery"}
            </Link>
            <a
              href="#section-contact-accueil"
              className="inline-flex items-center gap-2 rounded-full border border-danie-teal/60 px-7 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wide text-danie-teal hover:bg-danie-teal/10 transition-colors"
            >
              <span className="fa-solid fa-message text-xs" />
              {langue === "fr" ? "Parler de votre projet" : "Discuss your project"}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-sm sm:text-base">
            <div className="border border-white/5 rounded-3xl px-4 py-4 bg-white/5">
              <p className="font-titre text-3xl font-bold text-danie-teal">
                5+
              </p>
              <p className="text-gray-300">
                {langue === "fr" ? "années d'expérience" : "years of experience"}
              </p>
            </div>
            <div className="border border-white/5 rounded-3xl px-4 py-4 bg-white/5">
              <p className="font-titre text-3xl font-bold text-danie-teal">
                80+
              </p>
              <p className="text-gray-300">
                {langue === "fr" ? "projets livrés" : "projects delivered"}
              </p>
            </div>
            <div className="border border-white/5 rounded-3xl px-4 py-4 bg-white/5">
              <p className="font-titre text-3xl font-bold text-danie-teal">
                100%
              </p>
              <p className="text-gray-300">
                {langue === "fr" ? "clients satisfaits" : "clients satisfied"}
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative max-w-md mx-auto"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <div className="absolute -top-6 -left-4 w-24 h-24 rounded-3xl bg-danie-teal/40 blur-3xl" />
          <div className="absolute -bottom-10 -right-6 w-28 h-28 rounded-3xl bg-danie-teal-fonce/50 blur-3xl" />

          <div className="relative rounded-[32px] overflow-hidden bg-black/60 border border-white/5 shadow-carte-danie">
            <img
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Portrait de Danie Info au travail"
              className="h-72 w-full object-cover"
            />
            <div className="p-6 space-y-3">
              <p className="font-titre text-xl font-semibold">
                Danie Info
              </p>
              <p className="text-xs sm:text-[13px] uppercase tracking-[0.25em] text-danie-teal">
                {langue === "fr"
                  ? "Infographiste - Directeur artistique"
                  : "Graphic designer & art director"}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {langue === "fr"
                  ? "Je transforme vos idées en visuels impactants : de la carte de visite à la campagne digitale complète."
                  : "I turn your ideas into impactful visuals, from business cards to complete digital campaigns."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10" data-aos="fade-up">
        <header className="space-y-2">
          <p className="font-titre text-sm uppercase tracking-[0.35em] text-danie-teal">
            {langue === "fr" ? "Prestations principales" : "Main services"}
          </p>
          <h2 className="font-titre text-3xl sm:text-4xl font-semibold">
            {langue === "fr"
              ? "Ce que Danie Info réalise pour vous"
              : "What Danie Info can do for you"}
          </h2>
          <p className="text-base text-gray-300 max-w-2xl">
            {langue === "fr"
              ? "Des prestations pensées pour les entreprises, marques personnelles et institutions qui souhaitent une communication visuelle claire et professionnelle."
              : "Services tailored for businesses, personal brands and institutions seeking clear and professional visual communication."}
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-7">
          <article className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-danie-teal/60 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-2xl bg-danie-teal/15 flex items-center justify-center text-danie-teal">
                <span className="fa-solid fa-pen-nib" />
              </div>
              <h3 className="font-titre text-lg font-semibold">
                {langue === "fr" ? "Identité visuelle & logo" : "Visual identity & logo"}
              </h3>
            </div>
            <p className="text-base text-gray-300">
              {langue === "fr"
                ? "Création de logos, chartes graphiques et univers visuels forts qui donnent une personnalité claire à votre marque."
                : "Creation of logos, brand guidelines and strong visual universes that give your brand a clear personality."}
            </p>
          </article>

          <article className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-danie-teal/60 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-2xl bg-danie-teal/15 flex items-center justify-center text-danie-teal">
                <span className="fa-solid fa-panorama" />
              </div>
              <h3 className="font-titre text-lg font-semibold">
                {langue === "fr"
                  ? "Affiches & supports imprimés"
                  : "Posters & print materials"}
              </h3>
            </div>
            <p className="text-base text-gray-300">
              {langue === "fr"
                ? "Affiches, flyers, kakemonos, couvertures, packaging... des supports physiques qui se remarquent au premier coup d'œil."
                : "Posters, flyers, banners, covers, packaging… physical materials that stand out at first glance."}
            </p>
          </article>

          <article className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm hover:border-danie-teal/60 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-2xl bg-danie-teal/15 flex items-center justify-center text-danie-teal">
                <span className="fa-solid fa-display" />
              </div>
              <h3 className="font-titre text-lg font-semibold">
                {langue === "fr"
                  ? "Visuels digitaux & UI design"
                  : "Digital visuals & UI design"}
              </h3>
            </div>
            <p className="text-base text-gray-300">
              {langue === "fr"
                ? "Templates réseaux sociaux, bannières web, présentations professionnelles et maquettes d'interfaces modernes."
                : "Social media templates, web banners, professional presentations and modern interface mockups."}
            </p>
          </article>
        </div>
      </section>

      <section
        className="space-y-8"
        id="section-projets-accueil"
        data-aos="fade-up"
      >
        <header className="space-y-2">
          <p className="font-titre text-sm uppercase tracking-[0.35em] text-danie-teal">
            {langue === "fr" ? "Projets en avant" : "Highlighted projects"}
          </p>
          <h2 className="font-titre text-3xl sm:text-4xl font-semibold">
            {langue === "fr"
              ? "Quelques créations sélectionnées"
              : "A selection of creations"}
          </h2>
        </header>

        <div className="grid md:grid-cols-4 gap-6">
          {projetsMisesEnAvant.map((projet) => (
            <Link
              key={projet.id}
              to={`/projets/${projet.id}`}
              className="group rounded-3xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-sm hover:border-danie-teal/70 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[11px] uppercase tracking-wide text-gray-100">
                  {projet.categorie}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-titre text-lg font-semibold">
                  {projet.titre}
                </h3>
                <p className="text-sm text-gray-300">
                  {projet.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
          <p className="text-sm sm:text-base text-gray-300 max-w-xl">
            {langue === "fr"
              ? "Vous avez un projet précis ou une campagne complète à lancer ? Décrivez votre besoin en quelques lignes et recevez une proposition sur mesure."
              : "Do you have a specific project or a full campaign to launch? Share a few details and receive a tailored proposal."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 rounded-full bg-white text-danie-noir px-7 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors"
            >
              <span className="fa-solid fa-images text-xs" />
              {langue === "fr"
                ? "Voir toute la galerie"
                : "View full gallery"}
            </Link>
            <a
              href="#section-contact-accueil"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-7 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors"
            >
              <span className="fa-solid fa-paper-plane text-xs" />
              {langue === "fr"
                ? "Discuter d'une collaboration"
                : "Discuss a collaboration"}
            </a>
          </div>
        </div>
      </section>

      <section
        id="section-contact-accueil"
        className="space-y-6 border border-white/5 rounded-3xl bg-black/60 p-6 md:p-8"
        data-aos="fade-up"
      >
        <h2 className="font-titre text-2xl sm:text-3xl font-semibold">
          {langue === "fr"
            ? "Un projet en tête ? Parlons-en dès maintenant."
            : "Have a project in mind? Let's talk about it now."}
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
          {langue === "fr"
            ? "Que ce soit pour une identité visuelle complète, une série de visuels pour vos réseaux ou une direction artistique plus globale, Danie Info vous accompagne avec une approche sur mesure."
            : "Whether you need a full visual identity, a series of social visuals or broader art direction, Danie Info will support you with a tailor-made approach."}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:contact@danie-info.design"
            className="inline-flex items-center gap-2 rounded-full bg-danie-teal px-7 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wide text-white shadow-carte-danie hover:bg-danie-teal-fonce transition-colors"
          >
            <span className="fa-solid fa-envelope text-xs" />
            {langue === "fr" ? "Écrire un e-mail" : "Write an email"}
          </a>
          <a
            href="https://wa.me/2250700000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-danie-teal/70 px-7 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wide text-danie-teal hover:bg-danie-teal/10 transition-colors"
          >
            <span className="fa-brands fa-whatsapp text-base" />
            {langue === "fr" ? "Continuer sur WhatsApp" : "Continue on WhatsApp"}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AccueilPage;



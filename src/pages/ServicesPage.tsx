const ServicesPage = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-4" data-aos="fade-up">
        <p className="font-titre text-xs uppercase tracking-[0.35em] text-danie-teal">
          Prestations détaillées
        </p>
        <h1 className="font-titre text-3xl sm:text-4xl font-semibold">
          Des services d&apos;infographie pensés pour vos objectifs
        </h1>
        <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
          Danie Info accompagne des entrepreneurs, agences, institutions et
          marques personnelles. L’objectif&nbsp;: traduire vos messages en
          visuels clairs, modernes et cohérents sur tous vos supports.
        </p>
      </section>

      <section className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10">
        <div className="space-y-8" data-aos="fade-right">
          <article className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 space-y-3">
            <h2 className="font-titre text-xl font-semibold flex items-center gap-3">
              <span className="fa-solid fa-shapes text-danie-teal" />
              Identité visuelle & rebranding
            </h2>
            <p className="text-sm text-gray-300">
              Création ou refonte de votre identité visuelle complète&nbsp;:
              logo, palette de couleurs, typographies, univers graphique et
              guide d&apos;utilisation. Idéal pour poser des bases solides.
            </p>
            <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
              <li>Logo principal et variantes (horizontale, icône, monochrome).</li>
              <li>Palette de couleurs cohérente (print & digital).</li>
              <li>Recommandations typographiques et styles d&apos;illustrations.</li>
              <li>Mini charte graphique livrée en PDF.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 space-y-3">
            <h2 className="font-titre text-xl font-semibold flex items-center gap-3">
              <span className="fa-solid fa-clone text-danie-teal" />
              Supports imprimés & événementiels
            </h2>
            <p className="text-sm text-gray-300">
              Conception de tous vos supports physiques avec un haut niveau
              d&apos;exigence sur la lisibilité, l&apos;impact visuel et le
              respect de votre identité.
            </p>
            <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
              <li>Affiches, flyers, brochures, catalogues.</li>
              <li>Cartes de visite, papiers en-tête, enveloppes.</li>
              <li>Roll-ups, kakemonos, panneaux, signalétique simple.</li>
              <li>Préparation des fichiers pour imprimerie.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/5 bg-white/[0.03] p-6 space-y-3">
            <h2 className="font-titre text-xl font-semibold flex items-center gap-3">
              <span className="fa-solid fa-share-nodes text-danie-teal" />
              Visuels digitaux & social media
            </h2>
            <p className="text-sm text-gray-300">
              Packs de visuels optimisés pour les réseaux sociaux et le web,
              pour garder une présence en ligne harmonieuse et professionnelle.
            </p>
            <ul className="text-sm text-gray-300 space-y-1.5 list-disc list-inside">
              <li>Templates pour publications Instagram, Facebook, LinkedIn.</li>
              <li>Bannières pour YouTube, sites web et newsletters.</li>
              <li>Visuels pour campagnes sponsorisées.</li>
              <li>Organisation des livrables par formats et thématiques.</li>
            </ul>
          </article>
        </div>

        <aside
          className="space-y-6 rounded-3xl border border-danie-teal/40 bg-gradient-to-b from-danie-teal/25 via-black/60 to-black/80 p-6"
          data-aos="fade-left"
        >
          <h2 className="font-titre text-lg font-semibold mb-2">
            Processus de collaboration
          </h2>
          <ol className="space-y-3 text-sm text-gray-200">
            <li>
              <span className="font-semibold text-danie-teal">1. Prise de brief&nbsp;:</span>{" "}
              compréhension de vos objectifs, cibles et contraintes.
            </li>
            <li>
              <span className="font-semibold text-danie-teal">2. Proposition créative&nbsp;:</span>{" "}
              pistes graphiques et moodboard pour valider la direction.
            </li>
            <li>
              <span className="font-semibold text-danie-teal">3. Déclinaisons & ajustements&nbsp;:</span>{" "}
              affinage des visuels jusqu&apos;à validation.
            </li>
            <li>
              <span className="font-semibold text-danie-teal">4. Livraison finale&nbsp;:</span>{" "}
              fichiers optimisés pour le print et le digital.
            </li>
          </ol>

          <div className="pt-4 border-t border-danie-teal/40">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-300 mb-2">
              Pourquoi travailler avec Danie Info ?
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex gap-2">
                <span className="fa-solid fa-circle-check mt-0.5 text-danie-teal" />
                <span>Conseil et accompagnement pédagogique, même pour les non-spécialistes.</span>
              </li>
              <li className="flex gap-2">
                <span className="fa-solid fa-circle-check mt-0.5 text-danie-teal" />
                <span>Respect des délais et suivi réactif pendant tout le projet.</span>
              </li>
              <li className="flex gap-2">
                <span className="fa-solid fa-circle-check mt-0.5 text-danie-teal" />
                <span>Livrables professionnels pensés pour durer dans le temps.</span>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ServicesPage;



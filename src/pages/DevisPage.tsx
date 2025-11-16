import { useState } from "react";
import type { FormEvent } from "react";

const DevisPage = () => {
  const [messageConfirmation, setMessageConfirmation] = useState("");

  const gérerSoumission = (événement: FormEvent<HTMLFormElement>) => {
    événement.preventDefault();
    setMessageConfirmation(
      "Merci pour votre demande de devis. Danie Info vous répondra avec une proposition détaillée sous 24 à 48 heures."
    );
    (événement.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div className="space-y-12">
      <section className="space-y-4" data-aos="fade-up">
        <p className="font-titre text-xs uppercase tracking-[0.35em] text-danie-teal">
          Demande de devis
        </p>
        <h1 className="font-titre text-3xl sm:text-4xl font-semibold">
          Un devis clair, adapté à votre projet
        </h1>
        <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
          Décrivez votre besoin en détail&nbsp;: type de support, quantité,
          délais, contraintes particulières... Plus votre brief est précis,
          plus la proposition sera juste.
        </p>
      </section>

      <section
        className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <form
          onSubmit={gérerSoumission}
          className="space-y-6 rounded-3xl border border-white/5 bg-black/50 p-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-200">
                Nom complet
              </label>
              <input
                name="nom"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-danie-teal/70 focus:ring-1 focus:ring-danie-teal/60"
                placeholder="Votre nom et prénom"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-200">
                E-mail
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-danie-teal/70 focus:ring-1 focus:ring-danie-teal/60"
                placeholder="vous@exemple.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-200">
                Téléphone / WhatsApp
              </label>
              <input
                name="telephone"
                className="w-full rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-danie-teal/70 focus:ring-1 focus:ring-danie-teal/60"
                placeholder="+225..."
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-200">
                Type de projet
              </label>
              <select
                name="type_projet"
                className="w-full rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-danie-teal/70 focus:ring-1 focus:ring-danie-teal/60"
              >
                <option>Identité visuelle / Logo</option>
                <option>Affiche / Flyer / Support imprimé</option>
                <option>Pack réseaux sociaux</option>
                <option>UI design / Maquette d&apos;application</option>
                <option>Autre (à préciser)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-200">
              Délai souhaité
            </label>
            <select
              name="delai"
              className="w-full rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-danie-teal/70 focus:ring-1 focus:ring-danie-teal/60"
            >
              <option>Flexible (selon planning)</option>
              <option>Moins de 7 jours</option>
              <option>Entre 1 et 3 semaines</option>
              <option>Plus de 1 mois</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-200">
              Description détaillée du projet
            </label>
            <textarea
              name="description"
              required
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-danie-teal/70 focus:ring-1 focus:ring-danie-teal/60 resize-none"
              placeholder="Expliquez vos objectifs, votre cible, les supports souhaités, vos inspirations..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-danie-teal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-carte-danie hover:bg-danie-teal-fonce transition-colors"
          >
            <span className="fa-solid fa-paper-plane text-xs" />
            Envoyer la demande de devis
          </button>

          {messageConfirmation && (
            <p className="text-xs text-emerald-300 leading-relaxed">
              {messageConfirmation}
            </p>
          )}
        </form>

        <aside className="space-y-5 rounded-3xl border border-danie-teal/40 bg-gradient-to-b from-danie-teal/20 via-black/70 to-black/90 p-6">
          <h2 className="font-titre text-lg font-semibold mb-2">
            Informations utiles pour affiner le devis
          </h2>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex gap-2">
              <span className="fa-solid fa-circle-info mt-0.5 text-danie-teal" />
              <span>Précisez si vous avez déjà une identité visuelle.</span>
            </li>
            <li className="flex gap-2">
              <span className="fa-solid fa-circle-info mt-0.5 text-danie-teal" />
              <span>Indiquez les formats attendus (print, web, réseaux sociaux).</span>
            </li>
            <li className="flex gap-2">
              <span className="fa-solid fa-circle-info mt-0.5 text-danie-teal" />
              <span>Ajoutez des liens vers des références ou inspirations si possible.</span>
            </li>
          </ul>

          <div className="pt-4 border-t border-danie-teal/40 space-y-3 text-sm text-gray-200">
            <p className="flex gap-2">
              <span className="fa-solid fa-clock mt-0.5 text-danie-teal" />
              <span>Réponse moyenne&nbsp;: entre 24h et 48h (hors week-end).</span>
            </p>
            <p className="flex gap-2">
              <span className="fa-solid fa-shield-halved mt-0.5 text-danie-teal" />
              <span>Vos informations restent confidentielles et ne sont jamais revendues.</span>
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default DevisPage;



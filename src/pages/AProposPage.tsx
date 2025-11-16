import { useLangue } from "../contexteLangue";

const AProposPage = () => {
  const { langue } = useLangue();

  const textes = {
    titre:
      langue === "fr"
        ? "À propos de Danie Info"
        : "About Danie Info",
    sousTitre:
      langue === "fr"
        ? "Un infographiste passionné par les identités visuelles fortes et élégantes."
        : "A visual designer passionate about strong and elegant visual identities.",
    paragraphe1:
      langue === "fr"
        ? "Depuis plus de 5 ans, Danie Info accompagne des entrepreneurs, PME, agences et institutions dans la création de supports visuels clairs, modernes et mémorables. Son approche est centrée sur la compréhension de votre univers, de votre audience et de vos objectifs pour proposer des visuels qui ont du sens."
        : "For over 5 years, Danie Info has been helping entrepreneurs, SMEs, agencies and institutions design clear, modern and memorable visuals. His approach focuses on understanding your brand, your audience and your goals to deliver visuals that truly make sense.",
    paragraphe2:
      langue === "fr"
        ? "Chaque projet est l’occasion de créer une histoire visuelle cohérente, de la première esquisse jusqu’aux fichiers finaux prêts pour le print ou le digital. Les livrables sont pensés pour être faciles à réutiliser et à décliner, afin de vous permettre de communiquer sereinement sur la durée."
        : "Each project is an opportunity to build a consistent visual story, from the first sketch to the final files ready for print or digital. Deliverables are designed to be easy to reuse and adapt so you can communicate confidently over time.",
  };

  return (
    <div className="space-y-12">
      <section className="space-y-4" data-aos="fade-up">
        <p className="font-titre text-sm uppercase tracking-[0.35em] text-danie-teal">
          {langue === "fr" ? "À propos" : "About"}
        </p>
        <h1 className="font-titre text-3xl sm:text-4xl lg:text-5xl font-semibold">
          {textes.titre}
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl">
          {textes.sousTitre}
        </p>
      </section>

      <section className="grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-start" data-aos="fade-up">
        <div className="space-y-4 text-sm sm:text-base text-gray-300">
          <p>{textes.paragraphe1}</p>
          <p>{textes.paragraphe2}</p>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
            <p className="font-titre text-base font-semibold mb-2">
              {langue === "fr" ? "Champs d’intervention" : "Expertise areas"}
            </p>
            <ul className="text-sm text-gray-300 space-y-1.5">
              <li>- Branding & identité visuelle</li>
              <li>- Affiches, flyers, supports imprimés</li>
              <li>- Visuels social media & campagnes digitales</li>
              <li>- UI design et maquettes d’applications</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-danie-teal/50 bg-danie-teal/10 p-5 text-sm text-gray-200">
            <p className="font-titre text-sm font-semibold mb-2 text-danie-teal">
              {langue === "fr" ? "Valeurs" : "Values"}
            </p>
            <p>
              {langue === "fr"
                ? "Écoute, clarté, exigence et pédagogie guident chaque collaboration, avec une attention particulière portée aux détails et à la cohérence globale de votre image."
                : "Listening, clarity, high standards and pedagogy drive every collaboration, with strong attention to detail and overall consistency for your brand."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AProposPage;



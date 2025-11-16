import { useLangue } from "../contexteLangue";

const ContactPage = () => {
  const { langue } = useLangue();
  return (
    <div className="space-y-12">
      <section className="space-y-4" data-aos="fade-up">
        <p className="font-titre text-xs uppercase tracking-[0.35em] text-danie-teal">
          {langue === "fr" ? "Contact" : "Contact"}
        </p>
        <h1 className="font-titre text-3xl sm:text-4xl font-semibold">
          {langue === "fr"
            ? "Entrer en contact avec Danie Info"
            : "Get in touch with Danie Info"}
        </h1>
        <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
          {langue === "fr"
            ? "Pour une collaboration, une question technique, un besoin de conseil ou un projet à lancer, vous pouvez utiliser ce formulaire ou écrire directement via WhatsApp."
            : "For a collaboration, a technical question, some advice or a new project, you can use this form or contact directly via WhatsApp."}
        </p>
      </section>

      <section
        className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <form className="space-y-5 rounded-3xl border border-white/5 bg-black/50 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-200">
                {langue === "fr" ? "Nom complet" : "Full name"}
              </label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-danie-teal/70 focus:ring-1 focus:ring-danie-teal/60"
                placeholder={langue === "fr" ? "Votre nom" : "Your name"}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-gray-200">
                E-mail
              </label>
              <input
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-danie-teal/70 focus:ring-1 focus:ring-danie-teal/60"
                placeholder={langue === "fr" ? "vous@exemple.com" : "you@example.com"}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-200">
              {langue === "fr" ? "Sujet" : "Subject"}
            </label>
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-danie-teal/70 focus:ring-1 focus:ring-danie-teal/60"
              placeholder={
                langue === "fr" ? "Objet de votre message" : "Subject of your message"
              }
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-200">
              {langue === "fr" ? "Message" : "Message"}
            </label>
            <textarea
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none focus:border-danie-teal/70 focus:ring-1 focus:ring-danie-teal/60 resize-none"
              placeholder={
                langue === "fr"
                  ? "Expliquez rapidement votre besoin ou votre question..."
                  : "Briefly explain your need or question..."
              }
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-danie-teal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-carte-danie hover:bg-danie-teal-fonce transition-colors"
          >
            <span className="fa-solid fa-envelope-open-text text-xs" />
            {langue === "fr" ? "Envoyer le message" : "Send message"}
          </button>
        </form>

        <aside className="space-y-5 rounded-3xl border border-danie-teal/40 bg-gradient-to-b from-danie-teal/20 via-black/70 to-black/90 p-6">
          <h2 className="font-titre text-lg font-semibold mb-2">
            {langue === "fr" ? "Coordonnées directes" : "Direct contact"}
          </h2>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex gap-3">
              <span className="fa-solid fa-envelope text-danie-teal mt-0.5" />
              <span>contact@danie-info.design</span>
            </li>
            <li className="flex gap-3">
              <span className="fa-brands fa-whatsapp text-danie-teal mt-0.5" />
              <span>
                {langue === "fr"
                  ? "+225 07 00 00 00 00 (préféré pour une réponse rapide)"
                  : "+225 07 00 00 00 00 (preferred for a quick reply)"}
              </span>
            </li>
          </ul>

          <div className="pt-4 border-t border-danie-teal/40 space-y-3 text-sm text-gray-200">
            <p className="flex gap-3">
              <span className="fa-solid fa-calendar-check text-danie-teal mt-0.5" />
              <span>
                {langue === "fr"
                  ? "Rendez-vous visio ou présentiel sur demande après un premier échange."
                  : "Video or in-person meetings on request after a first contact."}
              </span>
            </p>
            <p className="flex gap-3">
              <span className="fa-solid fa-language text-danie-teal mt-0.5" />
              <span>
                {langue === "fr"
                  ? "Communication possible en français et en anglais."
                  : "Communication available in French and English."}
              </span>
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ContactPage;



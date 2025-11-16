import { useLangue } from "../contexteLangue";

const BoutonWhatsappFlottant = () => {
  const { langue } = useLangue();
  const numéroWhatsapp = "+2250700000000"; // à adapter
  const messageParDéfaut =
    langue === "fr"
      ? "Bonjour Danie Info, je souhaite en savoir plus sur vos prestations d’infographie."
      : "Hello Danie Info, I would like to know more about your graphic design services.";

  const lienWhatsapp = `https://wa.me/${numéroWhatsapp.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(messageParDéfaut)}`;

  return (
    <a
      href={lienWhatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-4 sm:right-6 z-40 inline-flex items-center justify-center rounded-full bg-[#25D366] text-white w-14 h-14 shadow-xl shadow-black/40 hover:scale-110 transition-transform border border-white/20 animate-bounce"
      aria-label={
        langue === "fr"
          ? "Contacter Danie Info sur WhatsApp"
          : "Contact Danie Info on WhatsApp"
      }
    >
      <span className="fa-brands fa-whatsapp text-3xl drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]" />
    </a>
  );
};

export default BoutonWhatsappFlottant;



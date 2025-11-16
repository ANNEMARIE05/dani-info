import { FaEnvelope, FaWhatsapp, FaLocationDot, FaInstagram } from "react-icons/fa6";
import { useLangue } from "../contexteLangue";

const PiedDePage = () => {
  const { langue } = useLangue();
  return (
    <footer className="border-t border-white/5 bg-gradient-to-t from-black via-[#020a0d] to-black/90 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8 text-sm sm:text-base text-gray-300">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-titre text-xl font-semibold text-white mb-2">
              Danie Info
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-danie-teal mb-4">
              {langue === "fr"
                ? "Infographiste & designer visuel"
                : "Graphic & visual designer"}
            </p>
            <p className="text-sm text-gray-400">
              {langue === "fr"
                ? "Création d’univers visuels modernes pour les marques, entrepreneurs et organisations qui veulent communiquer avec impact."
                : "Designing modern visual universes for brands, entrepreneurs and organisations that want impactful communication."}
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-titre text-sm font-semibold text-white">
              {langue === "fr" ? "Contact direct" : "Direct contact"}
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-danie-teal" />
              <span>contact@danie-info.design</span>
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp className="text-danie-teal" />
              <span>+225 07 00 00 00 00</span>
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-titre text-sm font-semibold text-white">
              {langue === "fr" ? "Localisation & réseaux" : "Location & socials"}
            </p>
            <p className="flex items-center gap-2">
              <FaLocationDot className="text-danie-teal" />
              <span>
                {langue === "fr"
                  ? "Travail à distance & sur rendez-vous."
                  : "Working remotely & by appointment."}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaInstagram className="text-danie-teal" />
              <span>@danieinfo.design</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs sm:text-sm text-gray-400 border-t border-white/5 pt-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Danie Info</span>. Tous droits
            réservés.
          </p>
          <p>Portfolio réalisé avec React & TailwindCSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default PiedDePage;



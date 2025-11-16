import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useLangue } from "../contexteLangue";

const liensNavigation = [
  { chemin: "/", clé: "accueil" },
  { chemin: "/a-propos", clé: "aPropos" },
  { chemin: "/galerie", clé: "galerie" },
  { chemin: "/contact", clé: "contact" },
];

const EnteteSite = () => {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const { langue, changerLangue } = useLangue();

  const libellés = {
    accueil: langue === "fr" ? "Accueil" : "Home",
    aPropos: langue === "fr" ? "À propos" : "About",
    galerie: langue === "fr" ? "Galerie" : "Gallery",
    contact: langue === "fr" ? "Contact" : "Contact",
    baseline:
      langue === "fr"
        ? "Infographiste freelance pour marques ambitieuses."
        : "Freelance visual designer for ambitious brands.",
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/5">
      {/* Barre d'informations contact */}
      <div className="hidden sm:block bg-black/90 text-[11px] sm:text-xs text-gray-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-1.5">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <FaEnvelope className="text-danie-teal" />
              <span>contact@danie-info.design</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-2">
              <FaPhoneAlt className="text-danie-teal" />
              <span>+225 07 00 00 00 00</span>
            </span>
          </div>
          <span className="hidden sm:inline text-gray-400">
            {libellés.baseline}
          </span>
        </div>
      </div>

      {/* Barre principale */}
      <div className="bg-black/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="h-10 w-10 rounded-lg bg-danie-teal flex items-center justify-center shadow-carte-danie">
              <span className="font-titre text-lg font-semibold tracking-tight">
                DI
              </span>
            </div>
            <div>
              <p className="font-titre text-sm uppercase tracking-[0.25em] text-danie-teal">
                Danie Info
              </p>
              <p className="text-xs text-gray-300">
                Infographiste & Designer visuel
              </p>
            </div>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium ml-auto">
            {liensNavigation.map((lien) => (
              <NavLink
                key={lien.chemin}
                to={lien.chemin}
                className={({ isActive }) =>
                  `relative transition-colors duration-200 ${
                    isActive
                      ? "text-danie-teal"
                      : "text-gray-200 hover:text-danie-teal"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{libellés[lien.clé as keyof typeof libellés]}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-danie-teal via-white/80 to-danie-teal" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <div className="ml-4 flex items-center gap-1 text-xs uppercase tracking-[0.25em] border border-white/10 rounded-full px-3 py-1 bg-white/5">
              <button
                type="button"
                onClick={() => changerLangue("fr")}
                className={`transition-colors ${
                  langue === "fr" ? "text-danie-teal" : "text-gray-300"
                }`}
              >
                FR
              </button>
              <span className="text-gray-500">/</span>
              <button
                type="button"
                onClick={() => changerLangue("en")}
                className={`transition-colors ${
                  langue === "en" ? "text-danie-teal" : "text-gray-300"
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Bouton menu mobile */}
          <button
            type="button"
            className="md:hidden ml-4 inline-flex items-center justify-center rounded-full border border-white/10 h-9 w-9 text-gray-100 hover:text-danie-teal hover:border-danie-teal/60 transition-colors"
            onClick={() => setMenuOuvert((ouvert) => !ouvert)}
            aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className={`fa-solid ${
                menuOuvert ? "fa-xmark text-base" : "fa-bars text-sm"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {menuOuvert && (
        <div className="md:hidden bg-black/95 border-t border-white/5">
          <nav className="max-w-6xl mx-auto px-4 py-3 space-y-3">
            {liensNavigation.map((lien) => (
              <NavLink
                key={lien.chemin}
                to={lien.chemin}
                onClick={() => setMenuOuvert(false)}
                className={({ isActive }) =>
                  `block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-danie-teal text-white"
                      : "text-gray-200 hover:bg-white/5 hover:text-danie-teal"
                  }`
                }
              >
                {libellés[lien.clé as keyof typeof libellés]}
              </NavLink>
            ))}

            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] border border-white/10 rounded-full px-3 py-1.5 bg-white/5 w-fit mt-2">
              <button
                type="button"
                onClick={() => changerLangue("fr")}
                className={`transition-colors ${
                  langue === "fr" ? "text-danie-teal" : "text-gray-300"
                }`}
              >
                FR
              </button>
              <span className="text-gray-500">/</span>
              <button
                type="button"
                onClick={() => changerLangue("en")}
                className={`transition-colors ${
                  langue === "en" ? "text-danie-teal" : "text-gray-300"
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default EnteteSite;



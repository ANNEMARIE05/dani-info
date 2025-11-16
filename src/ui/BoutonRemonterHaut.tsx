import { useEffect, useState } from "react";

const BoutonRemonterHaut = () => {
  const [afficher, setAfficher] = useState(false);

  useEffect(() => {
    const gérerDéfilement = () => {
      setAfficher(window.scrollY > 300);
    };
    window.addEventListener("scroll", gérerDéfilement);
    return () => window.removeEventListener("scroll", gérerDéfilement);
  }, []);

  if (!afficher) return null;

  const remonter = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={remonter}
      className="fixed bottom-24 right-4 sm:right-6 z-40 inline-flex items-center justify-center rounded-full bg-danie-teal text-white w-11 h-11 shadow-lg shadow-black/40 hover:bg-danie-teal-fonce transition-colors border border-white/20"
      aria-label="Remonter en haut de la page"
    >
      <span className="fa-solid fa-arrow-up text-base" />
    </button>
  );
};

export default BoutonRemonterHaut;



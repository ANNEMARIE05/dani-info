import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import EnteteSite from "../sections/EnteteSite";
import PiedDePage from "../sections/PiedDePage";
import BoutonWhatsappFlottant from "../ui/BoutonWhatsappFlottant";
import BoutonRemonterHaut from "../ui/BoutonRemonterHaut";
import { FournisseurLangue } from "../contexteLangue";

const InterfacePrincipale = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <FournisseurLangue>
      <div className="bg-gradient-to-b from-danie-noir via-[#02151a] to-danie-noir text-danie-blanc min-h-screen">
        <EnteteSite />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 space-y-24">
          <Outlet />
        </main>
        <PiedDePage />
        <BoutonWhatsappFlottant />
        <BoutonRemonterHaut />
      </div>
    </FournisseurLangue>
  );
};

export default InterfacePrincipale;



import { Routes, Route } from "react-router-dom";
import InterfacePrincipale from "./layout/InterfacePrincipale";
import AccueilPage from "./pages/AccueilPage";
import AProposPage from "./pages/AProposPage";
import GaleriePage from "./pages/GaleriePage";
import ProjetDetailPage from "./pages/ProjetDetailPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Routes>
      <Route element={<InterfacePrincipale />}>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/galerie" element={<GaleriePage />} />
        <Route path="/projets/:id" element={<ProjetDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;

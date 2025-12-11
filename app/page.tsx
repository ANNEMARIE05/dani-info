import { Navigation } from "@/components/navigation"
import { Accueil } from "@/components/accueil"
import { APropos } from "@/components/a-propos"
import { Services } from "@/components/services"
import { Galerie } from "@/components/galerie"
import { Temoignages } from "@/components/temoignages"
import { Statistiques } from "@/components/statistiques"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BoutonWhatsapp } from "@/components/bouton-whatsapp"
import { BoutonHaut } from "@/components/bouton-haut"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Accueil />
      <APropos />
      <Services />
      <Statistiques />
      <Galerie />
      <Temoignages />
      <Contact />
      <Footer />
      <BoutonWhatsapp />
      <BoutonHaut />
    </main>
  )
}

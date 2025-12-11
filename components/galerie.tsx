"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Eye } from "lucide-react"

const projets = [
  {
    id: 1,
    titre: "Identité Marque Luxe",
    categorie: "Logo & Branding",
    image: "/luxury-brand-identity-gold-black-elegant-logo-desi.jpg",
  },
  {
    id: 2,
    titre: "Campagne Digitale",
    categorie: "Design Digital",
    image: "/digital-marketing-campaign-social-media-posts-mode.jpg",
  },
  {
    id: 3,
    titre: "Packaging Produit",
    categorie: "Packaging",
    image: "/premium-product-packaging-design-cosmetics-elegant.jpg",
  },
  {
    id: 4,
    titre: "Magazine Mode",
    categorie: "Mise en page",
    image: "/fashion-magazine-layout-design-editorial-spread-el.jpg",
  },
  {
    id: 5,
    titre: "Affiche Événement",
    categorie: "Print Design",
    image: "/event-poster-design-concert-festival-creative-typo.jpg",
  },
  {
    id: 6,
    titre: "Application Mobile",
    categorie: "UI Design",
    image: "/mobile-app-ui-design-modern-interface-dark-theme.jpg",
  },
  {
    id: 7,
    titre: "Brochure Corporate",
    categorie: "Print Design",
    image: "/corporate-brochure-design-professional-business-cl.jpg",
  },
  {
    id: 8,
    titre: "Logo Restaurant",
    categorie: "Logo & Branding",
    image: "/restaurant-logo-design-elegant-food-bistro-brandin.jpg",
  },
]

const categories = [
  "Tous",
  "Logo & Branding",
  "Design Digital",
  "Print Design",
  "Packaging",
  "UI Design",
  "Mise en page",
]

export function Galerie() {
  const ref = useRef(null)
  const estVisible = useInView(ref, { once: true, margin: "-100px" })
  const [filtre, setFiltre] = useState("Tous")
  const [projetActif, setProjetActif] = useState<number | null>(null)

  const projetsFiltres = filtre === "Tous" ? projets : projets.filter((p) => p.categorie === filtre)

  return (
    <section id="galerie" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={estVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Mes <span className="text-primary">créations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et les plus marquants.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={estVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltre(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filtre === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grille de projets */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projetsFiltres.map((projet, index) => (
            <motion.div
              key={projet.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setProjetActif(projet.id)}
              onMouseLeave={() => setProjetActif(null)}
            >
              <img
                src={projet.image || "/placeholder.svg"}
                alt={projet.titre}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-300 ${
                  projetActif === projet.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Contenu hover */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300 ${
                  projetActif === projet.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="text-primary text-xs font-medium uppercase tracking-wider mb-1">
                  {projet.categorie}
                </span>
                <h3 className="text-foreground font-bold text-lg">{projet.titre}</h3>
                <div className="flex items-center gap-3 mt-3">
                  <button className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/40 transition-colors">
                    <Eye className="w-4 h-4 text-foreground" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/40 transition-colors">
                    <ExternalLink className="w-4 h-4 text-foreground" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

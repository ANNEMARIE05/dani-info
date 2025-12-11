"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, PenTool, Monitor, FileImage, Layers, Printer, ArrowRight } from "lucide-react"

const services = [
  {
    icone: Palette,
    titre: "Identité Visuelle",
    description:
      "Création de logos, chartes graphiques et identités de marque complètes qui reflètent votre vision unique.",
    prix: "À partir de 75 000 FCFA",
  },
  {
    icone: PenTool,
    titre: "Design Graphique",
    description: "Conception de visuels pour tous vos supports : affiches, flyers, brochures et bien plus encore.",
    prix: "À partir de 25 000 FCFA",
  },
  {
    icone: Monitor,
    titre: "Design Digital",
    description: "Création de visuels pour le web et les réseaux sociaux : bannières, posts, stories et publicités.",
    prix: "À partir de 15 000 FCFA",
  },
  {
    icone: FileImage,
    titre: "Retouche Photo",
    description: "Retouche professionnelle de vos photos : correction, montage, manipulation et amélioration.",
    prix: "À partir de 10 000 FCFA",
  },
  {
    icone: Layers,
    titre: "Mise en Page",
    description: "Création de catalogues, magazines, rapports et tous types de documents professionnels.",
    prix: "À partir de 40 000 FCFA",
  },
  {
    icone: Printer,
    titre: "Supports Print",
    description: "Conception de cartes de visite, packaging, étiquettes et tous supports imprimés.",
    prix: "À partir de 20 000 FCFA",
  },
]

export function Services() {
  const ref = useRef(null)
  const estVisible = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={estVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Ce que je peux faire <span className="text-primary">pour vous</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions créatives sur mesure pour répondre à tous vos besoins en communication visuelle.
          </p>
        </motion.div>

        {/* Grille de services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.titre}
              initial={{ opacity: 0, y: 30 }}
              animate={estVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icône */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icone className="w-7 h-7 text-primary" />
              </div>

              {/* Contenu */}
              <h3 className="text-foreground font-bold text-xl mb-3">{service.titre}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Prix et CTA */}
              <div className="flex items-center justify-between">
                <span className="text-primary font-semibold">{service.prix}</span>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group/link"
                >
                  <span className="text-sm font-medium">Commander</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

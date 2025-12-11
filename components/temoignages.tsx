"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const temoignages = [
  {
    id: 1,
    nom: "Marie Dupont",
    poste: "CEO, Studio Créatif",
    photo: "/professional-woman-portrait-business-headshot.jpg",
    texte:
      "Daniel a su capturer parfaitement l'essence de notre marque. Son travail sur notre identité visuelle a dépassé toutes nos attentes. Professionnalisme et créativité au rendez-vous !",
    note: 5,
  },
  {
    id: 2,
    nom: "Jean Martin",
    poste: "Directeur Marketing, TechStart",
    photo: "/professional-man-portrait-business-headshot-africa.jpg",
    texte:
      "Un talent exceptionnel et une écoute remarquable. Daniel a créé nos supports marketing avec une précision et une créativité impressionnantes. Je le recommande vivement !",
    note: 5,
  },
  {
    id: 3,
    nom: "Sophie Bernard",
    poste: "Fondatrice, Boutique Élégance",
    photo: "/professional-woman-portrait-elegant-business.jpg",
    texte:
      "Le packaging créé par Daniel pour nos produits a considérablement amélioré notre image de marque. Un travail soigné et une communication fluide tout au long du projet.",
    note: 5,
  },
]

export function Temoignages() {
  const ref = useRef(null)
  const estVisible = useInView(ref, { once: true, margin: "-100px" })
  const [actuel, setActuel] = useState(0)

  const suivant = () => {
    setActuel((prev) => (prev + 1) % temoignages.length)
  }

  const precedent = () => {
    setActuel((prev) => (prev - 1 + temoignages.length) % temoignages.length)
  }

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={estVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Témoignages</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Ce que disent mes <span className="text-primary">clients</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={estVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(temoignages[actuel].note)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Texte */}
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
                "{temoignages[actuel].texte}"
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-4">
                <img
                  src={temoignages[actuel].photo || "/placeholder.svg"}
                  alt={temoignages[actuel].nom}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="text-foreground font-bold">{temoignages[actuel].nom}</p>
                  <p className="text-muted-foreground text-sm">{temoignages[actuel].poste}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={precedent}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {temoignages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActuel(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    actuel === index ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={suivant}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

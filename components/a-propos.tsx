"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Palette, Lightbulb, Users } from "lucide-react"

const competences = [
  {
    icone: Palette,
    titre: "Design Créatif",
    description: "Création de visuels uniques et percutants pour votre marque",
  },
  {
    icone: Lightbulb,
    titre: "Identité Visuelle",
    description: "Développement de logos et chartes graphiques cohérentes",
  },
  {
    icone: Award,
    titre: "Qualité Premium",
    description: "Un souci du détail pour des résultats exceptionnels",
  },
  {
    icone: Users,
    titre: "Collaboration",
    description: "Écoute attentive et communication transparente",
  },
]

export function APropos() {
  const ref = useRef(null)
  const estVisible = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="apropos" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={estVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-card">
              <img
                src="/professional-african-graphic-designer-man-working-.jpg"
                alt="Daniel, infographe professionnel"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={estVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-xl rounded-2xl p-5 border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-bold text-lg">+5 ans</p>
                    <p className="text-muted-foreground text-sm">d'expérience professionnelle</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Décoration */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-primary/20 rounded-3xl" />
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={estVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">À propos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
              Passionné par le <span className="text-primary">design graphique</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Je suis Daniel, infographe freelance avec plus de 5 ans d'expérience dans la création d'identités
              visuelles percutantes. Ma passion est de transformer les idées de mes clients en designs mémorables qui
              captivent et inspirent.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              De la conception de logos à la création de supports marketing complets, je m'engage à fournir un travail
              de qualité exceptionnelle qui répond parfaitement à vos besoins et dépasse vos attentes.
            </p>

            {/* Compétences */}
            <div className="grid sm:grid-cols-2 gap-5">
              {competences.map((competence, index) => (
                <motion.div
                  key={competence.titre}
                  initial={{ opacity: 0, y: 20 }}
                  animate={estVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <competence.icone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{competence.titre}</h3>
                    <p className="text-muted-foreground text-sm">{competence.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

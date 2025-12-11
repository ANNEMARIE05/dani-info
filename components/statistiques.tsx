"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { valeur: 150, suffixe: "+", label: "Projets réalisés" },
  { valeur: 80, suffixe: "+", label: "Clients satisfaits" },
  { valeur: 5, suffixe: "+", label: "Années d'expérience" },
  { valeur: 100, suffixe: "%", label: "Satisfaction client" },
]

function AnimatedCounter({
  valeur,
  suffixe,
  estVisible,
}: {
  valeur: number
  suffixe: string
  estVisible: boolean
}) {
  const [compteur, setCompteur] = useState(0)

  useEffect(() => {
    if (!estVisible) return

    const duree = 2000
    const debut = Date.now()

    const animer = () => {
      const maintenant = Date.now()
      const progres = Math.min((maintenant - debut) / duree, 1)
      const easeOut = 1 - Math.pow(1 - progres, 3)
      setCompteur(Math.floor(easeOut * valeur))

      if (progres < 1) {
        requestAnimationFrame(animer)
      }
    }

    requestAnimationFrame(animer)
  }, [valeur, estVisible])

  return (
    <span>
      {compteur}
      {suffixe}
    </span>
  )
}

export function Statistiques() {
  const ref = useRef(null)
  const estVisible = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={estVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={estVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-2">
                <AnimatedCounter valeur={stat.valeur} suffixe={stat.suffixe} estVisible={estVisible} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

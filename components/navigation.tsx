"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const liens = [
  { nom: "Accueil", href: "#accueil" },
  { nom: "À propos", href: "#apropos" },
  { nom: "Galerie", href: "#galerie" },
  { nom: "Contact", href: "#contact" },
]

export function Navigation() {
  const [estOuvert, setEstOuvert] = useState(false)
  const [defiler, setDefiler] = useState(false)
  const [sectionActive, setSectionActive] = useState("accueil")

  useEffect(() => {
    const gererScroll = () => {
      setDefiler(window.scrollY > 50)

      const sections = liens.map((l) => l.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setSectionActive(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", gererScroll)
    return () => window.removeEventListener("scroll", gererScroll)
  }, [])

  const gererClicLien = (href: string) => {
    setSectionActive(href.replace("#", ""))
    setEstOuvert(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        defiler ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec image */}
          <motion.a
            href="#accueil"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => gererClicLien("#accueil")}
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/20">
              <Image src="/d-letter-logo-gold-elegant-minimal.jpg" alt="Logo Daniel Info" fill className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <span className="text-foreground font-serif font-bold text-xl tracking-tight">Daniel</span>
              <span className="text-primary font-light text-sm block -mt-1">Info</span>
            </div>
          </motion.a>

          {/* Navigation Desktop avec indicateur actif */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {liens.map((lien, index) => {
              const estActif = sectionActive === lien.href.replace("#", "")
              return (
                <motion.a
                  key={lien.nom}
                  href={lien.href}
                  onClick={() => gererClicLien(lien.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    estActif ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {lien.nom}
                  {estActif && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              )
            })}
          </nav>

          {/* Bouton CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:block"
          >
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            >
              <a href="#contact">Faire une prestation</a>
            </Button>
          </motion.div>

          {/* Menu Mobile */}
          <button onClick={() => setEstOuvert(!estOuvert)} className="md:hidden p-2 text-foreground">
            {estOuvert ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay avec indicateur actif */}
      <AnimatePresence>
        {estOuvert && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <nav className="flex flex-col items-center py-8 gap-6">
              {liens.map((lien) => {
                const estActif = sectionActive === lien.href.replace("#", "")
                return (
                  <a
                    key={lien.nom}
                    href={lien.href}
                    onClick={() => gererClicLien(lien.href)}
                    className={`text-lg font-medium transition-colors ${estActif ? "text-primary" : "text-foreground"}`}
                  >
                    {lien.nom}
                    {estActif && <span className="block w-full h-0.5 bg-primary rounded-full mt-1" />}
                  </a>
                )
              })}
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full mt-4"
              >
                <a href="#contact" onClick={() => setEstOuvert(false)}>
                  Faire une prestation
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

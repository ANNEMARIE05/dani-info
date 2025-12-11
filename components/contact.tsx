"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const infosContact = [
  {
    icone: Mail,
    label: "Email",
    valeur: "daniel.info@gmail.com",
    lien: "mailto:daniel.info@gmail.com",
  },
  {
    icone: Phone,
    label: "Téléphone",
    valeur: "+225 07 08 09 10 11",
    lien: "tel:+2250708091011",
  },
  {
    icone: MapPin,
    label: "Localisation",
    valeur: "Abidjan, Côte d'Ivoire",
    lien: "#",
  },
]

const reseaux = [
  { icone: Instagram, lien: "https://instagram.com", label: "Instagram" },
  { icone: Linkedin, lien: "https://linkedin.com", label: "LinkedIn" },
  { icone: Facebook, lien: "https://facebook.com", label: "Facebook" },
]

export function Contact() {
  const ref = useRef(null)
  const estVisible = useInView(ref, { once: true, margin: "-100px" })
  const [formulaire, setFormulaire] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  })
  const [envoye, setEnvoye] = useState(false)

  const gererSoumission = (e: React.FormEvent) => {
    e.preventDefault()
    setEnvoye(true)
    setTimeout(() => {
      setEnvoye(false)
      setFormulaire({ nom: "", email: "", sujet: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={estVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Parlons de votre <span className="text-primary">projet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? Contactez-moi pour en discuter et obtenir un devis personnalisé.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Infos de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={estVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-3xl p-8 border border-border h-full">
              <h3 className="text-foreground font-bold text-2xl mb-8">Coordonnées</h3>

              <div className="space-y-6 mb-10">
                {infosContact.map((info) => (
                  <a key={info.label} href={info.lien} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {info.valeur}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div>
                <p className="text-muted-foreground text-sm mb-4">Suivez-moi sur</p>
                <div className="flex gap-3">
                  {reseaux.map((reseau) => (
                    <a
                      key={reseau.label}
                      href={reseau.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                    >
                      <reseau.icone className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={estVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={gererSoumission} className="bg-card rounded-3xl p-8 border border-border">
              <h3 className="text-foreground font-bold text-2xl mb-8">Envoyez-moi un message</h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-muted-foreground text-sm mb-2 block">Votre nom</label>
                  <Input
                    type="text"
                    placeholder="Kouamé Jean"
                    value={formulaire.nom}
                    onChange={(e) => setFormulaire({ ...formulaire, nom: e.target.value })}
                    required
                    className="bg-muted border-border focus:border-primary h-12"
                  />
                </div>
                <div>
                  <label className="text-muted-foreground text-sm mb-2 block">Votre email</label>
                  <Input
                    type="email"
                    placeholder="jean@exemple.ci"
                    value={formulaire.email}
                    onChange={(e) => setFormulaire({ ...formulaire, email: e.target.value })}
                    required
                    className="bg-muted border-border focus:border-primary h-12"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="text-muted-foreground text-sm mb-2 block">Sujet</label>
                <Input
                  type="text"
                  placeholder="Création de logo"
                  value={formulaire.sujet}
                  onChange={(e) => setFormulaire({ ...formulaire, sujet: e.target.value })}
                  required
                  className="bg-muted border-border focus:border-primary h-12"
                />
              </div>

              <div className="mb-6">
                <label className="text-muted-foreground text-sm mb-2 block">Votre message</label>
                <Textarea
                  placeholder="Décrivez votre projet..."
                  value={formulaire.message}
                  onChange={(e) => setFormulaire({ ...formulaire, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-muted border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 rounded-xl font-medium text-lg shadow-lg shadow-primary/25 transition-all hover:shadow-xl"
                disabled={envoye}
              >
                {envoye ? (
                  "Message envoyé !"
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

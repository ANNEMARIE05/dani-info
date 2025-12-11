"use client"
import { Heart, Instagram, Linkedin, Facebook, Mail } from "lucide-react"

const liens = [
  { nom: "Accueil", href: "#accueil" },
  { nom: "À propos", href: "#apropos" },
  { nom: "Services", href: "#services" },
  { nom: "Galerie", href: "#galerie" },
  { nom: "Contact", href: "#contact" },
]

const reseaux = [
  { icone: Instagram, lien: "https://instagram.com", label: "Instagram" },
  { icone: Linkedin, lien: "https://linkedin.com", label: "LinkedIn" },
  { icone: Facebook, lien: "https://facebook.com", label: "Facebook" },
  { icone: Mail, lien: "mailto:daniel.info@gmail.com", label: "Email" },
]

export function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-serif font-bold text-xl">D</span>
              </div>
              <div>
                <span className="text-foreground font-serif font-bold text-xl tracking-tight">Daniel</span>
                <span className="text-primary font-light text-sm block -mt-1">Info</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Infographe créatif avec plus de 5 ans d'expérience. Je transforme vos idées en visuels percutants qui
              marquent les esprits.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {reseaux.map((reseau) => (
                <a
                  key={reseau.label}
                  href={reseau.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                >
                  <reseau.icone className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-foreground font-bold mb-5">Navigation</h4>
            <ul className="space-y-3">
              {liens.map((lien) => (
                <li key={lien.nom}>
                  <a href={lien.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {lien.nom}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-5">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>daniel.info@gmail.com</li>
              <li>+33 6 12 34 56 78</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {annee} Daniel Info. Tous droits réservés.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> par Daniel
          </p>
        </div>
      </div>
    </footer>
  )
}

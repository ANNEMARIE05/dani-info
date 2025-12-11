"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function BoutonWhatsapp() {
  const numeroWhatsapp = "2250708091011"
  const messageWhatsapp = encodeURIComponent(
    "Bonjour Daniel, je suis intéressé(e) par vos services de design graphique. Pouvons-nous en discuter ?",
  )
  const lienWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${messageWhatsapp}`

  return (
    <motion.a
      href={lienWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-shadow"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />

      {/* Effet de pulsation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  )
}

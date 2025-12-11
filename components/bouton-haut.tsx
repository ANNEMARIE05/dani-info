"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function BoutonHaut() {
  const [estVisible, setEstVisible] = useState(false)

  useEffect(() => {
    const gererScroll = () => {
      setEstVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", gererScroll)
    return () => window.removeEventListener("scroll", gererScroll)
  }, [])

  const remonterEnHaut = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {estVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={remonterEnHaut}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-shadow"
          aria-label="Remonter en haut"
        >
          <ArrowUp className="w-6 h-6 text-primary-foreground" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

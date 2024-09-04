import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

import { getCookie, setCookie } from "@/utils/cookies"

import Button from "../Button"

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = getCookie("cookieConsent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    setCookie("cookieConsent", "true")
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-black p-4 shadow-lg">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary">
              Este site utiliza cookies para melhorar sua experiência. Ao
              continuar navegando, você concorda com nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-highlight underline">
                Política de Privacidade
              </Link>{" "}
              e com o uso de cookies de acordo com a LGPD.
            </p>
            <Button onClick={handleAccept} size="small">
              Aceitar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent

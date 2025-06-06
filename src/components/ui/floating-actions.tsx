
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Monitor, ArrowUp } from "lucide-react"
import SystemMonitor from "@/components/ui/system-monitor"

export function FloatingActions() {
  const [showMonitor, setShowMonitor] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-2">
        <AnimatePresence>
          {showBackToTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                onClick={scrollToTop}
                size="icon"
                className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.2 }}
        >
          <Button
            onClick={() => setShowMonitor(!showMonitor)}
            size="icon"
            variant={showMonitor ? "default" : "outline"}
            className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Monitor className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showMonitor && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-20 right-4 z-[55]"
          >
            <SystemMonitor />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

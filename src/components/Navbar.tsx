import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Agents', href: '#agents' },
  { label: 'Workflows', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-strong border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.8)] transition-all duration-300">
                <rect width="36" height="36" rx="9" fill="url(#logoGrad)" />
                {/* Connection lines */}
                <line x1="10" y1="10" x2="26" y2="10" stroke="white" strokeWidth="1.2" strokeOpacity="0.35" />
                <line x1="10" y1="26" x2="26" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.35" />
                <line x1="10" y1="10" x2="10" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.35" />
                <line x1="26" y1="10" x2="26" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.35" />
                <line x1="18" y1="10" x2="18" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.2" />
                <line x1="10" y1="18" x2="26" y2="18" stroke="white" strokeWidth="1.2" strokeOpacity="0.2" />
                {/* Diagonal connectors */}
                <line x1="10" y1="10" x2="26" y2="26" stroke="white" strokeWidth="0.8" strokeOpacity="0.18" />
                <line x1="26" y1="10" x2="10" y2="26" stroke="white" strokeWidth="0.8" strokeOpacity="0.18" />
                {/* Corner nodes */}
                <circle cx="10" cy="10" r="2.5" fill="white" fillOpacity="0.95" />
                <circle cx="26" cy="10" r="2.5" fill="white" fillOpacity="0.6" />
                <circle cx="10" cy="26" r="2.5" fill="white" fillOpacity="0.6" />
                <circle cx="26" cy="26" r="2.5" fill="white" fillOpacity="0.95" />
                {/* Center node — glowing */}
                <circle cx="18" cy="18" r="3.2" fill="white" fillOpacity="0.15" />
                <circle cx="18" cy="18" r="2" fill="white" fillOpacity="0.9" />
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Gridd</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
            >
              Start Building
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 glass-strong border-b border-white/[0.06] px-4 pt-4 pb-6 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
                <a
                  href="#pricing"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-center font-semibold transition-colors"
                >
                  Start Building
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

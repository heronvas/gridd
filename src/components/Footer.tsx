import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks: Record<string, { label: string; to: string }[]> = {
  Product: [
    { label: 'Platform', to: '/platform' },
    { label: 'Agents', to: '/agents' },
    { label: 'Integrations', to: '/integrations' },
    // { label: 'API Docs', to: '/api-docs' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Careers', to: '/careers' },
    { label: 'Legal', to: '/legal' },
  ],
  Resources: [
    // { label: 'Documentation', to: '/docs' },
    { label: 'Community', to: '/community' },
    { label: 'Privacy', to: '/privacy' },
  ],
}

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer ref={ref} id="footer" className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14"
        >
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]">
                <rect width="36" height="36" rx="9" fill="url(#footerLogoGrad)" />
                <line x1="10" y1="10" x2="26" y2="10" stroke="white" strokeWidth="1.2" strokeOpacity="0.35" />
                <line x1="10" y1="26" x2="26" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.35" />
                <line x1="10" y1="10" x2="10" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.35" />
                <line x1="26" y1="10" x2="26" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.35" />
                <line x1="18" y1="10" x2="18" y2="26" stroke="white" strokeWidth="1.2" strokeOpacity="0.2" />
                <line x1="10" y1="18" x2="26" y2="18" stroke="white" strokeWidth="1.2" strokeOpacity="0.2" />
                <line x1="10" y1="10" x2="26" y2="26" stroke="white" strokeWidth="0.8" strokeOpacity="0.18" />
                <line x1="26" y1="10" x2="10" y2="26" stroke="white" strokeWidth="0.8" strokeOpacity="0.18" />
                <circle cx="10" cy="10" r="2.5" fill="white" fillOpacity="0.95" />
                <circle cx="26" cy="10" r="2.5" fill="white" fillOpacity="0.6" />
                <circle cx="10" cy="26" r="2.5" fill="white" fillOpacity="0.6" />
                <circle cx="26" cy="26" r="2.5" fill="white" fillOpacity="0.95" />
                <circle cx="18" cy="18" r="3.2" fill="white" fillOpacity="0.15" />
                <circle cx="18" cy="18" r="2" fill="white" fillOpacity="0.9" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-bold text-white">Gridd</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-5">
              Build AI Teams, Not AI Tools. The multi-agent platform for modern businesses
              that want to automate intelligently.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/35 hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.05]"
        >
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Gridd, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/legal" className="text-xs text-white/25 hover:text-white/50 transition-colors">Terms</Link>
            <Link to="/privacy" className="text-xs text-white/25 hover:text-white/50 transition-colors">Privacy</Link>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

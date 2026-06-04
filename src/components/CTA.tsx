import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-14 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-purple-800/30" />
          <div className="absolute inset-0 bg-[#060612]/60" />
          <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-30" />

          {/* Glowing orbs inside card */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px]" />

          {/* Border gradient */}
          <div className="absolute inset-0 rounded-3xl border border-indigo-500/30" />

          {/* Content */}
          <div className="relative z-10 text-center px-5 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles size={14} className="text-indigo-400" />
              <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase">
                Get started today
              </span>
              <Sparkles size={14} className="text-indigo-400" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight mb-5 lg:mb-6"
            >
              Your AI workforce{' '}
              <span className="text-gradient block mt-1">starts on Gridd.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-10"
            >
              Join hundreds of forward-thinking teams already running their operations
              on Gridd's multi-agent platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href="#pricing"
                className="group flex items-center gap-2 bg-white hover:bg-white/90 text-[#060612] font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-black/40 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                Start Building Today
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white/60 hover:text-white font-medium px-6 py-3.5 transition-colors w-full sm:w-auto justify-center"
              >
                Talk to sales →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center gap-6 mt-10 flex-wrap"
            >
              {[
                '14-day free trial',
                'No credit card required',
                'Cancel anytime',
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-white/35">
                  <div className="w-1 h-1 bg-emerald-400/60 rounded-full" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

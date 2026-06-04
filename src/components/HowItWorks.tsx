import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { steps } from '../data'

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            From zero to{' '}
            <span className="text-gradient">AI workforce</span>{' '}
            in minutes
          </h2>
          <p className="text-lg text-white/45 max-w-xl mx-auto leading-relaxed">
            A simple four-step process to build and deploy your complete AI team.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                className="relative"
              >
                {/* Connector arrow for mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-4 bg-indigo-500/30" />
                )}

                <div className="glass rounded-2xl p-6 h-full group hover:border-indigo-500/20 hover:-translate-y-1 transition-all duration-300">
                  {/* Step number badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                      <step.icon size={18} className="text-indigo-400" />
                    </div>
                    <span className="text-xs font-bold text-indigo-400/60 tracking-widest">{step.number}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-3 leading-snug">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-5 border border-white/[0.06]">
            <div className="text-left">
              <div className="text-sm font-semibold text-white">Ready to see it live?</div>
              <div className="text-xs text-white/40 mt-0.5">Set up your first agent in under 5 minutes</div>
            </div>
            <a
              href="#pricing"
              className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Try Free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

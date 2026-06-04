import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCases } from '../data'

const cardColors = [
  { glow: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.15)', icon: '#818cf8', iconBg: 'rgba(129,140,248,0.12)' },
  { glow: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.15)', icon: '#34d399', iconBg: 'rgba(52,211,153,0.12)' },
  { glow: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.15)', icon: '#f472b6', iconBg: 'rgba(244,114,182,0.12)' },
  { glow: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.15)', icon: '#fb923c', iconBg: 'rgba(251,146,60,0.12)' },
  { glow: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.15)', icon: '#38bdf8', iconBg: 'rgba(56,189,248,0.12)' },
  { glow: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.15)', icon: '#a78bfa', iconBg: 'rgba(167,139,250,0.12)' },
]

export default function UseCases() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 mb-4">
            Use Cases
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Real results,{' '}
            <span className="text-gradient">real teams</span>
          </h2>
          <p className="text-lg text-white/45 max-w-xl mx-auto leading-relaxed">
            Gridd powers automation across every department. Here's how forward-thinking
            teams are deploying AI agents today.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((useCase, i) => {
            const color = cardColors[i % cardColors.length]
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.1 }}
                className="group relative glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ borderColor: color.border }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(ellipse at top left, ${color.glow}, transparent 70%)` }}
                />
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: color.iconBg }}
                  >
                    <useCase.icon size={20} style={{ color: color.icon }} />
                  </div>
                  <div
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ color: color.icon, backgroundColor: color.iconBg }}
                  >
                    {useCase.metrics}
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{useCase.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

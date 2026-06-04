import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { features } from '../data'

const tagColors: Record<string, string> = {
  Core: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  Automation: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  Sales: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  Support: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  Research: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
  Analytics: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  Infrastructure: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
}

const iconColors = [
  { bg: 'bg-indigo-500/15', icon: 'text-indigo-400' },
  { bg: 'bg-violet-500/15', icon: 'text-violet-400' },
  { bg: 'bg-emerald-500/15', icon: 'text-emerald-400' },
  { bg: 'bg-sky-500/15', icon: 'text-sky-400' },
  { bg: 'bg-pink-500/15', icon: 'text-pink-400' },
  { bg: 'bg-amber-500/15', icon: 'text-amber-400' },
  { bg: 'bg-orange-500/15', icon: 'text-orange-400' },
  { bg: 'bg-teal-500/15', icon: 'text-teal-400' },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="platform" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Everything your{' '}
            <span className="text-gradient">AI team needs</span>
          </h2>
          <p className="text-lg text-white/45 max-w-2xl mx-auto leading-relaxed">
            Gridd provides a complete toolkit for building, deploying, and managing
            multi-agent AI systems at any scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const colors = iconColors[i % iconColors.length]
            const tagColor = tagColors[feature.tag ?? 'Core']
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.07 }}
                className="glass rounded-2xl p-5 group hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-white/[0.03] to-transparent" />
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${colors.bg}`}>
                    <feature.icon size={18} className={colors.icon} />
                  </div>
                  {feature.tag && (
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tagColor}`}>
                      {feature.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">{feature.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

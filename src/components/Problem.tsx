import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { problemPoints } from '../data'

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 mb-4">
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            AI tools are{' '}
            <span className="relative">
              <span className="text-white/30 line-through">powerful</span>
            </span>{' '}
            <br className="hidden sm:block" />
            <span className="text-white/70">fragmented.</span>
          </h2>
          <p className="text-lg text-white/45 max-w-2xl mx-auto leading-relaxed">
            Businesses today run on a patchwork of disconnected AI tools — each
            brilliant in isolation, useless as a team. The result? More manual work,
            not less.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problemPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="glass rounded-2xl p-6 border border-red-500/10 hover:border-red-500/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
                <point.icon size={20} className="text-red-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual: fragmented tools */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass rounded-2xl p-8 border border-white/[0.06] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="text-center text-white/30 text-sm mb-6 font-medium">
            How businesses use AI today
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'ChatGPT', color: '#10a37f' },
              { name: 'Zapier', color: '#ff4a00' },
              { name: 'Jasper AI', color: '#5c6bc0' },
              { name: 'Copy.ai', color: '#7c3aed' },
              { name: 'Notion AI', color: '#ffffff' },
              { name: 'HubSpot AI', color: '#ff7a59' },
              { name: 'Midjourney', color: '#000000' },
              { name: 'Salesforce AI', color: '#009edb' },
            ].map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="glass rounded-lg px-3 py-2 flex items-center gap-2"
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: tool.color, opacity: 0.8 }}
                />
                <span className="text-xs text-white/50 truncate">{tool.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {['Manual copy-paste', 'Context lost', 'No shared memory', 'Duplicate effort', 'Human bottlenecks'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/15"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

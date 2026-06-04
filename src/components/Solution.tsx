import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Bot, GitBranch, Rocket } from 'lucide-react'

const pillars = [
  {
    icon: Bot,
    color: '#818cf8',
    step: '01',
    title: 'Create intelligent agents',
    description:
      'Design agents with specific roles, personalities, and knowledge. Each agent understands its job and acts autonomously.',
  },
  {
    icon: GitBranch,
    color: '#34d399',
    step: '02',
    title: 'Connect them into teams',
    description:
      'Agents communicate, share context, delegate tasks, and collaborate—just like a real team would.',
  },
  {
    icon: Rocket,
    color: '#f472b6',
    step: '03',
    title: 'Automate your operations',
    description:
      'Deploy your AI team to run business workflows end-to-end, 24/7, without human intervention.',
  },
]

export default function Solution() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="agents" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-4">
            The Solution
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            One platform.{' '}
            <span className="text-gradient">Your entire AI workforce.</span>
          </h2>
          <p className="text-lg text-white/45 max-w-2xl mx-auto leading-relaxed">
            Gridd replaces the chaos of disconnected AI tools with a unified platform
            where agents share context, coordinate tasks, and deliver results together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="relative glass rounded-2xl p-7 group hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: `${pillar.color}18` }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(ellipse at top left, ${pillar.color}08, transparent 60%)` }}
              />
              <span className="text-5xl font-black text-white/5 absolute top-4 right-5 select-none">
                {pillar.step}
              </span>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${pillar.color}18` }}
              >
                <pillar.icon size={22} style={{ color: pillar.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-1 rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {/* Before */}
          <div className="bg-red-500/5 p-8">
            <div className="text-xs font-semibold text-red-400 mb-4 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center text-[10px]">✕</span>
              Without Gridd
            </div>
            <div className="space-y-3">
              {[
                'Copy-paste between 7 different tools',
                'Manually coordinate agent handoffs',
                'Lose context every time you switch tools',
                'Rebuild workflows from scratch each time',
                'Humans act as glue between AI outputs',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-500/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <span className="text-[9px] text-red-400">✕</span>
                  </div>
                  <span className="text-sm text-white/45">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-emerald-500/5 p-8">
            <div className="text-xs font-semibold text-emerald-400 mb-4 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">✓</span>
              With Gridd
            </div>
            <div className="space-y-3">
              {[
                'One unified platform for all your AI agents',
                'Agents automatically coordinate and delegate',
                'Shared memory and context across all agents',
                'Reusable workflow templates that improve over time',
                'Fully autonomous end-to-end automation',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <span className="text-[9px] text-emerald-400">✓</span>
                  </div>
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors text-sm"
          >
            Start building your AI team <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

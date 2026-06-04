import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Activity, CheckCircle2, Clock, TrendingUp, Zap, MoreHorizontal, ArrowUpRight } from 'lucide-react'
import { dashboardStats, agentNodes } from '../data'

const statIcons = [Activity, Zap, CheckCircle2, Clock]

const recentTasks = [
  { agent: 'Sales Agent', task: 'Qualified 14 leads from LinkedIn campaign', time: '2m ago', status: 'done' },
  { agent: 'Research Agent', task: 'Generated competitor analysis report', time: '8m ago', status: 'done' },
  { agent: 'Support Agent', task: 'Resolved 23 tickets in helpdesk queue', time: '15m ago', status: 'done' },
  { agent: 'Workflow Agent', task: 'Triggered onboarding sequence for 3 new users', time: '32m ago', status: 'running' },
]

export default function Dashboard() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-4">
            Dashboard
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Full visibility,{' '}
            <span className="text-gradient">zero guesswork</span>
          </h2>
          <p className="text-lg text-white/45 max-w-xl mx-auto leading-relaxed">
            Monitor every agent, workflow, and outcome from a single unified dashboard.
          </p>
        </motion.div>

        {/* Mock Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-strong rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50"
        >
          {/* Dashboard header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            <div className="flex items-center gap-2 text-xs text-white/30 bg-white/[0.04] rounded-lg px-3 py-1.5 font-mono">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              app.gridd.ai/dashboard
            </div>
            <div className="text-xs text-white/30">Live</div>
          </div>

          <div className="p-5 sm:p-7">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-white">Command Center</h3>
                <p className="text-xs text-white/35 mt-0.5">Wednesday, June 4 · All systems operational</p>
              </div>
              <button className="flex items-center gap-1.5 text-xs text-white/50 glass px-3 py-1.5 rounded-lg hover:text-white transition-colors">
                <TrendingUp size={12} />
                This week
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {dashboardStats.map((stat, i) => {
                const Icon = statIcons[i]
                return (
                  <div key={stat.label} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-white/40">{stat.label}</span>
                      <Icon size={12} className="text-indigo-400/60" />
                    </div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-[11px] text-emerald-400/80 mt-1 flex items-center gap-1">
                      <ArrowUpRight size={9} />
                      {stat.change}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="grid lg:grid-cols-5 gap-4">
              {/* Agent performance */}
              <div className="lg:col-span-3 glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-white">Agent Performance</span>
                  <button className="text-white/30 hover:text-white/60 transition-colors">
                    <MoreHorizontal size={15} />
                  </button>
                </div>
                <div className="space-y-3">
                  {agentNodes.map((agent) => {
                    const pct = Math.floor(Math.random() * 30 + 65)
                    return (
                      <div key={agent.id} className="flex items-center gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: agent.color }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-white/70 font-medium truncate">{agent.label}</span>
                            <span className="text-xs text-white/40 ml-2 flex-shrink-0">{pct}%</span>
                          </div>
                          <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${pct}%` } : {}}
                              transition={{ duration: 1, delay: 0.5 + Math.random() * 0.3, ease: 'easeOut' }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: agent.color, opacity: 0.8 }}
                            />
                          </div>
                        </div>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                          style={{
                            color: agent.status === 'idle' ? 'rgba(255,255,255,0.3)' : agent.color,
                            backgroundColor: `${agent.color}15`,
                          }}
                        >
                          {agent.status}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Recent tasks */}
              <div className="lg:col-span-2 glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-white">Recent Tasks</span>
                  <span className="text-[10px] text-indigo-400 font-medium">View all</span>
                </div>
                <div className="space-y-3">
                  {recentTasks.map((task, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        task.status === 'done' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'
                      }`} />
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] text-indigo-400/70 font-medium">{task.agent}</div>
                        <div className="text-xs text-white/55 leading-snug mt-0.5 line-clamp-2">{task.task}</div>
                        <div className="text-[10px] text-white/25 mt-1">{task.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

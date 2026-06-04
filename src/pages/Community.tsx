import { motion } from 'framer-motion'
import { MessageSquare, Star, ArrowRight } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const stats = [
  { label: 'Community members', value: '12,400+' },
  { label: 'Agent templates shared', value: '840+' },
  { label: 'Active discussions', value: '3,200+' },
  { label: 'Countries represented', value: '94' },
]

const discussions = [
  { title: 'Best practices for agent handoff and context passing', replies: 42, author: 'priya_k', time: '2h ago', tag: 'Architecture' },
  { title: 'How I built a fully automated sales pipeline in 3 agents', replies: 87, author: 'dev_theo', time: '5h ago', tag: 'Show & Tell' },
  { title: 'Rate limits when running 50+ agents concurrently — tips?', replies: 28, author: 'aarav_m', time: '1d ago', tag: 'Help' },
  { title: 'My Research Agent template: market intel in 12 minutes', replies: 63, author: 'sam_builds', time: '2d ago', tag: 'Template' },
]

export default function Community() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-4">Community</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
            Build together,{' '}
            <span className="text-gradient">grow together</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Join thousands of builders, operators, and AI enthusiasts who share templates, workflows, and ideas on Gridd's community platform.
          </p>
          <div className="flex items-center gap-3 justify-center mt-8">
            <a href="#" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
              <MessageSquare size={15} /> Join Discord
            </a>
            <a href="#" className="flex items-center gap-2 glass hover:bg-white/[0.06] text-white/70 hover:text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
              <Star size={15} className="text-amber-400" /> Browse templates
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-5 text-center border border-white/[0.06]">
              <div className="text-2xl font-black text-white mb-1">{s.value}</div>
              <div className="text-xs text-white/40">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Discussions */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-white">Trending discussions</h2>
            <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">View all <ArrowRight size={12} /></a>
          </div>
          <div className="space-y-3">
            {discussions.map((d, i) => (
              <motion.div key={d.title} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.07 }}
                className="glass rounded-xl p-5 border border-white/[0.06] group hover:border-white/[0.12] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-500/15 px-2 py-0.5 rounded-full">{d.tag}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white/85 leading-snug">{d.title}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[11px] text-white/30">@{d.author}</span>
                      <span className="text-[11px] text-white/20">·</span>
                      <span className="text-[11px] text-white/30">{d.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-white/35 text-xs flex-shrink-0">
                    <MessageSquare size={11} /> {d.replies}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  )
}

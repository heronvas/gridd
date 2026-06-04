import { motion } from 'framer-motion'
import { BookOpen, Terminal, Zap, ArrowRight, Code2 } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const guides = [
  { icon: Zap, title: 'Quick Start', desc: 'Create your first AI agent in under 5 minutes.', tag: 'Beginner', color: '#818cf8' },
  { icon: Code2, title: 'API Reference', desc: 'Full REST and WebSocket API documentation.', tag: 'Reference', color: '#34d399' },
  { icon: Terminal, title: 'Agent SDK', desc: 'Build custom agents with the Gridd SDK.', tag: 'Advanced', color: '#f472b6' },
  { icon: BookOpen, title: 'Workflow Builder', desc: 'Design multi-agent pipelines visually or in code.', tag: 'Core', color: '#fb923c' },
]

const snippet = `import { GriddClient } from '@gridd/sdk'

const gridd = new GriddClient({ apiKey: process.env.GRIDD_API_KEY })

// Create a sales agent
const agent = await gridd.agents.create({
  name: 'Sales Agent',
  role: 'Lead qualification and outreach',
  tools: ['email', 'crm', 'linkedin'],
  model: 'gpt-4o',
})

// Run a task
const result = await agent.run({
  task: 'Qualify and draft outreach for these 10 leads',
  input: leads,
})`

export default function Documentation() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-4">Documentation</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
            Everything you need{' '}
            <span className="text-gradient">to build</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Guides, API references, and SDK docs to help you build, deploy, and scale your AI agents.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {guides.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }}
              className="glass rounded-xl p-6 border border-white/[0.06] group hover:border-white/[0.12] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${g.color}18` }}>
                  <g.icon size={20} style={{ color: g.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white">{g.title}</h3>
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ color: g.color, backgroundColor: `${g.color}15` }}>{g.tag}</span>
                  </div>
                  <p className="text-xs text-white/40">{g.desc}</p>
                </div>
                <ArrowRight size={14} className="text-white/20 group-hover:text-indigo-400 transition-colors flex-shrink-0 mt-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code snippet */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <h2 className="text-lg font-bold text-white mb-4">Quick Start</h2>
          <div className="glass rounded-xl overflow-hidden border border-white/[0.06]">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.02]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              </div>
              <span className="text-[10px] text-white/30 font-mono">agent.ts</span>
              <span className="text-[10px] text-white/30">TypeScript</span>
            </div>
            <pre className="p-5 text-xs text-white/70 font-mono leading-relaxed overflow-x-auto">
              <code>{snippet}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  )
}

import { motion } from 'framer-motion'
import { Bot, Workflow, BarChart3, Shield, Zap, Globe, ArrowRight } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import { Link } from 'react-router-dom'

const pillars = [
  { icon: Bot, color: '#818cf8', title: 'Agent Runtime', desc: 'A managed execution environment that runs your agents reliably at scale. Handles retries, timeouts, state persistence, and fault recovery automatically.' },
  { icon: Workflow, color: '#34d399', title: 'Workflow Engine', desc: 'Orchestrate multi-step processes across agents with conditional branching, parallel execution, loops, and human-in-the-loop approvals.' },
  { icon: BarChart3, color: '#f472b6', title: 'Observability Layer', desc: 'Full telemetry on every agent action, decision, and output. Debug, audit, and optimize with real-time logs, traces, and metrics.' },
  { icon: Shield, color: '#fb923c', title: 'Security & Compliance', desc: 'SOC 2 Type II certified infrastructure. Role-based access control, SSO, audit logs, and data residency options for regulated industries.' },
  { icon: Zap, color: '#38bdf8', title: 'Tool Integrations', desc: '150+ pre-built integrations with CRMs, helpdesks, data platforms, communication tools, and custom APIs via REST or webhooks.' },
  { icon: Globe, color: '#a78bfa', title: 'Global Infrastructure', desc: 'Multi-region deployment across US, EU, and APAC. 99.9% uptime SLA, edge caching, and sub-50ms agent response times worldwide.' },
]

export default function Platform() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">Platform</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
            The complete{' '}
            <span className="text-gradient">AI team platform</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Gridd provides every layer you need to build, run, and scale multi-agent AI systems in production — from agent creation to enterprise-grade observability.
          </p>
          <div className="flex items-center gap-3 justify-center mt-8">
            <Link to="/#pricing" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
              Get started <ArrowRight size={14} />
            </Link>
            {/* <Link to="/docs" className="flex items-center gap-2 glass hover:bg-white/[0.06] text-white/70 hover:text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
              Read the docs
            </Link> */}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }}
              className="glass rounded-2xl p-6 border border-white/[0.06] group hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${p.color}18` }}>
                <p.icon size={20} style={{ color: p.color }} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Architecture note */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl p-8 border border-indigo-500/15 text-center">
          <div className="text-4xl font-black text-white mb-2">99.9%</div>
          <div className="text-sm text-white/50 mb-1">Platform uptime SLA</div>
          <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
            {['SOC 2 Type II', 'GDPR Compliant', 'ISO 27001', 'HIPAA Ready'].map((badge) => (
              <span key={badge} className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">{badge}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  )
}

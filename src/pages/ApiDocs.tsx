import { motion } from 'framer-motion'
import { ArrowRight, Lock, Zap, Globe } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const endpoints = [
  { method: 'POST', path: '/v1/agents', desc: 'Create a new agent' },
  { method: 'GET', path: '/v1/agents', desc: 'List all agents' },
  { method: 'GET', path: '/v1/agents/:id', desc: 'Retrieve an agent' },
  { method: 'PATCH', path: '/v1/agents/:id', desc: 'Update agent configuration' },
  { method: 'POST', path: '/v1/agents/:id/run', desc: 'Execute a task' },
  { method: 'GET', path: '/v1/workflows', desc: 'List all workflows' },
  { method: 'POST', path: '/v1/workflows', desc: 'Create a workflow' },
  { method: 'POST', path: '/v1/workflows/:id/trigger', desc: 'Trigger a workflow run' },
]

const methodColors: Record<string, string> = {
  GET: '#34d399',
  POST: '#818cf8',
  PATCH: '#fb923c',
  DELETE: '#f87171',
}

const authSnippet = `curl https://api.gridd.ai/v1/agents \\
  -H "Authorization: Bearer gk_live_xxxxxxxxxxxx" \\
  -H "Content-Type: application/json"`

export default function ApiDocs() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-4">API Reference</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
            Build with the{' '}
            <span className="text-gradient">Gridd API</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            A RESTful API for creating, running, and monitoring AI agents programmatically. SDKs available for TypeScript, Python, and Go.
          </p>
        </motion.div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Globe, title: 'Base URL', value: 'https://api.gridd.ai', color: '#818cf8' },
            { icon: Lock, title: 'Auth', value: 'Bearer token (API key)', color: '#34d399' },
            { icon: Zap, title: 'Rate limit', value: '1,000 req/min (Growth)', color: '#f472b6' },
          ].map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="glass rounded-xl p-5 border border-white/[0.06] text-center">
              <item.icon size={18} className="mx-auto mb-2" style={{ color: item.color }} />
              <div className="text-xs text-white/40 mb-1">{item.title}</div>
              <div className="text-xs font-mono font-semibold text-white/70">{item.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Auth example */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-10">
          <h2 className="text-base font-bold text-white mb-3">Authentication</h2>
          <div className="glass rounded-xl overflow-hidden border border-white/[0.06]">
            <div className="px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.02] flex items-center justify-between">
              <span className="text-[10px] text-white/30">shell</span>
              <span className="text-[10px] text-emerald-400/70">API Key from Settings → Developers</span>
            </div>
            <pre className="p-5 text-xs text-white/65 font-mono leading-relaxed overflow-x-auto"><code>{authSnippet}</code></pre>
          </div>
        </motion.div>

        {/* Endpoints */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <h2 className="text-base font-bold text-white mb-4">Core Endpoints</h2>
          <div className="glass rounded-xl border border-white/[0.06] overflow-hidden">
            {endpoints.map((ep, i) => (
              <div key={ep.path} className={`flex items-center gap-4 px-5 py-3.5 group hover:bg-white/[0.03] cursor-pointer transition-colors ${i !== 0 ? 'border-t border-white/[0.04]' : ''}`}>
                <span className="text-xs font-bold font-mono w-12 flex-shrink-0 text-right" style={{ color: methodColors[ep.method] ?? '#fff' }}>
                  {ep.method}
                </span>
                <span className="text-xs font-mono text-white/60 flex-1">{ep.path}</span>
                <span className="text-xs text-white/35 hidden sm:block">{ep.desc}</span>
                <ArrowRight size={12} className="text-white/15 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-center text-sm text-white/30 mt-10">
          SDK docs →{' '}
          <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">TypeScript</a>{' · '}
          <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Python</a>{' · '}
          <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Go</a>
        </motion.p>
      </div>
    </PageLayout>
  )
}

import { motion } from 'framer-motion'
import { Database, Mail, MessageSquare, BarChart3, Phone, Globe, Code2, Briefcase } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const categories = [
  {
    name: 'CRM & Sales',
    color: '#34d399',
    integrations: [
      { name: 'Salesforce', icon: Briefcase },
      { name: 'HubSpot', icon: Briefcase },
      { name: 'Pipedrive', icon: Briefcase },
      { name: 'Attio', icon: Briefcase },
    ],
  },
  {
    name: 'Communication',
    color: '#818cf8',
    integrations: [
      { name: 'Slack', icon: MessageSquare },
      { name: 'Gmail', icon: Mail },
      { name: 'Outlook', icon: Mail },
      { name: 'Intercom', icon: MessageSquare },
    ],
  },
  {
    name: 'Data & Analytics',
    color: '#f472b6',
    integrations: [
      { name: 'BigQuery', icon: Database },
      { name: 'Snowflake', icon: Database },
      { name: 'Postgres', icon: Database },
      { name: 'Mixpanel', icon: BarChart3 },
    ],
  },
  {
    name: 'Customer Support',
    color: '#fb923c',
    integrations: [
      { name: 'Zendesk', icon: Phone },
      { name: 'Freshdesk', icon: Phone },
      { name: 'Linear', icon: Code2 },
      { name: 'Jira', icon: Code2 },
    ],
  },
  {
    name: 'Web & Automation',
    color: '#38bdf8',
    integrations: [
      { name: 'Zapier', icon: Globe },
      { name: 'Make', icon: Globe },
      { name: 'Webhooks', icon: Code2 },
      { name: 'REST API', icon: Code2 },
    ],
  },
  {
    name: 'AI & Models',
    color: '#a78bfa',
    integrations: [
      { name: 'OpenAI', icon: Globe },
      { name: 'Anthropic', icon: Globe },
      { name: 'Gemini', icon: Globe },
      { name: 'Custom LLM', icon: Code2 },
    ],
  },
]

export default function Integrations() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-4">Integrations</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
            Connect to{' '}
            <span className="text-gradient">everything</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Gridd integrates with 150+ tools across your stack. Connect agents to your CRM, helpdesk, data warehouse, and more — no custom code required.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div key={cat.name} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.08 }}
              className="glass rounded-2xl p-6 border border-white/[0.06]">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                <h3 className="text-sm font-bold text-white">{cat.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {cat.integrations.map((intg) => (
                  <div key={intg.name} className="flex items-center gap-2 glass rounded-lg px-3 py-2 hover:border-white/15 transition-colors">
                    <intg.icon size={13} style={{ color: cat.color, opacity: 0.8 }} />
                    <span className="text-xs text-white/60">{intg.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-center mt-12">
          <p className="text-sm text-white/35 mb-3">Don't see what you need?</p>
          <a href="mailto:integrations@gridd.ai" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
            Request an integration →
          </a>
        </motion.div>
      </div>
    </PageLayout>
  )
}

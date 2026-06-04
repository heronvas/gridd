import { motion } from 'framer-motion'
import { TrendingUp, Headphones, Search, Settings, Database, MessageSquare } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const agentTypes = [
  { icon: TrendingUp, color: '#34d399', name: 'Sales Agent', subtitle: 'Revenue growth, automated', capabilities: ['Lead research and enrichment', 'Personalized outreach drafting', 'CRM data entry and updates', 'Follow-up sequence management', 'Deal qualification scoring'] },
  { icon: Headphones, color: '#818cf8', name: 'Support Agent', subtitle: 'Always-on customer service', capabilities: ['Tier-1 ticket resolution', 'FAQ and knowledge base lookup', 'Escalation routing logic', 'Multi-channel inbox management', 'CSAT tracking and reporting'] },
  { icon: Search, color: '#f472b6', name: 'Research Agent', subtitle: 'Intelligence, on demand', capabilities: ['Market and competitor monitoring', 'Report summarisation', 'News and trend aggregation', 'Data extraction from web sources', 'Scheduled briefing delivery'] },
  { icon: Settings, color: '#fb923c', name: 'Workflow Agent', subtitle: 'The orchestrator', capabilities: ['Multi-agent task delegation', 'Conditional pipeline branching', 'Approval and escalation routing', 'Cross-system process automation', 'Real-time status monitoring'] },
  { icon: Database, color: '#38bdf8', name: 'Data Agent', subtitle: 'Insights without the analyst', capabilities: ['Structured data querying', 'Chart and report generation', 'Anomaly detection and alerts', 'Cross-source data joining', 'Scheduled metric delivery'] },
  { icon: MessageSquare, color: '#a78bfa', name: 'Custom Agent', subtitle: 'Your role, your rules', capabilities: ['Natural language role definition', 'Custom tool and API access', 'Persona and voice configuration', 'Fine-tuned model support', 'Private knowledge base integration'] },
]

export default function Agents() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-4">Agents</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
            Meet your{' '}
            <span className="text-gradient">AI team</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Pre-built agent roles for the most common business functions — or design your own from scratch. Every agent is configurable, connectable, and deployable in minutes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agentTypes.map((agent, i) => (
            <motion.div key={agent.name} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.09 }}
              className="glass rounded-2xl p-6 border border-white/[0.06] group hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${agent.color}18` }}>
                  <agent.icon size={20} style={{ color: agent.color }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{agent.name}</h3>
                  <p className="text-[11px] text-white/40">{agent.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {agent.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: agent.color, opacity: 0.7 }} />
                    <span className="text-xs text-white/50">{cap}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

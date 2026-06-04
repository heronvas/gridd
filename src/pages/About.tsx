import { motion } from 'framer-motion'
import { Target, Zap, Users, Globe } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const values = [
  { icon: Target, title: 'Mission-driven', description: 'Every decision we make is anchored to one goal: making autonomous AI teams accessible to every business.' },
  { icon: Zap, title: 'Velocity over perfection', description: 'We ship fast, learn from real usage, and iterate relentlessly. Speed is a feature.' },
  { icon: Users, title: 'Team-first AI', description: 'We believe AI works best when it collaborates — with humans and with other agents — not in isolation.' },
  { icon: Globe, title: 'Built for scale', description: 'From solo founders to enterprise ops teams, Gridd is designed to grow with you from day one.' },
]

// const team = [
//   { name: 'Maya Reyes', role: 'CEO & Co-founder', color: '#818cf8' },
//   { name: 'Jordan Kim', role: 'CTO & Co-founder', color: '#34d399' },
//   { name: 'Priya Anand', role: 'Head of Product', color: '#f472b6' },
//   { name: 'Theo Laurent', role: 'Head of Engineering', color: '#fb923c' },
//   { name: 'Aaliya Noor', role: 'Head of Design', color: '#38bdf8' },
//   { name: 'Sam Chen', role: 'Head of Growth', color: '#a78bfa' },
// ]

export default function About() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">About Gridd</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
            Building the{' '}
            <span className="text-gradient">future of work</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            We started Gridd because we watched brilliant teams waste hours copy-pasting between AI tools that never talked to each other. There had to be a better way — and we built it.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="glass rounded-2xl p-8 mb-16 border border-white/[0.06]">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our story</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Gridd was founded in 2024 by a team of ex-engineers from Stripe, OpenAI, and Palantir who kept seeing the same problem: companies were adopting AI tools one by one, but couldn't get them to work together as a coordinated system.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                We raised our seed round in early 2024, shipped our first multi-agent workflow in six weeks, and haven't slowed down since. Today, Gridd powers over 10,000 AI agents across 400+ companies.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { year: '2024 Q1', event: 'Gridd founded, $3.2M seed raised' },
                { year: '2024 Q2', event: 'First multi-agent workflow shipped' },
                { year: '2024 Q3', event: 'Reached 1,000 active agents' },
                { year: '2025 Q1', event: '10,000+ agents, 400+ companies' },
              ].map((item) => (
                <div key={item.year} className="flex items-start gap-4">
                  <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md w-20 text-center flex-shrink-0">{item.year}</span>
                  <span className="text-sm text-white/60">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What we believe</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-20">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-xl p-6 border border-white/[0.06] hover:border-indigo-500/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center mb-4">
                  <v.icon size={18} className="text-indigo-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        {/* <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">The team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {team.map((member) => (
              <div key={member.name} className="glass rounded-xl p-5 text-center border border-white/[0.06]">
                <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold text-white" style={{ backgroundColor: `${member.color}20`, border: `1px solid ${member.color}30`, color: member.color }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-sm font-semibold text-white">{member.name}</div>
                <div className="text-xs text-white/40 mt-0.5">{member.role}</div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </PageLayout>
  )
}

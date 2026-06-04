import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap } from 'lucide-react'
import { agentNodes } from '../data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const nodePositions = [
  { x: '50%', y: '10%', delay: 0 },
  { x: '85%', y: '38%', delay: 0.4 },
  { x: '68%', y: '78%', delay: 0.8 },
  { x: '32%', y: '78%', delay: 1.2 },
  { x: '15%', y: '38%', delay: 1.6 },
]

const connections = [
  { x1: '50%', y1: '10%', x2: '85%', y2: '38%' },
  { x1: '85%', y1: '38%', x2: '68%', y2: '78%' },
  { x1: '68%', y1: '78%', x2: '32%', y2: '78%' },
  { x1: '32%', y1: '78%', x2: '15%', y2: '38%' },
  { x1: '15%', y1: '38%', x2: '50%', y2: '10%' },
  { x1: '50%', y1: '10%', x2: '68%', y2: '78%' },
  { x1: '85%', y1: '38%', x2: '32%', y2: '78%' },
  { x1: '50%', y1: '10%', x2: '32%', y2: '78%' },
]

function AgentNode({
  agent,
  position,
  delay,
}: {
  agent: (typeof agentNodes)[0]
  position: { x: string; y: string }
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: 'backOut' }}
      style={{ left: position.x, top: position.y }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.5,
        }}
        className="glass-strong rounded-xl px-3 py-2.5 text-center cursor-default hover:scale-105 transition-transform group"
        style={{ boxShadow: `0 0 20px ${agent.color}22, 0 4px 20px rgba(0,0,0,0.4)` }}
      >
        <div
          className="w-2 h-2 rounded-full mx-auto mb-1.5"
          style={{ backgroundColor: agent.color, boxShadow: `0 0 8px ${agent.color}` }}
        />
        <div className="text-xs font-semibold text-white whitespace-nowrap">{agent.label}</div>
        <div className="text-[10px] text-white/40 mt-0.5 whitespace-nowrap">{agent.role}</div>
        {agent.status === 'active' && (
          <div className="flex items-center justify-center gap-1 mt-1">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[9px] text-emerald-400/80">Active</span>
          </div>
        )}
        {agent.status === 'running' && (
          <div className="flex items-center justify-center gap-1 mt-1">
            <Zap size={8} className="text-amber-400" />
            <span className="text-[9px] text-amber-400/80">Running</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-violet-600/8 rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-400/8 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-indigo-300 border border-indigo-500/20 mb-6">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                Multi-Agent AI Platform, Now in Beta
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              Build AI Teams,{' '}
              <span className="text-gradient block">Not AI Tools.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Create, connect, and deploy intelligent AI agents that collaborate
              across sales, support, research, and operations.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="#pricing"
                className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                Start Building
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#platform"
                className="group flex items-center gap-2 glass hover:bg-white/[0.06] text-white/80 hover:text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <Play size={15} className="text-indigo-400" />
                View Platform
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              {[
                { value: '10K+', label: 'Agents deployed' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '50ms', label: 'Avg response' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Agent Network Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative w-full aspect-square max-w-[500px] mx-auto"
            id="platform"
          >
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/10" />
            <div className="absolute inset-6 rounded-full border border-indigo-500/8" />

            {/* SVG connections */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {connections.map((conn, i) => (
                <motion.line
                  key={i}
                  x1={conn.x1}
                  y1={conn.y1}
                  x2={conn.x2}
                  y2={conn.y2}
                  stroke="url(#lineGrad)"
                  strokeWidth="1"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                />
              ))}
              {/* Animated data packets */}
              {[0, 2, 4, 6].map((connIdx, i) => {
                const conn = connections[connIdx]
                return (
                  <motion.circle
                    key={`packet-${i}`}
                    r="3"
                    fill="#818cf8"
                    opacity={0.8}
                    filter="url(#glow)"
                    animate={{
                      cx: [conn.x1, conn.x2],
                      cy: [conn.y1, conn.y2],
                    }}
                    transition={{
                      duration: 2,
                      delay: 1 + i * 0.7,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: 'linear',
                    }}
                  />
                )
              })}
            </svg>

            {/* Agent nodes */}
            {agentNodes.map((agent, i) => (
              <AgentNode
                key={agent.id}
                agent={agent}
                position={nodePositions[i]}
                delay={0.6 + i * 0.15}
              />
            ))}

            {/* Center hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5, ease: 'backOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-xl bg-indigo-600/80 border border-indigo-400/30 flex items-center justify-center shadow-2xl shadow-indigo-600/40"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <div className="grid grid-cols-2 gap-[3px] p-[7px] w-9 h-9">
                {[0.9, 0.5, 0.5, 0.9].map((op, i) => (
                  <div key={i} className="bg-white rounded-[2px]" style={{ opacity: op }} />
                ))}
              </div>
            </motion.div>

            {/* Orbiting ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-dashed border-indigo-500/15"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-white/30">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-6 border border-white/20 rounded-full flex items-start justify-center pt-1"
        >
          <div className="w-1 h-1.5 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

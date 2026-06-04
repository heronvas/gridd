import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MapPin, Briefcase, X, CheckCircle2, Paperclip } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const roles = [
  { title: 'Senior Full-Stack Engineer', team: 'Engineering', location: 'Remote (US/EU)', type: 'Full-time', color: '#818cf8' },
  { title: 'AI / ML Engineer – Agent Systems', team: 'Engineering', location: 'Remote (Global)', type: 'Full-time', color: '#34d399' },
  { title: 'Product Designer', team: 'Design', location: 'Remote (US)', type: 'Full-time', color: '#f472b6' },
  { title: 'Product Manager – Integrations', team: 'Product', location: 'Remote (US/EU)', type: 'Full-time', color: '#fb923c' },
  { title: 'Developer Advocate', team: 'Growth', location: 'Remote (Global)', type: 'Full-time', color: '#38bdf8' },
]

const perks = [
  'Fully remote, async-first culture',
  'Competitive salary + equity',
  'Unlimited PTO',
  '$3,000 home office budget',
  'Top-tier health, dental, vision',
  'Annual team offsite',
  'Learning & conference budget',
  'Latest AI tooling, on us',
]

interface ApplyForm {
  name: string
  email: string
  portfolio: string
  why: string
  extra: string
}

function ApplyModal({ role, onClose }: { role: typeof roles[0]; onClose: () => void }) {
  const [form, setForm] = useState<ApplyForm>({ name: '', email: '', portfolio: '', why: '', extra: '' })
  const [errors, setErrors] = useState<Partial<ApplyForm>>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e: Partial<ApplyForm> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.why.trim()) e.why = 'Please tell us why you want to join'
    return e
  }

  function set(field: keyof ApplyForm, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        style={{ backgroundColor: 'rgba(6, 6, 18, 0.85)', backdropFilter: 'blur(8px)' }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg glass-strong rounded-2xl border border-white/[0.1] shadow-2xl shadow-black/60 my-8"
        >
          {!submitted ? (
            <div className="p-7">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ color: role.color, backgroundColor: `${role.color}15` }}
                    >
                      {role.team}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-white">Apply — {role.title}</h2>
                  <p className="text-xs text-white/40 mt-0.5">{role.location} · {role.type}</p>
                </div>
                <button onClick={onClose} className="text-white/30 hover:text-white/70 transition-colors p-1">
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={submit} className="space-y-4" noValidate>
                {/* Name + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5">Full Name <span className="text-indigo-400">*</span></label>
                    <input
                      type="text"
                      placeholder="Alex Johnson"
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      className={`w-full bg-white/[0.05] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-indigo-500/60 focus:bg-white/[0.07] ${errors.name ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5">Email <span className="text-indigo-400">*</span></label>
                    <input
                      type="email"
                      placeholder="alex@email.com"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      className={`w-full bg-white/[0.05] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-indigo-500/60 focus:bg-white/[0.07] ${errors.email ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Portfolio */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5">
                    <Paperclip size={10} className="inline mr-1" />
                    LinkedIn / Portfolio / GitHub
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourname"
                    value={form.portfolio}
                    onChange={(e) => set('portfolio', e.target.value)}
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-colors"
                  />
                </div>

                {/* Why */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5">
                    Why do you want to join Gridd? <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what excites you about this role and what you'd bring to the team…"
                    value={form.why}
                    onChange={(e) => set('why', e.target.value)}
                    className={`w-full bg-white/[0.05] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-indigo-500/60 focus:bg-white/[0.07] resize-none ${errors.why ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                  />
                  {errors.why && <p className="text-xs text-red-400 mt-1">{errors.why}</p>}
                </div>

                {/* Extra */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5">Anything else we should know? <span className="text-white/25">(optional)</span></label>
                  <textarea
                    rows={2}
                    placeholder="Side projects, relevant experience, availability, visa requirements…"
                    value={form.extra}
                    onChange={(e) => set('extra', e.target.value)}
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Submitting…
                    </>
                  ) : 'Submit Application'}
                </button>

                <p className="text-center text-[11px] text-white/25">
                  We review every application and respond within 5 business days.
                </p>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-10 text-center relative"
            >
              <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors">
                <X size={18} />
              </button>
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Application received!</h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-xs mx-auto mb-2">
                Thanks for applying for{' '}
                <span className="text-white/80 font-medium">{role.title}</span>.
              </p>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto mb-7">
                Our team will review your application and get back to you within{' '}
                <span className="text-white/70 font-medium">5 business days</span>.
              </p>
              <button
                onClick={onClose}
                className="bg-white/[0.08] hover:bg-white/[0.12] text-white/70 hover:text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-colors"
              >
                Close
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Careers() {
  const [applyingTo, setApplyingTo] = useState<typeof roles[0] | null>(null)

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-4">Careers</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-5">
            Join the team{' '}
            <span className="text-gradient">building AI's future</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            We're a small, high-output team. If you want your work to matter and move fast, this is the place.
          </p>
        </motion.div>

        {/* Perks */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="glass rounded-2xl p-8 mb-12 border border-white/[0.06]">
          <h2 className="text-lg font-bold text-white mb-5">What we offer</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0" />
                <span className="text-sm text-white/60">{perk}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Roles */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}>
          <h2 className="text-lg font-bold text-white mb-5">Open roles</h2>
          <div className="space-y-3">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="glass rounded-xl p-5 border border-white/[0.06] group hover:border-white/[0.12] hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ color: role.color, backgroundColor: `${role.color}15` }}>
                        {role.team}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white">{role.title}</h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-[11px] text-white/40">
                        <MapPin size={10} /> {role.location}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-white/40">
                        <Briefcase size={10} /> {role.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setApplyingTo(role)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-white bg-indigo-600/80 hover:bg-indigo-600 px-3.5 py-2 rounded-lg transition-all group-hover:gap-2.5 flex-shrink-0"
                  >
                    Apply <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-center text-sm text-white/30 mt-10">
          Don't see a fit?{' '}
          <a href="mailto:careers@gridd.ai" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Send us your resume anyway →
          </a>
        </motion.p>
      </div>

      {applyingTo && <ApplyModal role={applyingTo} onClose={() => setApplyingTo(null)} />}
    </PageLayout>
  )
}

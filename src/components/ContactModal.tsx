import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Bot } from 'lucide-react'

interface Props {
  plan: 'Starter' | 'Growth' | null
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  company: string
  teamSize: string
  useCase: string
}

const teamSizes = ['Just me', '2–10', '11–50', '51–200', '200+']

export default function ContactModal({ plan, onClose }: Props) {
  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', teamSize: '', useCase: '' })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function validate() {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    return e
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (!plan) return null

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(6, 6, 18, 0.85)', backdropFilter: 'blur(8px)' }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md glass-strong rounded-2xl border border-white/[0.1] shadow-2xl shadow-black/60 overflow-hidden"
        >
          {!submitted ? (
            <div className="p-7">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                    <Bot size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Start your free trial</h2>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-xs text-white/40">Plan:</span>
                      <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/15 px-2 py-0.5 rounded-full">
                        {plan}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/30 hover:text-white/70 transition-colors p-1"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5">
                    Full Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Alex Johnson"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full bg-white/[0.05] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-indigo-500/60 focus:bg-white/[0.07] ${
                      errors.name ? 'border-red-500/50' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5">
                    Work Email <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="alex@company.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full bg-white/[0.05] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-indigo-500/60 focus:bg-white/[0.07] ${
                      errors.email ? 'border-red-500/50' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                {/* Company + Team Size */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5">Company</label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      value={form.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5">Team Size</label>
                    <select
                      value={form.teamSize}
                      onChange={(e) => handleChange('teamSize', e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white/70 outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-colors appearance-none"
                      style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                    >
                      <option value="" className="bg-[#0f0f20]">Select…</option>
                      {teamSizes.map((s) => (
                        <option key={s} value={s} className="bg-[#0f0f20]">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Use case */}
                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5">
                    What would you like to automate?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Sales outreach, customer support tickets, market research reports…"
                    value={form.useCase}
                    onChange={(e) => handleChange('useCase', e.target.value)}
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
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
                      Setting up your account…
                    </>
                  ) : (
                    'Start Free Trial'
                  )}
                </button>

                <p className="text-center text-[11px] text-white/25">
                  Your data is safe. We never share your information.
                </p>
              </form>
            </div>
          ) : (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-10 text-center"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors"
              >
                <X size={18} />
              </button>
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">You're all set!</h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-xs mx-auto mb-6">
                Our team will reach out to you within{' '}
                <span className="text-white/80 font-medium">24 hours</span> to get you
                started on the{' '}
                <span className="text-indigo-400 font-semibold">{plan}</span> plan.
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

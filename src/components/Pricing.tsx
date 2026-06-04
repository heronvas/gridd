import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { pricingPlans } from '../data'
import ContactModal from './ContactModal'

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [modalPlan, setModalPlan] = useState<'Starter' | 'Growth' | null>(null)

  function ctaLabel(name: string) {
    if (name === 'Starter' || name === 'Growth') return 'Start Free Trial'
    return 'Contact Sales'
  }

  function handleCta(name: string) {
    if (name === 'Starter') { setModalPlan('Starter'); return }
    if (name === 'Growth') { setModalPlan('Growth'); return }
  }

  return (
    <>
      <section ref={ref} id="pricing" className="py-14 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-4">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              Simple, transparent{' '}
              <span className="text-gradient">pricing</span>
            </h2>
            <p className="text-lg text-white/45 max-w-xl mx-auto leading-relaxed">
              Start free, scale when you're ready. Subscription + usage-based pricing
              so you only pay for what you use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 items-start">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  plan.highlighted
                    ? 'bg-indigo-600/20 border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/20 md:scale-[1.02]'
                    : 'glass border border-white/[0.08]'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/10 via-transparent to-transparent pointer-events-none" />
                )}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-indigo-600/30">
                    <Zap size={10} />
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-white/40 mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    {plan.period && <span className="text-sm text-white/40">{plan.period}</span>}
                  </div>
                  {plan.name !== 'Enterprise' && (
                    <p className="text-xs text-white/30 mt-1">+ usage-based overage</p>
                  )}
                </div>

                <div className="space-y-3 flex-1 mb-7">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'bg-indigo-500/30' : 'bg-white/[0.08]'
                      }`}>
                        <Check size={9} className={plan.highlighted ? 'text-indigo-300' : 'text-white/50'} />
                      </div>
                      <span className="text-sm text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleCta(plan.name)}
                  className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                    plan.highlighted
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40'
                      : 'glass hover:bg-white/[0.08] text-white/80 hover:text-white border border-white/[0.08]'
                  }`}
                >
                  {ctaLabel(plan.name)}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center text-sm text-white/30 mt-10"
          >
            All plans include a 14-day free trial. No credit card required to start.{' '}
            <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Compare all features →
            </a>
          </motion.p>
        </div>
      </section>

      <ContactModal plan={modalPlan} onClose={() => setModalPlan(null)} />
    </>
  )
}

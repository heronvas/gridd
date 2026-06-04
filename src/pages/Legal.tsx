import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'

const sections = [
  { title: '1. Acceptance of Terms', body: 'By accessing or using Gridd ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service. Gridd reserves the right to update these terms at any time, and continued use of the Service constitutes acceptance of the revised terms.' },
  { title: '2. Use of the Service', body: 'You may use Gridd only for lawful purposes and in accordance with these Terms. You agree not to use the Service to transmit harmful, offensive, or illegal content; to attempt to gain unauthorized access to any system; or to interfere with the operation of the Service. You are responsible for all activity that occurs under your account.' },
  { title: '3. Account Registration', body: 'To access certain features, you must register for an account. You agree to provide accurate, current, and complete information, to keep your login credentials confidential, and to notify Gridd immediately of any unauthorized use of your account. Gridd is not liable for any loss resulting from unauthorized account access.' },
  { title: '4. Intellectual Property', body: 'All content, features, and functionality of the Service—including software, text, graphics, and logos—are owned by Gridd and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works from any Gridd content without written permission. You retain ownership of any content you create or upload to the Service.' },
  { title: '5. Payment and Billing', body: 'Paid plans are billed on a subscription basis. All charges are non-refundable except where required by applicable law. Gridd reserves the right to change pricing with 30 days\' notice. You authorize Gridd to charge your payment method for all applicable fees. Failure to pay may result in suspension or termination of your account.' },
  { title: '6. Limitation of Liability', body: 'To the maximum extent permitted by law, Gridd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Gridd\'s total liability shall not exceed the amount you paid to Gridd in the twelve months prior to the event giving rise to the claim.' },
  { title: '7. Termination', body: 'Gridd may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. You may cancel your account at any time from your account settings. Upon termination, your right to use the Service ceases and Gridd may delete your data after a reasonable retention period.' },
  { title: '8. Governing Law', body: 'These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved exclusively in the state or federal courts located in Delaware, and you consent to personal jurisdiction in those courts.' },
]

export default function Legal() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white/50 bg-white/[0.06] border border-white/[0.08] mb-4">Legal</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Terms of Service</h1>
          <p className="text-sm text-white/35">Last updated: June 1, 2025</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="glass rounded-2xl p-8 border border-white/[0.06] space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm text-white/50 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-white/25 mt-8">
          Questions? Contact us at{' '}
          <a href="mailto:legal@gridd.ai" className="text-indigo-400 hover:text-indigo-300 transition-colors">legal@gridd.ai</a>
        </p>
      </div>
    </PageLayout>
  )
}

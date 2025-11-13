import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: '$19', features: ['1 project', 'Basic analytics', 'Email support'] },
  { name: 'Pro', price: '$49', features: ['Unlimited projects', 'Advanced analytics', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', features: ['SAML SSO', 'Dedicated cluster', 'White‑glove onboarding'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-[#0b0f1a] text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">Pricing</h2>
          <p className="mt-4 text-white/70">Simple plans with premium polish.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-3xl p-6 backdrop-blur-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_20px_80px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: '8px 8px 20px rgba(0,0,0,0.3), -8px -8px 20px rgba(255,255,255,0.06)' }} />
              <div className="relative">
                <h3 className="text-2xl font-medium">{t.name}</h3>
                <div className="mt-2 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400">{t.price}</div>
                <ul className="mt-4 space-y-2 text-white/80">
                  {t.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-xl px-4 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 shadow-[0_10px_30px_rgba(34,211,238,0.25)] hover:shadow-[0_16px_50px_rgba(34,211,238,0.45)] transition-all">
                  Choose {t.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

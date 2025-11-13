import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const baseTiers = [
  {
    name: 'Starter',
    monthly: 19,
    yearly: 190,
    tagline: 'Essential tools to launch',
    features: ['1 project', 'Basic analytics', 'Community support', 'Email summaries'],
    cta: 'Start Free',
  },
  {
    name: 'Pro',
    monthly: 49,
    yearly: 490,
    tagline: 'Everything to scale with style',
    highlight: true,
    features: ['Unlimited projects', 'Advanced insights', 'Priority support', 'Automation hooks', 'Team workspaces'],
    cta: 'Go Pro',
  },
  {
    name: 'Enterprise',
    monthly: 0,
    yearly: 0,
    custom: true,
    tagline: 'Security, scale, and control',
    features: ['SAML SSO', 'Dedicated cluster', 'Private VPC', 'White‑glove onboarding', '99.99% SLA'],
    cta: 'Contact Sales',
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly') // or 'yearly'

  return (
    <section id="pricing" className="relative py-28 bg-[#0b0f1a] dark:bg-[#05070f] text-white">
      {/* aurora background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[28rem] w-[56rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Pricing</h2>
          <p className="mt-4 text-white/70">Flexible plans with luminous polish. Save with annual billing.</p>
        </div>

        {/* Billing toggle */}
        <div className="mb-12 flex items-center justify-center">
          <div className="relative inline-flex items-center rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-xl">
            {['monthly', 'yearly'].map((k) => (
              <button
                key={k}
                onClick={() => setBilling(k)}
                className={`relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  billing === k ? 'text-white' : 'text-white/70'
                }`}
              >
                {k === 'yearly' ? 'Yearly (-20%)' : 'Monthly'}
              </button>
            ))}
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 ${
                billing === 'monthly' ? 'left-1' : 'left-[calc(50%+4px)]'
              }`}
            />
          </div>
        </div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6">
          {baseTiers.map((t, i) => {
            const price = t.custom ? 'Custom' : `$${billing === 'monthly' ? t.monthly : t.yearly}`
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`relative overflow-hidden rounded-3xl p-6 backdrop-blur-2xl border ${
                  t.highlight
                    ? 'border-cyan-300/30 bg-white/10 shadow-[0_30px_140px_rgba(34,211,238,0.25)]'
                    : 'border-white/10 bg-white/5 shadow-[0_20px_120px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* neon edge */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-b from-white/10 to-transparent opacity-40" />

                {/* header */}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-medium tracking-tight">{t.name}</h3>
                    {t.highlight && (
                      <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs text-cyan-200 border border-cyan-300/30">Popular</span>
                    )}
                  </div>
                  <p className="mt-2 text-white/70 text-sm">{t.tagline}</p>

                  <div className="mt-4">
                    <div className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-indigo-400">
                      {price}
                    </div>
                    {!t.custom && (
                      <div className="text-xs text-white/60">{billing === 'yearly' ? 'Billed annually' : 'Billed monthly'}</div>
                    )}
                  </div>

                  <ul className="mt-5 space-y-2 text-white/85 text-sm">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-medium transition-all border ${
                    t.highlight
                      ? 'text-[#0b0f1a] bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-indigo-400 border-transparent shadow-[0_20px_80px_rgba(34,211,238,0.35)] hover:shadow-[0_30px_120px_rgba(34,211,238,0.55)]'
                      : 'text-white/90 bg-white/10 hover:bg-white/15 border-white/15'
                  }`}>
                    {t.cta}
                  </button>
                </div>

                {/* rotating shine */}
                <motion.span
                  aria-hidden
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-tr from-cyan-400/30 to-fuchsia-400/30 blur-3xl"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

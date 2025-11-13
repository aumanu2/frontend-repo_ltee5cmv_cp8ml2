import { motion } from 'framer-motion'
import { Cpu, BarChart3, Shield, Zap, Sparkles, Workflow } from 'lucide-react'

const items = [
  { icon: Cpu, title: 'AI‑Native', desc: 'Built for intelligent workflows with real‑time insights.' },
  { icon: BarChart3, title: 'Visual Analytics', desc: 'Beautiful charts and dashboards with depth and motion.' },
  { icon: Shield, title: 'Enterprise‑grade', desc: 'Security and reliability from day one.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized rendering and blazing performance.' },
  { icon: Sparkles, title: 'Design System', desc: 'Consistent, elegant components for rapid building.' },
  { icon: Workflow, title: 'Automation', desc: 'Connect data and automate complex tasks.' },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-24 bg-[#0b0f1a] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">Product Features</h2>
          <p className="mt-4 text-white/70">Crafted for clarity, speed, and immersion.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition-colors"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] group-hover:shadow-[0_10px_30px_rgba(99,102,241,0.35)] transition-shadow">
                <Icon className="w-6 h-6 text-cyan-300" />
              </div>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

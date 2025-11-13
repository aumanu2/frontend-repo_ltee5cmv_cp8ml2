import { motion } from 'framer-motion'

const steps = [
  { title: 'Connect', desc: 'Integrate your data sources with one click and secure tokens.' },
  { title: 'Compose', desc: 'Design automations and dashboards with drag‑and‑drop blocks.' },
  { title: 'Launch', desc: 'Deploy interactive experiences with a single share link.' },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0b0f1a] to-[#0b0f1a] text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">How it works</h2>
          <p className="mt-4 text-white/70">From setup to scale in minutes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(99,102,241,0.12),rgba(34,211,238,0.12))] p-6 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute -top-3 -left-3 h-16 w-16 rounded-xl bg-cyan-400/20 blur-2xl" />
              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-xl bg-indigo-500/20 blur-2xl" />
              <div className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">
                0{i + 1}
              </div>
              <h3 className="mt-4 text-2xl font-medium">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

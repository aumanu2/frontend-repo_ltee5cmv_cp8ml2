import { motion } from 'framer-motion'

function Card({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
    >
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
      <div className="relative">
        <div className="h-52 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]" />
        <h3 className="mt-4 text-xl font-medium text-white">{title}</h3>
        <p className="mt-2 text-white/70">{children}</p>
      </div>
    </motion.div>
  )
}

export default function Demos() {
  return (
    <section className="relative py-24 bg-[#0b0f1a] text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold">Interactive demos</h2>
          <p className="mt-4 text-white/70">Visuals with depth, lighting and motion.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="AI Assistant">
            A conversational UI with glowing highlights and depth.
          </Card>
          <Card title="Data Visualization">
            Animated charts with parallax layers and realistic lighting.
          </Card>
          <Card title="Workspace">
            A floating dashboard that reacts to the cursor.
          </Card>
        </div>
      </div>
    </section>
  )
}

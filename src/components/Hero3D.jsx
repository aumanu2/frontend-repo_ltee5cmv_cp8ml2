import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0f1a] dark:bg-[#05070f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,97,238,0.2),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl rounded-3xl border border-white/10 bg-white/10 dark:bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_120px_rgba(0,0,0,0.45)] p-8 md:p-12"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_2px_30px_rgba(56,189,248,0.35)]">
                Build the next‑gen SaaS, beautifully
              </h1>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-white/70">
                A premium platform with immersive 3D interactions, AI‑ready design, and smooth performance out of the box.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#pricing" className="pointer-events-auto group rounded-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:shadow-[0_18px_70px_rgba(99,102,241,0.55)] transition-all">
                  Get Started
                </a>
                <a href="#features" className="pointer-events-auto rounded-full px-6 py-3 text-sm font-medium text-white/80 border border-white/15 hover:border-white/30 hover:text-white transition-colors">
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[60rem] bg-gradient-to-t from-[#0b0f1a] to-transparent" />
    </section>
  )
}

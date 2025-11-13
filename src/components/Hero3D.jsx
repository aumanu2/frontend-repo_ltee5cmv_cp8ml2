import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rX = useTransform(my, [0, 1], [8, -8])
  const rY = useTransform(mx, [0, 1], [-8, 8])

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    mx.set(e.clientX / innerWidth)
    my.set(e.clientY / innerHeight)
  }

  return (
    <section onMouseMove={handleMouseMove} className="relative min-h-[92vh] w-full overflow-hidden bg-[#0b0f1a] dark:bg-[#05070f]">
      {/* Aurora gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-[-10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(148,163,255,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.12),transparent_60%)]" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-95">
        {mounted && (
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        )}
      </div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_70%,transparent)]">
        <svg className="absolute inset-0 h-full w-full opacity-[0.20] dark:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <motion.div style={{ rotateX: rX, rotateY: rY }} className="will-change-transform">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="backdrop-blur-2xl rounded-[28px] border border-white/15 bg-white/10 dark:bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_30px_140px_rgba(0,0,0,0.55)] p-8 md:p-12 relative overflow-hidden"
          >
            {/* Glass shine */}
            <span className="pointer-events-none absolute -top-1/2 left-0 right-0 mx-auto h-[140%] w-[40%] translate-y-10 rotate-6 bg-gradient-to-b from-white/15 via-white/5 to-transparent blur-2xl" />

            <div className="flex flex-col items-start gap-6 md:gap-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 shadow-[0_6px_24px_rgba(56,189,248,0.25)]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                Live 3D • Glassmorphism • Framer Motion
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-white">
                Design the future of SaaS with immersive 3D and luminous UI
              </h1>
              <p className="max-w-2xl text-base md:text-lg text-white/75">
                A premium starter that blends interactive 3D, neon glass surfaces, and buttery animations. Ship an unforgettable landing in minutes.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#pricing"
                  className="group relative inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium text-white transition-all"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 opacity-90" />
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">Get Started</span>
                </a>

                <a
                  href="#features"
                  className="group relative inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
                >
                  <span className="relative z-10">Explore Features</span>
                </a>
              </div>

              {/* Floating stats */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {[
                  ['60fps', 'GPU‑accelerated motion'],
                  ['<30KB', 'Lean UI shell'],
                  ['A11y+', 'Accessible by default'],
                ].map(([k, v]) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur-xl"
                  >
                    <div className="text-white font-medium">{k}</div>
                    <div className="text-white/70 text-xs">{v}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0f1a] dark:from-[#05070f] to-transparent" />
    </section>
  )
}

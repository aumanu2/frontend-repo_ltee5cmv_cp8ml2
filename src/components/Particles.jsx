import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function Particles({ count = 60 }) {
  const dots = useMemo(() => Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 6,
    duration: Math.random() * 6 + 6,
  })), [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            y: ['0%', '-10%', '0%'],
            x: ['0%', '2%', '0%'],
          }}
          transition={{
            ease: 'easeInOut',
            duration: d.duration,
            repeat: Infinity,
            delay: d.delay,
          }}
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
          }}
          className="absolute rounded-full bg-cyan-300/50 shadow-[0_0_12px_2px_rgba(34,211,238,0.35)]"
        />
      ))}
    </div>
  )
}

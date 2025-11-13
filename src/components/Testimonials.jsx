import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const items = [
  { name: 'Ava', role: 'Founder, Polaris', quote: 'A stunning experience. Our conversions jumped immediately.', avatar: 'https://i.pravatar.cc/100?img=1' },
  { name: 'Noah', role: 'CTO, Quantly', quote: 'The 3D interactions feel premium and effortless.', avatar: 'https://i.pravatar.cc/100?img=2' },
  { name: 'Mia', role: 'Product Lead, Flux', quote: 'Exactly the vibe a modern SaaS needs.', avatar: 'https://i.pravatar.cc/100?img=3' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-24 bg-[#0b0f1a] text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">Loved by teams</h2>
        <div className="mt-10 relative h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="mx-auto w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
                <img src={items[index].avatar} alt="avatar" className="mx-auto h-14 w-14 rounded-full ring-2 ring-white/20" />
                <p className="mt-4 text-xl text-white/90">“{items[index].quote}”</p>
                <div className="mt-3 text-white/70">{items[index].name} — {items[index].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

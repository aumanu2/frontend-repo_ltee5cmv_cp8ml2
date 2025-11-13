import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true
    return localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((d) => !d)}
      className="relative inline-flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md border border-white/10 bg-white/30 dark:bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_40px_rgba(0,0,0,0.35)] transition-all"
    >
      {dark ? (
        <Sun className="w-5 h-5 text-cyan-300" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  )
}

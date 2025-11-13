import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b0f1a] py-16 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400" />
          <span className="text-white/80">Nebula</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="rounded-full p-2 hover:bg-white/10">
            <Github className="h-5 w-5 text-white/80" />
          </a>
          <a href="#" className="rounded-full p-2 hover:bg-white/10">
            <Twitter className="h-5 w-5 text-white/80" />
          </a>
          <a href="#" className="rounded-full p-2 hover:bg-white/10">
            <Linkedin className="h-5 w-5 text-white/80" />
          </a>
        </div>
      </div>
    </footer>
  )
}

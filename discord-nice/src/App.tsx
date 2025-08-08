import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle, Rocket } from 'lucide-react'
import './index.css'

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-darkBg to-darkElevated">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <motion.div initial={{ rotate: -10, scale: 0.8 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 200 }} className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 shadow-glow">
            <MessageCircle className="h-6 w-6" />
          </motion.div>
          <span className="font-display text-xl font-semibold">Chord</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/app" className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/90 transition hover:bg-white/5">Open App</Link>
          <a href="#features" className="text-sm text-white/70 hover:text-white">Features</a>
        </div>
      </nav>

      <header className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2">
        <div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="font-display text-5xl font-bold leading-tight md:text-6xl">
            A cleaner, smoother Discord experience
          </motion.h1>
          <p className="mt-4 max-w-xl text-white/70">Elegant UI, buttery animations, and a refined chat. Built with React, Tailwind, and Framer Motion.</p>
          <div className="mt-8 flex items-center gap-4">
            <Link to="/app" className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 font-medium shadow-glow transition hover:bg-brand-500">
              Launch App
              <Rocket className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a href="#features" className="rounded-xl border border-white/10 px-5 py-3 font-medium text-white/90 transition hover:bg-white/5">See Features</a>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1">
          <div className="rounded-xl bg-darkElevated p-4">
            <div className="mb-3 flex items-center gap-2 text-xs text-white/40">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-2">Live preview</span>
            </div>
            <div className="h-72 rounded-lg border border-white/10 bg-darkBg p-4">
              <div className="mb-3 h-6 w-1/3 rounded bg-white/5" />
              <div className="space-y-2">
                <div className="h-4 w-2/3 rounded bg-white/5" />
                <div className="h-4 w-1/2 rounded bg-white/5" />
                <div className="h-4 w-1/3 rounded bg-white/5" />
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: 'Fluid motions', desc: 'Micro-interactions and page transitions powered by Framer Motion.' },
            { title: 'Clean dark mode', desc: 'Crisp contrast and subtle glow accents for a premium feel.' },
            { title: 'Responsive', desc: 'Feels native on desktop and mobile with a flexible layout.' },
          ].map((f, i) => (
            <motion.div key={f.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className="rounded-2xl border border-white/10 bg-darkElevated p-6">
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

function Sidebar() {
  const servers = Array.from({ length: 8 }).map((_, i) => i)
  return (
    <div className="flex w-16 flex-col items-center gap-3 border-r border-white/10 bg-darkElevated py-3">
      <Link to="/" className="group relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-glow transition hover:rounded-xl">
        <MessageCircle className="h-6 w-6" />
      </Link>
      <div className="my-1 h-px w-8 bg-white/10" />
      {servers.map((s) => (
        <button key={s} className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-white/70 transition hover:rounded-xl hover:bg-white/10">
          <span className="text-xs">{s + 1}</span>
        </button>
      ))}
    </div>
  )
}

function ChannelList() {
  const channels = ['general', 'design', 'dev-chat', 'music', 'random']
  return (
    <div className="w-64 border-r border-white/10 bg-darkElevated p-3">
      <h4 className="mb-3 px-2 text-xs uppercase tracking-wider text-white/40">Channels</h4>
      <div className="space-y-1">
        {channels.map((c) => (
          <button key={c} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white">
            <span className="text-white/40">#</span>
            <span>{c}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function ChatArea() {
  const messages = [
    { user: 'Alex', text: 'Welcome to Chord! This is a smoother Discord-like UI.' },
    { user: 'Sam', text: 'Animations feel great with Framer Motion.' },
    { user: 'Rae', text: 'Tailwind makes styling super fast.' },
  ]
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between border-b border-white/10 bg-darkElevated px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-white/40">#</span>
          <h2 className="font-medium">general</h2>
        </div>
        <div className="text-xs text-white/50">Preview</div>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="flex items-start gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-sm">{m.user[0]}</div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{m.user}</span>
                <span className="text-xs text-white/40">today</span>
              </div>
              <p className="text-white/80">{m.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-white/10 bg-darkElevated p-3">
        <input placeholder="Message #general" className="w-full rounded-lg border border-white/10 bg-darkBg/60 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-brand-500" />
      </div>
    </div>
  )
}

function AppShell() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChannelList />
      <ChatArea />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<AppShell />} />
      </Routes>
    </BrowserRouter>
  )
}

import { useEffect, useRef, useState } from 'react'
import { PhoneMissed, Star, Inbox, ArrowRight, CalendarCheck, FileText, MessageCircle, BellRing, MessagesSquare } from 'lucide-react'
import { Eyebrow } from './Reveal'

function Bot({ className = '', style = {}, eye = '#38e1ff', look = { x: 0, y: 0 } }: { className?: string; style?: React.CSSProperties; eye?: string; look?: { x: number; y: number } }) {
  return (
    <svg viewBox="0 0 80 100" className={className} style={style} aria-hidden>
      <defs>
        <radialGradient id="body" cx="40%" cy="30%" r="75%"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#dfe6f2" /></radialGradient>
        <linearGradient id="visor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#10204a" /><stop offset="1" stopColor="#050b1f" /></linearGradient>
        <radialGradient id="jet" cx="50%" cy="0%" r="100%"><stop offset="0" stopColor="#bff6ff" /><stop offset=".5" stopColor="#38e1ff" /><stop offset="1" stopColor="#38e1ff" stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="30" cy="88" rx="6" ry="10" fill="url(#jet)"><animate attributeName="ry" values="10;6;10" dur=".5s" repeatCount="indefinite" /></ellipse>
      <ellipse cx="50" cy="88" rx="6" ry="10" fill="url(#jet)"><animate attributeName="ry" values="6;10;6" dur=".5s" repeatCount="indefinite" /></ellipse>
      <rect x="24" y="58" width="32" height="24" rx="11" fill="url(#body)" stroke="#9fb3d9" strokeWidth="1" />
      <circle cx="40" cy="69" r="3.5" fill={eye} />
      <rect x="13" y="60" width="9" height="16" rx="4.5" fill="url(#body)" stroke="#9fb3d9" strokeWidth="1" transform="rotate(20 17 62)" />
      <rect x="58" y="60" width="9" height="16" rx="4.5" fill="url(#body)" stroke="#9fb3d9" strokeWidth="1" transform="rotate(-35 62 62)" />
      <circle cx="40" cy="34" r="27" fill="url(#body)" stroke="#9fb3d9" strokeWidth="1.2" />
      <rect x="18" y="22" width="44" height="26" rx="13" fill="url(#visor)" />
      <g style={{ transform: `translate(${look.x}px, ${look.y}px)`, transition: "transform .35s ease-out" }}><ellipse cx="31" cy="35" rx="5" ry="6.5" fill={eye}><animate attributeName="ry" values="6.5;6.5;0.8;6.5" keyTimes="0;.92;.96;1" dur="4s" repeatCount="indefinite" /></ellipse>
      <ellipse cx="49" cy="35" rx="5" ry="6.5" fill={eye}><animate attributeName="ry" values="6.5;6.5;0.8;6.5" keyTimes="0;.92;.96;1" dur="4s" repeatCount="indefinite" /></ellipse>
      </g>
      <path d="M22 26 q10 -6 22 -3" stroke="#ffffff" strokeOpacity=".45" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="13" cy="34" r="4" fill="#2f6bff" /><circle cx="67" cy="34" r="4" fill="#2f6bff" />
    </svg>
  )
}

const flyCss = `
@keyframes fly1{0%{transform:translate(0,0) rotate(-4deg)}25%{transform:translate(60px,-30px) rotate(4deg)}50%{transform:translate(120px,10px) rotate(-2deg)}75%{transform:translate(40px,30px) rotate(5deg)}100%{transform:translate(0,0) rotate(-4deg)}}
@keyframes fly2{0%{transform:translate(0,0) rotate(5deg)}33%{transform:translate(-70px,25px) rotate(-5deg)}66%{transform:translate(-20px,-35px) rotate(3deg)}100%{transform:translate(0,0) rotate(5deg)}}
@keyframes fly3{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-18px) rotate(6deg)}}
`


const items = [
  { i: PhoneMissed, t: 'Catch missed calls', d: 'Texts every caller back in seconds' },
  { i: CalendarCheck, t: 'Book jobs in', d: 'Straight into your diary' },
  { i: FileText, t: 'Chase quotes', d: 'Follows up until they say yes' },
  { i: MessageCircle, t: 'Reply on WhatsApp', d: 'Instant answers, day or night' },
  { i: BellRing, t: 'Send reminders', d: 'No more no-shows' },
  { i: MessagesSquare, t: 'Website chat', d: 'Turns visitors into leads' },
  { i: Star, t: 'Win Google reviews', d: 'Asks happy customers after every job' },
  { i: Inbox, t: 'Clear your inbox', d: 'Sorts, replies and flags what matters' },
]

const bots = [
  { cls: 'left-[50%] top-3 w-14 sm:left-[40%] sm:top-4 sm:w-20', anim: 'fly1 9s ease-in-out infinite', speed: 0.12, glow: 'rgba(56,225,255,.6)' },
  { cls: 'right-[4%] bottom-6 sm:bottom-auto sm:top-[46%] sm:right-[1%] w-14 sm:w-16', anim: 'fly2 7s ease-in-out infinite', speed: -0.1, glow: 'rgba(56,225,255,.5)' },
  { cls: 'left-[3%] bottom-16 hidden w-12 sm:block', anim: 'fly3 4s ease-in-out infinite', speed: 0.08, glow: 'rgba(56,225,255,.45)' },
]

function useFollow(n: number) {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const [state, setState] = useState(() => Array.from({ length: n }, () => ({ x: 0, y: 0, p: 0 })))
  useEffect(() => {
    let last = window.scrollY, dir = 0, raf = 0, t: number | undefined
    const update = () => {
      const vh = window.innerHeight, vw = window.innerWidth
      setState(refs.current.map((el, k) => {
        if (!el) return { x: 0, y: 0, p: 0 }
        const sec = el.parentElement!.getBoundingClientRect()
        const r = el.getBoundingClientRect()
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2
        const lx = Math.max(-4, Math.min(4, (vw / 2 - cx) / 80))
        const ly = Math.max(-4, Math.min(4, (vh / 2 - cy) / 60 + dir * 3))
        return { x: lx, y: ly, p: Math.max(-50, Math.min(50, (vh / 2 - sec.top - sec.height / 2) * bots[k].speed)) }
      }))
    }
    const onScroll = () => {
      const y = window.scrollY
      dir = y > last ? 1 : y < last ? -1 : 0
      last = y
      cancelAnimationFrame(raf); raf = requestAnimationFrame(update)
      clearTimeout(t); t = window.setTimeout(() => { dir = 0; update() }, 400)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', update) }
  }, [])
  return { refs, state }
}

export function AiAgents() {
  const { refs, state } = useFollow(bots.length)
  return (
    <section id="ai-agents" className="grain relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <style>{flyCss}</style>
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
      <div aria-hidden className="absolute right-0 top-10 h-80 w-[40rem] rounded-full bg-brand/20 blur-3xl" />
      {bots.map((b, k) => (
        <div key={k} ref={(el) => { refs.current[k] = el }} className={`pointer-events-none absolute z-10 ${b.cls}`}
          style={{ transform: `translateY(${state[k].p}px)`, transition: 'transform .6s cubic-bezier(.2,.8,.2,1)' }}>
          <Bot className="w-full" look={state[k]} style={{ animation: b.anim, filter: `drop-shadow(0 0 20px ${b.glow})` }} />
        </div>
      ))}
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-[1fr_1.15fr] md:items-center">
        <div>
          <Eyebrow dark>New · AI agents</Eyebrow>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-6xl">AI agents that win you jobs</h2>
          <p className="mt-6 text-2xl font-semibold text-[#8fb4ff]">Your 24/7 team that never misses a lead.</p>
          <p className="mt-5 text-lg text-white/70">They answer, book, chase and follow up — while you’re out earning.</p>
          <p className="mt-4 text-lg text-white/70">Built for pest control and field businesses. Set up by PC App Studio. Ready when you are.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="mailto:contact@pcappstudio.com" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-lg">Book a free call <ArrowRight className="size-4" /></a>
            <a href="mailto:contact@pcappstudio.com" className="text-white/70">contact@pcappstudio.com</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {items.map((s) => (
            <div key={s.t} className="flex flex-col items-start gap-2 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 sm:flex-row sm:items-center sm:gap-3 sm:p-4">
              <div className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-full bg-brand/25 ring-1 ring-white/20"><s.i className="size-5 text-[#8fb4ff]" /></div>
              <div><p className="text-[15px] font-semibold leading-tight sm:text-base">{s.t}</p><p className="mt-0.5 text-xs leading-snug text-white/55 sm:text-sm">{s.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

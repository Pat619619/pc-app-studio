import { MessageSquare, ClipboardList, Hammer, Rocket, LifeBuoy } from 'lucide-react'
import { Reveal, RevealLi, Eyebrow } from './Reveal'

const steps = [
  { i: MessageSquare, t: 'Chat', d: "A free 15-minute chat. Tell us what's eating your time and how you do it now." },
  { i: ClipboardList, t: 'Plan', d: 'We map out what the app needs to do and give you a fixed price before anything starts.' },
  { i: Hammer, t: 'Build', d: 'You see the app as it comes together and tell us what to change.' },
  { i: Rocket, t: 'Launch', d: "We set it up, get it on your team's phones and show you how it works." },
  { i: LifeBuoy, t: 'Support', d: 'Optional monthly care keeps it backed up, secure and up to date.' },
]

export function Process() {
  return (
    <section id="process" className="grain relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
      <div aria-hidden className="absolute left-1/2 top-0 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow dark>How it works</Eyebrow>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">From first chat to launch.</h2>
          <p className="mt-5 text-lg text-white/65">A fixed price before anything starts, and plain-English updates the whole way.</p>
        </Reveal>

        <div className="relative mt-16">
        <div aria-hidden className="absolute left-[19px] top-2 bottom-2 w-px bg-white/15 md:left-0 md:right-0 md:top-[19px] md:bottom-auto md:h-px md:w-auto" />
        <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
          {steps.map((s, idx) => (
            <RevealLi key={s.t} delay={idx * 0.08} className="relative pl-14 md:pl-0">
              <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full bg-ink ring-1 ring-white/20 md:relative">
                <s.i className="size-[18px] text-[#8fb4ff]" aria-hidden />
              </div>
              <p className="font-mono text-xs text-white/45 md:mt-6">0{idx + 1}</p>
              <h3 className="mt-1 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/65">{s.d}</p>
            </RevealLi>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}

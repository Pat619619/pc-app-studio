import { ArrowUpRight, CalendarDays, Mail } from 'lucide-react'
import { Reveal } from './Reveal'
import { BOOKING_URL, EMAIL } from '../lib/links'

// TODO(Patrick): add WhatsApp number, e.g. 'https://wa.me/447XXXXXXXXX', and set to a string to show the button.
const WHATSAPP: string | null = null

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand py-24 text-white sm:py-32">
      <div aria-hidden className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/75">Start your project</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-6xl sm:leading-[1.02]">Got a job off-the-shelf software doesn't quite fit?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">Let's have a free chat, no hard sell. We'll tell you honestly what it would take.</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-[1.15fr_1fr]">
          <Reveal delay={0.05}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="group flex h-full flex-col rounded-3xl bg-white p-7 text-navy shadow-[0_30px_60px_-30px_rgba(0,0,0,.55)] transition hover:-translate-y-1"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand text-white">
                <CalendarDays className="size-5" aria-hidden />
              </span>
              <span className="mt-5 flex items-center gap-1.5 text-xl font-semibold tracking-tight">
                Book a free call
                <ArrowUpRight className="size-5 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>
              <span className="mt-1.5 text-slate-ink">Pick a time that suits you. A free 15-minute phone call.</span>
              <span className="mt-6 inline-flex w-fit items-center rounded-xl bg-brand px-4 py-2.5 text-sm font-medium text-white transition group-hover:bg-brand-600">Choose a time</span>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent('New project enquiry - PC App Studio')}`}
              className="group flex h-full flex-col rounded-3xl border border-white/30 bg-white/[0.08] p-7 text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.14]"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
                <Mail className="size-5" aria-hidden />
              </span>
              <span className="mt-5 text-xl font-semibold tracking-tight">Email us</span>
              <span className="mt-1.5 text-white/80">Prefer to write it down? Tell us what you need.</span>
              <span className="mt-6 font-mono text-sm text-white underline decoration-white/40 underline-offset-4 group-hover:decoration-white">{EMAIL}</span>
            </a>
          </Reveal>
        </div>
        {WHATSAPP && (
          <p className="mt-6 text-center">
            <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-medium text-white transition hover:bg-white/10">WhatsApp</a>
          </p>
        )}
      </div>
    </section>
  )
}

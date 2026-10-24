import { Smartphone, BrainCircuit, MonitorSmartphone, Users, Check } from 'lucide-react'
import { Reveal, Eyebrow } from './Reveal'

const chip = 'rounded-full border border-line bg-white px-3 py-1 text-[13px] text-slate-ink'

export function Services() {
  return (
    <section id="services" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>What we build</Eyebrow>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">Made to measure, not off the shelf.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-ink text-pretty">
            Small businesses and clubs often run on WhatsApp, paper and memory. Jobs get missed, messages get lost and payments get chased. We build apps that do the jobs you need, the way you already do them, and nothing you don't.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* Custom apps */}
          <Reveal className="dot-grid group relative overflow-hidden rounded-3xl border border-line bg-mist p-7 sm:p-9 md:col-span-4">
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand text-white shadow-[0_8px_20px_-8px_rgba(30,107,255,.9)]">
              <Smartphone className="size-5" aria-hidden />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">Custom apps</h3>
            <p className="mt-2 max-w-md text-slate-ink">Built around your business, with a simple admin view so you stay in control.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Bookings', 'Job sheets', 'Quotes', 'Enquiries', 'Admin dashboards', 'Payments'].map((c) => (
                <span key={c} className={chip}>{c}</span>
              ))}
            </div>
          </Reveal>

          {/* AI */}
          <Reveal delay={0.08} className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white sm:p-9 md:col-span-2">
            <div aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full bg-brand/30 blur-3xl" />
            <div className="relative flex size-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <BrainCircuit className="size-5" aria-hidden />
            </div>
            <h3 className="relative mt-6 text-2xl font-semibold tracking-tight">AI solutions</h3>
            <p className="relative mt-2 text-white/70">Take repetitive admin off your plate, from sorting enquiries to drafting replies and reports.</p>
          </Reveal>

          {/* Web & mobile */}
          <Reveal delay={0.04} className="rounded-3xl border border-line bg-white p-7 shadow-[0_1px_2px_rgba(11,27,58,.04),0_12px_32px_-20px_rgba(11,27,58,.3)] sm:p-9 md:col-span-2">
            <div className="flex size-11 items-center justify-center rounded-xl bg-mist text-brand ring-1 ring-line">
              <MonitorSmartphone className="size-5" aria-hidden />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">Web &amp; mobile</h3>
            <p className="mt-2 text-slate-ink">Fast websites and web apps for any phone, tablet or computer, with logins, payments and email alerts.</p>
          </Reveal>

          {/* Clubs */}
          <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl bg-ink text-white md:col-span-4">
            <picture>
              <source type="image/webp" srcSet="/img/heritage-banner.webp" />
              <img src="/img/heritage-banner.webp" alt="" width={1600} height={666} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-left opacity-60" />
            </picture>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/10 via-ink/70 to-ink" />
            <div className="relative ml-auto p-7 sm:p-9 md:w-[60%]">
              <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <Users className="size-5" aria-hidden />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">Club &amp; membership apps</h3>
              <p className="mt-2 text-white/75">For sports clubs, syndicates and local groups.</p>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/85">
                {['Fixtures & news', 'Members & subs', 'Shared logbooks', 'Group chat'].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check className="size-4 text-[#8fb4ff]" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

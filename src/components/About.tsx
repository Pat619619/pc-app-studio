import { MapPin } from 'lucide-react'
import { Reveal, Eyebrow } from './Reveal'

const points = [
  ['Made to measure', 'Your app fits how you work, not the other way round.'],
  ['Fast', 'A working first version in front of you quickly.'],
  ['Straight talking', "If an off-the-shelf tool already does the job, we'll tell you."],
]

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl bg-ink shadow-[0_30px_80px_-40px_rgba(11,27,58,.7)] ring-1 ring-navy/10">
            <picture><source type="image/webp" srcSet="/img/about-800.webp 800w, /img/about-1600.webp 1600w" sizes="(min-width:1024px) 560px, 100vw" /><img src="/img/about.jpg" alt="App developer workspace with code and app designs on screen" width={1600} height={1200} loading="lazy" className="w-full" /></picture>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">Built by someone who knows how busy you are.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-ink text-pretty">
              PC App Studio builds bespoke apps for small businesses, trades and clubs. Modern AI-assisted build tools mean fewer hours per build, so a custom app costs far less than a traditional agency quote.
            </p>
          </Reveal>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {points.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06} className="grid grid-cols-[150px_1fr] gap-4 py-4">
                <dt className="font-medium">{t}</dt>
                <dd className="text-slate-ink">{d}</dd>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.1} className="mt-8 flex items-center gap-4">
            <img src="/img/icon-512.png" alt="" width={48} height={48} className="size-12 rounded-xl" />
            <div>
              <p className="font-semibold">Patrick Carroll, founder</p>
              <p className="flex items-center gap-1.5 text-sm text-slate-ink"><MapPin className="size-3.5" aria-hidden />Borehamwood, Hertfordshire</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

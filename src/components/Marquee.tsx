import { Eyebrow } from './Reveal'

const logos = [
  { f: 'apple', n: 'Apple', w: 'h-11' },
  { f: 'google', n: 'Google', w: 'h-11' },
  { f: 'microsoft', n: 'Microsoft', w: 'h-10' },
  { f: 'android', n: 'Android', w: 'h-9' },
  { f: 'google-play', n: 'Google Play', w: 'h-11' },
  { f: 'app-store', n: 'App Store', w: 'h-11' },
  { f: 'google-cloud', n: 'Google Cloud', w: 'h-10' },
  { f: 'aws', n: 'AWS', w: 'h-9' },
  { f: 'supabase', n: 'Supabase', w: 'h-11' },
  { f: 'stripe', n: 'Stripe', w: 'h-9' },
]

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 gap-4 pr-4" aria-hidden={hidden || undefined}>
      {logos.map((l) => (
        <li key={l.f} className="flex h-20 min-w-[180px] items-center gap-3 rounded-2xl border border-line bg-white px-5 sm:h-24 sm:min-w-[220px] sm:gap-4 sm:px-6 shadow-[0_1px_2px_rgba(11,27,58,.04),0_8px_24px_-16px_rgba(11,27,58,.25)]">
          <img src={`/img/logos/${l.f}.svg`} alt={hidden ? '' : `${l.n} logo`} className={`${l.w} w-auto max-w-[72px] object-contain`} decoding="async" />
          <span className="text-[17px] font-medium tracking-tight text-navy">{l.n}</span>
        </li>
      ))}
    </ul>
  )
}

export function Marquee() {
  return (
    <section id="platforms" aria-labelledby="platforms-h" className="relative overflow-hidden border-b border-line bg-mist py-20 sm:py-24">
      <div className="mx-auto mb-10 flex max-w-6xl flex-col items-start justify-between gap-4 px-5 sm:px-8 md:flex-row md:items-end">
        <div>
          <Eyebrow>Platforms we build for</Eyebrow>
          <h2 id="platforms-h" className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-[40px] sm:leading-[1.1]">
            iPhone, Android, the web and the cloud.
          </h2>
        </div>
        <p className="max-w-sm text-slate-ink">Secure logins, data and payments, built on proven, well-supported platforms.</p>
      </div>
      <div className="marquee-mask group flex overflow-hidden motion-reduce:overflow-x-auto">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <Track />
          <Track hidden />
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-slate-ink sm:px-8">
        All trademarks and logos belong to their respective owners. Their use here shows platforms we build for and does not imply partnership or endorsement.
      </p>
    </section>
  )
}

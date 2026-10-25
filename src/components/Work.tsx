import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal, Eyebrow } from './Reveal'

type Project = {
  name: string; sub: string; icon: string; img: string; imgAlt: string; bg: string
  body: string; feats: string[]; tags: string[]; href: string; cta: string
}

const projects: Project[] = [
  {
    name: 'FieldOps Now', sub: 'Field-team app for shooting syndicates and estates', icon: '/img/fieldops-icon.png',
    img: '/img/fieldops-map.webp', imgAlt: 'FieldOps Now app showing farm boundaries on a map', bg: 'bg-[#1f3a2a]',
    body: 'A job and field-team management app, live with the Oakwood syndicate and available on Google Play. Members share one map, see who is on site and keep a shared logbook.',
    feats: ['Farm boundaries, pins and live weather on one map', '"I\'m on site" check-ins so everyone knows who is out', 'Shared logbook and group chat', 'Works on Android phones and in any web browser'],
    tags: ['Android', 'Google Play', 'Web app', 'Maps'], href: 'https://fieldopsnow.com/', cta: 'View the live app',
  },
  {
    name: 'Y2Fame', sub: 'Online personalised gift shop', icon: '/img/y2fame-icon.png',
    img: '/img/y2fame-shop.webp', imgAlt: 'Y2Fame shop on a phone showing personalised mugs and a sweatshirt', bg: 'bg-[#5b45e0]',
    body: 'A UK online gift shop where customers upload a photo and get personalised portraits printed on framed prints, canvases, mugs and t-shirts, plus ready-made designs. Built end-to-end by PC App Studio.',
    feats: ['Photo upload and personalisation', 'Product pages with sizes, colours and options', 'Secure Stripe checkout', 'Automatic print-on-demand fulfilment with UK tracked delivery'],
    tags: ['E-commerce', 'Stripe', 'Print on demand', 'Web app'], href: 'https://y2fame.com/', cta: 'Visit Y2Fame',
  },
]

export function Work() {
  return (
    <section id="work" className="relative border-t border-line bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>Some examples of our work</Eyebrow>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">Live and in use.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-ink">Products designed, built and run by PC App Studio, live today.</p>
            <ol className="mt-8 hidden space-y-2 font-mono text-sm text-slate-ink lg:block">
              {projects.map((p, i) => (
                <li key={p.name} className="flex items-center gap-3"><span className="text-brand">0{i + 1}</span>{p.name}</li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="group grid overflow-hidden rounded-3xl border border-line bg-white shadow-[0_1px_2px_rgba(11,27,58,.04),0_20px_50px_-30px_rgba(11,27,58,.35)] transition-shadow hover:shadow-[0_1px_2px_rgba(11,27,58,.04),0_30px_60px_-30px_rgba(11,27,58,.45)] sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                <div className={`relative flex items-center justify-center overflow-hidden ${p.bg} p-6 sm:p-8`}>
                  <img src={p.img} alt={p.imgAlt} width={720} height={1280} loading="lazy" className="w-full max-w-[260px] rounded-2xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.015]" />
                </div>
                <div className="flex flex-col p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <img src={p.icon} alt="" width={48} height={48} className="size-12 rounded-xl ring-1 ring-line" />
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                      <p className="text-sm text-slate-ink">{p.sub}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-relaxed text-slate-ink">{p.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.feats.map((f) => (
                      <li key={f} className="flex gap-2.5 text-[15px] text-navy/85"><Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />{f}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="rounded-full bg-mist px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-ink ring-1 ring-line">{t}</span>)}
                  </div>
                  <a href={p.href} target="_blank" rel="noopener" className="mt-7 inline-flex w-fit items-center gap-1.5 rounded-xl bg-navy px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand">
                    {p.cta}<ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

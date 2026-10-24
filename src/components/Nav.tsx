import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
]

export function Nav() {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.75)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-3 pl-4 backdrop-blur-xl transition-colors duration-300 ${
          solid
            ? 'border-line bg-white/85 text-navy shadow-[0_8px_30px_-12px_rgba(11,27,58,.25)]'
            : 'border-white/15 bg-white/[0.06] text-white'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight" aria-label="PC App Studio home">
          <img src="/img/logo-nav.png" alt="" width={30} height={30} className="size-[30px] rounded-[8px]" />
          <span className="text-[15px]"><span className="text-brand">PC</span> App Studio</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${solid ? 'text-slate-ink hover:text-navy hover:bg-mist' : 'text-white/75 hover:text-white hover:bg-white/10'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-xl bg-brand px-3.5 py-2 text-sm font-medium text-white transition hover:bg-brand-600"
        >
          Get in touch
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </a>
      </nav>
    </header>
  )
}

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { BOOKING_URL } from '../lib/links'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 140])
  const fade = useTransform(scrollY, [0, 500], [1, reduce ? 1 : 0.2])

  const item = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28, filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.9, delay: d, ease },
  })

  return (
    <section id="top" className="grain relative isolate h-[100svh] min-h-[640px] overflow-hidden bg-ink text-white">
      <motion.div
        style={{ y }}
        initial={reduce ? false : { scale: 1.12 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 2.2, ease }}
        className="absolute inset-x-0 top-0 -z-10 h-[62%] [mask-image:linear-gradient(to_bottom,#000_50%,transparent_96%)] md:inset-0 md:h-auto md:[mask-image:none]"
      >
        <picture>
          <source type="image/avif" srcSet="/img/hero-960.avif 960w, /img/hero-1600.avif 1600w, /img/hero-2400.avif 2400w" sizes="100vw" />
          <source type="image/webp" srcSet="/img/hero-960.webp 960w, /img/hero-1600.webp 1600w, /img/hero-2400.webp 2400w" sizes="100vw" />
          <img
            src="/img/hero-1600.webp"
            alt="Laptop with the PC App Studio crest on the lid"
            width={2400}
            height={1283}
            fetchPriority="high"
            className="h-full w-full object-cover object-[24%_45%] md:object-[center_45%]"
          />
        </picture>
      </motion.div>
      {/* readability overlays */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[62%] bg-gradient-to-t from-ink via-ink/20 to-transparent md:inset-0 md:h-auto md:bg-gradient-to-l md:from-ink/95 md:via-ink/60 md:to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink/80 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink/60 to-transparent" />

      <motion.div style={{ opacity: fade }} className="mx-auto flex h-full max-w-6xl items-end px-5 pb-10 sm:px-8 md:items-center md:justify-end md:pb-0">
        <div className="w-full max-w-xl md:w-[46%]">
          <motion.p {...item(0.15)} className="mb-5 hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand shadow-[0_0_10px_2px_rgba(30,107,255,.8)]" />
            Borehamwood · Hertfordshire · UK
          </motion.p>
          <motion.h1 {...item(0.25)} className="text-[42px] leading-[0.98] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[76px]">
            Smart apps.
            <br />
            <span className="text-white/60">Real solutions.</span>
          </motion.h1>
          <motion.p {...item(0.4)} className="mt-6 max-w-md text-[17px] leading-relaxed text-white/75 text-pretty">
            Bespoke apps, business tools and AI for UK clubs and small businesses. Built around how you actually work, priced fairly and explained in plain English.
          </motion.p>
          <motion.div {...item(0.55)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_rgba(30,107,255,.9)] transition hover:bg-brand-600">
              Book a free call
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-5 py-3.5 font-medium text-white backdrop-blur transition hover:bg-white/[0.12]">
              See our work
            </a>
          </motion.div>
        </div>
      </motion.div>

      <a href="#platforms" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/50 transition hover:text-white md:block">
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}

import { ArrowRight, Mail } from 'lucide-react'
import { Reveal } from './Reveal'

const EMAIL = 'contact@pcappstudio.com'
// TODO(Patrick): add WhatsApp number, e.g. 'https://wa.me/447XXXXXXXXX', and set to a string to show the button.
const WHATSAPP: string | null = null

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand py-24 text-white sm:py-32">
      <div aria-hidden className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
      <Reveal className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/75">Start your project</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-6xl sm:leading-[1.02]">Got a job off-the-shelf software doesn't quite fit?</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">Let's have a free 15-minute chat, no hard sell. We'll tell you honestly what it would take.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent('New project enquiry - PC App Studio')}`} className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-medium text-navy shadow-[0_20px_40px_-20px_rgba(0,0,0,.5)] transition hover:-translate-y-0.5">
            <Mail className="size-4 text-brand" aria-hidden />Email us
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
          {WHATSAPP && (
            <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-4 font-medium text-white transition hover:bg-white/10">WhatsApp</a>
          )}
        </div>
        <a href={`mailto:${EMAIL}`} className="mt-5 inline-block font-mono text-sm text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white">{EMAIL}</a>
      </Reveal>
    </section>
  )
}

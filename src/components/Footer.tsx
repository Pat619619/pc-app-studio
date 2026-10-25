export function Footer() {
  return (
    <footer className="bg-ink py-10 text-sm text-white/55">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:px-8 md:flex-row">
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-white">
          <img src="/img/logo-b3-on-navy.png" alt="PC App Studio" width={162} height={22} className="h-[22px] w-auto" />
        </a>
        <p className="text-center">Borehamwood, Hertfordshire · <a className="hover:text-white" href="mailto:contact@pcappstudio.com">contact@pcappstudio.com</a></p>
        <p>© 2026 PC App Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}

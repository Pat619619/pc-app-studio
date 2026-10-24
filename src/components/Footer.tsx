export function Footer() {
  return (
    <footer className="bg-ink py-10 text-sm text-white/55">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:px-8 md:flex-row">
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-white">
          <img src="/img/logo-nav.png" alt="" width={28} height={28} className="size-7 rounded-md" />
          <span><span className="text-[#8fb4ff]">PC</span> App Studio</span>
        </a>
        <p className="text-center">Borehamwood, Hertfordshire · <a className="hover:text-white" href="mailto:contact@pcappstudio.com">contact@pcappstudio.com</a></p>
        <p>© 2026 PC App Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}

# PC App Studio

Website for [pcappstudio.com](https://pcappstudio.com/).

Stack: Vite + React 19 + TypeScript, Tailwind CSS v4, Motion, Lenis, Geist (self-hosted via Fontsource), Lucide icons.
Deployed to GitHub Pages from the `gh-pages` branch: run `npm run deploy` (builds and force-pushes `dist/` to `gh-pages`). `public/CNAME` keeps the custom domain.
A ready GitHub Actions workflow (actions/deploy-pages) can be added once the pushing token has the `workflow` scope.

```bash
npm ci
npm run dev      # local dev
npm run build    # static build to dist/
npm run deploy   # publish to GitHub Pages
```

TODO: add the WhatsApp number in `src/components/Contact.tsx` (`WHATSAPP`) to show the WhatsApp button.

Platform logos are trademarks of their respective owners (sources: Wikimedia Commons, Supabase brand assets).
Previous static version: git tag `v1-basic`.

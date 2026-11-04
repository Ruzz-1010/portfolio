import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'
import { LogoMark, RuzzWordmark } from './Logo'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/[0.07] pt-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <LogoMark className="size-8 shrink-0" />
            <div>
              <RuzzWordmark className="h-[15px] w-auto" />
              <p className="mt-1 text-[11px] text-muted/60">Full-stack developer</p>
            </div>
          </div>

          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/60">
            <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
            Available for work
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 self-start rounded-full border border-cream/[0.08] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-accent/30 hover:text-accent sm:self-auto"
          >
            Back to top
            <ArrowUp
              size={12}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="relative mt-10 select-none overflow-hidden" aria-hidden="true">
          <RuzzWordmark variant="outline" className="w-full" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface to-transparent" />
        </div>

        <div className="flex flex-col gap-2 border-t border-cream/[0.07] py-5 text-[11px] text-muted/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.12em]">
            Built with React, Vite &amp; Tailwind CSS
          </p>
          <p className="font-mono uppercase tracking-[0.12em]">Designed with intent</p>
        </div>
      </div>
    </footer>
  )
}

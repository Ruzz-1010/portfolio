import { techMarquee } from '../data/portfolio'
import TechIcon from './TechIcon'

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee]

  return (
    <div className="marquee relative border-y border-cream/[0.07] bg-cream/[0.015] py-4">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent"
        aria-hidden="true"
      />

      <div className="marquee-track items-center" aria-hidden="true">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-2.5 px-6">
            <TechIcon name={item} size={15} />
            <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-cream/55">
              {item}
            </span>
            <span className="ml-4 size-1 rounded-full bg-accent/50" />
          </span>
        ))}
      </div>
      <span className="sr-only">Technologies I work with: {techMarquee.join(', ')}</span>
    </div>
  )
}

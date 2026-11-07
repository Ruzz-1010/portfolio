import { Layout, Server, Wrench } from 'lucide-react'
import { additionalSkills, skillGroups } from '../data/portfolio'
import { trackSpotlight } from '../utils/spotlight'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'

const groupStyles = {
  layout: {
    Icon: Layout,
    iconClass: 'border-accent/25 bg-accent/[0.08] text-accent',
    line: 'from-accent/70',
  },
  server: {
    Icon: Server,
    iconClass: 'border-mint/25 bg-mint/[0.08] text-mint',
    line: 'from-mint/70',
  },
  wrench: {
    Icon: Wrench,
    iconClass: 'border-lilac/25 bg-lilac/[0.08] text-lilac',
    line: 'from-lilac/70',
  },
}

export default function Skills() {
  return (
    <section
      id="stack"
      className="relative border-y border-cream/[0.06] bg-surface-2/40 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[640px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            number="02"
            eyebrow="Stack"
            title={
              <>
                Tools I <span className="serif-accent text-accent">reach for.</span>
              </>
            }
            description="A pragmatic toolkit — chosen for developer experience, performance, and long-term maintainability."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => {
            const style = groupStyles[group.icon] ?? groupStyles.layout
            const GroupIcon = style.Icon

            return (
              <Reveal key={group.title} delay={index * 80} className="h-full">
                <article
                  className="spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream/[0.08] bg-surface-2/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cream/[0.16] hover:shadow-[0_24px_70px_-40px_rgba(203,246,95,0.5)]"
                  onMouseMove={trackSpotlight}
                >
                  <div
                    className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r ${style.line} to-transparent`}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span
                        className={`grid size-11 place-items-center rounded-xl border ${style.iconClass}`}
                      >
                        <GroupIcon size={19} aria-hidden="true" />
                      </span>
                      <span className="font-mono text-[10px] text-muted/40">0{index + 1}</span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-cream">
                      {group.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted/85">
                      {group.description}
                    </p>

                    <ul className="mt-5 space-y-1.5 border-t border-cream/[0.07] pt-5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 rounded-lg border border-transparent px-2 py-1.5 transition-colors hover:border-cream/[0.07] hover:bg-cream/[0.03]"
                        >
                          <span className="grid size-5 place-items-center">
                            <TechIcon name={item} size={15} />
                          </span>
                          <span className="text-[12.5px] text-cream/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={220}>
          <div className="mt-10 flex flex-col gap-4 border-t border-cream/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60">
              Also in the toolbox
            </p>
            <ul className="flex flex-wrap gap-2">
              {additionalSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-1.5 rounded-full border border-cream/[0.08] bg-cream/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted transition-colors hover:border-accent/25 hover:text-cream"
                >
                  <TechIcon name={skill} size={12} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

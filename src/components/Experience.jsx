import { ArrowUpRight, Check, Download } from 'lucide-react'
import { experience, profile } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-y border-cream/[0.06] bg-surface-2/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              number="04"
              eyebrow="Experience"
              title={
                <>
                  Where I&apos;ve <span className="serif-accent text-accent">been.</span>
                </>
              }
              description="Four years of shipping products with small teams and big ambitions."
            />
          </Reveal>

          <Reveal delay={100}>
            <a
              href={profile.resumeUrl}
              download="resume.pdf"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-cream/10 bg-cream/[0.02] px-4 py-2.5 text-[13px] font-medium text-cream/80 transition-colors hover:border-accent/35 hover:bg-accent/[0.07] hover:text-accent-bright"
            >
              <Download
                size={14}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
              Download résumé
            </a>
          </Reveal>
        </div>

        <ol className="relative mt-14 space-y-0 before:absolute before:bottom-2 before:left-[3px] before:top-2 before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-mint/25 before:to-lilac/10">
          {experience.map((job, index) => (
            <li
              key={`${job.company}-${job.role}`}
              className="relative pb-12 pl-7 last:pb-0 sm:pl-9"
              style={{ '--job-accent': job.accent }}
            >
              <span
                className="absolute left-0 top-2 size-[7px] rounded-full ring-4 ring-surface-2"
                style={{ backgroundColor: job.accent }}
                aria-hidden="true"
              />

              <Reveal delay={index * 80}>
                <div className="grid gap-4 md:grid-cols-[172px_1fr] md:gap-8">
                  <div className="pt-0.5">
                    <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      {index === 0 && (
                        <span
                          className="pulse-ring relative size-1.5 rounded-full"
                          style={{ backgroundColor: job.accent }}
                          aria-hidden="true"
                        />
                      )}
                      {job.period}
                    </p>
                    <p className="mt-1.5 flex items-center gap-2 text-[11px] text-muted/60">
                      <span
                        className="grid size-8 place-items-center rounded-lg border font-display text-sm font-semibold"
                        style={{
                          color: job.accent,
                          borderColor: `${job.accent}33`,
                          backgroundColor: `${job.accent}14`,
                        }}
                        aria-hidden="true"
                      >
                        {job.company.charAt(0)}
                      </span>
                      {job.location}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-cream sm:text-xl">
                      {job.role}
                      <span className="font-normal text-muted/70"> · {job.company}</span>
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                      {job.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-muted/85"
                        >
                          <Check
                            size={13}
                            className="mt-1 shrink-0"
                            style={{ color: job.accent }}
                            aria-hidden="true"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
                      {job.tech.map((tech) => (
                        <li
                          key={tech}
                          className="flex items-center gap-1.5 rounded-md border border-cream/[0.07] bg-cream/[0.02] px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.06em] text-muted"
                        >
                          <TechIcon name={tech} size={11} />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="relative mt-12 flex flex-col gap-5 overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.12] via-surface-2 to-lilac/[0.08] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div
              className="pointer-events-none absolute -right-12 -top-20 size-52 rounded-full bg-accent/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                The full story
              </p>
              <p className="mt-1.5 font-display text-lg font-medium text-cream">
                One page. All the highlights.
              </p>
              <p className="mt-1 text-[13px] text-muted/80">
                Grab the condensed version of my experience.
              </p>
            </div>
            <a
              href={profile.resumeUrl}
              download="resume.pdf"
              className="btn-shine group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-cream px-5 py-3 text-[13px] font-semibold text-surface transition-colors hover:bg-white sm:self-auto"
            >
              <Download size={14} />
              Download PDF
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

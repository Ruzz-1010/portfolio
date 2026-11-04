import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'
import { GithubIcon } from './icons'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              number="03"
              eyebrow="Projects"
              title={
                <>
                  Selected <span className="serif-accent text-accent">work.</span>
                </>
              }
              description="A few things I've designed, built, and shipped. Each one taught me something new."
            />
          </Reveal>

          <Reveal delay={100}>
            <a
              href="https://github.com/ruzz"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 text-[13px] font-medium text-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={15} />
              More on GitHub
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const wide = Boolean(project.wide)

            return (
              <Reveal
                key={project.title}
                delay={(index % 2) * 90}
                className={wide ? 'h-full md:col-span-2 lg:col-span-3' : 'h-full'}
              >
                <article
                  className={`project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream/[0.08] bg-surface-2/60 ${
                    wide ? 'lg:grid lg:grid-cols-[1.08fr_0.92fr]' : ''
                  }`}
                  style={{ '--project-accent': project.accent }}
                >
                  <div
                    className={`relative overflow-hidden border-b border-cream/[0.06] ${
                      wide ? 'lg:min-h-[440px] lg:border-b-0 lg:border-r' : 'aspect-[16/10]'
                    }`}
                  >
                    <a
                      href={project.live || project.source}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} — view project`}
                      className="block h-full"
                    >
                      <div className="project-visual h-full transition-transform duration-500 ease-out">
                        <ProjectVisual variant={project.visual} />
                      </div>

                      <div className="pointer-events-none absolute inset-0 z-10 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-[12px] font-semibold text-surface shadow-lg">
                          View project
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </a>

                    {project.featured && (
                      <span className="pv-text pv-border absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border bg-[#0b0806]/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] backdrop-blur">
                        <span className="pv-bg size-1 rounded-full" aria-hidden="true" />
                        Featured
                      </span>
                    )}
                  </div>

                  <div
                    className={`flex flex-1 flex-col p-5 sm:p-6 ${wide ? 'lg:justify-center lg:p-9' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className={`project-title font-display font-semibold tracking-tight text-cream transition-colors ${
                            wide ? 'text-2xl sm:text-3xl' : 'text-xl'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p className="mt-1 flex items-center gap-2 text-[12px] text-muted/75">
                          {project.tagline}
                          <span className="size-0.5 rounded-full bg-muted/40" aria-hidden="true" />
                          <span className="font-mono text-[10px] text-muted/50">{project.year}</span>
                        </p>
                      </div>

                      <a
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code`}
                        className="grid size-9 shrink-0 place-items-center rounded-full border border-cream/[0.09] text-muted transition-colors hover:border-cream/25 hover:text-cream"
                      >
                        <GithubIcon size={15} />
                      </a>
                    </div>

                    <p
                      className={`mt-4 leading-relaxed text-muted ${
                        wide ? 'max-w-lg text-[14px]' : 'text-[13.5px]'
                      }`}
                    >
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="flex items-center gap-1.5 rounded-md border border-cream/[0.07] bg-cream/[0.02] px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.06em] text-muted"
                        >
                          <span
                            className="pv-tag-dot size-1 rounded-full opacity-70"
                            aria-hidden="true"
                          />
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6">
                      <div className="flex items-center gap-5 border-t border-cream/[0.07] pt-4">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link inline-flex items-center gap-1.5 text-[12px] font-medium text-cream/75 transition-colors"
                          >
                            <ExternalLink size={13} />
                            Live demo
                            <span className="sr-only">for {project.title}</span>
                          </a>
                        )}
                        {project.source && (
                          <a
                            href={project.source}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link inline-flex items-center gap-1.5 text-[12px] font-medium text-muted transition-colors"
                          >
                            Source
                            <span className="sr-only">for {project.title}</span>
                          </a>
                        )}
                        <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.14em] text-muted/40">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

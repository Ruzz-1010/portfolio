import { ArrowUpRight, ExternalLink, Lock } from 'lucide-react'
import { projects } from '../data/portfolio'
import { GithubIcon } from './icons'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'

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
              description="Thesis systems, booking platforms, and full-stack builds — designed, coded, and shipped from Palawan."
            />
          </Reveal>

          <Reveal delay={100}>
            <a
              href="https://github.com/Ruzz-1010"
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
            const projectLink = project.live || project.source

            return (
              <Reveal
                key={project.title}
                delay={(index % 2) * 90}
                className={wide ? 'h-full md:col-span-2 lg:col-span-3' : 'h-full'}
              >
                <article
                  className={`project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream/[0.08] bg-surface-2/60 ${
                    wide ? 'lg:grid lg:grid-cols-[1.34fr_0.66fr]' : ''
                  }`}
                  style={{ '--project-accent': project.accent }}
                >
                  <div
                    className={`relative overflow-hidden border-b border-cream/[0.06] ${
                      wide
                        ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[440px] lg:border-b-0 lg:border-r'
                        : 'aspect-[16/10]'
                    }`}
                  >
                    {projectLink ? (
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} — view project`}
                        className="block h-full"
                      >
                        <div className="project-visual h-full transition-transform duration-500 ease-out">
                          <ProjectVisual
                            image={project.image}
                            alt={project.imageAlt}
                            eager={project.featured}
                          />
                        </div>

                        <div className="pointer-events-none absolute inset-0 z-10 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-[12px] font-semibold text-surface shadow-lg">
                            {project.live ? 'Open live demo' : 'View project'}
                            <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="h-full">
                        <div className="project-visual h-full transition-transform duration-500 ease-out">
                          <ProjectVisual
                            image={project.image}
                            alt={project.imageAlt}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex flex-1 flex-col p-5 sm:p-6 ${wide ? 'lg:justify-center lg:p-9' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {(project.featured || project.private) && (
                          <div className="mb-2.5 flex flex-wrap items-center gap-1.5">
                            {project.featured && (
                              <span className="pv-text pv-border inline-flex items-center gap-1.5 rounded-full border bg-cream/[0.02] px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.14em]">
                                <span className="pv-bg size-1 rounded-full" aria-hidden="true" />
                                Featured
                              </span>
                            )}
                            {project.private && (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/12 bg-cream/[0.03] px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.14em] text-cream/60">
                                <Lock size={8} aria-hidden="true" />
                                Private
                              </span>
                            )}
                          </div>
                        )}
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

                      {project.source ? (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} source code`}
                          className="grid size-9 shrink-0 place-items-center rounded-full border border-cream/[0.09] text-muted transition-colors hover:border-cream/25 hover:text-cream"
                        >
                          <GithubIcon size={15} />
                        </a>
                      ) : (
                        <span
                          title="Private repository"
                          className="grid size-9 shrink-0 place-items-center rounded-full border border-cream/[0.07] text-muted/45"
                        >
                          <Lock size={14} aria-hidden="true" />
                          <span className="sr-only">Private repository</span>
                        </span>
                      )}
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
                          <TechIcon name={tag} size={11} />
                          {tag}
                        </li>
                      ))}
                    </ul>

                    {wide && (
                      <dl className="mt-6 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 border-t border-cream/[0.07] pt-5">
                        <div>
                          <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/45">
                            Edge
                          </dt>
                          <dd className="mt-1 text-[12.5px] text-cream/75">
                            ESP32 · pressure, wind, GPS
                          </dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/45">
                            Pipeline
                          </dt>
                          <dd className="mt-1 text-[12.5px] text-cream/75">
                            SQLite history → React dashboard
                          </dd>
                        </div>
                      </dl>
                    )}

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
                        {project.private && !project.source && (
                          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted/60">
                            <Lock size={12} aria-hidden="true" />
                            Private thesis repo
                          </span>
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

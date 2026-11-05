import {
  Accessibility,
  ArrowUpRight,
  Briefcase,
  Compass,
  Gauge,
  MapPin,
  Sparkles,
  Target,
} from 'lucide-react'
import { principles, profile, quickFacts } from '../data/portfolio'
import LocalTime from './LocalTime'
import Reveal from './Reveal'
import RotatingStamp from './RotatingStamp'
import SectionHeading from './SectionHeading'

const principleIcons = {
  compass: Compass,
  gauge: Gauge,
  accessibility: Accessibility,
}

const factIcons = {
  pin: MapPin,
  briefcase: Briefcase,
  target: Target,
  sparkles: Sparkles,
}

const factColors = ['text-accent', 'text-mint', 'text-butter', 'text-lilac']

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            number="01"
            eyebrow="About"
            title={
              <>
                Craft, curiosity, and{' '}
                <span className="serif-accent text-accent">clean code.</span>
              </>
            }
            description="A student developer from Palawan, building real systems one thesis at a time."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base sm:leading-[1.8]">
                <p>
                  I&apos;m {profile.name}, a {profile.role.toLowerCase()} and student from Puerto
                  Princesa City, Palawan. I like turning messy, real-world problems into{' '}
                  <span className="text-cream">working software</span> — from an IoT buoy reading
                  the ocean to a pharmacy app that compares medicine prices.
                </p>
                <p>
                  Most of what I know comes from building end to end: React dashboards, Laravel
                  APIs, Flutter apps, Python telemetry, and the SQL underneath. I care about{' '}
                  <span className="text-cream">clean data models</span>, fast load times, and
                  interfaces that stay out of the way.
                </p>
                <p>
                  When I&apos;m not working on a thesis feature, I&apos;m probably configuring
                  Hyprland, wiring an ESP32, or rewriting my dotfiles for the fifth time.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-cream/[0.08] bg-cream/[0.02]">
              {principles.map((principle, index) => {
                const Icon = principleIcons[principle.icon] ?? Compass
                return (
                  <Reveal key={principle.title} delay={index * 70}>
                    <div className="group flex gap-4 border-b border-cream/[0.06] p-5 transition-colors last:border-b-0 hover:bg-cream/[0.025]">
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-cream/[0.08] bg-cream/[0.03] text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent/[0.08]">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-cream">{principle.title}</h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-muted/85">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-2xl border border-cream/[0.09] bg-surface-2/80">
                <div className="relative h-44 overflow-hidden border-b border-cream/[0.07] bg-[#130d09]">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-lilac/25"
                    aria-hidden="true"
                  />
                  <div className="bg-dots absolute inset-0 opacity-50" aria-hidden="true" />
                  <div
                    className="animate-drift absolute -right-10 -top-16 size-48 rounded-full bg-accent/25 blur-3xl"
                    aria-hidden="true"
                  />
                  <div
                    className="animate-drift-slow absolute -bottom-16 left-6 size-40 rounded-full bg-lilac/20 blur-3xl"
                    aria-hidden="true"
                  />

                  <span
                    className="absolute -right-1 -top-8 select-none font-display text-[9rem] font-bold leading-none text-cream/[0.07]"
                    aria-hidden="true"
                  >
                    R
                  </span>

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cream/50">
                        The human behind the code
                      </p>
                      <p className="mt-1 font-display text-2xl font-semibold text-cream">
                        {profile.name}
                        <span className="text-accent">.</span>
                      </p>
                    </div>
                    <RotatingStamp
                      className="size-20 shrink-0"
                      text="PALAWAN • PH • BUILD • SHIP • "
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                    {quickFacts.map((fact, index) => {
                      const Icon = factIcons[fact.icon] ?? Sparkles
                      return (
                        <div key={fact.label} className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-md bg-cream/[0.04] ${factColors[index % factColors.length]}`}
                          >
                            <Icon size={14} aria-hidden="true" />
                          </span>
                          <div>
                            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/60">
                              {fact.label}
                            </p>
                            <p className="mt-1 text-[13px] font-medium leading-snug text-cream/90">
                              {fact.value}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-cream/[0.07] pt-5">
                    <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted/70">
                      <span className="relative grid size-1.5 place-items-center">
                        <span className="pulse-ring relative size-1.5 rounded-full bg-mint" />
                      </span>
                      Local time
                    </span>
                    <LocalTime className="font-mono text-[11px] text-cream/80" />
                  </div>

                  <a
                    href={`mailto:${profile.email}`}
                    className="group mt-5 flex items-center justify-between gap-4 rounded-xl border border-cream/[0.08] bg-cream/[0.02] px-4 py-3 transition-colors hover:border-accent/30 hover:bg-accent/[0.06]"
                  >
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-muted/60">
                        Have a project?
                      </span>
                      <span className="mt-0.5 block text-[13px] font-medium text-cream/90">
                        Let&apos;s work together
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

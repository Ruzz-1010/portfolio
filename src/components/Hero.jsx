import { useState } from 'react'
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react'
import { profile, stats } from '../data/portfolio'
import { socialIcons } from './icons'
import CountUp from './CountUp'
import LocalTime from './LocalTime'
import RotatingStamp from './RotatingStamp'

function CodeCard({ tilt, onMouseMove, onMouseLeave }) {
  return (
    <div className="relative">
      <div
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-accent/[0.08] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="relative rounded-[1.35rem] bg-gradient-to-br from-accent/60 via-cream/10 to-lilac/50 p-px shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="overflow-hidden rounded-[calc(1.35rem-1px)] bg-[#0c0a08]/95 backdrop-blur">
          <div className="flex items-center gap-3 border-b border-cream/[0.07] px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
              <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
              <span className="size-2.5 rounded-full bg-[#28c840]/80" />
            </div>
            <span className="font-mono text-[11px] text-muted">developer.ts</span>
            <span className="ml-auto rounded-md border border-accent/20 bg-accent/[0.08] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent-bright">
              TypeScript
            </span>
          </div>

          <pre className="overflow-x-auto p-5 font-mono text-[11.5px] leading-[1.95] sm:p-6 sm:text-[12.5px]">
            <code>
              <span className="text-muted/60">// a little about me</span>
              {'\n'}
              <span className="text-accent-bright">const</span>{' '}
              <span className="text-butter">developer</span>{' '}
              <span className="text-muted/70">=</span> <span className="text-muted">{'{'}</span>
              {'\n'}
              {'  '}
              <span className="text-cream/60">name</span>
              <span className="text-muted/70">:</span>{' '}
              <span className="text-mint">&apos;{profile.name}&apos;</span>
              <span className="text-muted/70">,</span>
              {'\n'}
              {'  '}
              <span className="text-cream/60">role</span>
              <span className="text-muted/70">:</span>{' '}
              <span className="text-mint">&apos;{profile.role}&apos;</span>
              <span className="text-muted/70">,</span>
              {'\n'}
              {'  '}
              <span className="text-cream/60">stack</span>
              <span className="text-muted/70">:</span> <span className="text-muted">[</span>
              <span className="text-mint">&apos;React&apos;</span>
              <span className="text-muted/70">,</span>{' '}
              <span className="text-mint">&apos;TypeScript&apos;</span>
              <span className="text-muted/70">,</span>{' '}
              <span className="text-mint">&apos;Node&apos;</span>
              <span className="text-muted">]</span>
              <span className="text-muted/70">,</span>
              {'\n'}
              {'  '}
              <span className="text-cream/60">focus</span>
              <span className="text-muted/70">:</span>{' '}
              <span className="text-mint">&apos;Fast, accessible products&apos;</span>
              <span className="text-muted/70">,</span>
              {'\n'}
              {'  '}
              <span className="text-cream/60">available</span>
              <span className="text-muted/70">:</span>{' '}
              <span className="text-lilac">true</span>
              <span className="text-muted/70">,</span>
              {'\n'}
              <span className="text-muted">{'}'}</span>{' '}
              <span className="text-accent-bright">satisfies</span>{' '}
              <span className="text-butter">Developer</span>
              <span className="text-muted/70">;</span>
              {'\n'}
              <span className="cursor-blink inline-block h-4 w-[7px] translate-y-0.5 bg-accent/90" />
            </code>
          </pre>

          <div className="flex items-center justify-between gap-4 border-t border-cream/[0.07] px-4 py-3">
            <span className="flex items-center gap-2 font-mono text-[10px] text-muted">
              <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
              main
            </span>
            <span className="font-mono text-[10px] text-muted/50">UTF-8 · LF · Prettier</span>
          </div>
        </div>
      </div>

      <div className="absolute -top-20 right-2 z-20 animate-float sm:-right-6 sm:-top-24">
        <RotatingStamp className="size-24 sm:size-28" />
      </div>

      <div className="absolute -bottom-7 -left-3 z-20 hidden items-center gap-3 rounded-xl border border-cream/10 bg-raised/95 px-4 py-3 shadow-xl backdrop-blur sm:flex lg:-left-8">
        <span className="grid size-9 place-items-center rounded-lg bg-accent/10 text-accent">
          <Sparkles size={16} aria-hidden="true" />
        </span>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted/70">Currently</p>
          <p className="text-[13px] font-medium text-cream">Building {profile.currentlyBuilding}</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleTilt = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -6, y: x * 7 })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-dots opacity-70" />
        <div className="animate-drift absolute -top-40 left-[6%] size-[560px] rounded-full bg-accent/[0.13] blur-[130px]" />
        <div className="animate-drift-slow absolute -right-32 top-10 size-[480px] rounded-full bg-lilac/[0.09] blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-[320px] w-[680px] -translate-x-1/2 rounded-full bg-butter/[0.05] blur-[120px]" />
        <div className="absolute left-1/2 top-28 hidden size-[680px] -translate-x-1/2 rounded-full border border-cream/[0.04] lg:block" />
        <span className="animate-float absolute left-[48%] top-24 font-serif text-3xl text-butter/70">
          ✦
        </span>
        <span className="animate-drift absolute bottom-40 right-[6%] font-serif text-xl text-accent/60">
          ✦
        </span>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div>
          <div className="hero-rise">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-mint/20 bg-mint/[0.06] px-3.5 py-1.5">
              <span className="relative grid size-1.5 place-items-center">
                <span className="pulse-ring relative size-1.5 rounded-full bg-mint" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mint">
                {profile.availability}
              </span>
            </div>
          </div>

          <div className="hero-rise" style={{ animationDelay: '80ms' }}>
            <p className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              <span className="text-accent">$</span> whoami
              <span className="h-px w-8 bg-cream/15" aria-hidden="true" />
              <span className="text-cream/60">
                {profile.name}
                <span className="hidden sm:inline"> / {profile.role}</span>
              </span>
            </p>

            <h1 className="mt-5 font-display text-[3.15rem] font-semibold leading-[0.94] tracking-[-0.045em] text-cream sm:text-6xl lg:text-[4.75rem]">
              I build digital
              <br />
              products that
              <br />
              <span className="relative inline-block">
                <span className="serif-accent text-gradient pr-1">feel alive.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="hero-underline"
                      x1="3"
                      y1="7"
                      x2="217"
                      y2="7"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ffd166" />
                      <stop offset="0.55" stopColor="#ff6b35" />
                      <stop offset="1" stopColor="#b9a7ff" />
                    </linearGradient>
                  </defs>
                  <path
                    className="draw-line"
                    d="M3 9C45 3.5 92 3 137 6.5c25 2 55 2.5 80 0"
                    stroke="url(#hero-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          <div className="hero-rise" style={{ animationDelay: '160ms' }}>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted sm:text-lg sm:leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          <div className="hero-rise" style={{ animationDelay: '240ms' }}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#1b0c05] transition-all duration-200 hover:bg-accent-bright hover:shadow-[0_0_40px_-8px_rgba(255,107,53,0.7)]"
              >
                View my work
                <ArrowDown
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-cream/12 bg-cream/[0.02] px-5 py-3 text-sm font-medium text-cream/90 transition-colors hover:border-cream/25 hover:bg-cream/[0.05]"
              >
                Get in touch
                <ArrowUpRight
                  size={15}
                  className="text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </a>

              <div className="ml-1 flex items-center gap-1" aria-label="Social links">
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.icon]
                  if (!Icon) return null
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-cream/[0.05] hover:text-accent"
                    >
                      <Icon size={17} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="hero-rise" style={{ animationDelay: '320ms' }}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-cream/[0.08] pt-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <CountUp
                      value={stat.value}
                      className="font-display text-3xl font-semibold tracking-tight text-cream"
                    />
                    <span className="mt-1 block text-[11px] leading-snug text-muted/80">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="hero-rise lg:pl-2" style={{ animationDelay: '220ms' }}>
          <CodeCard tilt={tilt} onMouseMove={handleTilt} onMouseLeave={resetTilt} />
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 border-t border-cream/[0.07] px-5 pt-6 sm:px-8">
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted/80">
          <MapPin size={12} className="text-accent/80" aria-hidden="true" />
          {profile.location}
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted/80">
          <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
          Local time
          <LocalTime className="text-cream/70" />
        </span>
        <a
          href="#about"
          className="group ml-auto hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted/80 transition-colors hover:text-cream sm:flex"
        >
          Scroll to explore
          <span className="grid size-7 place-items-center rounded-full border border-cream/10 transition-colors group-hover:border-accent/40 group-hover:text-accent">
            <ArrowDown size={12} />
          </span>
        </a>
      </div>
    </section>
  )
}

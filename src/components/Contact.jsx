import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { socialIcons } from './icons'
import LocalTime from './LocalTime'
import Reveal from './Reveal'
import RotatingStamp from './RotatingStamp'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative rounded-[2rem] bg-gradient-to-br from-accent/50 via-cream/10 to-lilac/50 p-px">
            <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-surface-2 px-6 py-16 sm:px-12 sm:py-20">
              <div
                className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(245,239,230,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,239,230,0.035)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_20%,transparent_100%)]"
                aria-hidden="true"
              />
              <div
                className="animate-drift pointer-events-none absolute -top-36 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.16] blur-[110px]"
                aria-hidden="true"
              />
              <div
                className="animate-drift-slow pointer-events-none absolute -bottom-44 right-0 size-80 rounded-full bg-lilac/[0.1] blur-[110px]"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute bottom-16 left-[12%] hidden font-serif text-2xl text-butter/50 sm:block"
                aria-hidden="true"
              >
                ✦
              </span>

              <div className="absolute right-6 top-6 z-10 hidden lg:block">
                <RotatingStamp
                  className="size-24"
                  text="LET'S TALK • SAY HELLO • LET'S TALK • "
                />
              </div>

              <div className="relative flex flex-col items-center text-center">
                <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  <span className="text-muted/60">05</span>
                  <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
                  Contact
                </p>

                <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.04] tracking-tight text-cream sm:text-5xl">
                  Let&apos;s build something people{' '}
                  <span className="serif-accent text-gradient">love to use.</span>
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                  Have a project in mind, a role to fill, or just want to talk shop? My inbox is
                  always open — I&apos;ll get back to you within a day or two.
                </p>

                <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn-shine group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#1b0c05] transition-all duration-200 hover:bg-accent-bright hover:shadow-[0_0_40px_-8px_rgba(255,107,53,0.7)]"
                  >
                    <Mail size={15} aria-hidden="true" />
                    Say hello
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-full border border-cream/12 bg-cream/[0.03] px-5 py-3 text-sm font-medium text-cream/80 transition-colors hover:border-cream/25 hover:bg-cream/[0.07]"
                    aria-live="polite"
                  >
                    {copied ? (
                      <Check size={15} className="text-mint" aria-hidden="true" />
                    ) : (
                      <Copy size={15} className="text-muted" aria-hidden="true" />
                    )}
                    {copied ? 'Copied!' : 'Copy email'}
                  </button>
                </div>

                <a
                  href={`mailto:${profile.email}`}
                  className="mt-7 font-mono text-[12px] tracking-wide text-muted/80 underline decoration-cream/15 underline-offset-4 transition-colors hover:text-cream hover:decoration-accent/60"
                >
                  {profile.email}
                </a>

                <div className="mt-7 flex items-center gap-1">
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
                        className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-cream/[0.04] hover:text-accent"
                      >
                        <Icon size={17} />
                      </a>
                    )
                  })}
                </div>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-cream/[0.08] pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted/60">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={11} aria-hidden="true" />
                    {profile.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
                    Local time
                    <LocalTime className="text-cream/70" />
                  </span>
                  <span className="flex items-center gap-1.5 text-mint/80">
                    <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
                    Replies within 24h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

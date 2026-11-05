import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { socialIcons } from './icons'
import { RuzzWordmark } from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-surface/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="group flex items-center"
          aria-label={`${profile.name} — home`}
        >
          <RuzzWordmark className="h-5 w-auto transition-opacity duration-300 group-hover:opacity-75" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-cream/[0.06] text-cream'
                      : 'text-muted hover:bg-cream/[0.04] hover:text-cream'
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute left-1/2 top-0 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="group hidden items-center gap-1.5 rounded-full border border-cream/10 bg-cream/[0.03] px-4 py-2 text-[13px] font-medium text-cream/90 transition-colors hover:border-accent/40 hover:bg-accent/[0.08] hover:text-accent-bright md:inline-flex"
        >
          Let&apos;s talk
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-lg border border-cream/10 bg-cream/[0.03] text-cream/80 transition-colors hover:text-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-surface px-5 pb-10 pt-8 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-cream/5 py-4 font-display text-2xl font-medium text-cream/90 transition-colors hover:text-accent"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] text-muted/60">0{index + 1}</span>
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-[#1b0c05]"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </a>

          <div className="mt-8 flex items-center gap-3">
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
                  className="grid size-11 place-items-center rounded-full border border-cream/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

          <p className="mt-auto pt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted/60">
            {profile.location}
          </p>
        </div>
      )}
    </>
  )
}

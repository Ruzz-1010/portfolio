import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  FolderGit2,
  GitBranch,
  Layers,
  Mail,
  Menu,
  User,
  Wifi,
  X,
} from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { RuzzWordmark } from './Logo'
import LocalTime from './LocalTime'
import SocialLinks from './SocialLinks'

const navIcons = {
  '#about': User,
  '#stack': Layers,
  '#projects': FolderGit2,
  '#experience': BriefcaseBusiness,
  '#contact': Mail,
}

function StatusModule({ className = '', children }) {
  return (
    <span
      className={`h-8 items-center gap-1.5 rounded-[9px] px-2 font-mono text-[10px] tracking-[0.08em] text-muted/80 ${className}`}
    >
      {children}
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
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
      { rootMargin: '-40% 0px -52% 0px', threshold: 0 },
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
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          aria-label="Main navigation"
          className={`mx-auto flex h-[52px] max-w-6xl items-center gap-1.5 rounded-2xl border px-2 transition-[background-color,border-color,box-shadow] duration-300 ${
            scrolled || open
              ? 'border-cream/[0.13] bg-[#0b0908]/98 shadow-[0_26px_70px_-32px_rgba(0,0,0,0.95)]'
              : 'border-cream/[0.07] bg-[#0c0a09]/55'
          } backdrop-blur-2xl`}
        >
          <a
            href="#home"
            className="group flex h-8 shrink-0 items-center rounded-[10px] px-2.5 transition-colors duration-200 hover:bg-cream/[0.05]"
            aria-label={`${profile.name} — home`}
          >
            <RuzzWordmark className="h-[15px] w-auto transition-opacity duration-200 group-hover:opacity-75" />
          </a>

          <span className="hidden h-5 w-px shrink-0 bg-cream/[0.08] md:block" aria-hidden="true" />

          <ul className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link, index) => {
              const isActive = active === link.href
              const Icon = navIcons[link.href]

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group relative flex h-8 items-center gap-1.5 rounded-[9px] px-2.5 text-[12px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-accent/[0.13] text-cream'
                        : 'text-muted hover:bg-cream/[0.05] hover:text-cream'
                    }`}
                  >
                    <span
                      className={`font-mono text-[9px] tracking-[0.02em] transition-colors ${
                        isActive
                          ? 'text-accent'
                          : 'text-muted/40 group-hover:text-muted/70'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="hidden lg:inline">{link.label}</span>
                    {Icon && (
                      <Icon
                        size={13}
                        className={`lg:hidden ${isActive ? 'text-accent' : ''}`}
                        aria-hidden="true"
                      />
                    )}
                    {isActive && (
                      <span
                        className="absolute inset-x-2.5 -bottom-px h-px rounded-full bg-accent/70"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="ml-auto flex items-center gap-0.5">
            <span className="mx-1 hidden h-5 w-px bg-cream/[0.08] md:block" aria-hidden="true" />

            <StatusModule className="hidden xl:flex">
              <GitBranch size={11} className="text-accent/80" aria-hidden="true" />
              main
            </StatusModule>

            <StatusModule className="hidden lg:flex">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-mint" />
              </span>
              online
            </StatusModule>

            <StatusModule className="flex">
              <Wifi size={11} className="text-muted/60" aria-hidden="true" />
              <span className="tabular-nums text-cream/70">
                <LocalTime />
              </span>
            </StatusModule>

            <a
              href="#contact"
              className="group ml-0.5 hidden h-8 items-center gap-1 rounded-[9px] bg-accent px-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#1b0c05] transition-colors hover:bg-accent-bright sm:inline-flex"
            >
              let&apos;s talk
              <ArrowUpRight
                size={12}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid size-9 place-items-center rounded-[9px] border border-cream/10 bg-cream/[0.03] text-cream/80 transition-colors hover:border-cream/20 hover:text-cream md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-3 bottom-3 top-[4.35rem] z-40 flex flex-col overflow-y-auto rounded-2xl border border-cream/[0.1] bg-[#0c0a09]/97 p-4 backdrop-blur-2xl md:hidden"
        >
          <div className="flex items-center gap-2 border-b border-cream/[0.07] pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/70">
            <span className="flex items-center gap-1.5">
              <GitBranch size={11} className="text-accent" aria-hidden="true" />
              main
            </span>
            <span className="text-muted/25">/</span>
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
              online
            </span>
            <span className="ml-auto flex items-center gap-1.5">
              <Clock3 size={11} aria-hidden="true" />
              <LocalTime className="text-cream/70" />
            </span>
          </div>

          <ul className="mt-2 flex flex-col gap-0.5">
            {navLinks.map((link, index) => {
              const isActive = active === link.href
              const Icon = navIcons[link.href] ?? User

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${
                      isActive
                        ? 'bg-accent/[0.12] text-cream'
                        : 'text-cream/80 hover:bg-cream/[0.05] hover:text-cream'
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] ${isActive ? 'text-accent' : 'text-muted/40'}`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon
                      size={15}
                      className={isActive ? 'text-accent' : 'text-muted/60'}
                      aria-hidden="true"
                    />
                    <span className="font-display text-lg font-medium">{link.label}</span>
                    <ArrowUpRight
                      size={15}
                      className="ml-auto text-muted/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-shine mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#1b0c05]"
          >
            start a conversation
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>

          <div className="mt-4 rounded-xl border border-cream/[0.07] bg-cream/[0.02] p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
              currently
            </p>
            <p className="mt-1.5 flex items-center gap-2 text-[13px] font-medium text-cream">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-mint" />
              </span>
              Building {profile.currentlyBuilding}
            </p>
            <p className="mt-1 text-[11px] text-muted/70">{profile.availability}</p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-cream/[0.07] pt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted/60">
              {profile.location}
            </span>
            <SocialLinks size={16} itemClassName="size-9" />
          </div>
        </div>
      )}
    </>
  )
}

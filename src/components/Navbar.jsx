import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  FolderGit2,
  Layers,
  Mail,
  MapPin,
  Menu,
  Sparkles,
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

const navDescriptions = {
  '#about': 'Story, focus, and quick facts',
  '#stack': 'Tools I reach for',
  '#projects': 'Selected work and demos',
  '#experience': 'Timeline and resume',
  '#contact': "Let's build something",
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

/**
 * The little header companion. Its pupils follow the pointer, it blinks, and
 * it bobs while the bar is collapsed.
 */
function Mascot({ compact, mascotRef }) {
  return (
    <span
      ref={mascotRef}
      aria-hidden="true"
      className={`mascot relative grid place-items-center transition-[width,height] duration-500 ${
        compact ? 'mascot-bob size-9' : 'size-[28px]'
      }`}
    >
      {compact && (
        <span className="mascot-halo absolute inset-0 rounded-[14px] bg-accent/30 blur-md" />
      )}

      <span
        className={`relative grid place-items-center rounded-[11px] bg-gradient-to-b from-[#e4ffa0] to-[#b7eb3a] shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_8px_20px_-9px_rgba(203,246,95,0.85)] ring-1 ring-[#0b0c0a]/25 transition-transform duration-300 group-hover:scale-105 ${
          compact ? 'size-9' : 'size-[28px]'
        }`}
      >
        <span className="flex items-center gap-[4px]">
          <span className="mascot-eye grid h-[11px] w-[8px] place-items-center rounded-full bg-[#faf8ee]">
            <span className="mascot-pupil size-[4px] rounded-full bg-[#14170d]" />
          </span>
          <span
            className="mascot-eye grid h-[11px] w-[8px] place-items-center rounded-full bg-[#faf8ee]"
            style={{ animationDelay: '45ms' }}
          >
            <span className="mascot-pupil size-[4px] rounded-full bg-[#14170d]" />
          </span>
        </span>
        <svg
          viewBox="0 0 24 10"
          fill="none"
          aria-hidden="true"
          className={`mascot-smile mt-[1px] overflow-visible transition-transform duration-300 group-hover:scale-110 ${
            compact ? 'h-[9px] w-[16px]' : 'h-[8px] w-[13px]'
          }`}
        >
          <path
            d="M4.5 2.4c1.8 3.2 4.4 4.7 7.5 4.7s5.7-1.5 7.5-4.7"
            stroke="#14170d"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <span
        className={`pointer-events-none absolute -right-1 -top-1 leading-none text-accent transition-all duration-500 ${
          compact ? 'text-[11px]' : 'text-[8px] opacity-70'
        }`}
      >
        ✦
      </span>
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [active, setActive] = useState('')
  const headerRef = useRef(null)
  const mascotRef = useRef(null)
  const triggerRef = useRef(null)
  const idleTimer = useRef(0)

  const collapse = () => {
    setOpen(false)
    setExpanded(false)
  }

  // Stay open on the first screen; shrink once the page starts scrolling.
  useEffect(() => {
    const onScroll = () => {
      const firstScreen = window.scrollY <= 80
      setAtTop(firstScreen)

      if (firstScreen) {
        setExpanded(true)
      } else {
        setOpen(false)
        setExpanded(false)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is in view.
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

  // Keep the page still while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Escape collapses the header; clicking outside does too.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setExpanded(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!expanded) return

    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setOpen(false)
        setExpanded(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [expanded])

  // If nobody interacts with the open header for a while, it goes back to sleep.
  useEffect(() => {
    if (!expanded || open || atTop) return

    const goToSleep = () => {
      const focused = document.activeElement
      if (focused && headerRef.current?.contains(focused) && focused !== triggerRef.current) {
        triggerRef.current?.focus({ preventScroll: true })
      }
      setExpanded(false)
    }
    const reset = () => {
      window.clearTimeout(idleTimer.current)
      idleTimer.current = window.setTimeout(goToSleep, 5000)
    }
    reset()
    const node = headerRef.current
    node?.addEventListener('pointermove', reset)
    node?.addEventListener('pointerdown', reset)
    node?.addEventListener('focusin', reset)

    return () => {
      window.clearTimeout(idleTimer.current)
      node?.removeEventListener('pointermove', reset)
      node?.removeEventListener('pointerdown', reset)
      node?.removeEventListener('focusin', reset)
    }
  }, [expanded, open, atTop])

  // Pupils follow the cursor, then wander on their own when the page is idle.
  useEffect(() => {
    const state = { frame: 0, wander: 0 }

    const applyGaze = (x, y) => {
      const node = mascotRef.current
      if (!node) return
      node.style.setProperty('--gaze-x', `${x}px`)
      node.style.setProperty('--gaze-y', `${y}px`)
    }

    const wander = () => {
      applyGaze((Math.random() * 2 - 1) * 1.8, (Math.random() * 2 - 1) * 1.4)
      state.wander = window.setTimeout(wander, 1700 + Math.random() * 1500)
    }

    const scheduleWander = () => {
      window.clearTimeout(state.wander)
      state.wander = window.setTimeout(wander, 2400)
    }

    const onMove = (event) => {
      window.clearTimeout(state.wander)
      if (state.frame) window.cancelAnimationFrame(state.frame)
      state.frame = window.requestAnimationFrame(() => {
        const node = mascotRef.current
        if (!node) return

        const rect = node.getBoundingClientRect()
        const dx = event.clientX - (rect.left + rect.width / 2)
        const dy = event.clientY - (rect.top + rect.height / 2)
        const distance = Math.hypot(dx, dy) || 1
        const reach = Math.min(2.4, distance / 45)

        applyGaze((dx / distance) * reach, (dy / distance) * reach)
      })
      scheduleWander()
    }

    scheduleWander()
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.clearTimeout(state.wander)
      if (state.frame) window.cancelAnimationFrame(state.frame)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-[calc(env(safe-area-inset-top)+0.75rem)] sm:px-5 sm:pt-[calc(env(safe-area-inset-top)+1rem)]"
    >
      <nav
        aria-label="Main navigation"
        className="pointer-events-none relative z-[35] mx-auto h-[52px] w-full max-w-6xl"
      >
        {/* The pill is its own layer so expanding it never reflows the page. */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 border [contain:layout_paint] transition-[width,background-color,border-color,border-radius] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            expanded
              ? 'w-full rounded-2xl border-cream/[0.13] bg-[#0b0c0a]/97 shadow-[0_26px_70px_-32px_rgba(0,0,0,0.95)]'
              : 'w-[58px] rounded-[18px] border-transparent bg-[#0e110c]/80 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.75)]'
          }`}
        />

        <div
          className={`pointer-events-auto absolute top-0 z-10 transition-[left,transform] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            expanded ? 'left-2 translate-x-0' : 'left-1/2 -translate-x-1/2'
          }`}
        >
          <button
          ref={triggerRef}
          type="button"
          onClick={() => (expanded ? collapse() : setExpanded(true))}
          aria-expanded={expanded}
          aria-controls="header-content"
          aria-label={expanded ? 'Collapse navigation' : 'Open navigation — meet Ruzz AI'}
          className="group relative grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[14px] outline-none transition-colors hover:bg-cream/[0.04] focus-visible:ring-2 focus-visible:ring-accent/70"
        >
          <Mascot compact={!expanded} mascotRef={mascotRef} />

          {!expanded && (
            <span className="pointer-events-none absolute top-[calc(100%+7px)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-cream/10 bg-surface/95 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              open header
            </span>
          )}
          </button>
        </div>

        <div
          id="header-content"
          inert={!expanded}
          aria-hidden={!expanded}
          className={`relative z-[5] flex h-full min-w-0 items-center gap-1.5 pl-[60px] pr-2 transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            expanded
              ? 'pointer-events-auto translate-x-0 opacity-100 delay-[130ms] duration-300'
              : 'pointer-events-none -translate-x-2 opacity-0 delay-0 duration-150'
          }`}
        >
          <a
            href="#home"
            onClick={collapse}
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
                    onClick={collapse}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group relative flex h-8 items-center gap-1.5 rounded-[9px] px-2.5 text-[12px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-accent/[0.13] text-cream'
                        : 'text-muted hover:bg-cream/[0.05] hover:text-cream'
                    }`}
                  >
                    <span
                      className={`font-mono text-[9px] tracking-[0.02em] transition-colors ${
                        isActive ? 'text-accent' : 'text-muted/40 group-hover:text-muted/70'
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
              <Sparkles size={11} className="text-accent/80" aria-hidden="true" />
              ruzz.ai
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
              onClick={collapse}
              className="group ml-0.5 hidden h-8 items-center gap-1 rounded-[9px] bg-accent px-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#14180a] transition-colors hover:bg-accent-bright sm:inline-flex"
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
        </div>
      </nav>

      {/* Dim the page and let a tap outside close the sheet. */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`pointer-events-auto fixed inset-0 z-30 bg-[#050604]/65 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-x-3 top-[calc(env(safe-area-inset-top)+4.5rem)] z-40 flex max-h-[calc(100dvh-env(safe-area-inset-top)-env(safe-area-inset-bottom)-5.25rem)] flex-col overflow-y-auto overscroll-contain rounded-[22px] border border-cream/[0.1] bg-[#0b0d09]/95 p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        <span
          className="pointer-events-none absolute -top-16 left-1/2 h-36 w-64 -translate-x-1/2 rounded-full bg-accent/[0.14] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex items-center gap-2 border-b border-cream/[0.08] pb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/70">
          <span className="flex items-center gap-1.5">
            <Sparkles size={11} className="text-accent" aria-hidden="true" />
            ruzz.ai
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

        <ul className="relative mt-3 flex flex-col gap-1">
          {navLinks.map((link, index) => {
            const isActive = active === link.href
            const Icon = navIcons[link.href] ?? User

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={collapse}
                  className={`group flex items-center gap-3 rounded-xl border px-3 py-3 transition-colors ${
                    isActive
                      ? 'border-accent/25 bg-accent/[0.09] text-cream'
                      : 'border-transparent text-cream/80 hover:border-cream/[0.08] hover:bg-cream/[0.04] hover:text-cream'
                  }`}
                >
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-[10px] border transition-colors ${
                      isActive
                        ? 'border-accent/30 bg-accent/[0.12] text-accent'
                        : 'border-cream/[0.08] bg-cream/[0.03] text-muted/70 group-hover:text-cream'
                    }`}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-display text-[17px] font-medium leading-tight">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[11px] text-muted/60">
                      {navDescriptions[link.href]}
                    </span>
                  </span>

                  <span className="ml-auto flex items-center gap-2">
                    <span
                      className={`font-mono text-[9px] ${
                        isActive ? 'text-accent/80' : 'text-muted/35'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="text-muted/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          onClick={collapse}
          className="btn-shine relative mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-4 text-[13px] font-semibold text-[#14180a] transition-colors hover:bg-accent-bright"
        >
          <Sparkles size={15} aria-hidden="true" />
          Start a conversation
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <div className="mt-3 rounded-xl border border-cream/[0.07] bg-cream/[0.025] p-4">
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

        <div className="mt-4 flex items-center justify-between gap-4 border-t border-cream/[0.07] pt-4">
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/60">
            <MapPin size={11} aria-hidden="true" />
            {profile.location}
          </span>
          <SocialLinks size={16} itemClassName="size-9" />
        </div>
      </div>
    </header>
  )
}

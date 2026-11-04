import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, duration = 1400, className = '' }) {
  const ref = useRef(null)
  const started = useRef(false)
  const [display, setDisplay] = useState(0)

  const target = Number.parseInt(String(value), 10)
  const suffix = String(value).replace(String(target), '')

  useEffect(() => {
    const node = ref.current
    if (!node || Number.isNaN(target)) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        const startTime = performance.now()
        const tick = (time) => {
          const progress = Math.min((time - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(target * eased))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={className}>
      {Number.isNaN(target) ? value : `${display}${suffix}`}
    </span>
  )
}

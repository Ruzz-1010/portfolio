import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const update = () => {
      frameRef.current = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
    }

    const onScroll = () => {
      if (frameRef.current) return
      frameRef.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-accent via-butter to-lilac will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}

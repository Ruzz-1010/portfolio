import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    // Follow the pointer with a short rAF lerp instead of restarting a CSS
    // transition on every move event. That keeps the trailing glow fluid.
    const state = { x: 0, y: 0, targetX: 0, targetY: 0, frame: 0, started: false }

    const render = () => {
      state.x += (state.targetX - state.x) * 0.16
      state.y += (state.targetY - state.y) * 0.16
      node.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`

      if (Math.abs(state.targetX - state.x) > 0.35 || Math.abs(state.targetY - state.y) > 0.35) {
        state.frame = requestAnimationFrame(render)
      } else {
        state.frame = 0
      }
    }

    const onPointerMove = (event) => {
      state.targetX = event.clientX
      state.targetY = event.clientY

      if (!state.started) {
        state.started = true
        state.x = state.targetX
        state.y = state.targetY
      }

      if (!state.frame) state.frame = requestAnimationFrame(render)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      if (state.frame) cancelAnimationFrame(state.frame)
    }
  }, [])

  return <div ref={ref} className="cursor-glow hidden md:block" aria-hidden="true" />
}

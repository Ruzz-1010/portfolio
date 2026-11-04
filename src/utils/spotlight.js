/**
 * Tracks the pointer inside a card and exposes its position as CSS variables
 * (`--mx`, `--my`) so the `.spotlight` gradient can follow the cursor.
 */
export function trackSpotlight(event) {
  const target = event.currentTarget
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  target.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

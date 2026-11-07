export default function ProjectVisual({ image, alt, eager = false }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface-2">
      <img
        src={image}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full object-cover object-top"
      />

      {/* Soft floor so the screenshot sits inside the card instead of floating. */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cream/[0.06]"
        aria-hidden="true"
      />
    </div>
  )
}

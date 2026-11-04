export default function SectionHeading({ number, eyebrow, title, description, className = '' }) {
  return (
    <div className={`relative max-w-2xl ${className}`}>
      <span
        className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[6rem] font-bold leading-none tracking-tighter text-cream/[0.035] sm:-top-14 sm:text-[8rem]"
        aria-hidden="true"
      >
        {number}
      </span>

      <p className="relative flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        <span className="text-muted/60">{number}</span>
        <span className="h-px w-8 bg-accent/40" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="relative mt-4 font-display text-3xl font-semibold leading-[1.06] tracking-tight text-cream sm:text-[2.65rem]">
        {title}
      </h2>
      {description && (
        <p className="relative mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}

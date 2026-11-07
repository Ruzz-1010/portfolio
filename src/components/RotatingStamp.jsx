import { useId } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function RotatingStamp({
  text = "OPEN TO WORK • LET'S BUILD SOMETHING • ",
  className = 'size-24',
  icon: Icon = ArrowUpRight,
}) {
  const pathId = useId().replace(/:/g, '')

  return (
    <div className={`relative grid place-items-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-spin-slow">
        <defs>
          <path
            id={pathId}
            d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
            fill="none"
          />
        </defs>
        <text
          className="fill-cream/60 font-mono text-[7.6px] uppercase"
          style={{ letterSpacing: '0.14em' }}
        >
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>

      <span className="grid size-10 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent shadow-[0_0_30px_-6px_rgba(203,246,95,0.65)] backdrop-blur">
        <Icon size={16} />
      </span>
    </div>
  )
}

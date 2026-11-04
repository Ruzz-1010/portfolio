import { useId } from 'react'

const R_PATH =
  'M69 0V660H350Q405 660 450.0 651.5Q495 643 529.5 626.5Q564 610 588.0 586.5Q612 563 624.0 532.5Q636 502 636 465Q636 430 625.0 402.0Q614 374 591.5 353.0Q569 332 535.0 319.0Q501 306 456 300V285Q513 279 544.5 259.5Q576 240 593.0 208.0Q610 176 623 131L661 0H482L453 121Q444 161 428.5 183.0Q413 205 389.0 213.5Q365 222 329 222H230V0ZM230 341H339Q400 341 434.0 365.0Q468 389 468 440Q468 490 437.0 514.0Q406 538 343 538H230Z'
const U_PATH =
  'M368 -14Q305 -14 256.0 -1.5Q207 11 171.0 35.0Q135 59 111.5 93.0Q88 127 76.5 169.5Q65 212 65 262V660H227V267Q227 219 242.0 188.0Q257 157 288.0 142.5Q319 128 367 128Q415 128 446.0 142.5Q477 157 492.0 188.0Q507 219 507 267V660H668V262Q668 131 593.5 58.5Q519 -14 368 -14Z'
const Z_PATH = 'M33 0V152L355 514V526H43V660H531V495L220 145V134H544V0Z'
const SPARK_PATH =
  'M52 9c.7 4.8 2.5 6.6 7.3 7.3-4.8.7-6.6 2.5-7.3 7.3-.7-4.8-2.5-6.6-7.3-7.3 4.8-.7 6.6-2.5 7.3-7.3z'

const WORDMARK_VIEWBOX = '61 -7 2398 688'

function WordmarkPaths({ fill }) {
  return (
    <g transform="translate(0 660) scale(1 -1)">
      <path fill={fill} d={R_PATH} />
      <path fill={fill} d={U_PATH} transform="translate(658 0)" />
      <path fill={fill} d={Z_PATH} transform="translate(1361 0)" />
      <path fill="var(--color-accent)" d={Z_PATH} transform="translate(1907 0)" />
    </g>
  )
}

export function LogoMark({ className = 'size-8' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="17" fill="var(--color-cream)" />
      <g transform="translate(9.9 52) scale(0.0606 -0.0606)">
        <path fill="var(--color-surface)" d={R_PATH} />
      </g>
      <path fill="var(--color-accent)" d={SPARK_PATH} />
    </svg>
  )
}

export function RuzzWordmark({ className = 'h-5 w-auto', variant = 'solid' }) {
  const gradientId = `ruzz-${useId().replace(/:/g, '')}`

  if (variant === 'outline') {
    return (
      <svg
        viewBox={WORDMARK_VIEWBOX}
        className={className}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f5efe6" stopOpacity="0.08" />
            <stop offset="0.62" stopColor="#f5efe6" stopOpacity="0.16" />
            <stop offset="1" stopColor="#ff6b35" stopOpacity="0.34" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinejoin="round"
        >
          <g transform="translate(0 660) scale(1 -1)">
            <path d={R_PATH} />
            <path d={U_PATH} transform="translate(658 0)" />
            <path d={Z_PATH} transform="translate(1361 0)" />
            <path d={Z_PATH} transform="translate(1907 0)" />
          </g>
        </g>
      </svg>
    )
  }

  return (
    <svg viewBox={WORDMARK_VIEWBOX} className={className} aria-hidden="true" focusable="false">
      <WordmarkPaths fill="var(--color-cream)" />
    </svg>
  )
}

export default function Logo({
  className = '',
  markClassName = 'size-8',
  wordmarkClassName = 'h-[18px] w-auto',
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <RuzzWordmark className={wordmarkClassName} />
    </span>
  )
}

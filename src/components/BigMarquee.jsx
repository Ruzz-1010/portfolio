const phrases = [
  "LET'S BUILD SOMETHING",
  '✦',
  'AVAILABLE FOR WORK',
  '✦',
  'OPEN TO COLLABS',
  '✦',
]

const sequence = Array.from({ length: 4 }, () => phrases).flat()

export default function BigMarquee() {
  const items = [...sequence, ...sequence]

  return (
    <div className="marquee marquee-fast relative overflow-hidden border-y border-accent/40 bg-accent py-3.5 sm:py-4">
      <div className="marquee-track items-center" aria-hidden="true">
        {items.map((phrase, index) => (
          <span
            key={`${phrase}-${index}`}
            className={`whitespace-nowrap px-5 font-display text-2xl font-semibold uppercase tracking-tight text-[#1c0c05] sm:px-7 sm:text-3xl ${
              phrase === '✦' ? 'text-[#1c0c05]/50' : ''
            }`}
          >
            {phrase}
          </span>
        ))}
      </div>
      <span className="sr-only">
        Available for work. Let&apos;s build something together.
      </span>
    </div>
  )
}

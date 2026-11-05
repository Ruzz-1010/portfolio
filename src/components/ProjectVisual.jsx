function WindowDots() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      <span className="size-1.5 rounded-full bg-cream/15" />
      <span className="size-1.5 rounded-full bg-cream/10" />
      <span className="size-1.5 rounded-full bg-cream/[0.07]" />
    </div>
  )
}

function Chrome({ label, status = 'live', children }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-cream/10 bg-[#0b0a09] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-cream/[0.06] px-3 py-2">
        <WindowDots />
        <span className="truncate font-mono text-[8px] tracking-[0.02em] text-muted/60">{label}</span>
        <span className="pv-text ml-auto flex shrink-0 items-center gap-1 font-mono text-[7px] uppercase tracking-[0.12em]">
          <span className="pv-bg relative flex size-1.5">
            <span className="pv-bg absolute inline-flex size-full animate-ping rounded-full opacity-50" />
            <span className="pv-bg relative inline-flex size-1.5 rounded-full" />
          </span>
          {status}
        </span>
      </div>
      {children}
    </div>
  )
}

function FalconMock() {
  return (
    <Chrome label="falcon-01 · coastal buoy">
      <div className="flex flex-1 flex-col p-2.5 sm:p-3">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: 'wave height', value: '1.42', unit: 'm', accent: true },
            { label: 'wind', value: '12.8', unit: 'km/h' },
            { label: 'battery', value: '86', unit: '%' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded border border-cream/[0.06] bg-cream/[0.02] px-2 py-1.5"
            >
              <span className="block font-mono text-[6px] uppercase tracking-[0.1em] text-muted/50">
                {stat.label}
              </span>
              <span className="mt-0.5 flex items-baseline gap-0.5">
                <span
                  className={`font-mono text-[13px] leading-none ${
                    stat.accent ? 'pv-text' : 'text-cream/80'
                  }`}
                >
                  {stat.value}
                </span>
                <span className="font-mono text-[6px] text-muted/50">{stat.unit}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="relative mt-2 flex-1 overflow-hidden rounded border border-cream/[0.06] bg-cream/[0.015] p-2">
          <span className="font-mono text-[6px] uppercase tracking-[0.12em] text-muted/40">
            wave profile · 24h
          </span>
          <svg
            viewBox="0 0 200 62"
            preserveAspectRatio="none"
            className="mt-1 h-[calc(100%-14px)] w-full"
            aria-hidden="true"
          >
            <g stroke="rgba(245,239,230,0.06)" strokeWidth="1">
              <line x1="0" y1="16" x2="200" y2="16" />
              <line x1="0" y1="32" x2="200" y2="32" />
              <line x1="0" y1="48" x2="200" y2="48" />
            </g>
            <path
              className="pv-text"
              d="M0 46 L14 40 L26 44 L40 30 L52 35 L66 22 L80 28 L94 18 L108 26 L122 14 L136 20 L150 10 L164 16 L178 8 L192 13 L200 7 L200 62 L0 62 Z"
              fill="currentColor"
              opacity="0.12"
            />
            <path
              className="pv-text"
              d="M0 46 L14 40 L26 44 L40 30 L52 35 L66 22 L80 28 L94 18 L108 26 L122 14 L136 20 L150 10 L164 16 L178 8 L192 13 L200 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="200" cy="7" r="2.5" fill="currentColor" />
          </svg>
          <div className="absolute inset-x-2 bottom-1.5 flex justify-between font-mono text-[5.5px] text-muted/35">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>now</span>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2 font-mono text-[6.5px] text-muted/55">
          <span className="pv-text">GPS</span>
          <span>9.7392° N, 118.7353° E</span>
          <span className="ml-auto flex items-center gap-1">ESP32 · SOLAR</span>
        </div>
      </div>
    </Chrome>
  )
}

function CareMock() {
  const pharmacies = [
    { name: 'Palawan MedHub', price: '₱284', stock: 92, best: true },
    { name: 'CityCare Pharmacy', price: '₱312', stock: 68 },
    { name: 'Puerto Drugstore', price: '₱339', stock: 41 },
  ]

  return (
    <Chrome label="puertoscancare · patient" status="ready">
      <div className="flex flex-1 gap-2 p-2.5 sm:p-3">
        <div className="flex w-[38%] shrink-0 flex-col rounded border border-cream/[0.07] bg-cream/[0.02] p-1.5">
          <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded bg-[#0e1211]">
            <div className="relative flex h-full w-[62%] flex-col rounded-sm border border-cream/15 bg-cream/[0.04] p-1.5">
              <span className="block h-1 w-6 rounded-full bg-cream/20" />
              <span className="mt-1 block h-1 w-8 rounded-full bg-cream/10" />
              <span className="mt-1 block h-1 w-5 rounded-full bg-cream/10" />
              <span className="mt-auto block h-1 w-7 rounded-full bg-cream/10" />
            </div>
            <span className="pv-bg absolute inset-x-2 top-1/2 h-px opacity-80" aria-hidden="true" />
            <span className="pv-border pv-bg-soft absolute inset-x-1 top-[calc(50%-4px)] h-2 rounded-sm border" />
          </div>
          <span className="mt-1.5 text-center font-mono text-[5.5px] uppercase tracking-[0.1em] text-muted/50">
            prescription scan
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[6.5px] uppercase tracking-[0.1em] text-muted/45">
              nearest stock
            </span>
            <span className="pv-text pv-border rounded border px-1 py-0.5 font-mono text-[5.5px] uppercase">
              verified
            </span>
          </div>

          <div className="mt-1.5 flex flex-1 flex-col justify-between gap-1">
            {pharmacies.map((pharmacy) => (
              <div
                key={pharmacy.name}
                className={`rounded border px-1.5 py-1 ${
                  pharmacy.best
                    ? 'pv-border pv-bg-soft'
                    : 'border-cream/[0.06] bg-cream/[0.015]'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="truncate font-mono text-[7px] text-cream/75">{pharmacy.name}</span>
                  <span
                    className={`ml-auto font-mono text-[7px] ${
                      pharmacy.best ? 'pv-text' : 'text-cream/55'
                    }`}
                  >
                    {pharmacy.price}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <span className="h-0.5 flex-1 overflow-hidden rounded-full bg-cream/[0.08]">
                    <span
                      className={`block h-full rounded-full ${pharmacy.best ? 'pv-bg' : 'bg-cream/25'}`}
                      style={{ width: `${pharmacy.stock}%` }}
                    />
                  </span>
                  <span className="font-mono text-[5.5px] text-muted/40">{pharmacy.stock}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-1.5 flex items-center justify-between font-mono text-[5.5px] text-muted/45">
            <span>quantity-aware</span>
            <span>0.8 km · 4 min</span>
          </div>
        </div>
      </div>
    </Chrome>
  )
}

function CourtMock() {
  const slots = [
    { time: '06:00', state: 'open' },
    { time: '07:00', state: 'booked' },
    { time: '08:00', state: 'open' },
    { time: '09:00', state: 'selected' },
    { time: '10:00', state: 'booked' },
    { time: '11:00', state: 'open' },
  ]

  return (
    <Chrome label="court ops · pickleball" status="open">
      <div className="flex flex-1 flex-col p-2.5 sm:p-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[8px] text-cream/80">Court 01 · Indoor</p>
            <p className="mt-0.5 font-mono text-[6px] uppercase tracking-[0.1em] text-muted/45">
              sat · nov 08
            </p>
          </div>
          <div className="flex gap-0.5">
            {['F', 'S', 'S', 'M'].map((day, index) => (
              <span
                key={`${day}-${index}`}
                className={`grid size-4 place-items-center rounded font-mono text-[6px] ${
                  index === 1
                    ? 'pv-bg text-[#1b0c05]'
                    : 'border border-cream/[0.06] text-muted/45'
                }`}
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2 grid flex-1 grid-cols-3 gap-1">
          {slots.map((slot) => (
            <div
              key={slot.time}
              className={`flex flex-col justify-center rounded border px-1.5 py-1 ${
                slot.state === 'selected'
                  ? 'pv-border pv-bg-soft'
                  : slot.state === 'booked'
                    ? 'border-cream/[0.05] bg-cream/[0.01]'
                    : 'border-cream/[0.08] bg-cream/[0.025]'
              }`}
            >
              <span
                className={`font-mono text-[7px] ${
                  slot.state === 'selected'
                    ? 'pv-text'
                    : slot.state === 'booked'
                      ? 'text-muted/25 line-through'
                      : 'text-cream/65'
                }`}
              >
                {slot.time}
              </span>
              <span className="mt-0.5 font-mono text-[5px] uppercase tracking-[0.08em] text-muted/35">
                {slot.state === 'booked' ? 'taken' : slot.state === 'selected' ? 'picked' : 'open'}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-2 rounded border border-cream/[0.07] bg-cream/[0.02] px-2 py-1.5">
          <div className="min-w-0">
            <p className="font-mono text-[6px] uppercase tracking-[0.1em] text-muted/45">
              09:00 — 10:00
            </p>
            <p className="mt-0.5 font-mono text-[8px] text-cream/80">₱450 · 1 hr</p>
          </div>
          <span className="pv-bg ml-auto rounded px-1.5 py-1 font-mono text-[5.5px] uppercase tracking-[0.08em] text-[#1b0c05]">
            paid · qrph
          </span>
        </div>
      </div>
    </Chrome>
  )
}

function FoodMock() {
  return (
    <Chrome label="order #2481 · live" status="en route">
      <div className="flex flex-1 gap-2 p-2.5 sm:p-3">
        <div className="flex w-[42%] shrink-0 flex-col">
          <span className="font-mono text-[6px] uppercase tracking-[0.1em] text-muted/45">
            order status
          </span>
          <div className="relative mt-1.5 flex flex-1 flex-col justify-between pl-3">
            <span className="absolute bottom-2 left-[3px] top-2 w-px bg-cream/10" aria-hidden="true" />
            {[
              { label: 'Order placed', time: '6:42 PM', done: true },
              { label: 'Preparing', time: '6:47 PM', done: true },
              { label: 'Rider assigned', time: '6:58 PM', done: true },
              { label: 'On the way', time: '7:06 PM', active: true },
            ].map((step) => (
              <div key={step.label} className="relative flex items-start gap-1.5">
                <span
                  className={`absolute -left-3 top-0.5 size-1.5 rounded-full ${
                    step.active ? 'pv-bg' : step.done ? 'bg-mint' : 'bg-cream/15'
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className={`font-mono text-[6.5px] ${
                      step.active ? 'pv-text' : step.done ? 'text-cream/70' : 'text-muted/40'
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="font-mono text-[5.5px] text-muted/35">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded border border-cream/[0.07] bg-[#0d0c0a]">
          <div
            className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(245,239,230,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,239,230,0.06)_1px,transparent_1px)] [background-size:14px_14px]"
            aria-hidden="true"
          />
          <svg viewBox="0 0 120 90" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <path
              d="M18 72 C 34 66, 30 48, 48 46 S 74 34, 78 22"
              fill="none"
              stroke="rgba(245,239,230,0.2)"
              strokeWidth="2"
              strokeDasharray="3 3"
              strokeLinecap="round"
            />
            <path
              d="M18 72 C 34 66, 30 48, 48 46 S 74 34, 78 22"
              className="pv-text"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="pv-bg absolute left-[13%] top-[76%] size-1.5 rounded-full ring-2 ring-[#0d0c0a]" />
          <span className="pv-bg absolute left-[62%] top-[21%] grid size-4 place-items-center rounded-full text-[#1b0c05] shadow-lg">
            <span className="size-1.5 rounded-full bg-current" />
          </span>
          <div className="relative mt-auto flex items-center gap-1.5 border-t border-cream/[0.07] bg-[#0b0a09]/90 px-1.5 py-1.5">
            <span className="grid size-4 place-items-center rounded-full bg-cream/10 font-mono text-[5px] text-cream/70">
              JR
            </span>
            <div className="min-w-0">
              <p className="truncate font-mono text-[6.5px] text-cream/75">Rider · J. Reyes</p>
              <p className="font-mono text-[5px] text-muted/40">0.9 km away · 4 min</p>
            </div>
            <span className="pv-border pv-bg-soft ml-auto rounded border px-1 py-0.5 font-mono text-[5.5px] uppercase">
              call
            </span>
          </div>
        </div>
      </div>
    </Chrome>
  )
}

const visuals = {
  falcon: FalconMock,
  care: CareMock,
  court: CourtMock,
  food: FoodMock,
}

export default function ProjectVisual({ variant = 'falcon' }) {
  const Mock = visuals[variant] ?? FalconMock

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#080706] p-4 sm:p-5">
      <div
        className="pv-glow absolute -left-16 top-0 size-56 rounded-full opacity-[0.12] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 right-0 size-56 rounded-full bg-lilac/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.3] [background-image:linear-gradient(to_right,rgba(245,239,230,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,239,230,0.04)_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <div className="relative h-full w-full">
        <Mock />
      </div>
    </div>
  )
}

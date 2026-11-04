function WindowDots() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      <span className="size-1.5 rounded-full bg-cream/15" />
      <span className="size-1.5 rounded-full bg-cream/10" />
      <span className="size-1.5 rounded-full bg-cream/[0.07]" />
    </div>
  )
}

function DashboardMock() {
  const bars = [38, 58, 44, 72, 50, 86, 64, 94, 70, 82, 56, 76]

  return (
    <div className="flex h-full gap-2.5 rounded-lg border border-cream/10 bg-[#0d0a08] p-2.5 shadow-2xl">
      <aside className="hidden w-14 shrink-0 flex-col gap-2 border-r border-cream/[0.06] pr-2.5 sm:flex">
        <div className="mb-1 flex items-center gap-1.5">
          <span className="pv-bg size-3 rounded-[3px] opacity-90" />
          <span className="h-1 w-6 rounded-full bg-cream/20" />
        </div>
        {[24, 18, 24, 14, 20].map((width, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <span
              className={`size-1.5 rounded-[2px] ${index === 0 ? 'pv-bg opacity-60' : 'bg-cream/10'}`}
            />
            <span className="h-1 rounded-full bg-cream/10" style={{ width: `${width}px` }} />
          </div>
        ))}
        <div className="mt-auto rounded border border-cream/[0.06] bg-cream/[0.02] p-1.5">
          <span className="block h-1 w-8 rounded-full bg-cream/10" />
          <span className="mt-1 block h-1 w-5 rounded-full bg-cream/[0.06]" />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between">
          <div>
            <span className="block h-1.5 w-12 rounded-full bg-cream/25" />
            <span className="mt-1.5 block h-1 w-16 rounded-full bg-cream/[0.08]" />
          </div>
          <span className="pv-text pv-border pv-bg-soft rounded-[4px] border px-1.5 py-1 font-mono text-[7px] uppercase tracking-wider">
            Live
          </span>
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {[
            { label: 'MRR', value: '$48.2k', accent: true },
            { label: 'Users', value: '12,840' },
            { label: 'Churn', value: '1.2%' },
          ].map((stat) => (
            <div key={stat.label} className="rounded border border-cream/[0.06] bg-cream/[0.02] p-1.5">
              <span className="block font-mono text-[6px] uppercase tracking-wider text-muted/60">
                {stat.label}
              </span>
              <span
                className={`mt-0.5 block font-mono text-[8.5px] ${stat.accent ? 'pv-text' : 'text-cream/70'}`}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2.5 flex flex-1 items-end gap-1 rounded border border-cream/[0.06] bg-cream/[0.015] p-2">
          {bars.map((height, index) => (
            <span
              key={index}
              className={`flex-1 rounded-t-[2px] ${index === 7 ? 'pv-bg opacity-80' : 'bg-cream/[0.12]'}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TerminalMock() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-cream/10 bg-[#080b09] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-cream/[0.06] px-3 py-2">
        <WindowDots />
        <span className="font-mono text-[8px] text-muted/60">pulse — api</span>
        <span className="pv-text ml-auto flex items-center gap-1 font-mono text-[7px] uppercase tracking-wider">
          <span className="pv-bg size-1 rounded-full" />
          connected
        </span>
      </div>

      <div className="flex-1 space-y-1.5 p-3 font-mono text-[8.5px] leading-relaxed sm:text-[9.5px]">
        <p className="text-muted/70">
          <span className="pv-text">$</span> curl api.pulse.dev/ping
        </p>
        <p className="text-muted/70">
          <span className="pv-text font-medium">200 OK</span> · 12ms · edge: sin1
        </p>
        <p className="pt-1 text-muted/40">// subscribe to presence</p>
        <p className="text-cream/60">
          channel.<span className="text-butter">on</span>(
          <span className="pv-text">&apos;join&apos;</span>, (user) =&gt; {'{'}
        </p>
        <p className="pl-3 text-muted/70">
          broadcast(<span className="pv-text">&apos;presence&apos;</span>, user.id)
        </p>
        <p className="text-cream/60">{'}'})</p>

        <div className="pv-border pv-bg-soft !mt-3 flex items-center gap-2 rounded border px-2 py-1.5">
          <span className="relative flex size-1.5">
            <span className="pv-bg absolute inline-flex size-full animate-ping rounded-full opacity-60" />
            <span className="pv-bg relative inline-flex size-1.5 rounded-full" />
          </span>
          <span className="pv-text text-[8px]">1,284 users online</span>
          <span className="ml-auto text-[7px] text-muted/50">p99 · 48ms</span>
        </div>
      </div>

      <div className="flex items-end gap-0.5 border-t border-cream/[0.06] px-3 py-2">
        {[30, 45, 38, 60, 48, 70, 55, 80, 62, 74, 58, 90, 68, 78, 52, 72].map((height, index) => (
          <span
            key={index}
            className="pv-bg flex-1 rounded-t-[1px] opacity-30"
            style={{ height: `${height / 4}px` }}
          />
        ))}
      </div>
    </div>
  )
}

function SnippetsMock() {
  const snippets = [
    { name: 'useDebounce.ts', meta: 'hooks · ts', color: 'pv-bg' },
    { name: 'fetchWithRetry.ts', meta: 'utils · ts', color: 'bg-sky-400' },
    { name: 'useMediaQuery.ts', meta: 'hooks · ts', color: 'bg-sky-400' },
    { name: 'cn.ts', meta: 'styles · ts', color: 'bg-amber-400' },
  ]

  return (
    <div className="flex h-full flex-col rounded-lg border border-cream/10 bg-[#0d0a08] p-3 shadow-2xl sm:p-3.5">
      <div className="flex items-center gap-2 rounded border border-cream/[0.07] bg-black/20 px-2.5 py-2">
        <span className="grid size-3 place-items-center rounded-full border border-cream/15">
          <span className="size-1 rounded-full bg-muted" />
        </span>
        <span className="font-mono text-[9px] text-cream/60">useDebounce</span>
        <span className="ml-auto rounded border border-cream/[0.08] bg-cream/[0.03] px-1.5 py-0.5 font-mono text-[7px] text-muted/60">
          ⌘ K
        </span>
      </div>

      <div className="mt-2 flex flex-1 flex-col gap-1">
        {snippets.map((snippet, index) => (
          <div
            key={snippet.name}
            className={`flex items-center gap-2 rounded px-2 py-1.5 ${
              index === 0 ? 'pv-border pv-bg-soft border' : 'border border-transparent'
            }`}
          >
            <span className={`size-1.5 rounded-full ${snippet.color} opacity-80`} />
            <div className="min-w-0 flex-1">
              <span className="block truncate font-mono text-[8.5px] text-cream/70">
                {snippet.name}
              </span>
              <span className="block font-mono text-[6.5px] uppercase tracking-wider text-muted/50">
                {snippet.meta}
              </span>
            </div>
            {index === 0 && (
              <span className="rounded bg-cream/[0.05] px-1 py-0.5 font-mono text-[6px] uppercase tracking-wider text-muted">
                ↵
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-cream/[0.06] pt-2 font-mono text-[7px] text-muted/50">
        <span>4 results</span>
        <span>local-first · synced</span>
      </div>
    </div>
  )
}

function DesignMock() {
  return (
    <div className="flex h-full flex-col justify-between rounded-lg border border-cream/10 bg-[#0d0a08] p-3.5 shadow-2xl sm:p-4">
      <div className="flex items-start justify-between">
        <div>
          <span className="block font-display text-2xl font-semibold leading-none text-cream">
            Aa
          </span>
          <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.18em] text-muted/50">
            Bricolage Grotesque
          </span>
        </div>
        <div className="flex -space-x-1">
          {['pv-bg', 'bg-lilac', 'bg-mint', 'bg-cream/20'].map((color) => (
            <span key={color} className={`size-4 rounded-full border border-[#0d0a08] ${color}`} />
          ))}
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="pv-bg rounded px-2.5 py-1 text-[8px] font-semibold text-[#1b0c05]">
            Button
          </span>
          <span className="rounded border border-cream/15 px-2.5 py-1 text-[8px] font-medium text-cream/70">
            Secondary
          </span>
          <span className="rounded-full border border-cream/10 p-1">
            <span className="block size-1.5 rounded-full bg-cream/40" />
          </span>
        </div>

        <div className="rounded border border-cream/[0.07] bg-cream/[0.02] px-2.5 py-1.5">
          <span className="block font-mono text-[6px] uppercase tracking-wider text-muted/50">
            Email
          </span>
          <span className="mt-0.5 block h-1 w-20 rounded-full bg-cream/10" />
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {['Default', 'Hover', 'Focus'].map((state, index) => (
            <div key={state} className="rounded border border-cream/[0.06] bg-cream/[0.02] p-1.5">
              <span
                className={`block h-3 rounded-[2px] ${
                  index === 0
                    ? 'bg-cream/10'
                    : index === 1
                      ? 'pv-bg opacity-30'
                      : 'pv-bg opacity-50 ring-1 ring-cream/40'
                }`}
              />
              <span className="mt-1 block font-mono text-[6px] text-muted/50">{state}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-cream/[0.06] pt-2">
        <span className="font-mono text-[7px] text-muted/50">orbit-ui · v2.1</span>
        <span className="flex items-center gap-1 font-mono text-[7px] text-muted/60">
          <span className="pv-bg size-1 rounded-full" />
          a11y checked
        </span>
      </div>
    </div>
  )
}

const visuals = {
  dashboard: DashboardMock,
  terminal: TerminalMock,
  snippets: SnippetsMock,
  design: DesignMock,
}

export default function ProjectVisual({ variant = 'dashboard' }) {
  const Mock = visuals[variant] ?? DashboardMock

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

import { Counter } from '@/components/animations/Counter'

export interface Stat {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

interface StatsBarProps {
  stats: Stat[]
  className?: string
}

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <section className={`py-16 md:py-24 border-y border-border bg-bg ${className || ''}`}>
      <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-12 flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-4xl sm:text-5xl lg:text-7xl font-display text-primary leading-none mb-2 tracking-tight">
                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </h3>
              <p className="text-sm lg:text-base font-heading font-medium uppercase tracking-widest text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

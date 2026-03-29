import { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/animations/Reveal'

interface Feature {
  icon: LucideIcon
  title: string
  text: string
}

interface FeatureStripProps {
  features: Feature[]
  className?: string
}

export function FeatureStrip({ features, className }: FeatureStripProps) {
  return (
    <section className={`py-12 border-y border-border bg-surface ${className || ''}`}>
      <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={i * 100} direction="up" className="p-8 group hover:bg-bg/50 transition-colors">
                <div className="flex flex-col items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-text transition-colors">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold uppercase tracking-wider text-text mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

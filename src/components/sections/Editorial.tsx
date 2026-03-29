'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/animations/Reveal'
import { cn } from '@/lib/utils'

interface EditorialProps {
  image: string
  label: string
  title: string
  body: string
  ctaLabel: string
  ctaHref: string
  reverse?: boolean
  className?: string
}

export function Editorial({ image, label, title, body, ctaLabel, ctaHref, reverse, className }: EditorialProps) {
  return (
    <section className={`py-[var(--section-y-mob)] lg:py-[var(--section-y)] px-6 lg:px-12 ${className || ''}`}>
      <div className="max-w-[var(--max-width)] mx-auto">
        <div className={`flex flex-col gap-12 lg:gap-24 items-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <Reveal
              direction={reverse ? 'right' : 'left'}
              duration={800}
              className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </Reveal>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
            <Reveal delay={100} direction={reverse ? 'left' : 'right'}>
              <span className="text-secondary font-heading font-bold uppercase tracking-widest text-sm">
                {label}
              </span>
            </Reveal>
            <Reveal delay={200} direction={reverse ? 'left' : 'right'}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-text leading-[0.9]">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={300} direction={reverse ? 'left' : 'right'}>
              <p className="text-lg text-muted font-body max-w-lg leading-relaxed">
                {body}
              </p>
            </Reveal>
            <Reveal delay={400} direction={reverse ? 'left' : 'right'} className="mt-4">
              <Link 
                href={ctaHref}
                className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-base font-heading uppercase tracking-widest bg-primary text-text hover:bg-secondary")}
              >
                {ctaLabel}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

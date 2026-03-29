'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/animations/Reveal'
import { cn } from '@/lib/utils'

interface CTABannerProps {
  title: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  className?: string
}

export function CTABanner({ title, primaryLabel, primaryHref, secondaryLabel, secondaryHref, className }: CTABannerProps) {
  return (
    <section className={`py-12 px-6 lg:px-12 bg-bg ${className || ''}`}>
      <div className="max-w-[var(--max-width)] mx-auto">
        <Reveal>
          <div className="bg-gradient-to-br from-primary to-primary/60 rounded-[2rem] p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display text-text uppercase leading-[0.9] text-center md:text-left flex-1">
              {title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full md:w-auto">
              {secondaryLabel && secondaryHref && (
                <Link 
                  href={secondaryHref}
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-16 px-8 text-base font-heading font-bold uppercase tracking-widest bg-transparent border-text text-text hover:bg-text hover:text-primary w-full sm:w-auto")}
                >
                  {secondaryLabel}
                </Link>
              )}
              <Link 
                href={primaryHref}
                className={cn(buttonVariants({ size: "lg" }), "h-16 px-10 text-base font-heading font-bold uppercase tracking-widest bg-text text-primary hover:bg-surface w-full sm:w-auto")}
              >
                {primaryLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

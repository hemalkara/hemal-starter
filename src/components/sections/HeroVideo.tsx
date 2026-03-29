'use client'

import { buttonVariants } from '@/components/ui/button'
import { RevealText } from '@/components/animations/RevealText'
import { Reveal } from '@/components/animations/Reveal'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface HeroVideoProps {
  title: string
  subtitle: string
  eyebrow: string
  videoSrc: string
  posterSrc: string
  ctaLabel: string
  ctaHref: string
  className?: string
}

export function HeroVideo({ title, subtitle, eyebrow, videoSrc, posterSrc, ctaLabel, ctaHref, className }: HeroVideoProps) {
  return (
    <section className={`relative min-h-screen flex items-end pb-24 px-6 lg:px-12 ${className || ''}`}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          className="w-full h-full object-cover hidden sm:block"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Mobile poster fallback for touch devices */}
        <div 
          className="w-full h-full object-cover sm:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${posterSrc})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[var(--max-width)] w-full mx-auto flex flex-col items-start gap-4">
        <Reveal delay={200}>
          <span className="text-secondary font-heading font-bold uppercase tracking-widest text-sm lg:text-base">
            {eyebrow}
          </span>
        </Reveal>
        
        <h1 className="text-6xl md:text-8xl lg:text-[140px] leading-[0.85] font-display text-text max-w-5xl">
          <RevealText text={title} />
        </h1>
        
        <Reveal delay={600} direction="up" className="max-w-xl mt-4">
          <p className="text-xl text-muted font-body">
            {subtitle}
          </p>
        </Reveal>
        
        <Reveal delay={800} direction="up" className="mt-8">
          <Link 
            href={ctaHref}
            className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-lg font-heading uppercase tracking-widest bg-primary text-text hover:bg-secondary")}
          >
            {ctaLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

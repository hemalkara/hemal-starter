'use client'

import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right' | 'down' | 'none'
  delay?: number
  className?: string
  duration?: number
  as?: React.ElementType
}

export function Reveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className,
  duration = 480,
  as: Component = 'div' 
}: RevealProps) {
  const { ref, inView } = useInView()

  const getTransform = () => {
    if (inView || direction === 'none') return 'translate(0, 0)'
    switch (direction) {
      case 'up': return 'translateY(32px)'
      case 'down': return 'translateY(-32px)'
      case 'left': return 'translateX(-32px)'
      case 'right': return 'translateX(32px)'
      default: return 'translate(0, 0)'
    }
  }

  return (
    <Component
      ref={ref}
      className={cn(className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      } as React.CSSProperties}
    >
      {children}
    </Component>
  )
}

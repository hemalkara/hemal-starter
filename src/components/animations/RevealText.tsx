'use client'

import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface RevealTextProps {
  text: string
  className?: string
  stagger?: number
  as?: React.ElementType
}

export function RevealText({ text, className, stagger = 80, as: Component = 'span' }: RevealTextProps) {
  const { ref, inView } = useInView()
  const words = text.split(' ')

  return (
    <Component ref={ref as any} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <span
            className="inline-block relative motion-reduce:transform-none"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(110%)',
              transition: `transform 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
              transitionDelay: `${i * stagger}ms`
            }}
          >
            {word}
          </span>
          {i !== words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Component>
  )
}

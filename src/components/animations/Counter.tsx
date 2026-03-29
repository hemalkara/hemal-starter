'use client'

import { useInView } from '@/hooks/useInView'
import { useEffect, useState } from 'react'

interface CounterProps {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

export function Counter({ target, prefix = '', suffix = '', duration = 1800, className }: CounterProps) {
  const { ref, inView } = useInView()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      
      const easedProgress = easeOutExpo(progress)
      setCount(Math.floor(easedProgress * target))
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }
    
    window.requestAnimationFrame(step)
  }, [inView, target, duration])

  return (
    <span ref={ref as any} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}

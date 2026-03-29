import { RevealText } from '@/components/animations/RevealText'

interface PosterProps {
  text: string
  backgroundColour?: string
  className?: string
}

export function Poster({ text, backgroundColour = 'bg-primary', className }: PosterProps) {
  return (
    <section className={`min-h-screen flex items-center justify-center p-6 lg:p-12 ${backgroundColour} ${className || ''}`}>
      <div className="max-w-[var(--max-width)] mx-auto text-center w-full">
        <h2 
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[220px] leading-[0.8] font-display text-text uppercase break-words"
          style={{ 
            color: 'var(--color-bg)', 
            WebkitTextStroke: '2px var(--color-bg)' 
          }}
        >
          <RevealText text={text} stagger={40} className="max-w-7xl mx-auto block" />
        </h2>
      </div>
    </section>
  )
}

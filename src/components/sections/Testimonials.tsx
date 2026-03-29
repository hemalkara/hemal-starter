import { Reveal } from '@/components/animations/Reveal'
import { Star } from 'lucide-react'

export interface Review {
  quote: string
  author: string
  rating: number
}

interface TestimonialsProps {
  reviews: Review[]
  className?: string
}

export function Testimonials({ reviews, className }: TestimonialsProps) {
  return (
    <section className={`py-[var(--section-y-mob)] lg:py-[var(--section-y)] px-6 lg:px-12 bg-surface ${className || ''}`}>
      <div className="max-w-[var(--max-width)] mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-display text-center mb-16 uppercase text-text">
            Customer Reviews
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Reveal key={review.author} delay={i * 100} direction="up">
              <div className="h-full p-8 rounded-2xl bg-bg border border-border flex flex-col transition-colors duration-300 hover:border-primary">
                <div className="flex gap-1 mb-6 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < review.rating ? "fill-primary" : "fill-muted/20 text-muted/20"}
                    />
                  ))}
                </div>
                <p className="text-lg text-text italic mb-8 flex-grow">
                  "{review.quote}"
                </p>
                <div className="mt-auto border-t border-border pt-4">
                  <span className="font-heading font-bold uppercase tracking-wider text-muted text-sm">
                    {review.author}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
